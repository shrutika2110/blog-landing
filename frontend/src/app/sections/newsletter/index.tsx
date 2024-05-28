'use client'

import React, { useEffect, useRef, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';
// import NewsletterContent from './newsletterContent';
// import NewsletterModal from './newsletterModal';
import { IoCloseOutline, IoSendSharp } from 'react-icons/io5';
import Image from "next/image";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Heading from '@/components/composite/Heading';
import Text from '@/components/composite/Text';
import Success from '@/components/utility/success';
import { emitErrorNotification } from '@/lib/helpers';
import { validateForm } from '@/components/utility/verifyAuthForm';
import Modal from '@/components/utility/modal';


export default function Newsletter() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSuccess, setEmsilSuccess] = useState(false);
    const [emailError, setEmailError] = useState<any>('');
    const inputRef = useRef<any>(null);
    
    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const isSubscribedCookie = getCookie('isSubscribed');
        if (isSubscribedCookie === 'true') {
            setIsModalVisible(false);
        } else {
            setIsModalVisible(true);
        }
    }, []);

    useEffect(() => {
        if (!isInputFocused && isModalVisible) {
            const timer = setTimeout(() => {
                setIsModalVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [isInputFocused, isModalVisible]);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleChange =  (e: any) => {
        setEmail(e.target.value);
        setEmailError(validateForm.email(e.target.value));
      };

    const handleClick = async () => {
        setCookie('isSubscribed', 'true');
        setShowSuccessMsg(true);

        setTimeout(() => {
            setIsModalVisible(false);
            setShowSuccessMsg(false);
        }, 3000);


        const obj = {
            data: {
              // eslint-disable-next-line camelcase
              subscription_email: email,
            },
          };
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/subscriptions`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
              },
            );
      
            if (response.ok) {
              await response.json();
              setEmsilSuccess(true);
              setEmail('');
            } else {
              emitErrorNotification(
                'Something went wrong please try again after sometime',
              );
            }
          } catch (error) {
            emitErrorNotification(
              'Something went wrong please try again after sometime',
            );
          }

    };

    return (
        <>
            {isModalVisible && (
                <Modal>
                    <div className='container '>
                        <div className='xl:m-10 relative'>
                            {isModalVisible &&
                                <div className='absolute top-5 right-5 cursor-pointer text-offwhite-900 h-5 w-5 z-20' onClick={handleCloseModal}>
                                    <IoCloseOutline size={20} />
                                </div>
                            }
                            {!showSuccessMsg ? (
                                <div className='bg-yellow-20 shadow-2xl rounded-xl py-10 px-5 lg:px-20 relative '>
                                    <div className='relative xl:h-109 xl:w-240 mx-auto'>
                                        <Image src="/images/newsletterBg.svg" alt="Newsletter" fill={true}></Image>
                                    </div>

                                    <div className='xl:absolute z-10 top-35 left-105 right-65 '>
                                        <Heading level={3} className='text-black-250 font-rubik lg:text-4xl font-bold xl:w-82 leading-9.5 mb-3'>Join the Kofuku family!</Heading>
                                        <Text className='text-black lg:text-base'>
                                            Hey fam! Want to read our informative blogs and watch our exciting videos?
                                        </Text>
                                        <div className='mt-4 flex flex-col gap-3'>
                                            <label className='font-rubik font-medium text-base '>
                                                Subscribe to our Newsletter
                                            </label>
                                            <div className='relative'>
                                                <Input placeholder='Your email address' ref={inputRef} value={email} className='pr-14' onFocus={handleInputFocus} onChange={handleChange}></Input>
                                                <Button onClick={handleClick}  isdisabled={emailError} className='absolute p-0 flex items-center justify-center top-1.5 right-1.5 bottom-1.5 !bg-primary h-7 w-9 rounded'>
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
                </Modal>
            )}
             <div className='container '>
                <div className='xl:m-10 relative'>
                    {isModalVisible &&
                        <div className='absolute top-5 right-5 cursor-pointer text-offwhite-900 h-5 w-5 z-20' onClick={handleCloseModal}>
                            <IoCloseOutline size={20} />
                        </div>
                    }
                    {!showSuccessMsg ? (
                        <div className='bg-yellow-20 shadow-2xl rounded-xl py-10 px-5 lg:px-20 relative '>
                            <div className='relative xl:h-109 xl:w-240 mx-auto'>
                                <Image src="/images/newsletterBg.svg" alt="Newsletter" fill={true}></Image>
                            </div>

                            <div className='xl:absolute z-10 top-35 left-105 right-65 '>
                                <Heading level={3} className='text-black-250 font-rubik lg:text-4xl font-bold xl:w-82 leading-9.5 mb-3'>Join the Kofuku family!</Heading>
                                <Text className='text-black lg:text-base'>
                                    Hey fam! Want to read our informative blogs and watch our exciting videos?
                                </Text>
                                <div className='mt-4 flex flex-col gap-3'>
                                    <label className='font-rubik font-medium text-base '>
                                        Subscribe to our Newsletter
                                    </label>
                                    <div className='relative'>
                                        <Input placeholder='Your email address' ref={inputRef} value={email} className='pr-14' onFocus={handleInputFocus} onChange={handleChange}></Input>
                                        <Button onClick={handleClick}  isdisabled={emailError} className='absolute p-0 flex items-center justify-center top-1.5 right-1.5 bottom-1.5 !bg-primary h-7 w-9 rounded'>
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
        </>
    );
}
