import './style.less'
import Logo from '../../assets/images/omnifood-logo.png'
import NavLink from '../utils/NavLink'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        {/* logo */}
        <div className="logo-col">
          <NavLink to="#hero" className='footer-logo'>
            <img className='logo' src={Logo} alt="omnifood logo" />
          </NavLink>
          <ul className='social-links'>
            <li><a href="#hero">
              <i className='social-icon iconfont icon-weibo'></i>
            </a></li>
            <li><a href="#hero">
              <i className='social-icon iconfont icon-wechat-fill'></i>
            </a></li>
            <li><a href="#hero">
              <i className='social-icon iconfont icon-github-fill'></i>
            </a></li>
          </ul>
          <p className="copyright">
            Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        {/* addr */}
        <div className="addr-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link"
                href="tel: 415-201-6370">415-201-6370</a><br />
              <a className="footer-link"
                href="mailto: hello@omnifood.com">hello@omnifood.com</a>
            </p>
          </address>
        </div>
        {/* nav account */}
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#hero">Create account</a></li>
            <li><a className="footer-link" href="#hero">Sign in</a></li>
            <li><a className="footer-link" href="#hero">iOS app</a></li>
            <li><a className="footer-link" href="#hero">Android app</a></li>
          </ul>
        </nav>
        {/* nav ompany */}
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#hero">About Omnifood</a></li>
            <li><a className="footer-link" href="#hero">For Business</a></li>
            <li><a className="footer-link" href="#hero">Cooking partners</a></li>
            <li><a className="footer-link" href="#hero">Careers</a></li>
          </ul>
        </nav>
        {/* nav resource */}
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#hero">Recipe directory </a></li>
            <li><a className="footer-link" href="#hero">Help center</a></li>
            <li><a className="footer-link" href="#hero">Privacy & terms</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer