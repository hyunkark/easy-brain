import Link from 'next/link';

export default function Community() {
  const posts = [{ title: '2025년 설 연휴 휴진 일정 안내', href: '/community/2025-newyear', date: '2025.1.22' }];
  return (
    <>
      <div className="mb-80 w-full">
        <h3 className="text-body-l md:text-title-s text-primary mb-24 font-bold">자주 묻는 질문</h3>
        <Link
          href="/faq/not-covered"
          className="text-body-m md:text-body-l flex h-64 items-center border-y font-semibold md:h-80"
        >
          비급여 항목
        </Link>
      </div>
      <div className="mb-80 w-full">
        <h3 className="text-body-l md:text-title-s text-primary mb-24 font-bold">공지사항</h3>
        {posts.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-body-m md:text-body-l flex h-64 items-center justify-between md:h-80 ${index !== 0 ? 'border-b' : 'border-y'} font-semibold`}
          >
            <span>{item.title}</span>
            <span>{item.date}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
