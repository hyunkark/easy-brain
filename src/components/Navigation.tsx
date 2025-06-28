import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="fixed z-[9999] flex w-full justify-center">
      <header className="border-light-gray mt-24 flex h-fit w-[86%] flex-col items-center justify-center rounded-lg border bg-white shadow-md md:h-[60px] md:flex-row lg:w-[840px]">
        <div className="flex w-full items-center justify-around pt-8 md:w-fit md:pt-0">
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
          <Link className="text-body-s md:text-body-m font-semibold text-black md:mr-64" href="/about-us">
            About Us
          </Link>
        </div>
        <div className="flex w-full items-center justify-around pb-8 md:w-fit md:pb-0">
          <Link className="text-body-s md:text-body-m font-semibold text-black md:mr-64" href="/treatments">
            진단과 치료
          </Link>
          <Link className="text-body-s md:text-body-m font-semibold text-black" href="/community">
            커뮤니티
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
