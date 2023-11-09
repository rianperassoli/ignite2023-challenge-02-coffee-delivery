import { ShoppingCart } from 'phosphor-react'
import { HeaderHome } from '../../components/HeaderHome'
import { coffeeList } from '../../utils/coffeeList'
import {
  CoffeeList,
  CoffeeListItem,
  CoffeeListItemCategory,
  CoffeeListItemFooter,
  ContentContainer,
  HomeContainer,
} from './styles'
import { InputNumber } from '../../components/InputNumber'

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />
      <ContentContainer>
        <h2>Nossos Cafés</h2>
        <CoffeeList>
          {coffeeList.map((coffee) => (
            <CoffeeListItem key={coffee.title}>
              <img src={coffee.image} alt={coffee.title} />

              <CoffeeListItemCategory>
                {coffee.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </CoffeeListItemCategory>

              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>

              <CoffeeListItemFooter>
                <label>
                  {'R$ '}
                  <span>{coffee.price.toFixed(2)}</span>
                </label>
                <div>
                  <InputNumber />
                  <ShoppingCart size={24} weight="fill" />
                </div>
              </CoffeeListItemFooter>
            </CoffeeListItem>
          ))}
        </CoffeeList>
      </ContentContainer>
    </HomeContainer>
  )
}
