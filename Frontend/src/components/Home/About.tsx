


const About = () => {
  return (
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
          <button>EXPLORE PROGRAMS</button>
        </div>

        <div className="ab-stats">
          <div>
            <h1>50</h1>
            <p>Certified Trainers</p>
          </div>

          <div>
            <h1>15</h1>
            <p>Years of Experience</p>
          </div>

          <div>
            <h1>30+</h1>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;