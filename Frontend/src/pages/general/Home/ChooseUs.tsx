import * as React from 'react';

interface IChooseUsProps {
}

const ChooseUs: React.FunctionComponent<IChooseUsProps> = () => {
  return (
   <div className='choose-us'>
      <h1>WHY CHOOSE US</h1>

      <div className='c-outer flex gap-8'>
        <div className='c-inner'>
          <div>
            <img src='../../assets/icons/systems.png'/>
          </div>

          <div>
            <h3>Modern Equipments</h3>
            <p>Top-tier machines, weights, and tools</p>
          </div>
        </div>

         <div className='c-inner'>
          <div>
            <img src='../../assets/icons/coach.png'/>
          </div>

          <div>
            <h3>Certified Coaches</h3>
            <p>Train with experienced, licensed professionals</p>
          </div>
        </div>

         <div className='c-inner'>
          <div>
            <img src='../../assets/icons/availability.png'/>
          </div>

          <div>
            <h3>24/7 Access</h3>
            <p>Work out when it fits your schedule</p>
          </div>
        </div>

         <div className='c-inner'>
          <div>
            <img src='../../assets/icons/coach.png'/>
          </div>

          <div>
            <h3>Personalized Coaching</h3>
            <p>Plans tailored to your goals</p>
          </div>
        </div>

         <div className='c-inner'>
          <div>
            <img src='../../assets/icons/treatment.png'/>
          </div>

          <div>
            <h3>Clean & Safe Environment</h3>
            <p>Daily sanitation and health checks</p>
          </div>
        </div>
      </div>
   </div>
  );;
};

export default ChooseUs;
