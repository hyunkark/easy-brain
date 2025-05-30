import Link from 'next/link';

export default function Community() {
  return (
    <>
      <div className="mb-80 w-full">
        <h3 className="text-title-s text-primary mb-24 font-bold">자주 묻는 질문</h3>
        <Link href="/faq/not-covered" className="text-body-l flex h-80 items-center border-y font-semibold">
          비급여 항목
        </Link>
      </div>
      <div className="mb-80 w-full">
        <h3 className="text-title-s text-primary mb-24 font-bold">공지사항</h3>
        <Link href="/community/2025-newyear" className="text-body-l flex h-80 items-center border-y font-semibold">
          2025년 설 연휴 휴진 일정 안내
        </Link>
      </div>
    </>
  );
}
