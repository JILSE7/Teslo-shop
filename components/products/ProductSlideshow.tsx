import { FC, useId } from 'react';
import { Fade, Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

interface IProps {
    images: string[];
}

const slideImages = [
    {
      url: 'images/slide_2.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'images/slide_3.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'images/slide_4.jpg',
      caption: 'Slide 3'
    },
  ];
export const ProductSlideshow:FC<IProps> = ({ images = [] }) => {
  const reactId = useId();
  
  return (
    <div className="slide-container">
        <Fade
         easing='ease'
         duration={7000}
         indicators
        >
         {images.map((slideImage, index)=> {
            const urlImage = `/products/${slideImage}`;
            return (
                <div className="" key={reactId + index}>
                  <div style={{ width: '100%' }} className="image-container">
                    <img src={urlImage} style={{ width: '100%' }} />
                  </div>
                </div>
            )
         })} 
        </Fade>
      </div>
  )
}