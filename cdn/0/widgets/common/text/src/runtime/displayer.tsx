/** @jsx jsx */
import { React, jsx, css, IMExpression, ExpressionResolverComponent, expressionUtils, IMState, ReactRedux, ThemeVariables, polished, SerializedStyles } from 'jimu-core'
import { Icon, RichTextDisplayer, RichTextDisplayerProps, Scrollable, ScrollableRefProps } from 'jimu-ui'
const { useState, useEffect, useRef } = React

const LEAVEDELAY = 500
const fadeIcon = require('./assets/icons/arrow-down-double.svg')

export type DisplayerProps = Omit<RichTextDisplayerProps, 'sanitize'> & {
  tooltip?: IMExpression
  wrap?: boolean
}

const useStyle = (wrap: boolean, fadeLength: string, theme: ThemeVariables): SerializedStyles => {
  const white = theme?.colors?.white
  const light500 = theme?.colors?.palette?.light?.[500] ?? '#444'
  return React.useMemo(() => {
    const nowrap = css`
      .rich-displayer {
        white-space: nowrap !important;
      }
   `

    return css`
      width: 100%;
      height: 100%;
      position: relative;
      overflow-y: hidden;
      .rich-displayer {
        width: 100%;
        height: fit-content;
      }

      ${!wrap && nowrap};
      .text-fade {
        position: absolute;
        left: 0;
        height: ${fadeLength};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        pointer-events: none;
        > .arrow {
          position: absolute;
          width: 16px;
          height: 16px;
          background: ${white};
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          &.arrow-bottom {
            bottom: 4px;
          }
        }
        &.text-fade-bottom {
          bottom: 0;
          background: linear-gradient(180deg, rgba(182, 182, 182, 0) 0%, ${polished.rgba(light500, 0.5)} 100%);
        }
      }

      .bounce {
        animation-name: bounce;
        animation-duration:0.6s;
        animation-iteration-count:infinite;
        animation-timing-function:linear;
      }

      @keyframes bounce {
        0% { 
          transform: translateY(0px) 
        }
        50% {
          transform: translateY(2px)
        }
        100%{
          transform: translateY(4px)
        }
      }
    `
  }, [white, light500, fadeLength, wrap])
}

const getFadeLength = (height: number): string => {
  if (height <= 80) {
    return '0px'
  } else if (height <= 140) {
    return '24px'
  } else {
    return '15%'
  }
}

export function Displayer (props: DisplayerProps): React.ReactElement {
  const {
    value,
    placeholder,
    repeatedDataSource,
    useDataSources,
    widgetId,
    wrap,
    tooltip: propTooltip,
    ...others
  } = props

  const theme = ReactRedux.useSelector((state: IMState) => state.theme)
  const rootRef = useRef<HTMLDivElement>()
  const isTextTooltip = expressionUtils.isSingleStringExpression(propTooltip as any)
  const [tooltip, setTooltip] = useState('')

  const [fadeLength, setFadeLength] = React.useState('24px')
  const [bottoming, setBottoming] = React.useState(false)
  const [scrollable, setScrollable] = React.useState(false)
  const [version, setVersion] = React.useState(0)
  const [showFade, setShowFade] = React.useState(false)
  const style = useStyle(wrap, fadeLength, theme)

  const syncScrollState = React.useCallback((scrollableState: ScrollableRefProps) => {
    if (scrollableState == null) return
    const { scrollable, bottoming } = scrollableState
    setBottoming(bottoming)
    setScrollable(scrollable)
  }, [])

  useEffect(() => {
    if (propTooltip != null && isTextTooltip) {
      const tooltip = expressionUtils.getSingleStringExpressionText(propTooltip as any)
      setTooltip(tooltip)
    }
  }, [propTooltip, isTextTooltip])

  const onTiptipResolved = (res): void => {
    if (res?.isSuccessful as boolean) {
      setTooltip(res.value)
    }
  }

  const timeoutRef = useRef<any>()

  const handleEnter = (): void => {
    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    const fadeLength = getFadeLength(rootRef.current?.clientHeight ?? 0)
    setShowFade(fadeLength !== '0px')
    setVersion(v => v + 1)
    setFadeLength(fadeLength)
  }

  const delayLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setShowFade(false)
      timeoutRef.current = null
    }, LEAVEDELAY)
  }

  return (
    <div css={style} title={tooltip} onMouseEnter={handleEnter} onMouseLeave={delayLeave} ref={rootRef} {...others}>
      <Scrollable ref={syncScrollState} version={version}>
        <RichTextDisplayer
          widgetId={widgetId}
          repeatedDataSource={repeatedDataSource}
          useDataSources={useDataSources}
          value={value}
          placeholder={placeholder}
        />
      </Scrollable>
      {showFade && scrollable && !bottoming && <div className='text-fade text-fade-bottom'>
        <span className='arrow arrow-bottom rounded-circle mr-1'><Icon className='bounce' icon={fadeIcon} size={13} color={theme?.colors?.black} /></span>
                                               </div>}
      {
        (!isTextTooltip && propTooltip) && <ExpressionResolverComponent
          useDataSources={useDataSources} expression={propTooltip} widgetId={widgetId}
          onChange={onTiptipResolved}
                                           />
      }
    </div>
  )
}
