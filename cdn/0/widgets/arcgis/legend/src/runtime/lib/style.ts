import { ThemeVariables, css, SerializedStyles } from 'jimu-core'
import { styleUtils } from 'jimu-ui'
import { Style } from '../../config'

export function getStyle (theme: ThemeVariables, style: Style): SerializedStyles {
  const fillStyleCss = styleUtils.toCSSStyle({ background: style.background }) as any
  delete fillStyleCss.backgroundColor
  const fontColor = style.fontColor || theme.arcgis.widgets.legend.variants?.default?.root?.color
  const root = style.background?.color || theme.surfaces[1].bg
  const cardRoot = theme.surfaces[1].bg
  // const cardCarousel = theme.surfaces[1].bg;
  // const cardCaption = theme.surfaces[1].bg;

  return css`
    overflow: auto;
    .widget-legend {
      width: 100%;
      height: 100%;
      /*background-color: ${theme.arcgis.widgets.legend.variants?.card?.root?.bg};*/
      background-color: ${root};
      position: relative;
      ${fillStyleCss}

      .esri-legend {
        background-color: transparent;
        color: ${fontColor};
        height: 100%;
      }

      .esri-legend--card {
        background-color: transparent;
        color: ${fontColor};
        height: 100%;
      }

      .esri-legend--card.esri-legend--stacked{
      /*
        position: absolute;
        height: 100%;
        width: 100%;
      */
        flex-direction: column;
        justify-content: space-between;
      }

      .esri-legend--card__section {
        width: 100%;
        height: unset;
        margin-bottom: 32px;
      }

      .esri-legend--card__carousel-indicator-container {
        order: 1;
        color: ${fontColor};
      }

      .esri-legend--card__service-caption-container {
        color: ${fontColor};
      }

      .esri-legend--card.esri-widget{
        background-color: ${cardRoot};
      }

      /* .esri-legend {
        background-color: ${theme.colors.palette.light[100]};
        color: ${theme.colors.black}
      }

      .esri-widget__heading {
        color: ${theme.colors.black};
      }

      .esri-legend--card.esri-widget{
        background-color: ${theme.colors.palette.light[300]};
        color: ${theme.colors.black}
      }

      .esri-legend--card__section {
        width: 100%;
        background-color: ${theme.colors.palette.light[100]};
        color: ${theme.colors.black}
      }

      .esri-legend--card__carousel-indicator-container {
        background-color: ${theme.colors.palette.light[300]};
      }

      .esri-legend--card__service {
        width: 100%;
      }

      .esri-legend--card__service-caption-container {
        background-color: ${theme.colors.palette.light[300]};
        color: ${theme.colors.black};
      } */

      /*
      .esri-legend--card__carousel-indicator {
        background-color: ${theme.colors.palette.dark[900]};
      }
      */
    }
  `
}
