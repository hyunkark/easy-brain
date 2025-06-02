'use client';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import MarqueeElement from '@/components/MarqueeElm';
import Map from '@/components/Map';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const adultCondArr = [
    { label: '우울/불안', src: '/conditions/a-0-depression.png' },
    { label: '공황장애', src: '/conditions/a-1-anxiety.png' },
    { label: '성인 ADHD', src: '/conditions/a-2-adhd.png' },
    { label: '스트레스', src: '/conditions/a-3-stress.png' },
    { label: '불면증', src: '/conditions/a-4-insomnia.png' },
    { label: '강박증', src: '/conditions/a-5-ocd.png' },
    { label: '분노조절 장애', src: '/conditions/a-6-anger.png' },
    { label: '대인관계 문제', src: '/conditions/a-7-people.png' },
    { label: '알코올/도박/게임 중독', src: '/conditions/a-8-addiction.png' },
    { label: '임신/산후 우울증', src: '/conditions/a-9-pregnancy.png' },
    { label: '폭식증/비만', src: '/conditions/a-10-obesity.png' },
    { label: '치매/건망증', src: '/conditions/a-11-demencia.png' },
    { label: '조현병', src: '/conditions/a-12-schizo.png' },
    { label: '조울증', src: '/conditions/a-13-bipolar.png' },
  ];

  const kidCondArr = [
    { label: 'ADHD', src: '/conditions/k-0-adhd.png' },
    { label: '틱장애', src: '/conditions/k-1-tic.png' },
    { label: '집중력', src: '/conditions/k-2-concentration.png' },
    { label: '우울', src: '/conditions/k-3-depression.png' },
    { label: '불안', src: '/conditions/k-4-anxiety.png' },
    { label: '스트레스', src: '/conditions/k-5-stress.png' },
    { label: '게임 중독', src: '/conditions/k-6-addiction.png' },
    { label: '학교 적응', src: '/conditions/k-7-school.png' },
  ];

  return (
    <div>
      <main>
        {/* Section 0: Video & Heading */}
        <section>
          <div className="h-[720px] w-full overflow-hidden">
            <video
              className="h-full w-full min-w-[712px] object-cover object-top-right"
              autoPlay
              loop
              playsInline
              muted
              preload="auto"
            >
              <source src="/landing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 left-0 flex h-[720px] w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.2)]">
              <TypeAnimation
                sequence={[
                  '정신건강에 마음을 잇다',
                  2000,
                  '정신건강에 뇌 과학을 잇다',
                  2000,
                  '정신건강에 섬세한 진료를 잇다',
                ]}
                wrapper="h1"
                preRenderFirstString
                cursor={true}
                repeat={Infinity}
                className="text-[72px] font-bold text-white"
              />
              <h2 className="text-body-xl mt-[30px] text-center font-bold text-orange-300">
                증상과 상관 없이 뇌 관련 신경생리학적
                <br />
                데이터에 기반한 진단과 치료
              </h2>
            </div>
          </div>
        </section>
        {/* Section 1: Treatments */}
        <section className="flex w-full flex-col items-center justify-center bg-green-700 pt-120 pb-160">
          <article className="flex w-1200 flex-col items-center rounded-lg bg-white pt-40">
            <h3 className="chip">진단과 치료</h3>
            <h2 className="h2 text-primary mt-24">eNIT 진단법</h2>
            <p className="text-body-l mt-8 mb-40 text-center font-medium">
              사람마다 다른 고유한 뇌의 data와 신경생리학적 검사 정보를 기반으로
              <br />
              개인화된 맞춤 치료전략을 수립하는 것이 eNIT의 핵심입니다.
            </p>
            {/* Section 1-0: Figure */}
            <div className="gradient-background mb-40 flex w-1080 flex-col items-center rounded-lg">
              <Image width={680} height={680} src="/network.png" alt="hi" />
              <div className="absolute flex h-[680px] w-1080 items-center justify-center">
                <div className="flex">
                  <div className="mr-[100px] flex h-fit w-[440px] flex-col items-center rounded-lg bg-[rgba(255,255,255,0.7)] p-24 shadow-md backdrop-blur-xs">
                    <h4 className="text-body-xl font-bold">진단</h4>
                    <div className="mt-20 flex h-[196px] w-full items-center justify-center">
                      <Image src="/brain.svg" width={140} height={140} alt="brain logo" />
                      <div className="chip absolute top-[100px] left-40">선별검사</div>
                      <div className="chip absolute top-80 left-[200px]">HRV</div>
                      <div className="chip absolute top-[172px] left-80">TCI</div>
                      <div className="chip absolute top-[146px] left-[300px]">qEEG</div>
                      <div className="chip absolute top-[224px] left-[200px]">CPT</div>
                    </div>
                    <div className="mt-24 w-full">
                      <h5 className="text-body-l mb-12 font-medium">뇌신경 생리학 검사</h5>
                      <ul className="text-body-s ml-24 w-[368px] list-outside list-disc break-keep">
                        <li>5가지 뇌신경생리학 관련 data를 기반으로 증상의 원인 및 치료 전략을 통합적으로 수립</li>
                        <li>
                          정량뇌파(qEEG)검사결과를 토대로 개별적인 고유한 뇌 뉴런들간의 물리적 network를 분석하고, 뇌
                          위치에 따른 뇌파분석을 하여 기능적 이상유무를 진단
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[140px] flex h-fit w-[440px] flex-col items-center rounded-lg bg-[rgba(255,255,255,0.7)] p-24 shadow-md backdrop-blur-xs">
                    <h4 className="text-body-xl font-bold">치료</h4>
                    <div className="mt-20 flex h-[196px] w-full items-center justify-center">
                      <Image src="/lightning.svg" width={116} height={116} alt="lightning logo" />
                      <div className="chip absolute top-[100px] left-[68px]">dTMS</div>
                      <div className="chip absolute top-[90px] left-[268px]">tDCS</div>
                      <div className="chip absolute top-[188px] left-40">
                        Aripiprazole
                        <br />
                        Bupropion
                      </div>
                      <div className="chip absolute top-[180px] left-[220px]">SSRIs, SNRIs</div>
                    </div>
                    <div className="mt-24 w-full">
                      <h5 className="text-body-l mb-12 font-medium">통합 치료</h5>
                      <ul className="text-body-s ml-24 w-[368px] list-outside list-disc break-keep">
                        <li>
                          진단명과 상관없이 뇌신경의 생물학적 data를 기반으로 뇌 호르몬과 네트워크의 기능적 이상 유무를
                          증상과 관련하여 분석, 치료 전략을 수립
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link className="button mb-80" href="/treatments">
              진단과 치료 과정에 대해 좀 더 자세히 알아보기 →
            </Link>
          </article>
          {/* Section 2: What Symptoms do we treat? */}
          <article className="flex w-full flex-col items-center pt-80">
            <h4 className="chip">진료 과목</h4>
            <h2 className="h2 text-primary mt-24 mb-64">성인 진료</h2>
            <Marquee>
              {adultCondArr.map(item => (
                <MarqueeElement key={item.src} caption={item.label} src={item.src} />
              ))}
            </Marquee>
            <h2 className="h2 text-primary mt-80 mb-64">소아청소년 진료</h2>
            <Marquee autoFill direction="right">
              {kidCondArr.map(item => (
                <MarqueeElement key={item.src} caption={item.label} src={item.src} />
              ))}
            </Marquee>
          </article>
        </section>
        {/* Section 3: Clinic Info */}
        <section className="flex flex-col items-center">
          <h4 className="chip mt-40 mb-24">병원 정보</h4>
          <h2 className="h2 text-primary">예약 안내</h2>
          <h3 className="text-body-xl mt-20 mb-40 font-bold">
            이지브레인 정신건강의학과 분당점 <a href="tel:031-701-8275">031-701-8275</a>
          </h3>
          <div className="mb-48 flex">
            <a
              className="button mr-12"
              rel="external"
              target="_blank"
              href="https://m.booking.naver.com/booking/6/bizes/1179082?theme=place&service-target=map-pc&lang=ko&area=bmp&map-search=1#"
            >
              네이버 예약하기 링크 →
            </a>
            <a className="button" href="tel:031-701-8275">
              전화하기 →
            </a>
          </div>
          <h2 className="h2 text-primary mb-20">진료 시간</h2>
          <ul className="text-body-l/[1.8] font-medium">
            <li>
              <span className="text-primary inline-block w-140 font-bold">평일</span>10:00 ~ 19:00 / 점심시간 13:00 ~
              14:00
            </li>
            <li>
              <span className="text-primary inline-block w-140 font-bold">토요일</span>10:00 ~ 14:00 / 점심시간 없음
            </li>
            <li>
              <span className="text-primary inline-block w-140 font-bold">일요일&공휴일</span>휴진
            </li>
          </ul>
          <h2 className="h2 text-primary mt-48 mb-20">주소</h2>
          <h3 className="text-body-xl font-bold">
            <a rel="external" target="_blank" href="https://map.naver.com/p/entry/place/1707422910?c=20.00,0,0,0,dh">
              경기도 성남시 분당구 분당로53번길 나산프라자 3층 304호
            </a>
          </h3>
          <Map />
        </section>
      </main>
    </div>
  );
}
