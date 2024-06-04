'use client'

import React, { useEffect, useRef, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import { emitErrorNotification } from '@/lib/helpers';
import { validateForm } from '@/components/utility/verifyAuthForm';
import NewsletterContent from './newsletterContent';
import NewsletterModal from './newsletterModal';

interface Props {
  isListPage?: any;
}

export default function Newsletter({isListPage}:Props) {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [email, setEmail] = useState('');
    const [emailSuccess, setEmsilSuccess] = useState(false);
    const [emailError, setEmailError] = useState<any>(true);
    const inputRef = useRef<any>(null);
    
    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const isSubscribedCookie = getCookie('isSubscribed');
        if (isSubscribedCookie === 'true') {
            setIsModalVisible(false);
        } else {
          setTimeout(() => {
            setIsModalVisible(true);
        }, isListPage ? 5000 : 7000);

        }
    }, [isListPage]);

   
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
               <NewsletterModal 
               isModalVisible={isModalVisible}
                handleCloseModal={handleCloseModal}
                showSuccessMsg={showSuccessMsg}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                handleInputFocus={handleInputFocus}
                handleChange={handleChange}
                handleClick={handleClick}
                inputRef={inputRef}
                isInputFocused={isInputFocused}
               />
            )}
           { !isListPage && 
             <NewsletterContent
                isModalVisible={isModalVisible}
                handleCloseModal={handleCloseModal}
                showSuccessMsg={showSuccessMsg}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                handleInputFocus={handleInputFocus}
                handleChange={handleChange}
                handleClick={handleClick}
                inputRef={inputRef}
                isInputFocused={isInputFocused}

            />
           }
        </>
    );
}
