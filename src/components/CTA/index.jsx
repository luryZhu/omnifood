import './style.less'

const CTA = () => {
  return (
    <section className='section-cta' id="cta">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-text-box">
            <div className="heading-secondary">
              Get your first meal for free!
            </div>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the
              first meal is on us!
            </p>

            <form action="#" className='cta-form'>
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input id="full-name" type="text" placeholder='Lury Zhu' required />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder='luryZhu@outlook.com' required />
              </div>
              <div>
                <label htmlFor="select-where">Where did you hear us from?</label>
                <select id="select-where">
                  <option value="">Please choose 1 option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">Youtube vedio</option>
                  <option value="facebook">Facebook add</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className='btn btn-form'>Sign up now</button>

            </form>
          </div>
          <div className="cta-img-box" role="img" aria-label="Woman enjoying food"></div>
        </div>
      </div>
    </section >
  )
}

export default CTA