import * as React from 'react';
import Carousel from '../../components/main/FacilityCarousel'


function Facilities() {
 const slides = [
    { image: "../../assets/images/user-1.png", title: "Back Workout" },
    { image: "../../assets/images/person1.png", title: "Cardio" },
    { image: "../../assets/images/woman2.png", title: "Strength Training" },
  ];

  return (
    <div>
      {/* --------hero--------- */}
      <div className='px-[5%] pt-[18vh] text-center'>
        <p className='bg-primary rounded-md text-center px-9 text-lg py-1 inline-block'>Our Facilities</p>
        <h1 className='text-6xl my-9 text-emerald'>Unleash Your Fitness Potential  with <br/> Our Gym Facilities</h1>
                
        <div className='flex items-center justify-center'>
          <img className='w-[90%] rounded-md' src='../../assets/images/power-lift.jpg'/>
        </div>
      </div>



      <Carousel slides={slides} />
    </div>
  );
};

export default Facilities;
