import Heading from '@/components/composite/Heading';
import Link from 'next/link';
import Image from "next/image";

interface SliderProps {
    BlogSliders?: any;
}

export default function SliderDetails({ BlogSliders }: SliderProps) {

    return (
        <>
            {BlogSliders && BlogSliders.map((data: any) => (
                <div className="relative" key={data.id}>
                    <Link href={'/blogs/' + data?.attributes?.slug}>
                        <div className="relative h-120 max-h-120 min-h-120 w-full after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black-grad">
                            <Image
                                src={data?.attributes?.coverImg?.data?.attributes?.url || '/images/poster.jpeg'}
                                alt={data.attributes?.Title || 'Blog Image'}
                                fill={true}
                                className='object-cover'
                            />
                        </div>

                        <div className="absolute bottom-12 xl:right-5 xl:left-5 right-1 left-1 text-center ">
                            <Heading level={2} variant='dark' className="text-4.5xl">
                                {data.attributes?.Title}
                            </Heading>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}

