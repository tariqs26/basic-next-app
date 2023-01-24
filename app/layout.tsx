import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body className='min-h-screen bg-slate-900 text-slate-200 flex flex-col gap-3'>
        <Navbar />
        <main className='w-full max-w-screen-lg px-3 mx-auto'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
