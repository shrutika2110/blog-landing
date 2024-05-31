import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import ShareIcons from "@/components/utility/shareIcons";
import Image from "next/image";

interface Props {
    singleBlogData?: any;
}

export default function HeroSection({singleBlogData}:Props) {
    const blogDetails = singleBlogData[0]?.attributes

    return (
        <>
            <div className="border-l-10 border-primary pl-8 mt-5 mb-10">
               <Heading level={1} className="text-skyBlue-400 text-4xl lg:text-5.5xl font-inter lg:leading-14.5 lg:max-w-10/12">
                    {blogDetails?.Title}
               </Heading>
               <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-10">
                    <Text variant="light" size="lg" className="mt-3 font-inter text-xl lg:text-3xl text-black-300 leading-8.75 line-clamp-1">
                    {blogDetails?.shortDes}
                    </Text>
                    <div className="flex gap-10 text-primary ">
                        <ShareIcons blogDetails={blogDetails} />
                       
                       
                    </div>
               </div>
            </div>
            <div className="h-120 w-full relative mb-10">
                <Image src={blogDetails?.coverImg?.data?.attributes?.url} alt={blogDetails?.Title} className="object-cover" fill={true} />
            </div>
           
        </>
    );
};
