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

   const isTab = useMediaQuery(1279);
   const isMobile = useMediaQuery(767);

    return (
        <div className='container'>
            <div className='xl:m-10 my-14 xl:mb-16 relative'>
                {isModalVisible &&
                    <div className='absolute top-5 right-5 cursor-pointer text-offwhite-900 h-5 w-5 z-20' onClick={handleCloseModal}>
                        <IoCloseOutline size={20} />
                    </div>
                }
                {!showSuccessMsg ? (
                    <div className='bg-yellow-20 shadow-2xl rounded-xl p-3 lg:px-10 xl:px-20 lg:py-10 relative'>
                        <div className='relative w-86 h-65 lg:h-65 lg:w-159 xl:h-109 xl:w-240 mx-auto'>
                            {isMobile? <Image src="/images/newsletterMobile.svg" alt="Newsletter" fill={true}  /> : 
                            isTab ? <Image src="/images/newsletterTab.svg" alt="Newsletter" fill={true}  /> :
                            <Image src="/images/newsletterBg.svg" alt="Newsletter" fill={true} />
                            }
                        </div>

                        <div className='absolute z-10 top-12 left-15 right-18.5 lg:top-25 lg:left-67.5 lg:right-35 xl:top-35 xl:left-105 xl:right-65'>
                            <Heading level={3} size="lg" variant='light' className='  xl:w-92 leading-9.5 xl:mb-3 sm:text-base lg:text-base xl:text-4xl text-primary xl:"text-black-250'>Join the Kofuku family!</Heading>
                            <Text variant='light' className='lg:text-sm xl:text-base'>
                                Hey fam! Want to read our informative blogs and watch our exciting videos?
                            </Text>
                            <div className='mt-2 lg:mt-4 flex flex-col gap-1 xl:gap-3'>
                                <label className='  font-medium text-sm xl:text-base '>
                                    Subscribe to our Newsletter
                                </label>
                                <div className='relative'>
                                    <Input placeholder='Your email address' ref={inputRef} value={email} className='pr-14 text-xs lg:text-base' onFocus={handleInputFocus} onChange={handleChange}></Input>
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
