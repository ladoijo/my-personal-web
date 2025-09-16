import { IconComponent } from '@/types/icon';
import GitHubIcon from '~/public/assets/icons/github.svg';
import LinkedInIcon from '~/public/assets/icons/linkedin.svg';
import ContraIcon from '~/public/assets/icons/contra.svg';
import UpworkIcon from '~/public/assets/icons/upwork.svg';
import WhatsAppIcon from '~/public/assets/icons/whatsapp.svg';
import MailIcon from '~/public/assets/icons/mail.svg';
import PhoneIcon from '~/public/assets/icons/phone.svg';

interface IAccountUrls {
  [key: string]: {
    id: string;
    name: string;
    url: string;
    Icon: IconComponent;
    placeholder?: string;
  };
}

export const AccountUrls: IAccountUrls = {
  github: {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/ladoijo',
    Icon: GitHubIcon
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hadyan-putra-yasrizal/',
    Icon: LinkedInIcon,
    placeholder: 'Hadyan Putra Yasrizal'
  },
  contra: {
    id: 'contra',
    name: 'Contra',
    url: 'https://contra.com/hadyan_putra_yasrizal_q1sp6w4m?referralExperimentNid=SOCIAL_REFERRAL_PROGRAM&referrerUsername=hadyan_putra_yasrizal_q1sp6w4m',
    Icon: ContraIcon,
    placeholder: 'Hadyan Putra Yasrizal'
  },
  upwork: {
    id: 'upwork',
    name: 'UpWork',
    url: 'https://www.upwork.com/freelancers/~01cf6d3fdb58b2256e?mp_source=share',
    Icon: UpworkIcon,
    placeholder: 'Hadyan Putra Yasrizal'
  },
  whatsapp: {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/6287888515625',
    Icon: WhatsAppIcon,
    placeholder: '+62 878 8851 5625'
  },
  mail: {
    id: 'mail',
    name: 'Mail',
    url: 'mailto:hadyanyasrizal@gmail.com',
    Icon: MailIcon,
    placeholder: 'hadyanyasrizal@gmail.com'
  },
  phone: {
    id: 'phone',
    name: 'Phone',
    url: 'tel:+6287888515625',
    Icon: PhoneIcon,
    placeholder: '+62 878 8851 5625'
  }
};
