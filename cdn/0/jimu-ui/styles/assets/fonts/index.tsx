import { css, urlUtils } from 'jimu-core'

export const getFontFaces = () => {
  return css`
    @import url('${urlUtils.getFixedRootPath()}jimu-ui/styles/assets/fonts/avenir/fonts.css');
  `
}
