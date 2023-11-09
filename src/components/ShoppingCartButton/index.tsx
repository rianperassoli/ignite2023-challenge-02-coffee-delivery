import { Container } from './styles'
import { ShoppingCart } from 'phosphor-react'

interface ShoppingCartButtonProps {
  itemsOnCart: number
}

export function ShoppingCartButton({ itemsOnCart }: ShoppingCartButtonProps) {
  return (
    <Container>
      {!!itemsOnCart && <span>{itemsOnCart}</span>}
      <ShoppingCart size={24} weight="fill" />
    </Container>
  )
}
