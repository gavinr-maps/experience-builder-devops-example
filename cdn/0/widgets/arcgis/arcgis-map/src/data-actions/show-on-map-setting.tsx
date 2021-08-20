import { React, DataActionSettingProps } from 'jimu-core'
//import { TextInput } from 'jimu-ui'

export default class ShowOnMapSetting extends React.PureComponent<DataActionSettingProps<any>> {
  private setting = {}
  onSettingChange = (key, value) => {
    if (typeof this.props.onSettingChange === 'function') {
      this.setting[key] = value
      this.props.onSettingChange(this.setting)
    }
  }

  render () {
    return (<div />)
  }
  //render () {
  //  return (
  //    <div className='w-100'>
  //      <label className='' style={{ justifyContent: 'flex-start' }}><FormattedMessage id='test' defaultMessage='Data title...' /></label>
  //      <TextInput
  //        className='w-100' type='text' name='text' id='dataTitle'
  //        value=''
  //        onBlur={evt => { this.onSettingChange('dataTitle', evt.target.value) }}
  //      />
  //    </div>
  //  )
  //}
}
