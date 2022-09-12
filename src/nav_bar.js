import './index.css'
import { Link } from "react-router-dom";
function NavBar(){
    return(
        <section className='top-nav'>
          <Link to="/" className='link'>
    <div className='logo-container'>
      D S
    </div></Link>
    <input id='menu-toggle' type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className='menu'>
      <li><Link to="/" className='link'>Home</Link></li>
      <li><Link to="/about-me" className='link'>About Me</Link></li>
      <li><Link to="/all-projects" className='link'>Projects</Link></li>
      <li><Link to="/contact"className='link'>Contact</Link></li>
    </ul>
  </section>
    )
}
export default NavBar;