import { Outlet, Link } from 'react-router-dom'
import { Fragment, useContext } from 'react'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import {
  NavigationConatainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles.jsx'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationConatainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
          <span>{currentUser ? currentUser.email : ''}</span>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationConatainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
