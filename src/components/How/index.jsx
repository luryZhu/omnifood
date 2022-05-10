import './style.less'
import Screen1 from '../../assets/images/app/app-screen-1.png'
import Screen2 from '../../assets/images/app/app-screen-2.png'
import Screen3 from '../../assets/images/app/app-screen-3.png'
import Heading from '../utils/Heading'

const How = () => {
  return (
    <section className='section-how' id='how'>
      <Heading sub="How it works" main="Your daily dose of health in 3 simple steps"></Heading>
      <div className="grid-container2">
        {/* Step 1 */}
        <div className='step-text-box'>
          <p className='step-number'>01</p>
          <h3 className='heading-tertiary'>Tell us what you like (and what not)</h3>
          <p className='step-description'>Never again waste time thinking about what to eat! Omnifood AI
            will create a 100% personalized weekly meal plan just for you. It
            makes sure you get all the nutrients and vitamins you need, no
            matter what diet you follow!</p>
        </div>
        <div className="step-img-box">
          <img className='step-img' src={Screen1} alt="screen1" />
        </div>

        {/* Step 2 */}
        <div className="step-img-box">
          <img className='step-img' src={Screen2} alt="screen2" />
        </div>
        <div className='step-text-box'>
          <p className='step-number'>02</p>
          <h3 className='heading-tertiary'>Approve your weekly meal plan</h3>
          <p className='step-description'>Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add
            your own recipes.</p>
        </div>


        {/* Step 3 */}
        <div className='step-text-box'>
          <p className='step-number'>03</p>
          <h3 className='heading-tertiary'>Receive meals at convenient time</h3>
          <p className='step-description'>Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!</p>
        </div>
        <div className="step-img-box">
          <img className='step-img' src={Screen3} alt="screen3" />
        </div>
      </div>
    </section>
  )
}

export default How