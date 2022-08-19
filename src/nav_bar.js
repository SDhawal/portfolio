import './index.css'
function NavBar(){
    return(
        <section className='top-nav'>
    <div>
      Logo Here
    </div>
    <input id='menu-toggle' type="checkbox" />
    <label className='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul className='menu'>
      <li>Home</li>
      <li>Projects</li>
      <li>About Me</li>
      <li>Contact</li>
    </ul>
  </section>
    )
}
export default NavBar;