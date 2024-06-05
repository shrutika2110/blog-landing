import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import Breadcrumb from "@/components/utility/breadcrumb";
import VideoIframe from "@/components/utility/videoIframe";

interface Props {
    singleVideoData?: any;
}

export default function HeroSection({singleVideoData}:Props) {
    const videoDetails = singleVideoData[0]?.attributes;
    const crumbs = [{ title: 'Home', path: '/' }, { title: 'Videos', path: '/videos' }, { title: videoDetails?.Title}];


    return (
        <>
            <div className='container'>
                <Breadcrumb crumbs={crumbs} />
            </div>
            <div className="my-10 bg-black-200 pt-0.5">
                <div className='container'>
                    <div className="h-120 w-full relative ">
                        <VideoIframe videoId={videoDetails?.Link} size="md" coverImg={videoDetails?.CoverImg?.data?.attributes?.url} iconCenter />
                    </div>
                </div>
            </div>
            <div className='container'>

            <div className="mt-7 mb-12">
               <Heading level={1} className="lg:leading-12.5 font-extrabold text-black-200 xl:max-w-10/12 ">
                    {videoDetails?.Title}
               </Heading>
               {videoDetails?.Description && <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10 mt-4">
                    <Text variant="light" className="mt-3 text-black-200 line-clamp-2 max-w-181" size="md">
                    {videoDetails?.Description}
                    </Text>
               </div>
                }
            </div>
            </div>
          
           
        </>
    );
};
