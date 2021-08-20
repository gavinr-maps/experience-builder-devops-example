/** @jsx jsx */
import { jsx, polished, css, ReactRedux, IMState } from 'jimu-core'
import { Icon, Button } from 'jimu-ui'

const effect0 = require('../../assets/effect-0.svg')
const effect1 = require('../../assets/effect-1.svg')
const effect2 = require('../../assets/effect-2.svg')
const effect3 = require('../../assets/effect-3.svg')
const effect4 = require('../../assets/effect-4.svg')
const effect5 = require('../../assets/effect-5.svg')
const effect6 = require('../../assets/effect-6.svg')
const effect7 = require('../../assets/effect-7.svg')
const effect8 = require('../../assets/effect-8.svg')
const effect9 = require('../../assets/effect-9.svg')

const EFFECT_0 = ''
const EFFECT_1 = 'rgba(0, 0, 0, 0.3) -10px 0px 4px'
const EFFECT_2 = 'rgba(0, 0, 0, 0.4) -4px -3px 4px, rgba(0, 0, 0, 0.2) -2px -2px 0px'
const EFFECT_3 = 'rgba(0, 0, 0, 0.4) 0px -4px 4px'
const EFFECT_4 = 'rgba(0, 0, 0, 0.2) 0px 2px 0px, rgba(0, 0, 0, 0.3) -2px 4px 2px'
const EFFECT_5 = 'rgba(0, 0, 0, 0.1) 0px 12px 0px'
const EFFECT_6 = 'rgba(0, 0, 0, 0.5) 0px 0px 6px'
const EFFECT_7 = 'rgb(250, 250, 250) -2px -1px 0px, rgba(0, 0, 0, 0.5) -3px -3px 4px'
const EFFECT_8 = 'rgb(250, 250, 250) 2px 1px 0px, rgba(0, 0, 0, 0.3) 4px 4px 3px'
const EFFECT_9 = 'rgb(250, 250, 250) 3px -2px 3px, rgba(0, 0, 0, 0.5) 3px -4px 0px'

const EFFECTS1 = [[EFFECT_0, effect0], [EFFECT_1, effect1], [EFFECT_2, effect2], [EFFECT_3, effect3], [EFFECT_4, effect4]]
const EFFECTS2 = [[EFFECT_5, effect5], [EFFECT_6, effect6], [EFFECT_7, effect7], [EFFECT_8, effect8], [EFFECT_9, effect9]]

const Effect = ({ active, onClick, icon }): React.ReactElement => {
  const theme = ReactRedux.useSelector((state: IMState) => state.theme)
  const primary600 = theme.colors?.palette?.primary?.[600]
  const light200 = theme.colors?.palette?.light?.[200]

  const style = css`
    width: ${polished.rem(40)};
    height: ${polished.rem(40)};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${light200};
    outline: ${active as boolean ? `2px solid ${primary600}` : 'unset'};
  `

  return (
    <div css={style}>
      <Button icon type='tertiary' size='sm' onClick={onClick}>
        <Icon icon={icon} size={24} />
      </Button>
    </div>
  )
}

export interface Props {
  value: string
  onChange?: (value: string) => void
}

const style = css`
  width: 100%;
  .line-one,
  .line-two {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .line-two {
    margin-top: 7px;
  }
`

export const Effects = (props: Props): React.ReactElement => {
  const { value, onChange } = props

  return (
    <div css={style}>
      <div className='line-one'>
        {EFFECTS1.map(([effect, icon], index) => {
          return <Effect key={index} icon={icon} active={effect ? effect === value : !value} onClick={() => onChange(effect)} />
        })}
      </div>
      <div className='line-two'>
        {EFFECTS2.map(([effect, icon], index) => {
          return <Effect key={index} icon={icon} active={effect === value} onClick={() => onChange(effect)} />
        })}
      </div>
    </div>
  )
}
