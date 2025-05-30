'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const Map = () => {
  const initMap = (x: number, y: number) => {
    var map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(x, y),
      zoom: 15,
    });

    var mapMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });
  };

  useEffect(() => {
    initMap(37.383605, 127.1219369);
  }, []);

  return (
    <>
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
      />
      <div id="map" className="mt-40 mb-160 h-[400px] w-1080"></div>
    </>
  );
};

export default Map;
