import * as React from 'react';
import { Link } from 'react-router';

interface IClassOverviewProps {
}

const ClassOverview: React.FC<IClassOverviewProps> = () => {
  return (
    <div className='class-overview'>
      <h1>Choose Your Training Path</h1>

      <div className='class-overview-inner'>
        {/* carousel item */}
        <div className='overview-carousel div1'>
          <div>
            <h3>Strength training</h3>
            <p>Build power with compound lifts and full-body focus</p>
          </div>

          <p className='class-badge'>🔥 Popular</p>
        </div>

        {/* carousel item */}
        <div className='overview-carousel div2'>
          <div>
            <h3>HIIT Blast</h3>
            <p>Quick-paced cardio designed to burn fat fast</p>
          </div>
        </div>

        {/* carousel item */}
        <div className='overview-carousel div3'>
          <div>
            <h3>Yoga & Flexibility</h3>
            <p>Stretch, relax, and improve balance with certified guidance, button popular</p>
          </div>
        </div>


        {/* carousel item */}
        <div className='overview-carousel div4'>
          <div>
            <h3>Boxing Basic</h3>
            <p>Train like a pro - build speed, footwork and confidence</p>
          </div>

          <p className='class-badge'>🔥 Popular</p>
        </div>
      </div>

      <div className='hero-button'>
        <Link to='/'>
          <p>VIEW ALL PROGRAMS</p>
          <img src="../../assets/icons/right-arrow.png" />
        </Link>
      </div>
    </div>
  );
};

export default ClassOverview;
