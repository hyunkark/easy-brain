export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col items-center">
      <div className="mt-120 w-[86%] md:mt-[180px] lg:w-1080">{children}</div>
    </section>
  );
}
