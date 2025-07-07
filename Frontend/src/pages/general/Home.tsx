

import Hero from "../../components/Home/Hero";
import About from "../../components/Home/About";
import ChooseUs from "../../components/Home/ChooseUs";
import ClassOverview from "../../components/Home/ClassOverview";
import HeroGallery from "../../components/Home/HeroGallery";
import Testimonials from "../../components/Home/Testimonials";



const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ClassOverview />
      <ChooseUs />
      <HeroGallery />
      <Testimonials />
    </>
  );
};

export default Home;