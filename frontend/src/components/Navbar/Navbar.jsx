import { Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "D:/Source/eShop/frontend/src/assets/navbar-logo.png"
import searchIcon from "D:/Source/eShop/frontend/src/assets/search-icon.png"
import userIcon from "D:/Source/eShop/frontend/src/assets/user-icon.png"
import cartIcon from "D:/Source/eShop/frontend/src/assets/cart-icon.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
        <Link to="/"><img src={Logo} alt="Logo" className="logo" /></Link>
        </div>
      </div>

      <div className="navbar-center">
        <Link to="/artwork">Artwork</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="navbar-right">
        <input type="text" className="search-input" placeholder="" />
        <img src={searchIcon} alt="Search" className="icon" />
        <img src={userIcon} alt="User" className="icon" />
        <img src={cartIcon} alt="Cart" className="icon" />
      </div>
    </nav>
  )
}

export default Navbar
