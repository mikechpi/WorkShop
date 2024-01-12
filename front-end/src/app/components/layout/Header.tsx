'use client' // Importe les modules nécessaires depuis React et Next.js
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Ajoute les icônes hamburger et fermeture

// Définit le composant fonctionnel Header
const Header = () => {
  // Utilise le hook useState pour gérer l'état du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fonction pour basculer l'état du menu entre ouvert et fermé
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effet useEffect pour gérer la fermeture du menu lorsqu'on clique en dehors de celui-ci
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

  // Ajoute un écouteur d'events
  document.addEventListener('mousedown', handleClickOutside);

  // Retire l'écouteur d'events lors du démontage du composant
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [menuRef]);



  //Rendu du composant
  return (

    <header className="relative top-0 left-0 right-0 bg-white px-4 py-2 md:p-4 lg:px-12 flex justify-between items-center shadow-lg"> {/* Styles de la barre */}
      {/* Logo */}
      <div className="mr-auto">
        <Image src="/img/Logo.webp" alt="Logo YunoHost 4Everyone" width={60} height={30} className="max-w-xxs" />
      </div>

      {/* Menu PC : hidden sur Mobile */}
      <nav className="hidden md:flex items-center space-x-8">
        {/* Liens vers différentes pages */}
        <Link href="/" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
          Bundles
        </Link>
        <Link href="/applications" rel="noopener noreferrer" className="cursor-pointer font-semibold text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
          Applications
        </Link>
      </nav>

      {/* Icône du Menu Mobile : hidden sur PC */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}> 
        <Menu />
      </div>
      
      {/* Ajoute le menu déroulant avec fond flou et bouton de fermeture */}
      {isMenuOpen && (
        <div
        ref={menuRef} 
        onClick={closeMenu}
        className="md:hidden     fixed inset-0     backdrop-blur bg-gradient-to-b from-white bg-opacity-50 z-50     flex items-center justify-center"> {/* Menu Mobile : hidden sur PC */}
          
          <div className="absolute top-4 right-4">
            <X onClick={toggleMenu} size={28} color="#000" />
          </div>

          {/* Liens du menu mobile */}
          <nav className="flex flex-col items-center space-y-4 mt-20 text-white">
            <Link href="/" rel="noopener noreferrer" className="cursor-pointer font-semibold text-3xl text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
              Bundles
            </Link>
            <Link href="/applications" rel="noopener noreferrer" className="cursor-pointer font-semibold text-3xl text-blue-500 hover:text-pink-500 transition duration-700 ease-in-out">
              Applications
            </Link>
          </nav>

        </div>
      )}
    </header>
  );
};

export default Header;
