import './style.less'
import Logo from '../../assets/images/omnifood-logo.png'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  function onClickHandle() {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <header className={isNavOpen ? 'header nav-open' : 'header'}>
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

      <button className='btn-mobile-nav' onClick={onClickHandle}>
        <i className='icon-mobile-nav iconfont icon-menu'
          name="btn-menu"></i>
        <i className='icon-mobile-nav iconfont icon-close'
          name="btn-close"></i>
      </button>


    </header>
  )
}

export default Header