import { React, SessionManager, esri, getAppStore } from 'jimu-core'
import { ImageWithParam } from 'jimu-ui'

interface Props{
  mapItemId: string
  portUrl: string
}

interface States{
  mapThumbUrl: string
}

export default class MapThumb extends React.PureComponent<Props, States> {
  unmount = false

  constructor (props) {
    super(props)

    this.state = {
      mapThumbUrl: null
    }
  }

  componentDidMount () {
    this.unmount = false
    this.setMapThumbUrl(this.props.mapItemId)
  }

  componentDidUpdate (prevProps: Props, prevState) {
    if (prevProps.mapItemId !== this.props.mapItemId) {
      this.setMapThumbUrl(this.props.mapItemId)
    }
  }

  setMapThumbUrl = (mapId: string): void => {
    if (!mapId) {
      this.setState({ mapThumbUrl: null })
    }

    if (!this.props.portUrl || this.props.portUrl === getAppStore().getState().portalUrl) {
      // if no portalUrl or same to config portalurl, use app config's portalUrl
      const portalUrl = getAppStore().getState().portalUrl
      const session = SessionManager.getInstance().getSessionByUrl(portalUrl)
      esri.restPortal.searchItems({
        q: `id:${mapId}`,
        authentication: SessionManager.getInstance().getSessionByUrl(portalUrl),
        portal: portalUrl + '/sharing/rest'
      }).then(items => {
        if (!this.unmount) {
          if (items.results[0]) {
            const tempThumbUrl = `${portalUrl}/sharing/rest/content/items/${items.results[0].id}/` +
            `info/${items.results[0].thumbnail}?token=${session?.token}`
            this.setState({ mapThumbUrl: tempThumbUrl })
          } else {
            this.setState({ mapThumbUrl: null })
          }
        }
      })
    } else {
      // use other portalUrl
      esri.restPortal.searchItems({
        q: `id:${mapId}`,
        portal: this.props.portUrl + '/sharing/rest'
      }).then(items => {
        if (!this.unmount) {
          if (items.results[0]) {
            const tempThumbUrl = `${this.props.portUrl}/sharing/rest/content/items/${items.results[0].id}/` +
            `info/${items.results[0].thumbnail}`
            this.setState({ mapThumbUrl: tempThumbUrl })
          } else {
            this.setState({ mapThumbUrl: null })
          }
        }
      })
    }
  }

  componentWillUnmount () {
    this.unmount = true
  }

  render () {
    if (this.state.mapThumbUrl) {
      return <ImageWithParam imageParam={{ url: this.state.mapThumbUrl }} />
    } else {
      return <ImageWithParam imageParam={{}} />
    }
  }
}
