'use client';

import { NavItems } from '@/constants/NavItemsConst';
import { AccountUrls } from '@/constants/UrlConst';
import { useState } from 'react';
import Link from 'next/link';
import Arrow from '~/public/assets/icons/arrow_right.svg';
import { IconComponent } from '@/types/icon';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ArrowIcon: IconComponent = Arrow;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isNavOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black transition-opacity duration-300 lg:hidden"
          onClick={toggleNav}
        />
      )}

      {/* Navbar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-56 transform bg-white transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex h-full flex-col bg-white">
          <div className="p-3">
            <img
              className="mx-auto h-40 w-40 rounded-full object-cover"
              src="/assets/images/me.webp"
              alt="Profile Picture"
            />
          </div>
          <span className="text-center text-gray-600">Hadyan Putra Yasrizal</span>
          <div className="m-3 flex flex-row divide-x divide-gray-300 rounded-lg border border-gray-300">
            <Link
              href={AccountUrls.whatsapp.url}
              className="group flex flex-1 flex-col items-center p-2"
            >
              <AccountUrls.whatsapp.Icon
                name={AccountUrls.whatsapp.name}
                className="h-5 w-5 text-gray-400 group-hover:text-emerald-500"
              />
            </Link>
            <Link
              href={AccountUrls.mail.url}
              className="group flex flex-1 flex-col items-center p-2"
            >
              <AccountUrls.mail.Icon
                name={AccountUrls.mail.name}
                className="h-5 w-5 text-gray-400 group-hover:text-yellow-500"
              />
            </Link>
            <Link
              href={AccountUrls.linkedin.url}
              className="group flex flex-1 flex-col items-center p-2"
            >
              <AccountUrls.linkedin.Icon
                name={AccountUrls.linkedin.name}
                className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-blue-500"
              />
            </Link>
            <Link
              href={AccountUrls.linkedin.url}
              className="group flex flex-1 flex-col items-center p-2"
            >
              <AccountUrls.github.Icon
                name={AccountUrls.github.name}
                className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-black"
              />
            </Link>
          </div>
          <ul className="h-full content-center items-center divide-y divide-gray-300 overflow-y-auto">
            {NavItems.map(({ id, label, icon: Icon }, index) => {
              return (
                // <li key={id} className="flex flex-col hover:cursor-pointer">
                <li
                  key={id}
                  onClick={() => {
                    setActiveSection(id);
                    toggleNav();
                  }}
                  className={`flex flex-row items-center gap-2 space-x-3 rounded-sm p-3 hover:cursor-pointer hover:text-emerald-500 ${activeSection === id ? 'text-emerald-500' : 'text-gray-600'}`}
                >
                  <Icon className="h-6 w-6 transition-colors duration-300" />
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
          <button className="m-4 justify-center rounded-3xl border border-gray-300 p-2 text-gray-500 transition-colors duration-300 hover:cursor-pointer hover:bg-emerald-500 hover:text-white">
            Download CV
          </button>
        </nav>
      </aside>
      {/* Burger Button */}
      <button
        onClick={toggleNav}
        className={`relative top-4 z-50 flex h-10 w-10 flex-col items-center justify-center rounded-r-lg bg-white transition-all duration-300 ease-in-out hover:bg-gray-50 lg:hidden ${
          isNavOpen ? 'left-56' : 'left-0'
        }`}
      >
        <ArrowIcon
          className={`h-5 w-5 text-gray-600 ${isNavOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-1000`}
        />
      </button>
    </>
  );
};

export default NavBar;
