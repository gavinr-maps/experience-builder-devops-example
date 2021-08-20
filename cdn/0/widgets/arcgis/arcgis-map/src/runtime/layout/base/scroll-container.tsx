/** @jsx jsx */
import { css, jsx, React } from 'jimu-core'

interface ScrollContainerProps {
  className?: string
  style?: React.CSSProperties
}

export default class ScrollContainer extends React.PureComponent<ScrollContainerProps, unknown> {
  moveY = 0
  startY = 0
  isRegisted = false

  getStyle () {
    return css`
      overflow: auto;
      pointer-events: auto;
      `
  }

  registerTouchEvent = (ref: HTMLElement) => {
    if (ref && !this.isRegisted) {
      ref.addEventListener('touchstart', (event) => {
        this.moveY = 0
        const touch = event.touches[0]
        this.startY = touch.clientY
      }, { passive: false })

      ref.addEventListener('touchmove', (event) => {
        const touch = event.touches[0]
        this.moveY = (touch.clientY - this.startY) * -1
        this.startY = touch.clientY

        ref.scrollTop = ref.scrollTop + this.moveY
      }, { passive: false })

      ref.addEventListener('touchend', (event) => {
        this.moveY = 0
        this.startY = 0
      }, { passive: false })

      this.isRegisted = true
    }
  }

  render () {
    return (
      <div
        css={this.getStyle()} className={this.props.className} style={this.props.style}
        ref={ref => {
          this.registerTouchEvent(ref)
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
