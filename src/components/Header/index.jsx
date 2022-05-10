import './style.less'
import Logo from '../../assets/images/omnifood-logo.png'
import NavLink from '../utils/NavLink'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function onClickHandle() {
    setIsNavOpen(!isNavOpen)
  }

  useEffect(() => {
    if (isNavOpen) {
      console.log("stop scroll")
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'visible'
    }
  }, [isNavOpen])

  return (
    <header className={'header ' + (isNavOpen ? 'nav-open ' : '')}>
      <NavLink to="#">
        <img className='logo' src={Logo} alt="omnifood logo" />
      </NavLink>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li><NavLink className='main-nav-link' to="how" onClick={onClickHandle}>How it works</NavLink></li>
          <li><NavLink className='main-nav-link' to="meals" onClick={onClickHandle}>Meals</NavLink></li>
          <li><NavLink className='main-nav-link' to="testimonials" onClick={onClickHandle}>Testimonials</NavLink></li>
          <li><NavLink className='main-nav-link' to="pricing" onClick={onClickHandle}>Pricing</NavLink></li>
          <li><NavLink className='main-nav-link nav-cta' to="cta" onClick={onClickHandle}>Try for free</NavLink></li>
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