/** @jsx jsx */
import {
  React, css, jsx, ActionSettingProps, SerializedStyles, ImmutableObject,
  themeUtils, ThemeVariables, polished, Immutable, UseDataSource
} from 'jimu-core'

interface ExtraProps {
  theme?: ThemeVariables
}

interface States {
  isShowLayerList: boolean
}

interface Config {
  useDataSource: UseDataSource
}

export type IMConfig = ImmutableObject<Config>

class _ShowOnMapActionSetting extends React.PureComponent<ActionSettingProps<IMConfig> & ExtraProps, States> {
  modalStyle: any = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    width: '259px',
    height: 'auto',
    borderRight: '',
    borderBottom: '',
    paddingBottom: '1px'
  }

  constructor (props) {
    super(props)
  }

  static defaultProps = {
    config: Immutable({
      useDataSource: null
    })
  }

  getStyle (theme: ThemeVariables): SerializedStyles {
    return css`
      .setting-header {
        padding: ${polished.rem(10)} ${polished.rem(16)} ${polished.rem(0)} ${polished.rem(16)}
      }

      .deleteIcon {
        cursor: pointer;
        opacity: .8;
      }

      .deleteIcon:hover {
        opacity: 1;
      }
    `
  }

  render () {
    return (
      <div css={this.getStyle(this.props.theme)} />
    )
  }
}

export default themeUtils.withTheme(_ShowOnMapActionSetting)
