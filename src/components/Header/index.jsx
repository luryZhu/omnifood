import './style.less'
import Logo from '../../assets/images/omnifood-logo.png'
import NavLink from '../utils/NavLink'
import { useCallback, useEffect, useState } from 'react'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const preventScroll = useCallback((e) => {
    e.preventDefault()
  }, [])

  function onClickHandle(e) {
    // console.log(e.target)
    setIsNavOpen(!isNavOpen)
  }

  function onCloseHandle(e) {
    // console.log(e.target)
    setIsNavOpen(false)
  }

  useEffect(() => {
    if (isNavOpen) {
      // console.log("stop scroll")
      // document.documentElement.style.overflow = 'hidden'
      document.documentElement.addEventListener(
        'touchmove',
        preventScroll,
        { passive: false }
      );  //passive 参数不能省略，用来兼容ios和android
      // document.body.classList.add('sticky')
    } else {
      // document.documentElement.style.overflow = 'visible'
      document.documentElement.removeEventListener(
        'touchmove',
        preventScroll,
        { passive: false }
      );
      // document.body.classList.remove('sticky')
    }
  }, [isNavOpen, preventScroll])

  return (
    <header className={'header ' + (isNavOpen ? 'nav-open ' : '')}>
      <NavLink to="#">
        <img className='logo' src={Logo} alt="omnifood logo" />
      </NavLink>
      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li><NavLink className='main-nav-link' to="how" onClick={onCloseHandle}>How it works</NavLink></li>
          <li><NavLink className='main-nav-link' to="meals" onClick={onCloseHandle}>Meals</NavLink></li>
          <li><NavLink className='main-nav-link' to="testimonials" onClick={onCloseHandle}>Testimonials</NavLink></li>
          <li><NavLink className='main-nav-link' to="pricing" onClick={onCloseHandle}>Pricing</NavLink></li>
          <li><NavLink className='main-nav-link nav-cta' to="cta" onClick={onCloseHandle}>Try for free</NavLink></li>
        </ul>
      </nav>

      <button className='btn-mobile-nav' aria-label='open navigation' onClick={onClickHandle}>
        <i className='icon-mobile-nav iconfont icon-menu'
          name="btn-menu"></i>
        <i className='icon-mobile-nav iconfont icon-close'
          name="btn-close"></i>
      </button>


    </header>
  )
}

export default Header