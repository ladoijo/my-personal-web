'use client';

import { NavItem, NavItems } from '@/constants/NavItemsConst';
import { AccountUrls } from '@/constants/UrlConst';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Arrow from '~/public/assets/icons/arrow_right.svg';
import { IconComponent } from '@/types/icon';
import Image from 'next/image';
import Button from './Button';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ArrowIcon: IconComponent = Arrow;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = (id: NavItem['id']) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (isNavOpen) toggleNav();
  };

  useEffect(() => {
    const value = window.location.hash.startsWith('#')
      ? (window.location.hash.slice(1) as NavItem['id'])
      : (activeSection as NavItem['id']);
    handleNavItemClick(value);
  }, []);

  return (
    <>
      {/* Overlay */}
      {isNavOpen && (
        <div
          className={`
            fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-500
            lg:hidden
          `}
          onClick={toggleNav}
        />
      )}

      {/* Navbar */}
      <aside
        className={`
          fixed top-1/2 left-0 z-40 h-full w-full -translate-y-1/2 transform transition-transform duration-300 ease-in-out sm:w-60 lg:translate-x-0
          ${isNavOpen ? 'translate-x-0' : `-translate-x-full`}
        `}
      >
        <nav className={`flex h-full flex-col border-r-2 border-black bg-amber-50`}>
          <div className="relative px-5 pt-5 pb-3">
            <Image
              width={832}
              height={1216}
              className={`mx-auto h-40 w-40 rounded-full border-3 border-black object-cover`}
              src="/assets/images/me.webp"
              alt="Profile Picture"
            />
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border-2 border-white bg-teal-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              #OPENTOWORK
            </span>
          </div>
          <b className={`text-center text-black`}>Hadyan Putra Yasrizal</b>
          <div
            className={`
              mx-5 my-3 flex flex-row divide-x-2 divide-black rounded-md border-2 border-black
            `}
          >
            <Link
              href={AccountUrls.whatsapp.url}
              className={`group flex flex-1 flex-col items-center p-2 transition-colors duration-300 hover:bg-black`}
            >
              <AccountUrls.whatsapp.Icon
                name={AccountUrls.whatsapp.name}
                className={`
                  h-5 w-5 text-black transition-colors duration-300
                  group-hover:text-teal-500
                `}
              />
            </Link>
            <Link
              href={AccountUrls.mail.url}
              className={`group flex flex-1 flex-col items-center p-2 transition-colors duration-300 hover:bg-black`}
            >
              <AccountUrls.mail.Icon
                name={AccountUrls.mail.name}
                className={`
                  h-5 w-5 text-black transition-colors duration-300
                  group-hover:text-white
                `}
              />
            </Link>
            <Link
              href={AccountUrls.linkedin.url}
              className={`group flex flex-1 flex-col items-center p-2 transition-colors duration-300 hover:bg-black`}
            >
              <AccountUrls.linkedin.Icon
                name={AccountUrls.linkedin.name}
                className={`
                  h-5 w-5 text-black transition-colors duration-300
                  group-hover:text-blue-500
                `}
              />
            </Link>
            <Link
              href={AccountUrls.github.url}
              className={`group flex flex-1 flex-col items-center p-2 transition-colors duration-300 hover:bg-black`}
            >
              <AccountUrls.github.Icon
                name={AccountUrls.github.name}
                className={`
                  h-5 w-5 text-black transition-colors duration-300
                  group-hover:text-white
                `}
              />
            </Link>
          </div>
          <ul
            className={`h-full content-center items-center divide-y-2 divide-black overflow-y-auto`}
          >
            {NavItems.map(({ id, label, icon: Icon }) => {
              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(id);
                  }}
                  className={`
                    space-x-3-sm flex flex-row items-center gap-2 px-5 py-3
                    transition-colors duration-300 hover:cursor-pointer hover:rounded-none hover:bg-teal-500 hover:text-white
                    ${activeSection === id ? `text-teal-500` : `text-black`}
                  `}
                >
                  <Icon className={`h-6 w-6 transition-colors duration-300`} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </ul>
          <div className="m-5 flex justify-center">
            <Button className="h-10 w-full">Download CV</Button>
          </div>
          <footer className="mt-auto border-t-2 border-black bg-white p-4 text-center">
            <p className="text-xs text-gray-600">
              © 2025 Hadyan Putra Yasrizal. All rights reserved.
            </p>
          </footer>
        </nav>
      </aside>
      {/* Burger Button */}
      <button
        onClick={toggleNav}
        className={`
          fixed top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full
          bg-black shadow-lg transition-all duration-250
          ease-in-out
          hover:bg-gray-800
          lg:hidden
        `}
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
      >
        {/* Hamburger/Cross Icon */}
        <div className="relative h-[15px] w-5">
          {/* Top bar */}
          <span
            className={`
              absolute top-0 left-0 h-0.5 w-full origin-center bg-white transition-all duration-300
              ${isNavOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0'}
            `}
          />
          {/* Middle bar */}
          <span
            className={`
              absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-white transition-all duration-300
              ${isNavOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
            `}
          />
          {/* Bottom bar */}
          <span
            className={`
              absolute bottom-0 left-0 h-0.5 w-full origin-center bg-white transition-all duration-300
              ${isNavOpen ? '-translate-y-2 -rotate-45' : 'translate-y-0 rotate-0'}
            `}
          />
        </div>
      </button>
    </>
  );
};

export default NavBar;
