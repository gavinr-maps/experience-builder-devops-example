import { React } from 'jimu-core'

interface Props {
  onDestroyed?: () => void
}

export default class PanelShell extends React.PureComponent<Props, unknown> {
  componentWillUnmount () {
    if (this.props.onDestroyed) {
      this.props.onDestroyed()
    }
  }

  render () {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}
