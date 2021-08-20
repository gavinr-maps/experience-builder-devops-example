import { React, AttachmentInfo } from 'jimu-core'
import { ImageWithParam, ImageParam, ImageWithParamProps, Icon } from 'jimu-ui'

const arrowLeft = require('jimu-ui/lib/icons/arrow-left-12.svg')
const arrowRight = require('jimu-ui/lib/icons/arrow-right-12.svg')

interface ImageGalleryProps extends ImageWithParamProps{
  sources: AttachmentInfo[]
  toolTipWithAttachmentName?: boolean
  altTextWithAttachmentName?: boolean
}

interface States{
  currentIndex: number
}

export class ImageGallery extends React.PureComponent<ImageGalleryProps, States> {
  constructor (props: ImageGalleryProps) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  componentDidUpdate (prevProps: ImageGalleryProps, prevState: States) {
    if (prevProps.sources !== this.props.sources) {
      this.setState({
        currentIndex: 0
      })
    }
  }

  backImg = (e) => {
    const preIndex = this.state.currentIndex > 0 ? this.state.currentIndex - 1 : this.props.sources.length - 1
    this.setState({
      currentIndex: preIndex
    })
    e?.preventDefault()
    e?.stopPropagation()
  }

  forwardImg = (e) => {
    const nextIndex = this.state.currentIndex < this.props.sources.length - 1 ? this.state.currentIndex + 1 : 0
    this.setState({
      currentIndex: nextIndex
    })
    e?.preventDefault()
    e?.stopPropagation()
  }

  render () {
    let tempImageParam = {} as any

    const toolTip = this.props.toolTipWithAttachmentName ? (this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].name) : this.props.toolTip
    const altText = this.props.altTextWithAttachmentName ? (this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].name) : this.props.altText
    if ((this.props.imageParam as any).set) {
      tempImageParam = (this.props.imageParam as any).set('url', (this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].url))
    } else {
      tempImageParam.url = this.props.sources && this.props.sources[this.state.currentIndex] && this.props.sources[this.state.currentIndex].url
    }

    return (
      <div className='w-100 h-100'>
        {this.props.sources && this.props.sources.length > 1 && <div title={toolTip} className='silder-tool-container w-100 h-100' style={{ position: 'absolute', zIndex: 1 }}>
          <div
            className='d-flex justify-content-center align-items-center image-gallery-button ml-2'
            onClick={this.backImg} style={{ top: '50%', transform: 'translateY(-50%)', position: 'absolute', left: 0 }}
          >
            <Icon size='12' icon={arrowLeft} />
          </div>
          <div
            className='d-flex justify-content-center align-items-center image-gallery-button mr-2'
            onClick={this.forwardImg} style={{ top: '50%', transform: 'translateY(-50%)', position: 'absolute', right: 0 }}
          >
            <Icon size='12' icon={arrowRight} />
          </div>
        </div>}
        <div className='image-gallery-content w-100 h-100'>
          <ImageWithParam
            imageParam={tempImageParam as ImageParam}
            useFadein size={this.props.size}
            imageFillMode={this.props.imageFillMode}
            isAutoHeight={this.props.isAutoHeight}
            toolTip={toolTip} altText={altText}
          />
        </div>
      </div>
    )
  }
}
