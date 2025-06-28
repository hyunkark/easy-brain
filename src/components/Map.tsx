'use client';

import { useEffect } from 'react';

const Map = () => {
  const initMap = (x: number, y: number) => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(x, y),
      zoom: 15,
    });

    const mapMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
    });

    return mapMarker;
  };

  useEffect(() => {
    initMap(37.383605, 127.1219369);
  }, []);

  return (
    <>
      <div id="map" className="mt-40 mb-160 h-[240px] w-[80%] md:h-[400px] lg:w-1080"></div>
    </>
  );
};

export default Map;
