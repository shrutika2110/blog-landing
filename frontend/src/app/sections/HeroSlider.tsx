import Heading from '@/components/composite/Heading';
import Carousel from '@/components/utility/Carousel';
import Link from 'next/link';
import Image from "next/image";


function BlogHeroSliderDetails(BlogSliders: any) {
  const sliderList = BlogSliders.blogsData;

  let filteredBlogs = sliderList.slice(0, 5);

  return filteredBlogs && filteredBlogs.map((data: any) => {
    return (
      <div className="relative" key={data.id}>
        <Link href="/">
          <div className="relative h-120 max-h-120  min-h-120 w-full  after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black-grad">
            <Image
              src={
                data?.attributes?.coverImg?.data?.attributes?.url
              }
              alt={data.attributes?.Title}
              fill={true}
              objectFit="cover"
            />
          </div>

          <div className="absolute bottom-12 left-0 text-center w-full">
            <Heading level={2} className="text-white font-bold text-4.5xl">
            {data.attributes?.Title}
            </Heading>
          </div>
        </Link>
      </div>
    );
  });
}

export default function HeroSlider(blogsData:any) {
  if (blogsData) {
    return (
      <div className="mb-14 ">
        <div className="pb-4" id="slider-card">
          <Carousel
            slidesToShow={1}
            slidesToScroll={1}
            arrow={true}
            dots={true}
            mdSlidesToShow={1}
            smSlidesToShow={1}
            autoplay={true}
            infinite={true}
            autoplaySpeed={2000}
          >
            {BlogHeroSliderDetails(blogsData)}
          </Carousel>
        </div>
      </div>
    );
  } else {
    return null;
  }
}


