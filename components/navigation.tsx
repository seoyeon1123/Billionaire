'use client'; // 클라이언트 사이드에서만 렌더링

import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Navigation() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex flex-row justify-between my-10">
      <h1 className="text-4xl font-extrabold">Billionaire</h1>
      <nav className=" flex justify-end">
        <ul className="flex flex-row items-center gap-4">
          <li>
            <button
              onClick={handleBackClick}
              className="text-white hover:text-stone-500 active:text-stone-500"
            >
              Back
            </button>
          </li>
          <li>
            <Link
              href="/"
              className="text-white hover:text-stone-500 active:text-stone-500"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
