import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="fixed z-[9999] flex w-full justify-center">
      <header className="border-light-gray mt-24 flex h-[60px] w-[840px] items-center justify-center rounded-lg border bg-white shadow-md">
        <Link className="mr-64" href="/">
          <Image src="/logo.png" alt="Easy Brain logo" width={119} height={34} priority />
        </Link>
        <Link className="text-body-m mr-64 font-semibold text-black" href="/about-us">
          About Us
        </Link>
        <Link className="text-body-m mr-64 font-semibold text-black" href="/treatments">
          진단과 치료
        </Link>
        <Link className="text-body-m font-semibold text-black" href="/community">
          커뮤니티
        </Link>
      </header>
    </div>
  );
};

export default Navigation;
