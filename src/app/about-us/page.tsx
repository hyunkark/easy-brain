'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutUs() {
  const sliderImages = [
    '/clinicpic/clinic0.png',
    '/clinicpic/clinic1.png',
    '/clinicpic/clinic2.png',
    '/clinicpic/clinic3.png',
    '/clinicpic/clinic4.png',
    '/clinicpic/clinic5.png',
    '/clinicpic/clinic6.png',
    '/clinicpic/clinic7.png',
    '/clinicpic/clinic8.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 500,
    cssEase: 'linear',
  };

  return (
    <div className="gradient-background-main flex flex-col items-center">
      <h2 className="mt-[240px] mb-[140px] text-[58px] font-bold text-white">
        안녕하세요!
        <br />
        함께 소통하는 정신건강의학과 전문의,
        <br />
        이지브레인 원장 곽재봉입니다.
      </h2>
      <section className="flex w-1200 flex-col items-center justify-center rounded-lg bg-white">
        <h4 className="chip mt-40 mb-24 h-fit">약력</h4>
        <p className="text-title-m mb-8 font-bold">곽재봉</p>
        <p className="text-body-l text-primary text-center font-semibold">
          대표원장
          <br />
          정신건강의학과 전문의
        </p>
        <ul className="text-body-l mt-40 mb-80 list-outside list-disc leading-[1.5] font-medium break-keep">
          <li>청소년 범죄예방위원회 위원 역임</li>
          <li>용인시 장기요양등급판정위원 역임</li>
          <li>용인시 정신보건 심판위원 역임</li>
          <li>삼성제일의원 정신건강의학과 원장</li>
          <li>청량리정신병원 근무</li>
          <li>국립나주병원 전공의수련</li>
          <li>전남대학교 의과대학원 졸업</li>
        </ul>
      </section>
      <section className="mt-[100px] flex flex-col items-center">
        <h4 className="chip">병원 소개</h4>
        <h2 className="h2 mt-24 text-orange-300">둘러 보기</h2>
      </section>
      <div className="slider-container mt-40 mb-160 inline-block h-[655px] w-1200">
        <Slider {...settings}>
          {sliderImages.map(item => (
            <div key={item} className="h-[655px] w-1200">
              <Image alt="" width={1200} height={655} src={item} priority />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
