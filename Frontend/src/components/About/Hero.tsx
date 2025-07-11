import * as React from 'react';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className='about-hero'>
        <div className='about-hero-info'>
            <h1>Strength, Purpose, and Real Progress</h1>
            <p>Welcome to <br/><span>FitNest</span></p>
        </div>

        <div className='about-hero-img'>
            <img src='../../../assets/images/person1.png'/>
        </div>
    </div>
  );
};

export default Hero;
