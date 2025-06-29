import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Script from 'next/script';
import Navigation from '../components/Navigation';

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  weight: '400 500 600 700 800',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '이지브레인 분당점',
  description: '증상과 상관 없이 뇌 관련 신경생리학적 데이터에 기반한 진단과 치료',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-vw">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        />
      </head>
      <body className={`${pretendard.className} w-vw antialiased`}>
        <Navigation />
        {children}
        <footer className="flex flex-col items-center bg-black">
          <div className="w-[80%] pt-48 pb-80 lg:w-1080">
            <div className="text-body-l mb-24 font-bold text-white">이지브레인정신건강의학과의원</div>
            <div className="text-light-gray text-body-s leading-[1.5] font-medium">
              이지브레인정신건강의학과의원 | 곽재봉 | 경기도 성남시 분당구 분당로53번길 12 서현나산빌딩 3층 |<br />
              사업자등록번호 : 466-90-02252 | 전화번호 : 031-701-8275
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
