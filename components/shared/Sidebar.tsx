'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dashboardLinks from '@/lib/dashbaordLinks';

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center py-2 gap-2 sm:gap-6 bg-backgroundColor text-textColor">
      {dashboardLinks.map((link) => (
        <Link
          key={link.route}
          href={link.route}
          className={`nav-link ${
            pathname === link.route ? 'bg-buttonColor' : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
