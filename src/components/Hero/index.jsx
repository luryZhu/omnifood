import './style.less'
import Customer1 from '../../assets/images/customers/customer-1.jpg'
import Customer2 from '../../assets/images/customers/customer-2.jpg'
import Customer3 from '../../assets/images/customers/customer-3.jpg'
import Customer4 from '../../assets/images/customers/customer-4.jpg'
import Customer5 from '../../assets/images/customers/customer-5.jpg'
import Customer6 from '../../assets/images/customers/customer-6.jpg'
import HeroImg from '../../assets/images/hero-min.png'
import HeroImgWebp from '../../assets/images/hero.webp'
import NavLink from '../utils/NavLink'
import { useEffect, useState } from "react";


const Hero = () => {
  const [isTop, setIsTop] = useState(true)
  // const heroRef = useRef(null);
  // const scrollObserver = useCallback(
  //   node => {
  //     new IntersectionObserver(entries => {
  //       let en = entries[0]
  //       console.log(en.isIntersecting)
  //       if (!en.isIntersecting) {
  //         // 不相交，则sticky
  //         document.body.classList.add('sticky')

  //       } else {
  //         document.body.classList.remove('sticky')
  //       }

  //     }, {
  //       root: null,
  //       threshold: 0,
  //       rootMargin: '-80px',
  //     }).observe(node);
  //   },
  //   []
  // );
  useEffect(() => {
    function scrollHandle() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      if (scrollTop === 0) {
        setIsTop(true)
      } else {
        setIsTop(false)
      }
    }
    window.addEventListener('scroll', scrollHandle)
    return () => {
      window.removeEventListener('scroll', scrollHandle)
    }

  }, [])

  useEffect(() => {
    if (isTop) {
      document.body.classList.remove('sticky')
    } else {
      document.body.classList.add('sticky')
    }
  }, [isTop])
  // useEffect(() => {
  //   if (heroRef.current) {
  //     scrollObserver(heroRef.current);
  //   }
  // }, [scrollObserver, heroRef]);

  return (
    // <section ref={heroRef} className="section-hero">
    <section className="section-hero">
      <div className="hero container">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to
            your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!
          </p>
          <NavLink to="cta" className="btn btn-full margin-right-sm">Start eating well</NavLink>
          <NavLink to="how" className="btn btn-outline">Learn more &darr;</NavLink>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={Customer1} alt="customer" />
              <img src={Customer2} alt="customer" />
              <img src={Customer3} alt="customer" />
              <img src={Customer4} alt="customer" />
              <img src={Customer5} alt="customer" />
              <img src={Customer6} alt="customer" />
            </div>
            <p className="delivered-text"><span>250,000+</span> meals delivered already</p>
          </div>
        </div>
        <div className="hero-img-box">
          {/* <img className="hero-img" src={HeroImg} alt="hero" /> */}
          <picture>
            <source srcSet={HeroImgWebp} type="image/webp" />
            <source srcSet={HeroImg} type="image/png" />
            <img className="hero-img" src={HeroImgWebp} alt="woman enjoying food" />
          </picture>
        </div>
      </div>
    </section >
  )
}

export default Hero