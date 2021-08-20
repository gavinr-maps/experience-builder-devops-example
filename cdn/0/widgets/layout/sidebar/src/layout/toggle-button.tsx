/** @jsx jsx */
import { React, jsx, css, SerializedStyles, IMThemeVariables, Immutable } from 'jimu-core'
import { Icon, Button } from 'jimu-ui'
import { ToggleBtnColor, ICON_TYPE } from '../config'

const ICONS = {}
ICONS[ICON_TYPE.Left] = require('jimu-ui/lib/icons/arrow-left-14.svg')
ICONS[ICON_TYPE.Right] = require('jimu-ui/lib/icons/arrow-right-14.svg')
ICONS[ICON_TYPE.Up] = require('jimu-ui/lib/icons/arrow-up-14.svg')
ICONS[ICON_TYPE.Down] = require('jimu-ui/lib/icons/arrow-down-14.svg')

export interface SidebarControllerProps {
  expanded: boolean
  icon: ICON_TYPE
  iconSize: number
  color: ToggleBtnColor
  shouldFlip: boolean
  width: number
  height: number
  style: any
  theme: IMThemeVariables
}

export class SidebarController extends React.PureComponent<SidebarControllerProps> {
  getStyle (): SerializedStyles {
    const { width, height } = this.props

    return css`
      padding: 0;
      width: ${width}px;
      height: ${height}px;

      .jimu-icon {
        margin: 0;
      }
    `
  }

  flipStyle (style: {borderRadius?: string}): React.CSSProperties {
    if (!this.props.shouldFlip) {
      return style
    }
    let result = Immutable(style)
    if (style.borderRadius != null) {
      const fourSides = style.borderRadius.split(' ')
      result = result.set('borderRadius', `${fourSides[1]} ${fourSides[0]} ${fourSides[3]} ${fourSides[2]}`)
    }
    return result
  }

  render (): JSX.Element {
    const { icon, iconSize, style, expanded, shouldFlip } = this.props
    const rotate = shouldFlip ? 180 : 0
    return (
      <Button
        className='sidebar-controller d-flex justify-content-center align-items-center'
        css={this.getStyle()} style={this.flipStyle(style)}
      >
        <Icon
          className='icon' rotate={expanded ? 0 + rotate : 180 + rotate}
          icon={ICONS[icon]} size={iconSize}
        />
      </Button>
    )
  }
}
