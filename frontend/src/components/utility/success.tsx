
import Link from 'next/link';
import Image from "next/image";
import Heading from '../composite/Heading';

interface SuccessProps {
    title ?: string;
}

export default function Success({title}:SuccessProps) {
    
    return (
        <div className='h-full w-full flex flex-col gap-20 items-center text-center justify-center'>
            <Link href="src">
                <div className="relative w-32 h-20 lg:h-24 lg:w-44 ">
                    <Image src="/images/social.svg" alt="Kofuku" fill={true} />
                </div>
            </Link>
            <Heading level={3} variant='light' >
                {title}
            </Heading>
        </div>
    );
}


