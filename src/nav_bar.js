import './index.css'
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
      <li>Home</li>
      <li>About Me</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </section>
    )
}
export default NavBar;