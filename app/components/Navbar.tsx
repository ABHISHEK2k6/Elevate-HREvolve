'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    // { name: 'Speakers', href: '#speakers' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Why Attend', href: '#why-attend' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Venue', href: '#venue' },
    // { name: 'FAQs', href: '#faqs' },
  ];

  const handleClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false); // Close mobile menu on click
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="sticky top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 pb-4 bg-gradient-to-b from-[#1a0b3d] to-transparent"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Navigation */}
      <nav className="w-full max-w-6xl flex items-center justify-between px-4 md:px-8">
        <div>
          <Link href="/" className="text-white text-xl sm:text-2xl font-bold">
            <Image src="/logo1.png" alt="Logo" width={120} height={120} className="sm:w-[150px] sm:h-[30px]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex bg-[#1a0b3d]/80 backdrop-blur-md rounded-full px-8 py-4 shadow-xl border border-purple-500/20">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.href);
                  }}
                  className={`text-white font-medium text-base transition-all duration-300 hover:text-purple-300 ${activeSection === item.href ? 'text-purple-300' : ''
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Toggle & CTA */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="https://makemypass.com/event/elevate25-hr-conclave" target="_blank" rel="noopener noreferrer">
              <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-md font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                Buy Ticket
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-[#1a0b3d]/80 backdrop-blur-md border border-purple-500/20"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden fixed top-20 left-0 right-0 z-40 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-[#1a0b3d]/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-purple-500/20 mx-auto max-w-md">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.href);
                    }}
                    className={`block text-white hover:text-purple-300 transition-colors duration-300 font-medium py-2 px-4 rounded-lg hover:bg-purple-500/20 ${activeSection === item.href ? 'text-purple-300 bg-purple-500/20' : ''
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA Button */}
            <div className="mt-6 pt-4 border-t border-purple-500/20">
              <Link href="https://makemypass.com/event/elevate25-hr-conclave" target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2">
                  Buy Ticket
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
