'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { PrimaryButton, SecondaryButton } from '@/app/components/atoms/index';
import { Routes } from '@enums/routes.enums';
import frame1Img from '@public/frame-1.svg';
import frame2Img from '@public/frame-2.svg';
import frame3Img from '@public/frame-3.svg';
import { useRouter } from 'next/navigation';

export const Onboarding = () => {
  const { push } = useRouter();
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
    push('/players/create');
  };

  const handleStart = () => {
    push(Routes.record);
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
        <SecondaryButton label={'Create new player'} onClick={handleCreateProfile} />
        <PrimaryButton label={"Let's Ping"} onClick={handleStart} />
      </div>
    </div>
  );
};
