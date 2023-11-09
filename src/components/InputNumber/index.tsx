import { Plus, Minus } from 'phosphor-react'
import { InputNumberContainer } from './styles'

export function InputNumber() {
  return (
    <InputNumberContainer>
      <Minus size={14} />
      <span>1</span>
      <Plus size={14} />
    </InputNumberContainer>
  )
}
