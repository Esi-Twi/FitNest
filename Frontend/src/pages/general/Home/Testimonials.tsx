import * as React from 'react';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ITestimonialsProps {
}

//name, stars, class, quote, pic
const Testimonials: React.FunctionComponent<ITestimonialsProps> = () => {
  const testimonials = [
    {
      img: '../../assets/images/user-5.png',
      name: "Sarah K.",
      stars: 5,
      class: "Strength Training",
      testimonial:
        "I’ve gained so much strength and confidence since joining PulseFit. The trainers push you but also keep it fun. Highly recommended!",
    },
    {
      img: '../../assets/images/user-5.png',
      name: "Emmanuel A.",
      stars: 4,
      class: "HIIT Blast",
      testimonial:
        "In just 8 weeks of HIIT, I dropped 10kg and feel more energetic than ever. The workouts are tough but totally worth it!",
    },
    {
      img: '../../assets/images/user-5.png',
      name: "Adwoa T.",
      stars: 5,
      class: "Yoga & Flexibility",
      testimonial:
        "The yoga sessions here are amazing. I sleep better, feel calmer, and my flexibility has improved a lot.",
    },
    {
      img: '../../assets/images/user-5.png',
      name: "Kojo B.",
      stars: 4,
      class: "Boxing Basics",
      testimonial:
        "The boxing classes are intense but fun. I’ve learned proper techniques and my stamina has improved drastically.",
    },
    {
      img: '../../assets/images/user-5.png',
      name: "Linda A.",
      stars: 5,
      class: "Personal Training (Weight Loss)",
      testimonial:
        "I’ve lost 15kg in 3 months thanks to personalized coaching. The team genuinely cares about your progress.",
    },
  ];



  return (
    <div className='testimonials'>
      <h1>WHAT OUR MEMBERS SAY</h1>


      {/* carousel */}
      <div className='mt-[5vh] carousel'>
        <Carousel className="w-full">
          <CarouselContent className=''>
            {testimonials.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className='bg-transparent border-none shadow-none'>
                    <CardContent className="flex aspect-square items-center justify-center p-6 ">
                      <div>
                        <img src={item.img}/>

                        <div>
                          <h2>{item.name}</h2>
                          <p>Stars: {item.stars}</p>
                          <h3>{item.class}</h3>
                          <p>{item.testimonial}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </div>
  );;
};

export default Testimonials;
