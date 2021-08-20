import { ThemeVariables, css, SerializedStyles, polished } from 'jimu-core'

export function getStyle (theme: ThemeVariables): SerializedStyles {
  return css`
    .widget-setting-layerlist{
      font-weight: lighter;
      font-size: 13px;

      .source-descript {
        color: ${theme.colors.palette.dark[600]};	
      }

      .webmap-thumbnail{
        cursor: auto;
        width: 100%;
        height: 120px;
        overflow: hidden;
        padding: 1px;
        border: ${polished.rem(2)} solid initial;
        img, div{
          width: 100%;
          height: 100%;
        }
      }

      .layerlist-tools{
        .layerlist-tools-item{
          display: flex;
          /* justify-content: space-between; */
          margin-bottom: 8px;
        }
      }

      .map-selector-section .component-map-selector .form-control{
        width: 100%;
      }

      .data-selector-section, .map-selector-section{
        padding-top: 10px;
      }

    }
  `
}
