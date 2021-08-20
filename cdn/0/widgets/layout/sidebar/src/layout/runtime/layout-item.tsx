import { React, classNames, IMSizeModeLayoutJson } from 'jimu-core'
import { LayoutEntry } from 'jimu-layouts/layout-runtime'
import { styleUtils } from 'jimu-ui'

interface Props {
  itemStyle?: any
  innerLayouts: IMSizeModeLayoutJson
  style?: any
  className?: string
}

export class SidebarLayoutItem extends React.PureComponent<Props> {
  render (): JSX.Element {
    const { style, className, innerLayouts, itemStyle } = this.props
    // const layoutSetting = this.props.setting || {};
    return (
      <div
        className={classNames('side d-flex', className)}
        style={{
          ...style,
          ...styleUtils.toCSSStyle(itemStyle),
          overflow: 'auto'
        }}
      >
        <LayoutEntry className='border-0' layouts={innerLayouts} isInWidget ignoreMinHeight />
      </div>
    )
  }
}
