'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
  { name: 'Community', path: '/community' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <motion.header 
        className="hidden md:flex sticky top-4 z-50 bg-white/10 rounded-4xl backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 w-[600px] mx-auto justify-center items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`relative ${pathname === item.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 flex items-center justify-between px-4 h-14 shadow-sm">
        <span className="text-lg font-bold text-white tracking-wide">Coders ERA</span>
        <button 
          className='flex flex-col justify-center items-center w-10 h-10 focus:outline-none' 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <div className='flex flex-col items-center justify-center h-full gap-8 text-2xl text-white'>
          <Link href='/' className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href='/about' className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href='/events' className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Events</Link>
          <Link href='/team' className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Team</Link>
          <Link href='/community' className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Community</Link>
          <Link href='/contact' className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          <a href='https://chat.whatsapp.com/IZFWh2YhwNh1Hzl5GDci2F' target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" >Whatsapp</a>
        </div>
      </div>
    </>
  );
}