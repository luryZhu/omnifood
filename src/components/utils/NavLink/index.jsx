import { Link, animateScroll as scroll } from 'react-scroll'

const NavLink = (props) => {
    return (
        // <a className='main-nav-link' href="#how">How it works</a>
        props.to !== "#"
            ?
            (<Link
                activeClass="active"
                className={props.className}
                to={props.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-40}
                onClick={props.onClick}>
                {props.children}
            </Link>)
            :
            <a className={props.className}
                onClick={() => scroll.scrollToTop({ duration: 500 })}>
                {props.children}
            </a>
    )

}

export default NavLink