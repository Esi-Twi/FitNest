import { Link } from "react-router-dom";
import Slider from 'react-slick'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActionCard from "../../components/main/ActionCard";


const Home = () => {
  const testimonials = [
    {
      img: '../../assets/images/woman1.jpg',
      name: "Sarah K.",
      stars: 5,
      class: "Strength Training",
      testimonial:
        "I’ve gained so much strength and confidence since joining PulseFit. The trainers push you but also keep it fun. Highly recommended!",
    },
    {
      img: '../../assets/images/user-1.png',
      name: "Emmanuel A.",
      stars: 4,
      class: "HIIT Blast",
      testimonial:
        "In just 8 weeks of HIIT, I dropped 10kg and feel more energetic than ever. The workouts are tough but totally worth it!",
    },
    {
      img: '../../assets/images/yoga1.jpg',
      name: "Adwoa T.",
      stars: 5,
      class: "Yoga & Flexibility",
      testimonial:
        "The yoga sessions here are amazing. I sleep better, feel calmer, and my flexibility has improved a lot.",
    },
    {
      img: '../../assets/images/lift.jpg',
      name: "Kojo B.",
      stars: 4,
      class: "Boxing Basics",
      testimonial:
        "The boxing classes are intense but fun. I’ve learned proper techniques and my stamina has improved drastically.",
    },
    {
      img: '../../assets/images/design26.png',
      name: "Linda A.",
      stars: 5,
      class: "Personal Training (Weight Loss)",
      testimonial:
        "I’ve lost 15kg in 3 months thanks to personalized coaching. The team genuinely cares about your progress.",
    },
  ];

  function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", borderRadius: '50%' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />
  };
  return (
    <div>
      {/* -------------hero section------------ */}
      <div className="hero">
        <video autoPlay loop playsInline muted className="hero-video">
          <source src="../../assets/videos/fitness-video.mp4" type='video/mp4' />
        </video>

        <div className="hero-content">
          <div className="hero-info">
            <h3>FITNESS STUDIO</h3>
            <h1 className="font-bold">TRAIN HARD. LIVE STRONG</h1>
            <p>Achieve your fitness goals with expert trainers and <br /> state-of-the-art equipment.</p>
          </div>

          <div className='hero-button'>
            <Link to='#'>
              <p>JOIN US</p>
              <img src="../../assets/icons/right-arrow.png" />
            </Link>
          </div>
        </div>

      </div >

      {/* -------------about section------------ */}
      <div className="about-section">
        {/* left section */}
        <div className="bg-about">
          <img src="../../assets/images/person1.png" />
        </div>

        {/* right section */}
        <div>
          <div className="ab-stars">
            <img src="../../assets/icons/star.png" />
            <img src="../../assets/icons/star.png" />
            <img src="../../assets/icons/star.png" />
            <img src="../../assets/icons/star.png" />
            <img src="../../assets/icons/star.png" />
          </div>

          <div className="ab-desc">
            <h1>More Than a Gym</h1>
            <p>We're a Community Committed to Your Strength, Health, and Confidence</p>
            <p className="ab-desc-long">FitNest is a modern, high-energy fitness center in Accra, committed to helping people of all ages and fitness levels reach their goals. Whether you're training for strength, endurance, weight loss, or flexibility we've got your back.</p>
            <Link to='#'>EXPLORE PROGRAMS</Link>
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
      </div>

      {/* -------------class overview section------------ */}
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

      {/* -------------chooose us section------------ */}
      <div className='choose-us'>
        <h1>WHY CHOOSE US</h1>

        <div className='c-outer flex gap-5'>
          <div className='c-inner'>
            <div>
              <img src='../../assets/icons/systems.png' />
            </div>

            <div>
              <h3>Modern Equipments</h3>
              <p>Top-tier machines, weights, and tools</p>
            </div>
          </div>

          <div className='c-inner'>
            <div>
              <img src='../../assets/icons/coach.png' />
            </div>

            <div>
              <h3>Certified Coaches</h3>
              <p>Train with experienced, licensed professionals</p>
            </div>
          </div>

          <div className='c-inner'>
            <div>
              <img src='../../assets/icons/availability.png' />
            </div>

            <div>
              <h3>24/7 Access</h3>
              <p>Work out when it fits your schedule</p>
            </div>
          </div>

          <div className='c-inner'>
            <div>
              <img src='../../assets/icons/coach.png' />
            </div>

            <div>
              <h3>Personalized Coaching</h3>
              <p>Plans tailored to your goals</p>
            </div>
          </div>

          <div className='c-inner'>
            <div>
              <img src='../../assets/icons/treatment.png' />
            </div>

            <div>
              <h3>Clean & Safe Environment</h3>
              <p>Daily sanitation and health checks</p>
            </div>
          </div>
        </div>
      </div>

      {/* -------------hero gallery section------------ */}
      <div className='hero-gallery'>
        <img className='v1' src='../../assets/images/skipping.jpg' />
        <img className='v2' src='../../assets/images/dumbells.jpg' />
        <img className='v3' src='../../assets/images/ropes2.jpg' />
      </div>

      <ActionCard />

      {/* -------------testimonials section------------ */}
      <div className='testimonials'>
        <h1>WHAT OUR MEMBERS SAY</h1>

        {/* carousel */}
        <div className="w-[80%]">
          <Slider {...settings}>
            {testimonials.map((testimony) => {
              return <div className="!flex items-center !mt-12 gap-12 !px-[5%]">
                <div className="w-[40%]">
                  <img className="w-[400px] h-[40vh] rounded-[8px]" src={testimony.img} alt='user image' />
                </div>

                <div className="flex-1 ">
                  <h2 className="font-cinzel text-4xl font-bold">{testimony.name}</h2>
                  <div className="ab-stars my-2">
                    <img src="../../assets/icons/star.png" />
                    <img src="../../assets/icons/star.png" />
                    <img src="../../assets/icons/star.png" />
                    <img src="../../assets/icons/star.png" />
                    <img src="../../assets/icons/star.png" />
                  </div>
                  <h4 className="color-warning mt-2 text-xl mb-4">{testimony.class}</h4>
                  <p className="text-lg">{testimony.testimonial}</p>
                </div>
              </div>

            })}
          </Slider>

        </div>
      </div>
    </div>
  );
};

export default Home;