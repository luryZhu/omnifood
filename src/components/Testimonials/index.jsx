import './style.less'
import Testimonial1 from '../../assets/images/customers/dave.jpg'
import Testimonial2 from '../../assets/images/customers/ben.jpg'
import Testimonial3 from '../../assets/images/customers/steve.jpg'
import Testimonial4 from '../../assets/images/customers/hannah.jpg'
import Gallery1 from '../../assets/images/gallery/gallery-1.jpg'
import Gallery2 from '../../assets/images/gallery/gallery-2.jpg'
import Gallery3 from '../../assets/images/gallery/gallery-3.jpg'
import Gallery4 from '../../assets/images/gallery/gallery-4.jpg'
import Gallery5 from '../../assets/images/gallery/gallery-5.jpg'
import Gallery6 from '../../assets/images/gallery/gallery-6.jpg'
import Gallery7 from '../../assets/images/gallery/gallery-7.jpg'
import Gallery8 from '../../assets/images/gallery/gallery-8.jpg'
import Gallery9 from '../../assets/images/gallery/gallery-9.jpg'
import Gallery10 from '../../assets/images/gallery/gallery-10.jpg'
import Gallery11 from '../../assets/images/gallery/gallery-11.jpg'
import Gallery12 from '../../assets/images/gallery/gallery-12.jpg'
import Heading from '../utils/Heading'

const imgGallery = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12]
const Testimonials = () => {

  return (
    <section className='section-testimonials'>
      <div className="testimonials-container">
        <Heading noPadding={true} sub="Testimonials" main="Once you try it, you can't go back"></Heading>
        <div className="testimonials">
          <figure className="testimonial">
            <img className="testimonial-img" alt="Photo of customer Dave Bryson" src={Testimonial1} />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even
              having to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img className="testimonial-img" alt="Photo of customer Ben Hadley" src={Testimonial2} />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for
              me every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <img className="testimonial-img" alt="Photo of customer Steve Miller" src={Testimonial3} />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's
              no time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <img className="testimonial-img" alt="Photo of customer Hannah Smith" src={Testimonial4} />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much
              time! Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery">
        {
          imgGallery.map((item, idx) => (
            <figure className="gallery-item" key={idx}>
              <img src={item} alt="Photo of beautifully arranged food" />
            </figure>
          ))
        }
        {/* <figure class="gallery-item">
          <img src={Gallery1} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery2} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery3} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery4} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery5} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery6} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery7} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery8} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery9} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery10} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery11} alt="Photo of beautifully
            arranged food" />
        </figure>
        <figure class="gallery-item">
          <img src={Gallery12} alt="Photo of beautifully
            arranged food" />
        </figure> */}
      </div>
    </section>
  )
}

export default Testimonials