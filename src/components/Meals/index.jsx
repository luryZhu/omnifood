import './style.less'
import Meal1 from '../../assets/images/meals/meal-1.jpg'
import Meal2 from '../../assets/images/meals/meal-2.jpg'
import Heading from '../utils/Heading'

const Meals = () => {
  return (
    <section className='section-meals' id='meals'>
      <Heading sub="Meals" main="Omnifood AI chooses from 5,000+ recipes"></Heading>
      <div className="grid-container3">
        {/* meal 1 */}
        <div className="meal">
          <img src={Meal1} className="meal-img" width={700} height={467} alt="Japanese Gyozas" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag-vegetarian">Vegetarian</span>
            </div>
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className='meal-attribute'>
                <i className="iconfont icon-hot meal-icon" />
                <span><strong>650</strong> calories</span>
              </li>
              <li className='meal-attribute'>
                <i className="iconfont icon-Food meal-icon" />
                <span>NutriScore &reg; <strong>74</strong></span>
              </li>
              <li className='meal-attribute'>
                <i className="iconfont icon-Star meal-icon" />
                <span><strong>4.9</strong> rating (537)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* meal 2 */}
        <div className="meal">
          <img src={Meal2} className="meal-img" width={700} height={467} alt="Avocado Salad" />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag-vegan">Vegan</span>
              <span className="tag-paleo">Paleo</span>
            </div>
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <i className="iconfont icon-hot meal-icon" />
                <span><strong>400</strong> calories</span>
              </li>
              <li className="meal-attribute">
                <i className="iconfont icon-Food meal-icon" />
                <span>NutriScore &reg; <strong>92</strong></span>
              </li>
              <li className="meal-attribute">
                <i className="iconfont icon-Star meal-icon" />
                <span><strong>4.8</strong> rating (441)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="diet">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className='list'>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Keto</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <i className="iconfont icon-check list-icon" />
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container all-recipes">
        <a href="#hero" className="link">See all recipes &rarr;</a>
      </div>
    </section>
  )
}

export default Meals