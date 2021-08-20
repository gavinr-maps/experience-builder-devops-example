import { DataRecord, React, DataSource, AttachmentInfo } from 'jimu-core'
import { FeatureDataRecord as FeatureLayerDataRecord } from 'jimu-arcgis'

interface Props{
  record: DataRecord
  attachmentTypes?: string[]

  onChange?: (attachmentInfos: AttachmentInfo[]) => void
  unmountAttachmentInfosChange?: () => void
}

interface State{
  attachmentInfos: AttachmentInfo[]
}

export class AttachmentComponent extends React.PureComponent<Props, State> {
  dataSources: { [dataSourceId: string]: DataSource } = null
  __unmount = false
  isLoading = false

  constructor (props: Props) {
    super(props)
    this.state = {
      attachmentInfos: null
    }
  }

  componentDidMount () {
    this.__unmount = false
    this.resolveExpressions(this.props.record)
  }

  componentWillUnmount () {
    this.__unmount = true
    this.props.unmountAttachmentInfosChange && this.props.unmountAttachmentInfosChange()
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if (
      !this.shallowEquals(this.props.record, prevProps.record)
    ) {
      this.resolveExpressions(this.props.record)
    }

    if (prevState.attachmentInfos !== this.state.attachmentInfos) {
      this.props.onChange && this.props.onChange(this.state.attachmentInfos)
    }
  }

  resolveExpressions = (record: DataRecord) => {
    if (record) {
      const dataRecord = record as FeatureLayerDataRecord
      this.isLoading = true
      dataRecord && dataRecord.queryAttachments && dataRecord.queryAttachments(this.props.attachmentTypes).then((attachmentInfos) => {
        if (this.isLoading) {
          this.isLoading = false

          this.setState({
            attachmentInfos: attachmentInfos
          })
        }
      }, () => {
        this.isLoading = false
      })
    } else {
      this.isLoading = false

      this.setState({
        attachmentInfos: null
      })
    }
  }

  /**
   * Determine if an object is equivalent with another, not recursively.
   */
  shallowEquals = (obj1: {[key: string]: any}, obj2: {[key: string]: any}): boolean => {
    if (!obj1 && !obj2) {
      return true
    } else if (obj1 && obj2) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
      } else {
        return !Object.keys(obj1).some(key => obj1[key] !== obj2[key])
      }
    } else {
      return false
    }
  }

  render () {
    return null
  }
}
