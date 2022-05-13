import './style.less'
import Heading from '../utils/Heading'

const Pricing = () => {
  return (
    <section className='section-pricing' id='pricing'>
      <Heading sub="Pricing" main="Eating well without breaking the bank"></Heading>
      <div className="grid-container2 margin-bottom-md">
        {/* plan 1 */}
        <div className="pricing-plan pricing-plan-starter">
          <header className='plan-header'>
            <p className="plan-name">Starter</p>
            <p className="plan-price"><span>$</span>399</p>
            <p className="plan-text">per month. That's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <i className='iconfont icon-check list-icon'></i>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <i className='iconfont icon-check list-icon'></i>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="list-item">
              <i className='iconfont icon-check list-icon'></i>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <i className='iconfont icon-close list-icon'></i>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#cta" className="btn btn-full">Start eating well</a>
          </div>
        </div>
        {/* plan 2 */}
        <div className="pricing-plan pricing-plan-complete">
          <header className='plan-header'>
            <p className="plan-name">Complete</p>
            <p className="plan-price"><span>$</span>649</p>
            <p className="plan-text">per month. That's just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <i className='iconfont icon-check list-icon'></i>
              <span>2 meal per day</span>
            </li>
            <li className="list-item">
              <i className='iconfont icon-check list-icon'></i>
              <span>Order 24/7</span>
            </li>
            <li className="list-item">
              <i className='iconfont icon-check list-icon'></i>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <i className='iconfont icon-check list-icon'></i>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#cta" className="btn btn-full">Start eating well</a>
          </div>
        </div>
      </div>

      <div className="container">
        <aside className='plan-details'>
          Prices include all applicable taxes. You can cancel at any time. Both plans include the following:
        </aside>
      </div>

      <div className="grid-container4">
        <div className="feature">
          <i className='feature-icon iconfont icon-infinity'></i>
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <i className='feature-icon iconfont icon-chicken_outlined'></i>
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <i className='feature-icon iconfont icon-leaf'></i>
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <i className='feature-icon iconfont icon-pause_circle_outlined'></i>
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing