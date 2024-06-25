import Heading from "@/components/composite/Heading";
import Text from "@/components/composite/Text";
import ShareIcons from "@/components/utility/shareIcons";
import { getStrapiMedia } from "@/lib/helpers";
import Image from "next/image";

interface Props {
    singleBlogData?: any;
}

export default function HeroSection({ singleBlogData }: Props) {
    const blogDetails = singleBlogData[0]?.attributes;
    const authorNameTxt =
        singleBlogData[0]?.attributes?.blog_authors?.data[0]?.attributes?.name;
    const authorNameImg =
        singleBlogData[0]?.attributes?.blog_authors?.data[0]?.attributes?.image?.data
            ?.attributes?.url;


    return (
        <>
            <div className="border-l-10 border-primary pl-8 mt-5 mb-10">
                <Heading level={1} className="text-skyBlue-400 text-4xl lg:text-5.5xl   lg:leading-14.5 lg:max-w-10/12">
                    {blogDetails?.Title}
                </Heading>
                <div className="flex flex-col lg:flex-row justify-between lg:items-baseline gap-10">
                    <Text variant="light" size="lg" className="mt-3   text-xl lg:text-3xl text-black-300 leading-8.75 break-words max-w-screen-md xl:max-w-screen-lg text-wrap">
                        {blogDetails?.shortDes}
                    </Text>
                    <div className="flex gap-10 text-primary items-center justify-end">
                        <ShareIcons blogDetails={blogDetails} />
                    </div>
                </div>

                {authorNameTxt && (
                    <div className="flex items-center mt-5">
                        <div className="relative h-20 w-20 mr-2 rounded-full overflow-hidden">
                            {authorNameImg ?
                                <Image src={authorNameImg} alt={authorNameTxt} className="object-cover" fill={true} />
                                :
                                <Image src={'/images/profileDefault.svg'} alt={authorNameTxt} className="object-cover" fill={true} />
                            }
                        </div>
                        <div className="ml-2 flex gap-1">
                            <Text className="italic text-offwhite-600" >
                                By
                            </Text>
                            <Text className="text-primary italic"  >
                                {authorNameTxt}
                            </Text>
                        </div>
                    </div>
                )}

            </div>
            <div className="h-120 w-full relative mb-10">
                <Image src={blogDetails?.coverImg?.data?.attributes?.url || '/images/poster.jpeg'} alt={blogDetails?.Title} className="object-cover" fill={true} />
            </div>

        </>
    );
};
