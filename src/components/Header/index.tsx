import { NavLink } from 'react-router-dom'
import { ShoppingCartButton } from '../ShoppingCartButton'
import { LocationButton } from '../LocationButton'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <nav>
        <LocationButton />
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCartButton itemsOnCart={0} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
