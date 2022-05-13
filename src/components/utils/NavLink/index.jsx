import { Link, animateScroll as scroll } from 'react-scroll'

const NavLink = (props) => {
    return (
        // <a className='main-nav-link' href="#how">How it works</a>
        props.to !== "#"
            ?
            (<Link
                // activeClass="active"
                className={props.className}
                to={props.to}
                // spy={true}
                // hashSpy={true}
                smooth={true}
                duration={500}
                offset={props.offset ? props.offset : -40}
                onClick={props.onClick}>
                {props.children}
            </Link>)
            :
            <a className={props.className}
                href="#hero"
                onClick={() => scroll.scrollToTop({ duration: 500 })}>
                {props.children}
            </a>
    )

}

export default NavLink