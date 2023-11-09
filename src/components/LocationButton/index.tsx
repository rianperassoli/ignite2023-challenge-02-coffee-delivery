import { Container } from './styles'
import { MapPin } from 'phosphor-react'

export function LocationButton() {
  return (
    <Container>
      <MapPin size={24} weight="fill" />
      <span>Porto Alegre, RS</span>
    </Container>
  )
}
