'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Ajoute les icônes hamburger et de fermeture

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative top-0 left-0 right-0 bg-white px-4 py-2 md:p-4 lg:px-12 flex justify-between items-center shadow-lg"> {/* Styles de la barre */}
      <div className="mr-auto"> {/* Logo */}
        <Image src="/img/Logo.webp" alt="Logo YunoHost 4Everyone" width={60} height={30} className="max-w-xxs" />
      </div>
      <nav className="hidden md:flex items-center space-x-8"> {/* Menu PC : hidden sur Mobile */}
        <Link href="https://md.yeswiki.net/s/3zWb4SQR8" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
          Bundles
        </Link>
        <Link href="https://apps.yunohost.org/catalog" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
          Applications
        </Link>
        <Link href="https://yunohost.org/fr/troubleshooting" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
          Diagnostic
        </Link>
      </nav>

      <div className="lg:hidden cursor-pointer" onClick={toggleMenu}> {/* Menu Mobile : hidden sur PC */}
        <Menu />
      </div>
      
      {/* Ajoute le menu déroulant avec fond flou et bouton de fermeture */}
      {isMenuOpen && (
        <div className="fixed inset-0     backdrop-blur bg-gradient-to-b from-white bg-opacity-50 z-50     flex items-center justify-center">
          
          <div className="absolute top-4 right-4">
            <X onClick={toggleMenu} size={28} color="#000" />
          </div>

          <nav className="flex flex-col items-center space-y-4 mt-20 text-white">
            <Link href="https://md.yeswiki.net/s/3zWb4SQR8" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-3xl text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
              Bundles
            </Link>
            <Link href="https://apps.yunohost.org/catalog" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-3xl text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
              Applications
            </Link>
            <Link href="https://yunohost.org/fr/troubleshooting" target="_blank" rel="noopener noreferrer" className="cursor-pointer font-semibold text-3xl text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
              Diagnostic
            </Link>
          </nav>

        </div>
      )}
    </header>
  );
};

export default Header;
