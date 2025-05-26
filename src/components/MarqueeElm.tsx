import Image from 'next/image';

const MarqueeElement = ({ caption, src }: { caption: string; src: string }) => {
  return (
    <div className="item-center mr-24 flex h-160 w-160 justify-center overflow-hidden rounded-lg">
      <Image alt="" width={160} height={160} src={src} className="object-cover" />
      <div className="text-body-l absolute flex h-160 w-160 items-center justify-center p-24 text-center font-bold break-keep text-orange-300">
        {caption}
      </div>
    </div>
  );
};

export default MarqueeElement;
