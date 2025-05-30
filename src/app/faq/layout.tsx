export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col items-center">
      <div className="mt-[180px] w-1080">{children}</div>
    </section>
  );
}
