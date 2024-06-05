'use client'
import React, { useEffect, useRef, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import { emitErrorNotification } from '@/lib/helpers';
import { validateForm } from '@/components/utility/verifyAuthForm';
import NewsletterContent from './newsletterContent';
import NewsletterModal from './newsletterModal';

interface Props {
  page?: any;
}

export default function Newsletter({ page }: Props) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [isListPage, setListPage] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState<any>(true);
  const inputRef = useRef<any>(null);
  const [closedPages, setClosedPages] = useState<string[]>([]);

  const handleCloseModal = () => {
    setIsModalVisible(false);
    document.body.classList.remove('overflow-hidden');
    const closedPagesFromStorage = localStorage.getItem('closedPages');
    const updatedClosedPages = closedPagesFromStorage ? JSON.parse(closedPagesFromStorage) : [];
    if (page && !updatedClosedPages.includes(page)) {
      updatedClosedPages.push(page);
      localStorage.setItem('closedPages', JSON.stringify(updatedClosedPages));
      setClosedPages(updatedClosedPages);
    }
  };

  useEffect(() => {
    const closedPagesFromStorage = localStorage.getItem('closedPages');
    if (closedPagesFromStorage) {
      setClosedPages(JSON.parse(closedPagesFromStorage));
    }
  }, []);

  useEffect(() => {
    const isSubscribedCookie = getCookie('isSubscribed');
    if (page === 'blogList' || page === 'videoList') {
      setListPage(true);
    } else {
      setListPage(false);
    }

    if (isSubscribedCookie === 'true' || closedPages.includes(page)) {
      setIsModalVisible(false);
      document.body.classList.remove('overflow-hidden');
    } else {
      const timer = setTimeout(() => {
        setIsModalVisible(true);
        document.body.classList.add('overflow-hidden');
      }, isListPage ? 5000 : 7000);
      return () => clearTimeout(timer);
    }
  }, [page, isListPage, closedPages]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem('closedPages');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleChange = (e: any) => {
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
        }
      );

      if (response.ok) {
        await response.json();
        setEmailSuccess(true);
        setEmail('');
      } else {
        emitErrorNotification(
          'Something went wrong, please try again after some time.'
        );
      }
    } catch (error) {
      emitErrorNotification(
        'Something went wrong, please try again after some time.'
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
      {!isListPage && (
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
      )}
    </>
  );
}
