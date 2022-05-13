import './style.less'
import Logo from '../../assets/images/omnifood-logo.png'
import NavLink from '../utils/NavLink'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        {/* logo */}
        <div className="logo-col">
          <NavLink to="#" className='footer-logo'>
            <img className='logo' src={Logo} alt="omnifood logo" />
          </NavLink>
          <ul className='social-links'>
            <li><a className='social-link' href="/#">
              <i className='social-icon iconfont icon-weibo'></i>
            </a></li>
            <li><a className='social-link' href="/#">
              <i className='social-icon iconfont icon-wechat-fill'></i>
            </a></li>
            <li><a className='social-link' href="/#">
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
            <li><a className="footer-link" href="/#">Create account</a></li>
            <li><a className="footer-link" href="/#">Sign in</a></li>
            <li><a className="footer-link" href="/#">iOS app</a></li>
            <li><a className="footer-link" href="/#">Android app</a></li>
          </ul>
        </nav>
        {/* nav ompany */}
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="/#">About Omnifood</a></li>
            <li><a className="footer-link" href="/#">For Business</a></li>
            <li><a className="footer-link" href="/#">Cooking partners</a></li>
            <li><a className="footer-link" href="/#">Careers</a></li>
          </ul>
        </nav>
        {/* nav resource */}
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="/#">Recipe directory </a></li>
            <li><a className="footer-link" href="/#">Help center</a></li>
            <li><a className="footer-link" href="/#">Privacy & terms</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer