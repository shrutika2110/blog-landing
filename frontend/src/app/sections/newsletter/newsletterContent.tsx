import React from 'react';
import { IoCloseOutline, IoSendSharp } from 'react-icons/io5';
import Image from "next/image";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Heading from '@/components/composite/Heading';
import Text from '@/components/composite/Text';
import Success from '@/components/utility/success';
import useMediaQuery from '@/components/utility/useMediaQuery';


interface NewsletterContentProps {
    isModalVisible?: boolean;
    handleCloseModal?: () => void;
    showSuccessMsg?: boolean;
    email?: string;
    setEmail?: any;
    inputRef?: any;
    isInputFocused?: boolean;
    handleInputFocus: () => void;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick?: () => void;
    emailError?: any;
}

const NewsletterContent: React.FC<NewsletterContentProps> = ({
    isModalVisible,
    handleCloseModal,
    showSuccessMsg,
    email,
    setEmail,
    inputRef,
    isInputFocused,
    handleInputFocus,
    handleChange,
    handleClick,
    emailError,
}) => {

   const isTab = useMediaQuery(768);
   const isMobile = useMediaQuery(400);

   console.log('isTab', isTab);
    return (
        <div className='container'>
            <div className='xl:m-10 my-14 xl:mb-16 relative'>
                {isModalVisible &&
                    <div className='absolute top-5 right-5 cursor-pointer text-offwhite-900 h-5 w-5 z-20' onClick={handleCloseModal}>
                        <IoCloseOutline size={20} />
                    </div>
                }
                {!showSuccessMsg ? (
                    <div className='bg-yellow-20 shadow-2xl rounded-xl py-10 px-5 lg:px-10 xl:px-20 relative'>
                        <div className='relative lg:h-[260px] lg:w-[636px] xl:h-109 xl:w-240 mx-auto'>
                            {isTab ?
                            <Image src="/images/newsletterTab.svg" alt="Newsletter" fill={true}></Image> :
                            <Image src="/images/newsletterBg.svg" alt="Newsletter" fill={true}></Image>
                            }
                        </div>

                        <div className='lg:absolute z-10 lg:top-[100px] lg:left-[270px] lg:right-[140px] xl:top-35 xl:left-105 xl:right-65'>
                            <Heading level={3} size="lg" variant='light' className='font-rubik xl:w-82 leading-9.5 xl:mb-3 sm:text-base lg:text-base xl:text-4xl'>Join the Kofuku family!</Heading>
                            <Text variant='light' className='lg:text-sm xl:text-base'>
                                Hey fam! Want to read our informative blogs and watch our exciting videos?
                            </Text>
                            <div className='mt-4 flex flex-col gap-1 xl:gap-3'>
                                <label className='font-rubik font-medium text-sm xl:text-base '>
                                    Subscribe to our Newsletter
                                </label>
                                <div className='relative'>
                                    <Input placeholder='Your email address' ref={inputRef} value={email} className='pr-14' onFocus={handleInputFocus} onChange={handleChange}></Input>
                                    <Button onClick={handleClick} isdisabled={emailError} className='absolute p-0 flex items-center justify-center top-1.5 right-1.5 bottom-1.5 !bg-primary h-7 w-9 rounded'>
                                        <IoSendSharp size="20" className='text-white' />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='h-129 w-full bg-white rounded-xl shadow-2xl px-5 py-20 lg:p-20'>
                        <Success
                            title="You subscribed the newsletter successfully"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsletterContent;
