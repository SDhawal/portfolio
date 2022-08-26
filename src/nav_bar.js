import './index.css'
import { Link } from "react-router-dom";
function NavBar(){
    return(
        <section className='top-nav'>
    <div className='logo-container'>
      D S
    </div>
    <input id='menu-toggle' type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className='menu'>
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/about-me">About Me</Link></li>
      <li><Link to="/all-projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </section>
    )
}
export default NavBar;