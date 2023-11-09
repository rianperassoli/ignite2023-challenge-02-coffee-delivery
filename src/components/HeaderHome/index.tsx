import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import coffeeCup from '../../assets/copo-de-cafe.png'
import {
  Container,
  ImageContainer,
  List,
  IconWrapper,
  ContentContainer,
  InfoContainer,
} from './styles'

export function HeaderHome() {
  return (
    <Container>
      <ContentContainer>
        <InfoContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <List>
            <div>
              <div>
                <IconWrapper bgColor="orange">
                  <ShoppingCart size={24} weight="fill" />
                </IconWrapper>
                <span>Compra simples e segura</span>
              </div>
              <div>
                <IconWrapper bgColor="yellow">
                  <Timer size={24} weight="fill" />
                </IconWrapper>
                <span>Entrega rápida e rastreada</span>
              </div>
            </div>

            <div>
              <div>
                <IconWrapper bgColor="gray">
                  <Package size={24} weight="fill" />
                </IconWrapper>
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <IconWrapper bgColor="purple">
                  <Coffee size={24} weight="fill" />
                </IconWrapper>
                <span>O café chega fresquinho até você</span>
              </div>
            </div>
          </List>
        </InfoContainer>
        <ImageContainer>
          <img src={coffeeCup} alt="Cup of cofee with some grains" />
        </ImageContainer>
      </ContentContainer>
    </Container>
  )
}
