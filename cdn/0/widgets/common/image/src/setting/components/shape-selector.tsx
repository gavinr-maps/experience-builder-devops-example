/** @jsx jsx */
import { React, classNames, ThemeVariables, css, jsx, ImmutableObject, Immutable, IntlShape } from 'jimu-core'
import { CropParam, Icon } from 'jimu-ui'
import defaultMessages from '../translations/default'

interface Props{
  intl?: IntlShape

  theme: ThemeVariables

  cropParam: ImmutableObject<CropParam>

  onShapeChoosed: (cropParam: ImmutableObject<CropParam>) => void
}

interface States{
}

export default class ShapeChooser extends React.PureComponent<Props, States> {
  cropShapeList = ['rectangle', 'circle', 'hexagon', 'pentagon', 'rhombus', 'triangle']

  constructor (props) {
    super(props)
  }

  getStyle () {
    const theme = this.props.theme

    return css`
      .widget-image-chooseshape-item {
        flex: 1;
        cursor: pointer;

        svg {
          fill: ${theme.colors.black};
        }
      }

      .widget-image-chooseshape-bg {
        background-color: ${theme.colors.palette.secondary[200]};
      }
      `
  }

  shapeClick = (e, index) => {
    if (this.props.cropParam && this.props.cropParam.cropShape === this.cropShapeList[index]) {
      return
    }

    const svgItem = e.currentTarget.getElementsByTagName('svg') && e.currentTarget.getElementsByTagName('svg')[0]
    if (svgItem) {
      let cropParam = this.props.cropParam
      if (!cropParam) {
        cropParam = Immutable({})
      }

      cropParam = cropParam.set('svgViewBox', svgItem.getAttribute('viewBox'))
      cropParam = cropParam.set('svgPath', svgItem.getElementsByTagName('path')[0].getAttribute('d'))
      cropParam = cropParam.set('cropShape', this.cropShapeList[index])

      this.props.onShapeChoosed && this.props.onShapeChoosed(cropParam)
    }
  }

  render () {
    return (
      <div className='w-100 d-flex' css={this.getStyle()}>
        {this.cropShapeList.map((item, index) => {
          const iconComponent = require(`jimu-ui/lib/icons/imagecrops/${item}.svg`)

          if (item === 'rectangle' && !this.props.cropParam) {
            return (
              <div
                key={index} className={classNames('d-flex justify-content-center align-items-center widget-image-chooseshape-bg widget-image-chooseshape-item border-selected')}
                style={{ height: '30px', width: '30px', marginRight: '3px' }} onClick={(e) => this.shapeClick(e, index)}
                title={this.props.intl.formatMessage({ id: 'imagerectangle', defaultMessage: defaultMessages.imagerectangle })}
              ><Icon width={12} height={12} icon={iconComponent} />
              </div>
            )
          } else {
            return (
              <div
                key={index} className={classNames('d-flex justify-content-center align-items-center widget-image-chooseshape-bg widget-image-chooseshape-item',
                  { 'border-selected': (this.props.cropParam && this.props.cropParam.cropShape === item) })}
                style={{ height: '30px', width: '30px', marginRight: '3px' }} onClick={(e) => this.shapeClick(e, index)}
                title={this.props.intl.formatMessage({ id: `image${item}`, defaultMessage: defaultMessages[`image${item}`] })}
              ><Icon width={12} height={12} icon={iconComponent} />
              </div>
            )
          }
        })}
      </div>
    )
  }
}
