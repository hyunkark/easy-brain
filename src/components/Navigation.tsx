import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="fixed z-[9999] flex w-full justify-center">
      <header className="border-light-gray mt-24 flex h-48 w-[86%] items-center justify-center rounded-lg border bg-white shadow-md md:h-[60px] lg:w-[840px]">
        <Link className="mr-24 md:mr-64" href="/">
          <Image
            src="/logo.png"
            alt="Easy Brain logo"
            width={119}
            height={34}
            priority
            className="h-24 w-[83px] md:h-[34px] md:w-[119px]"
          />
        </Link>
        <Link className="text-body-s md:text-body-m mr-24 font-semibold text-black md:mr-64" href="/about-us">
          About Us
        </Link>
        <Link className="text-body-s md:text-body-m mr-24 font-semibold text-black md:mr-64" href="/treatments">
          진단과 치료
        </Link>
        <Link className="text-body-s md:text-body-m font-semibold text-black" href="/community">
          커뮤니티
        </Link>
      </header>
    </div>
  );
};

export default Navigation;
