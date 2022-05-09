import './style.less'
import Logo from '../../assets/images/omnifood-logo.png'

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={Logo} alt="omnifood logo" />
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li><a className='main-nav-link' href="#">How it works</a></li>
          <li><a className='main-nav-link' href="#">Meals</a></li>
          <li><a className='main-nav-link' href="#">Testimonials</a></li>
          <li><a className='main-nav-link' href="#">Pricing</a></li>
          <li><a className='main-nav-link nav-cta' href="#">Try for free</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header