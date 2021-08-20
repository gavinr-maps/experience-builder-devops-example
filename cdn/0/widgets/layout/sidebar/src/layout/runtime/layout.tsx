/** @jsx jsx */
import { moduleLoader } from 'jimu-core'
import { utils } from 'jimu-layouts/layout-runtime'
import { SidebarLayoutItem } from './layout-item'
import { SidebarType, CollapseSides } from '../../config'

import { BaseSidebarLayout } from '../layout-base'

export class SidebarLayout extends BaseSidebarLayout {
  interactModule

  constructor (props) {
    super(props)

    this.layoutItemComponent = SidebarLayoutItem
  }

  bindSplitHandler = (): void => {
    if (this.interactModule == null) {
      moduleLoader.loadModule('jimu-core/dnd').then((dndModule) => {
        this.interactModule = dndModule.interact
        this.initHandler()
      }).catch(err => {
        console.error(err)
      })
    } else {
      this.initHandler()
    }
  }

  private initHandler (): void {
    const { config } = this.props
    let dx: number
    let dy: number
    if (this.splitRef != null && config.resizable && this.interactable == null) {
      this.interactable = this.interactModule(this.splitRef)
        .origin('parent')
        .draggable({
          inertia: false,
          autoScroll: false,
          modifiers: [
            this.interactModule.modifiers.restrict({
              restriction: 'parent'
            })
          ],
          startAxis: this.props.direction === SidebarType.Horizontal ? 'x' : 'y',
          lockAxis: this.props.direction === SidebarType.Horizontal ? 'x' : 'y',
          onstart: (event: Interact.DragEvent) => {
            event.stopPropagation()

            const sign = this.props.config.collapseSide === CollapseSides.First ? 1 : -1
            if (this.props.direction === SidebarType.Horizontal) {
              const dirSign = utils.isRTL() ? -1 : 1
              dx = this.state.deltaSize * sign * dirSign
              dy = 0
            } else {
              dx = 0
              dy = this.state.deltaSize * sign
            }
            const parentRect = this.ref.getBoundingClientRect()
            this.domSize = this.props.direction === SidebarType.Horizontal ? parentRect.width : parentRect.height
            this.setState({
              isResizing: true
            })
          },
          onmove: (event: Interact.DragEvent) => {
            event.stopPropagation()

            dx += event.dx
            dy += event.dy

            if (this.props.direction === SidebarType.Horizontal) {
              const sign = utils.isRTL() ? -1 : 1
              if (this.props.config.collapseSide === CollapseSides.First) {
                this.setState({
                  deltaSize: Math.round(dx * sign)
                })
              } else {
                this.setState({
                  deltaSize: -Math.round(dx * sign)
                })
              }
            } else {
              if (this.props.config.collapseSide === CollapseSides.First) {
                this.setState({
                  deltaSize: Math.round(dy)
                })
              } else {
                this.setState({
                  deltaSize: -Math.round(dy)
                })
              }
            }
          },
          onend: (event: Interact.DragEvent) => {
            event.stopPropagation()

            this.setState({
              isResizing: false
            })
          }
        })
    }
  }
}
