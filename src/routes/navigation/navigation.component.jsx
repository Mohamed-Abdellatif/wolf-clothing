import { useContext } from "react";
import {  Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase,utils";
import {NavigationContainer, NavLinkContainer,NavLinksContainer,LogoContainer} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className="logo" />
          WOLF
        </LogoContainer>

        <NavLinksContainer>
          <NavLinkContainer  to="/shop">
            SHOP
          </NavLinkContainer>
          {currentUser ? (
            <NavLinkContainer as='span' onClick={signOutUser}>SIGN OUT</NavLinkContainer>
          ) : (
            <NavLinkContainer  to="/auth">
              SIGN IN
            </NavLinkContainer>
          )}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
