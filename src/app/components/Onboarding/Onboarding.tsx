import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import frame1Img from '@public/frame-1.png';
import frame2Img from '@public/frame-2.png';
import frame3Img from '@public/frame-3.png';

export const Onboarding = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const frames = [
    {
      image: frame1Img,
      text: 'Create matches',
    },
    {
      image: frame2Img,
      text: 'Record your points',
    },
    {
      image: frame3Img,
      text: 'Set your scores',
    },
  ];

  const handleCreateProfile = () => {
    console.log('create profile');
  };

  const handleStart = () => {
    console.log("let's ping");
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
  };

  return (
    <div className="flex align-middle justify-between flex-col gap-10 h-full">
      <div className="h-full">
        <Slider {...sliderSettings} lazyLoad="anticipated">
          {frames.map((frame, index) => (
            <div key={index} className="carousel-image-container bg-[#f6f8fa] rounded-full">
              <Image src={frame.image.src} alt={'ping-ping'} width={240} height={240} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-col gap-4 w-full p-4">
        <button
          className="text-[#0D0D0D] font-bold py-[12px] px-[24px] border border-[#243c5a] rounded-2xl"
          onClick={handleCreateProfile}
        >
          Create Profile
        </button>
        <button
          className=" bg-[#0D0D0D] text-white font-bold py-[12px] px-[24px] border border-[#243c5a] rounded-2xl"
          onClick={handleStart}
        >
          Let's Ping
        </button>
      </div>
    </div>
  );
};
