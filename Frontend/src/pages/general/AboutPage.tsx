import * as React from 'react';






interface IAboutProps {
}

const About: React.FC<IAboutProps> = (props) => {
  return (
    <div>
      {/* -------------hero section------------ */}
      <div className='about-hero'>
        <div className='about-hero-info'>
          <h1>Strength, Purpose, and Real Progress</h1>
          <p>Welcome to <br /><span>FitNest</span></p>
        </div>

        <div className='about-hero-img'>
          <img src='../../../assets/images/person1.png' />
        </div>
      </div>

      {/* -------------story section------------ */}
      <div className='abpage-story'>
        <div className='abpage-story-inner'>
          {/* header */}
          <div className='abstory-header'>
            <div className='info'>
              <h1>Our Journey Toward Strength and Purpose</h1>

              <p>FitNest was born in 2020 in the heart of Accra with a simple goal — to create a space where anyone, regardless of their fitness level, could feel empowered to transform their body and life. Founded by two lifelong fitness enthusiasts, Kojo Mensah and Linda Amoako, FitNest grew from a small garage gym into a full-scale fitness facility with a tight-knit community. What started as a passion project has become a movement driven by real results, expert coaching, and unwavering support.</p>
            </div>

            <div className="ab-stats">
              <div>
                <h1 className="text-4xl">50</h1>
                <p>Certified Trainers</p>
              </div>

              <div>
                <h1 className="text-4xl">15</h1>
                <p>Years of Experience</p>
              </div>

              <div>
                <h1 className="text-4xl">30+</h1>
                <p>Awards Won</p>
              </div>
            </div>
          </div>

          {/* down content */}
          <div className='abpage-down'>
            <div>
              <p>Today, FitNest is more than a gym — it's a lifestyle hub <br /> where discipline meets community, and goals become achievements.</p>
            </div>

            <img src='../../assets/images/woman2.png' />
          </div>
        </div>
      </div>


      {/* -------------coaches section------------ */}
      coaches
      {/* -------------action section------------ */}
      action
      {/* -------------mission section------------ */}
      mission
      {/* -------------gallery section------------ */}
      gallery

    </div>
  );
};

export default About;
