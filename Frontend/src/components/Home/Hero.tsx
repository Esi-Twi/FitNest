import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop playsInline muted className="hero-video">
        <source src="../../assets/videos/fitness-video.mp4" type='video/mp4' />
      </video>

      <div className="hero-content">
        <div className="hero-info">
          <h3>FITNESS STUDIO</h3>
          <h1>TRAIN HARD. LIVE STRONG</h1>
          <p>Achieve your fitness goals with expert trainers and <br /> state-of-the-art equipment.</p>
        </div>

        <Link to="#">
          <p>JOIN US</p>
          <div>
            <img src="../../assets/icons/right-arrow.png" />
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Hero;