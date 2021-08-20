import { React } from 'jimu-core'
import { BaseTool, BaseToolProps, IconType } from '../layout/base/base-tool'
import { MultiSourceMapContext } from '../components/multisourcemap-context'
import { defaultMessages } from 'jimu-ui'

export default class Fullscreen extends BaseTool<BaseToolProps, unknown> {
  toolName = 'Fullscreen'
  isFullScreen = false

  constructor (props) {
    super(props)
  }

  getTitle () {
    return this.props.intl.formatMessage({ id: 'FullScreenLabel', defaultMessage: defaultMessages.FullScreenLabel })
  }

  getIcon (): IconType {
    return {
      icon: this.isFullScreen ? require('../assets/icons/exit-full-screen.svg') : require('../assets/icons/full-screen.svg'),
      onIconClick: (evt?: React.MouseEvent<any>) => {
        this.fullScreenMap()
      }
    }
  }

  fullScreenMap = () => {}

  getExpandPanel (): JSX.Element {
    return null
  }

  getContent = (fullScreenMap, isFullScreen) => {
    this.fullScreenMap = fullScreenMap
    this.isFullScreen = isFullScreen
    return super.render()
  }

  render () {
    return (
      <MultiSourceMapContext.Consumer>
        {({ fullScreenMap, isFullScreen }) => (
          this.getContent(fullScreenMap, isFullScreen)
        )}
      </MultiSourceMapContext.Consumer>
    )
  }
}
