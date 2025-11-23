'use client';

import BurgerIcon from '@/assets/icons/burger.svg';
import CloseIcon from '@/assets/icons/close.svg';
import { NavItem, NavItems } from '@/constants/NavItemsConst';
import { AccountUrls, CVUrl } from '@/constants/UrlConst';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Button from './Button';

const WhatsAppIcon = AccountUrls.whatsapp.Icon;
const MailIcon = AccountUrls.mail.Icon;
const LinkedInIcon = AccountUrls.linkedin.Icon;
const GitHubIcon = AccountUrls.github.Icon;

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen);
  }, [isNavOpen]);

  const handleNavItemClick = useCallback(
    (id: NavItem['id']) => {
      setActiveSection(id);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      if (isNavOpen) toggleNav();
    },
    [isNavOpen, toggleNav]
  );

  const handleDownload = useCallback(() => {
    const anchor = document.createElement('a');
    anchor.href = CVUrl;
    anchor.download = 'hadyan_putra_yasrizal_cv.pdf';
    anchor.click();
  }, []);

  useEffect(() => {
    const value = globalThis.location.hash.startsWith('#')
      ? globalThis.location.hash.slice(1)
      : activeSection;
    handleNavItemClick(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Overlay */}
      {isNavOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-500`}
          onClick={toggleNav}
        />
      )}

      {/* Navbar */}
      <aside
        className={`
          fixed top-1/2 left-0 z-40 h-full w-full -translate-y-1/2 transform transition-transform
          duration-300 ease-in-out
          sm:w-60
          ${isNavOpen ? 'translate-x-0' : `-translate-x-full`}
        `}
      >
        <nav className={`bg-paper flex h-full flex-col border-r-2 border-black`}>
          <button
            onClick={toggleNav}
            aria-label="Close Menu"
            className={`
              fixed top-1 right-1 z-40 flex h-10 w-10 items-center justify-center rounded-full
            `}
          >
            <CloseIcon name="Close" className="h-10 w-10" />
          </button>
          <div className="relative px-5 pt-5 pb-3">
            <Image
              width={2600}
              height={3800}
              className={`
                mx-auto h-40 w-40 rounded-full border-2 border-black bg-[var(--color-1)]
                object-cover object-[center_25%]
              `}
              src="/assets/images/me.webp"
              alt="Profile Picture"
            />
            <span
              className={`
                absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border-2 border-black
                bg-[var(--color-6)] px-3 py-1 text-xs font-semibold text-black shadow-lg
              `}
            >
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
              aria-label={AccountUrls.whatsapp.name}
              className={`
                group flex flex-1 flex-col items-center p-2 transition-colors duration-300
                hover:bg-black
              `}
            >
              <WhatsAppIcon
                name={AccountUrls.whatsapp.name}
                className={`
                  h-5 w-5 text-black transition-colors duration-300
                  group-hover:text-teal-500
                `}
              />
            </Link>
            <Link
              href={AccountUrls.mail.url}
              aria-label={AccountUrls.mail.name}
              className={`
                group flex flex-1 flex-col items-center p-2 transition-colors duration-300
                hover:bg-black
              `}
            >
              <MailIcon
                name={AccountUrls.mail.name}
                className={`
                  h-5 w-5 text-black transition-colors duration-300
                  group-hover:text-white
                `}
              />
            </Link>
            <Link
              href={AccountUrls.linkedin.url}
              aria-label={AccountUrls.linkedin.name}
              className={`
                group flex flex-1 flex-col items-center p-2 transition-colors duration-300
                hover:bg-black
              `}
            >
              <LinkedInIcon
                name={AccountUrls.linkedin.name}
                className={`
                  h-5 w-5 text-black transition-colors duration-300
                  group-hover:text-blue-500
                `}
              />
            </Link>
            <Link
              href={AccountUrls.github.url}
              aria-label={AccountUrls.github.name}
              className={`
                group flex flex-1 flex-col items-center p-2 transition-colors duration-300
                hover:bg-black
              `}
            >
              <GitHubIcon
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
            {NavItems.map(({ id, label, Icon }) => {
              return (
                <li key={id}>
                  <Link
                    aria-label={label}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavItemClick(id);
                    }}
                    className={`
                      flex flex-row items-center gap-2 space-x-3 px-5 py-3 transition-colors
                      duration-300
                      hover:cursor-pointer hover:rounded-none hover:bg-teal-500 hover:text-white
                      ${activeSection === id ? `text-teal-500` : `text-black`}
                    `}
                  >
                    <Icon className={`h-6 w-6 transition-colors duration-300`} />
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="m-5 flex justify-center">
            <Button className="h-10 w-full" onClick={handleDownload}>
              Download CV
            </Button>
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
        aria-label="Burger Menu"
        className={`
          fixed top-6 left-6 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white
          shadow-lg
          hover:bg-gray-200
        `}
        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
      >
        <BurgerIcon name="Burger" className="h-7 w-7" />
      </button>
    </>
  );
};

export default NavBar;
