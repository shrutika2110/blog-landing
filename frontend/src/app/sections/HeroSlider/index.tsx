import Carousel from '@/components/utility/Carousel';
import SliderDetails from './sliderDetails';

export default function HeroSlider(blogsData: any) {
  if (!blogsData || blogsData.length === 0) {
    return null;
  }

const sliderList = blogsData.blogsData || [];

const filteredList = sliderList && sliderList.filter((blog: any) => blog?.attributes?.hero_slider);

const remainingList = sliderList && sliderList
  .filter((blog: any) => !blog?.attributes?.hero_slider)
  .sort((a:any, b:any) => {
    const dateA = new Date(a.attributes.publishedAt);
    const dateB = new Date(b.attributes.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

const sortedFilteredList = filteredList
  .sort((a:any, b:any) => {
    const dateA = new Date(a.attributes.publishedAt);
    const dateB = new Date(b.attributes.publishedAt);
    return dateB.getTime() - dateA.getTime();
  })
  .slice(0, 3); 

const sortedList = [...sortedFilteredList, ...remainingList.slice(0, 3 - sortedFilteredList.length)];

    return (
      <div className="min-h-140">
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
                <SliderDetails BlogSliders={sortedList} />
              </Carousel>
          </div>
        </div>
      </div>
    );
}


