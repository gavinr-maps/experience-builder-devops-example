import { DataRecord, React, DataSource } from 'jimu-core'
import { FeatureDataRecord as FeatureLayerDataRecord } from 'jimu-arcgis'

interface Props{
  record: DataRecord

  onChange?: (symbolElement: HTMLElement) => void
  unmountSymbolElementChange?: () => void
}

interface State{
  symbolElement: HTMLElement
}

export class SymbolComponent extends React.PureComponent<Props, State> {
  dataSources: { [dataSourceId: string]: DataSource } = null
  __unmount = false
  isLoading = false

  constructor (props: Props) {
    super(props)
    this.state = {
      symbolElement: null
    }
  }

  componentDidMount () {
    this.__unmount = false
    this.resolveExpressions(this.props.record)
  }

  componentWillUnmount () {
    this.__unmount = true
    this.props.unmountSymbolElementChange && this.props.unmountSymbolElementChange()
  }

  componentDidUpdate (prevProps: Props, prevState: State) {
    if (
      !this.shallowEquals(this.props.record, prevProps.record)
    ) {
      this.resolveExpressions(this.props.record)
    }

    if (prevState.symbolElement !== this.state.symbolElement) {
      this.props.onChange && this.props.onChange(this.state.symbolElement)
    }
  }

  resolveExpressions = (record: DataRecord) => {
    if (record) {
      const dataRecord = record as FeatureLayerDataRecord
      this.isLoading = true
      dataRecord && dataRecord.getSymbolPreviewHTML && dataRecord.getSymbolPreviewHTML().then((result) => {
        if (this.isLoading) {
          this.isLoading = false

          this.setState({
            symbolElement: result
          })
        }
      }, () => {
        this.isLoading = false
      })
    } else {
      this.isLoading = false

      this.setState({
        symbolElement: null
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
