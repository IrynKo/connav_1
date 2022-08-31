import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/image/logo.svg"
import Button from "../Button/Button"
import HeaderStyled from "./HeadeStyled"

const Header = () => {
    return (
        <HeaderStyled >
        <div className="container">
        <div className="nav">
        <NavLink className="logo" to='/'>
        <img src={logo}/>
         </NavLink>
         <nav className="nav-menu">
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/posts'>Posts </NavLink>
         </nav>
        
             <Link className="contact-btn" to='/contact'>Contact us</Link>
       
        </div>
        </div>
        </HeaderStyled>
    )
}
export default Header