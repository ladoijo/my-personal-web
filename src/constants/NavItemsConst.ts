import HomeIcon from '~/public/assets/icons/home.svg';
import AboutIcon from '~/public/assets/icons/profile.svg';
import ResumeIcon from '~/public/assets/icons/resume.svg';
import PortfolioIcon from '~/public/assets/icons/portfolio.svg';
import ContactIcon from '~/public/assets/icons/contact.svg';

export const NavItems = [
  {
    label: 'Home',
    id: 'home',
    icon: HomeIcon
  },
  {
    label: 'About Me',
    id: 'about',
    icon: AboutIcon
  },
  {
    label: 'Resume',
    id: 'resume',
    icon: ResumeIcon
  },
  {
    label: 'Portfolio',
    id: 'portfolio',
    icon: PortfolioIcon
  },
  {
    label: 'Contact',
    id: 'contact',
    icon: ContactIcon
  }
] as const;

export type NavItems = typeof NavItems;
export type NavItem = NavItems[number];
