'use client'

import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import NewsletterContent from './newsletterContent';
import NewsletterModal from './newsletterModal';

export default function Newsletter() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

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

    const handleClick = () => {
        setCookie('isSubscribed', 'true');
        setShowSuccessMsg(true);

        setTimeout(() => {
            setIsModalVisible(false);
            setShowSuccessMsg(false);
        }, 3000);
    };

    return (
        <>
            {isModalVisible && (
                <NewsletterModal 
                    isModalVisible={isModalVisible} 
                    showSuccessMsg={showSuccessMsg} 
                    handleCloseModal={handleCloseModal}
                    handleInputFocus={handleInputFocus}
                    handleClick={handleClick}
                />
            )}
            <NewsletterContent 
                isModalVisible={isModalVisible} 
                showSuccessMsg={showSuccessMsg} 
                handleCloseModal={handleCloseModal}
                handleInputFocus={handleInputFocus}
                handleClick={handleClick}
            />
        </>
    );
}
