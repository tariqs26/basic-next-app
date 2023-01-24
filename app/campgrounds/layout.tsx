export default function CampgroundsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className='text-3xl font-bold mb-3'>Campgrounds</h1>
      <section className='flex flex-col gap-3'
      >{children}</section>
    </>
  );
}
