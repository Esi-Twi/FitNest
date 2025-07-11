import * as React from 'react';


import Action from '../../components/About/Action';
import Coaches from '../../components/About/Coaches';
import Gallery from '../../components/About/Gallery';
import Hero from '../../components/About/Hero';
import Mission from '../../components/About/Mission';
import Story from '../../components/About/Story';




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
