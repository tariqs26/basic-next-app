'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  href: string;
};

function ActiveLink({ children, href }: Props) {
  const pathname = usePathname();

  const isActive =
    pathname === href ? 'text-white border-b-2' : 'text-slate-300';

  return (
    <Link href={href} className={`text-lg ${isActive} hover:text-white`}>
      {children}
    </Link>
  );
}

export default ActiveLink;
