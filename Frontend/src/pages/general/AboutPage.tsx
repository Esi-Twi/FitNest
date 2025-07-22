import * as React from 'react';


import Action from './About/Action';
import Coaches from './About/Coaches';
import Gallery from './About/Gallery';
import Hero from './About/Hero';
import Mission from './About/Mission';
import Story from './About/Story';




interface IAboutProps {
}

const About: React.FC<IAboutProps> = (props) => {
  return (
    <>
      <Hero />
      <Story />
      <Coaches />
      <Action />
      <Mission />
      <Gallery />
    </>
  );
};

export default About;
