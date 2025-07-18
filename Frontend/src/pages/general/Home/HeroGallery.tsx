import * as React from 'react';

interface IHeroGalleryProps {
}

const HeroGallery: React.FunctionComponent<IHeroGalleryProps> = () => {
  return (
    <div className='hero-gallery'>
      <img className='v1' src='../../assets/images/skipping.jpg' />
      <img className='v2' src='../../assets/images/dumbells.jpg' />
      <img className='v3' src='../../assets/images/ropes2.jpg' />
    </div>
  );;
};

export default HeroGallery;
