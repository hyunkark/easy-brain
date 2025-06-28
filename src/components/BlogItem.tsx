import Link from 'next/link';

export default function BlogItem({
  isFAQ,
  title,
  date,
  content,
}: {
  isFAQ?: boolean;
  title: string;
  date: string;
  content: React.ReactNode;
}) {
  return (
    <article className="mb-160">
      <h3 className="text-primary text-body-m md:text-body-l font-bold">{isFAQ ? '자주 묻는 질문' : '공지사항'}</h3>
      <div className="text-body-l md:text-body-xl border-primary mb-40 flex h-64 w-full items-center justify-between border-b font-semibold md:h-80">
        <h2>{title}</h2>
        <p className="text-gray-400">{date}</p>
      </div>
      <section className="text-body-m font-medium">{content}</section>
      <div className="flex w-full justify-center">
        <Link className="button mt-40 inline-block h-fit w-fit" href="/community">
          ← 뒤로 가기
        </Link>
      </div>
    </article>
  );
}
