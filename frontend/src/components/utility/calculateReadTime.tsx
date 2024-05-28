import React from 'react';

type CalculateReadTimeProps = {
  textRead: string[];
};

const CalculateReadTime: React.FC<CalculateReadTimeProps> = ({ textRead }) => {
  let totalReadTime = 1;

  textRead.forEach((text) => {
    const wordCount = text && text.split(' ').length;
    const readingSpeed = 200; // Words per minute
    const time = wordCount && wordCount / readingSpeed;
    if (time) {
      totalReadTime += time;
    }
  });
  const roundedTime = Math.ceil(parseFloat(totalReadTime.toFixed(2)));

  return <>{roundedTime} min read</>;
};

const extractAndCalculateReadTime = (data: any) => {
  try {
    const textRead: string[] = [
      data?.attributes?.Title,
      data?.attributes?.shortDes,
    ];

    const calculatedReadTime: any = CalculateReadTime({
      textRead,
    });

    return calculatedReadTime;
  } catch (error) {
    return <>1 min read</>;
  }
};

export default extractAndCalculateReadTime;
