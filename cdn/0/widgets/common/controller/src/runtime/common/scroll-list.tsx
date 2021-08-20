/** @jsx jsx */
import { React, css, jsx, classNames, lodash, ResizeObserver, polished } from 'jimu-core';
import { NavButtonGroupProps, NavButtonGroup, hooks, IconPosition } from 'jimu-ui';
const { useRef, useEffect, useState, useImperativeHandle, forwardRef } = React;

export interface ScrollListProps extends Omit<NavButtonGroupProps, 'placeholder'> {
  space?: number;
  lists: string[];
  createItem: (item: string, props: any) => React.ReactElement;
  autoHideArrow?: boolean;
  itemLength: number;
  /** Hack for insert widget: Provide a node that can be inserted before or after lists */
  placeholder?: {
    position: IconPosition;
    length: number;
    node: React.ReactElement;
  }
  minLength?: number;
  autoScrollEnd?: boolean;
}

export interface ScrollListRefProps {
  hideArrow?: boolean;
  disablePrevious: boolean;
  disableNext: boolean;
  scroll: (previous: boolean, moveOne?: boolean) => void;
  ref?: React.RefObject<HTMLDivElement>;
}

const useStyle = (vertical: boolean, space: number, minLength: number) => {

  return css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .root {
      flex-direction: ${vertical ? 'column' : 'row'};
      width: 100%;
      height: 100%;
      min-width: ${polished.rem(minLength)};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${vertical ? polished.rem(space) : 'unset'};
          margin-left: ${!vertical ? polished.rem(space) : 'unset'};
        }
      }
    }
`;
}

export const ScrollList = forwardRef((props: ScrollListProps, ref: React.RefObject<ScrollListRefProps>) => {
  const {
    className,
    lists = [],
    createItem,
    vertical,
    itemLength,
    space,
    onChange,
    autoHideArrow,
    placeholder,
    minLength = itemLength,
    autoScrollEnd,
    ...others
  } = props;
  const translate = hooks.useTranslate()
  const clientSize = vertical ? 'clientHeight' : 'clientWidth';
  const counts = lists?.length ?? 0;
  const placeholderLength = placeholder?.length ?? itemLength;
  const placeholderNode = placeholder?.node;
  const placeholderPosition = placeholder?.position;

  const style = useStyle(vertical, space, minLength);
  const rootRef = useRef<HTMLDivElement>(null);
  //The length of the viewport that can be used to display items
  const [length, setLength] = useState(0);
  //Number of items that can be displayed in the viewport
  const [number, setNumber] = useState(0);

  //Used to intercept several items from the lists and display them in the viewport([].slice(start, end))
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const [disablePrevious, setDisablePrevious] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [hideArrow, setHideArrow] = useState(true);

  const endRef = hooks.useRefValue(end);
  const startRef = hooks.useRefValue(start);
  const numberRef = hooks.useRefValue(number);

  useImperativeHandle(ref, () => ({
    hideArrow,
    disablePrevious,
    disableNext,
    scroll,
    ref: rootRef
  }));

  const setLengthRef = useRef<any>(() => void 0);
  useEffect(() => {
    setLengthRef.current = lodash.debounce(setLength, 500);
    return () => {
      setLengthRef.current?.cancel();
    }
  }, [])

  const handleResize = hooks.useEventCallback(() => {
    const node = rootRef.current;
    let length = node[clientSize] || 0;
    length += space;
    length -= (placeholderNode ? placeholderLength : 0);
    length = Math.max(length, minLength);
    setLengthRef.current?.(length);
  });

  //Use ResizeObserver to monitor the size change of root dom
  useEffect(() => {
    const node = rootRef.current;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    }
  }, [rootRef, handleResize]);

  //When length or itemLength changed, recalculate the number that can be displayed in the viewport
  useEffect(() => {
    const number = Math.floor(length / itemLength);
    setNumber(number);
  }, [length, itemLength]);

  //When the number that can be displayed in the viewport changed, automatically update end
  useEffect(() => {
    let start = startRef.current;
    let end = endRef.current;

    if (end - start > number) {
      end = startRef.current + number;
    } else if (end - start < number) {
      start = 0;
      end = start + number;
    }
    setStart(start);
    setEnd(end);

  }, [number, startRef, endRef]);

  //When the counts of lists changed, automatically scroll to end
  const listsRef = useRef([]);

  const scrollToEnd = hooks.useEventCallback(() => {
    const scrollEnd = autoScrollEnd && lists.length > 0 && listsRef.current.length > 0 &&
      lists[lists.length - 1] !== listsRef.current[listsRef.current.length - 1];
    if (scrollEnd) {
      let s = 0;
      let e = 0;
      e = counts;
      s = e - numberRef.current;
      s = Math.max(0, s);
      setStart(s);
      setEnd(e);
    }
  })

  useEffect(() => {
    scrollToEnd();
    listsRef.current = lists;
  }, [lists, scrollToEnd]);

  //Fire scroll function to change start and end
  const scroll = hooks.useEventCallback((previous: boolean, moveOne = true) => {
    const moveNumber = moveOne ? 1 : number;
    let s = 0, e = 0;
    if (previous) {
      s = start - moveNumber;
      if (s < 0) {
        s = 0;
        e = s + number;
      } else {
        e = end - moveNumber;
      }
    } else {
      e = end + moveNumber;
      if (e > counts) {
        e = counts;
        s = e - number;
      } else {
        s = start + moveNumber;
      }
    }
    setStart(s);
    setEnd(e);
  })

  const handleChange = (previous: boolean) => {
    onChange?.(previous);
    scroll(previous, true);
  }

  useEffect(() => {
    const hideArrow = (end - start) >= counts;
    const disablePrevious = start === 0;
    const disableNext = end === counts;
    setDisablePrevious(disablePrevious);
    setDisableNext(disableNext);
    setHideArrow(hideArrow);
  }, [start, end, counts]);

  return <NavButtonGroup
    {...others}
    css={style}
    type="tertiary"
    vertical={vertical}
    onChange={handleChange}
    disablePrevious={disablePrevious}
    disableNext={disableNext}
    previousAriaLabel={translate('previous')}
    nextAriaLabel={translate('next')}
    previousStyle={{ visibility: !hideArrow ? 'visible' : 'hidden' }}
    nextStyle={{ visibility: !hideArrow ? 'visible' : 'hidden' }}
    className={classNames('scroll-list', className)}>
    <div className="root scroll-list-root" ref={rootRef}>
      {placeholderPosition === 'start' && placeholderNode}
      {
        lists.slice(start, end).map((item) => {
          return createItem(item, 'scroll-list-item')
        })
      }
      {placeholderPosition === 'end' && placeholderNode}
    </div>
  </NavButtonGroup>
})