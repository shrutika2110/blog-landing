import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import Breadcrumb from "@/components/utility/breadcrumb";
import VideoIframe from "@/components/utility/videoIframe";
import Image from "next/image";

interface Props {
    singleBlogData?: any;
    videosData ?: any;
}

export default function HeroSection({singleBlogData, videosData}:Props) {
    const blogDetails = singleBlogData[0]?.attributes;
    const video = videosData[0];
    const crumbs = [{ title: 'Home', path: '/' }, { title: 'Videos', path: '/videos' }, { title: 'Hypertension - causes, complications and cure'}];


    return (
        <>
            <div className='container'>
                <Breadcrumb crumbs={crumbs} />
            </div>
            <div className="my-10 bg-black-200 pt-0.5">
                <div className='container'>
                    <div className="h-120 w-full relative ">
                        <VideoIframe videoId={video?.attributes?.Link} size="md" coverImg={video?.attributes?.CoverImg?.data?.attributes?.url} />
                    </div>
                </div>
            </div>
            <div className='container'>

            <div className="mt-5 mb-14">
               <Heading level={1} className="lg:leading-12.5 font-extrabold text-black-200 xl:max-w-10/12 mb-4">
                    {/* {blogDetails?.Title} */}
                    Hypertension - causes, complications and cure
Share your thoughts
               </Heading>
               <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
                    <Text variant="light" className="mt-3 text-black-200 line-clamp-2 max-w-181" size="md">
                    {/* {blogDetails?.shortDes} */}
                    Unvaccinated seniors are at increased risks of falling sick or dying due to unvaccinated seniors die annually. Many adults hesitate from taking vaccines 
                    </Text>
               </div>
            </div>
            </div>
          
           
        </>
    );
};
