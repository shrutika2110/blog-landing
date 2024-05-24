import Carousel from '@/components/utility/Carousel';
import SliderDetails from './sliderDetails';

export default function HeroSlider(blogsData: any) {
  if (blogsData) {
    return (
      <div className="mb-14 ">
        <div className="pb-4 hero-slider" >
          <Carousel
            slidesToShow={1}
            slidesToScroll={1}
            arrows={true}
            dots={true}
            mdSlidesToShow={1}
            smSlidesToShow={1}
            autoplay={true}
            infinite={true}
            autoplaySpeed={2000}
          >
            <SliderDetails BlogSliders={blogsData} />
          </Carousel>
        </div>
      </div>
    );
  } else {
    return null;
  }
}


