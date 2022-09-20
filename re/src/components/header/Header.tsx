import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/image/logo.svg"
import HeaderStyled from "./HeadeStyled"
import burger from "../../assets/image/hamburger.png"
import close from "../../assets/image/close.png"
import { useState } from "react"

export interface Props {
    isOpen: boolean
}

const Header = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleOpen=()=>{
        setOpen(!isOpen)
    }
    return (
        <HeaderStyled isOpen={isOpen} >
        <div className="container row">
        <NavLink className="logo col-2" to='/'>
        <img src={logo}/>
         </NavLink>
        <nav className="nav col-8">
         <div className="nav-menu">
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/posts'>Posts </NavLink>
        </div>
        <Link className="contact-btn" to='/contact'>Contact us</Link>
         </nav>
         <div className="col-2" onClick={handleOpen}>
       {!isOpen ? <img className="hamburger" src={burger}/> :
        <img className="hamburger" src={close}/> }
         </div>
       </div>
       <div className="hamburger-menu" onClick={handleOpen}>
        <nav className="hambergur-menu__list">
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/posts'>Posts </NavLink>
        <Link className="contact-btn" to='/contact'>Contact us</Link>
        </nav>
         </div>
        </HeaderStyled>
    )
}
export default Header