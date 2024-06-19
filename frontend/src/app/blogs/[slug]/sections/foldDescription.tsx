import Heading from "@/components/composite/Heading";
import MarkdownRenderer from "@/components/utility/MarkDownRenderer";
import Image from "next/image";
interface Props {
    foldDetails?: any;
    foldName?: any;
}

export default function FoldDescription({ foldDetails, foldName }: Props) {

    const foldImage = foldDetails?.coverImg?.image?.data?.attributes?.url;

    return (
        <>
            {(foldDetails?.description || foldDetails?.Title) &&
                <div className={`${foldName == "seventh" ? 'xl:columns-1' : 'xl:columns-2'} gap-4 my-5`}>
                    {foldDetails?.Title &&
                        <Heading level={3} className="mb-2">
                            {foldDetails?.Title}
                        </Heading>
                    }
                    {foldDetails?.description &&
                        <div className={`text-sm md:text-base xl:text-lg`}>
                            <MarkdownRenderer content={foldDetails?.description}>
                            </MarkdownRenderer>
                            {foldImage &&
                                <div className={`${foldName == "seventh" ? '' : 'h-80'} w-full relative my-2`}>
                                    <Image src={foldImage || '/images/poster.jpeg'} alt={foldDetails?.Title} className={`${foldName == "seventh" ? '!h-auto' : 'max-h-full'} object-cover`} fill={true} />
                                </div>
                            }
                        </div>
                    }

                </div>
            }
        </>
    );

};
