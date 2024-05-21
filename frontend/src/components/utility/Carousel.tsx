import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  const prevArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const prevArrowElement = document.querySelector('.slick-prev');
      if (prevArrowElement) {
        prevArrowElement.classList.add('slick-disable');
      }
    }, 0);
  }, []);

  return (
    <div onClick={onClick} className={`${className}`} ref={prevArrowRef}>
      <FaAngleLeft />
    </div>
  );
}
function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  const nextArrowRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    setIsDisabled(true);
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isDisabled) {
        const prevArrowElement = document.querySelector('.slick-prev');
        if (prevArrowElement) {
          prevArrowElement.classList.remove('slick-disable');
        }
      }
    }, 0);
  }, [isDisabled]);

  return (
    <div onClick={handleClick} className={`${className}`} ref={nextArrowRef}>
      <FaAngleRight />
    </div>
  );
}

function Carousel({
  children,
  slidesToShow,
  slidesToScroll,
  initialSlide,
  smSlidesToShow,
  mdSlidesToShow,
  arrow,
  dots,
  fade,
  autoplay,
  infinite,
}: any) {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: dots ? dots : false,
    fade: false,
    infinite: infinite ? infinite : false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    arrows: arrow ? arrow : true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
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
          arrows: arrow ? arrow : true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: smSlidesToShow,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: infinite ? infinite : false,
          arrows: arrow ? arrow : true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: smSlidesToShow,
          slidesToScroll: 1,
          infinite: infinite ? infinite : false,
          arrows: arrow ? arrow : true,
          fade: fade ? false : true,
        },
      },
    ],
  };

  return (
    <div >
      <style jsx global>{`
        .slick-slide {
          margin: 0 10px;
        }
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
      <div >
        <Slider swipe {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
}
export default Carousel;
