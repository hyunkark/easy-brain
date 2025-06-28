import Image from 'next/image';

const MarqueeElement = ({ caption, src }: { caption: string; src: string }) => {
  return (
    <div className="item-center mr-24 flex h-120 w-120 justify-center overflow-hidden rounded-lg md:h-160 md:w-160">
      <Image alt="" width={160} height={160} src={src} className="object-cover" />
      <div className="text-body-m md:text-body-l absolute flex h-120 w-120 items-center justify-center p-24 text-center font-bold break-keep text-orange-300 md:h-160 md:w-160">
        {caption}
      </div>
    </div>
  );
};

export default MarqueeElement;
