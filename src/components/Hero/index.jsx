import './style.less'
import Customer1 from '../../assets/images/customers/customer-1.jpg'
import Customer2 from '../../assets/images/customers/customer-2.jpg'
import Customer3 from '../../assets/images/customers/customer-3.jpg'
import Customer4 from '../../assets/images/customers/customer-4.jpg'
import Customer5 from '../../assets/images/customers/customer-5.jpg'
import Customer6 from '../../assets/images/customers/customer-6.jpg'
import HeroImg from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to
            your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!
          </p>
          <a href="#" className="btn btn-full margin-right-sm">Start eating well</a>
          <a href="#" className="btn btn-outline">Learn more &darr;</a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={Customer1} alt="image of customer" />
              <img src={Customer2} alt="image of customer" />
              <img src={Customer3} alt="image of customer" />
              <img src={Customer4} alt="image of customer" />
              <img src={Customer5} alt="image of customer" />
              <img src={Customer6} alt="image of customer" />
            </div>
            <p className="delivered-text"><span>250,000+</span> meals delivered already</p>
          </div>
        </div>
        <div className="hero-img-box">
          <img className="hero-img" src={HeroImg} alt="hero" />
        </div>
      </div>
    </section >
  )
}

export default Hero