import ContactIcon from '@/assets/icons/contact.svg';
import HomeIcon from '@/assets/icons/home.svg';
import PortfolioIcon from '@/assets/icons/portfolio.svg';
import AboutIcon from '@/assets/icons/profile.svg';
import ResumeIcon from '@/assets/icons/resume.svg';
import ServiceIcon from '@/assets/icons/service.svg';
import { IconComponent } from '@/types/icon';

export interface NavItem {
  label: string;
  id: string;
  Icon: IconComponent;
}

export const NavItems: NavItem[] = [
  {
    label: 'Home',
    id: 'home',
    Icon: HomeIcon
  },
  {
    label: 'About Me',
    id: 'about',
    Icon: AboutIcon
  },
  {
    label: 'Resume',
    id: 'resume',
    Icon: ResumeIcon
  },
  {
    label: 'My Services',
    id: 'services',
    Icon: ServiceIcon
  },
  {
    label: 'Portfolio',
    id: 'portfolio',
    Icon: PortfolioIcon
  },
  {
    label: 'Contact',
    id: 'contact',
    Icon: ContactIcon
  }
] as const;
