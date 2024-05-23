import Heading from '@/components/composite/Heading';
import Text from '@/components/composite/Text';
import Image from "next/image"
import { Input } from '@/components/ui/input';
import { IoSendSharp } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

export default function Newsletter() {
    return(
        <div className='container'>
            <div className='border-t border-offwhite-700 pt-4 mt-10'>
                <div className='bg-yellow-20 shadow-2xl rounded-xl py-10 px-5 lg:px-20 m-5 xl:m-10 relative '>
                    <div className='relative xl:h-109 xl:w-240 mx-auto'>
                        <Image src="/images/newsletterBg.svg" alt="Newsletter" fill={true}></Image>
                    </div>
                    <div className='xl:absolute z-10 top-35 left-105 right-65 '>
                        <Heading level={3} className='text-black-250 font-rubik lg:text-4xl font-bold xl:w-82 leading-9.5 mb-3'>Join the Kofuku family ! </Heading>
                        <Text className='text-black lg:text-base'>
                            Hey fam! Want to read our informative blogs and watch our exciting videos?
                        </Text>
                        <div className='mt-4 flex flex-col gap-3'>
                            <label className='font-rubik font-medium text-base '>
                                Subscribe to our Newsletter
                            </label>
                            <div className='relative'>
                                <Input placeholder='Your email address' className='pr-14'></Input>
                                <Button className='absolute p-0 flex items-center justify-center top-1.5 right-1.5 bottom-1.5 !bg-primary h-7 w-9 rounded'>
                                    <IoSendSharp size="20" className='text-white' />
                                </Button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

        </div>
    );
}


