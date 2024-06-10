'use client'
import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

function SamplePrevArrow(props:any) {
  const { className, onClick } = props;
  return(
    <div onClick={onClick} className={` ${className}`}>
       <div className='text-white '>
          <GoChevronLeft /> 
       </div>
    </div>
  )
  }

function SampleNextArrow(props:any) {
  const { className, onClick } = props;
  return(
    <div onClick={onClick} className={` ${className}`} >
      <div className='text-white '>
          <GoChevronRight /> 
       </div>
    </div>
  )
}

function Carousel({
  children,
  slidesToShow,
  slidesToScroll,
  smSlidesToShow,
  mdSlidesToShow,
  arrow,
  dots,
  fade,
  autoplay,
  infinite,
  centerMode
}: any) {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: dots ? dots : false,
    fade: false,
    infinite: infinite ? infinite : false,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    arrows: arrow ? arrow : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow  />,
    touchThreshold: 10,
    draggable: true,
    afterChange: (index: number) => setActiveSlide(index),
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: mdSlidesToShow,
          slidesToScroll: slidesToScroll,
          infinite: infinite ? infinite : false,
          arrows: false,
          swipeToSlide: true,
          centerMode:centerMode ? centerMode : false,
          centerPadding: '150px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: smSlidesToShow,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: infinite ? infinite : false,
          arrows: false,
          swipeToSlide: true,
          centerMode:centerMode ? centerMode : false,
          centerPadding: '150px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: smSlidesToShow,
          slidesToScroll: 1,
          infinite: infinite ? infinite : false,
          arrows: false,
          swipeToSlide: true,
          centerMode:centerMode ? centerMode : false,
          centerPadding: '40px',
        },
      },
    ],
  };

  return (
    <div>
      <style jsx global>{`
         .slick-slide > div{
          margin: 0 10px;
      }
    
      /* the parent */
      .slick-list {
          margin: 0 -10px;
      }
        @media only screen and (max-width: 1279px) {
          .slick-slide {
            margin: 0;
          }
          .slick-list {
            margin: 0;
          }
        }

        @media only screen and (max-width: 767px) {
          .slick-slide {
            margin: 0;
          }
          .slick-list {
            margin: 0;
          }
        }
      `}</style>
      <div>
        <Slider swipe {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
}
export default Carousel;
