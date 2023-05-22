import Image from 'next/image';

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

import zestpic1 from "../../assets/images/zesthrm1.png"
import zestpic2 from "../../assets/images/zesthrm2.png"
import zestpic3 from "../../assets/images/zesthrm3.png"
import Link from 'next/link';



const items = [
  {
    id: 1,
    altText: 'Slide11',
    title: 'ZestHRM',
    image: <Image src={zestpic1} className="imageSizeC"/>,
    caption:"Lorem ipsum dolor sit amet, consectetuer donec odio.",
    liktag: <Link className="linktagtext" href={"/"}>View Project</Link>
  },
  {
    id: 2,
    altText: 'Slide 2',
    title: 'Writearn',
    image: <Image src={zestpic2} className="imageSizeC"/>,
    caption:"Lorem ipsum dolor sit amet, consectetuer donec odio. ",
    liktag: <Link className="linktagtext" href={"/"}>View Project</Link>
  },
  {
    id: 3,
    altText: 'Slide 3',
    title: 'Audacious',
    image: <Image src={zestpic3} className="imageSizeC" />,
    caption:"Lorem ipsum dolor sit amet, consectetuer donec odio ",
    liktag: <Link className="linktagtext" href={"/"} >View Project</Link>
  },
];

function Carouselproject(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
         <div className='crImage'>{item.image}</div>
        <div className='crHead'>
        <div className="vl">
        <p className='carouselPsrs'>{item.title}</p>
         {item.caption} <br/>
         {item.liktag}
         </div>
         </div> 
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 95%;
              height: 600px;
              
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default  Carouselproject;