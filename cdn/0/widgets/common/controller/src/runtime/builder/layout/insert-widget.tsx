/** @jsx jsx */
import { React, jsx, css, themeUtils, LayoutItemConstructorProps, IMLayoutJson } from 'jimu-core';
import { WidgetListPopper } from 'jimu-ui/advanced/setting-components';
import { AvatarCard, AvatarCardProps } from '../../common';
const addIcon = require('jimu-ui/lib/icons/add-16.svg');
import defaultMessages from '../../translations/default';
import { hooks, utils } from 'jimu-ui';
import { isLayoutItemAcceptedForController } from '../utils';
const { useState, useRef } = React;

interface InsertWidgetProps extends Omit<AvatarCardProps, 'avatar'> {
  item: AvatarCardProps;
  layout: IMLayoutJson;
  insertSyncWidgetToLayout: (layout, item, container, itemRect, index) => void;
}

const style = css`
  width: 300px;
  height: 300px;
  overflow-y: auto;
`;

export const InsertWidget = (props: InsertWidgetProps) => {
  const { layout, item, insertSyncWidgetToLayout, ...others } = props;
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const buildThemeRef = useRef(themeUtils.getBuilderThemeVariables());
  const toggle = () => {
    setOpen(open => !open);
  }

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation();
    toggle();
  }

  const translate = hooks.useTranslate(defaultMessages);

  const onItemSelect = (item: LayoutItemConstructorProps) => {
    const insertIndex = layout.order?.length ?? 0;
    insertSyncWidgetToLayout(layout, item, {} as any, {} as any, insertIndex);
  }

  return <React.Fragment>
    <AvatarCard
      {...item}
      {...others}
      title={translate('addWidget')}
      icon={utils.toIconResult(addIcon, 'add')}
      ref={nodeRef}
      onClick={handleClick}>
    </AvatarCard>
    {open && <WidgetListPopper
      css={style}
      builderTheme={buildThemeRef.current}
      referenceElement={nodeRef.current}
      isItemAccepted={isLayoutItemAcceptedForController}
      onItemSelect={onItemSelect}
      onClose={toggle} />}
  </React.Fragment>

}