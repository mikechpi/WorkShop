import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="top-0 left-0 right-0 bg-white px-4 py-2 md:p-4 lg:px-12 flex justify-between items-center shadow-lg"> {/* Styles de la Nav-bar*/}
      <div className="mr-auto"> {/* Le Logo */}
        <Image src="/img/Logo.webp" alt="Logo YunoHost 4Everyone" width={60} height={30} className="max-w-xxs" />
      </div>
      <div className="hidden md:flex items-center space-x-8"> {/* Les items */}
        <Link href="https://md.yeswiki.net/s/3zWb4SQR8" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">Bundles</Link>
        <Link href="https://apps.yunohost.org/catalog" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">Applications</Link>
        <Link href="https://yunohost.org/fr/troubleshooting" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">Diagnostic</Link>
      </div>

    </header>
  );
};

export default Header;
