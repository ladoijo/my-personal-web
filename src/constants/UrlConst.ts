import ContraIcon from '@/assets/icons/contra.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import UpworkIcon from '@/assets/icons/upwork.svg';
import WhatsAppIcon from '@/assets/icons/whatsapp.svg';
import { IconComponent } from '@/types/icon';
import {
  ACCOUNT_CONTRA_URL,
  ACCOUNT_GITHUB_URL,
  ACCOUNT_LINKEDIN_URL,
  ACCOUNT_MAIL,
  ACCOUNT_PHONE,
  ACCOUNT_UPWORK_URL,
  ACCOUNT_WHATSAPP_URL,
  CERTIFICATE_ENGLISH_URL,
  CERTIFICATE_QSD_URL,
  CERTIFICATE_REACT_URL
} from '@/utils/env';

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
    url: ACCOUNT_GITHUB_URL,
    Icon: GitHubIcon
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    url: ACCOUNT_LINKEDIN_URL,
    Icon: LinkedInIcon,
    placeholder: 'Hadyan Putra Yasrizal'
  },
  contra: {
    id: 'contra',
    name: 'Contra',
    url: ACCOUNT_CONTRA_URL,
    Icon: ContraIcon,
    placeholder: 'Hadyan Putra Yasrizal'
  },
  upwork: {
    id: 'upwork',
    name: 'UpWork',
    url: ACCOUNT_UPWORK_URL,
    Icon: UpworkIcon,
    placeholder: 'Hadyan Putra Yasrizal'
  },
  whatsapp: {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: ACCOUNT_WHATSAPP_URL,
    Icon: WhatsAppIcon,
    placeholder: '+62 878 8851 5625'
  },
  mail: {
    id: 'mail',
    name: 'Mail',
    url: 'mailto:' + ACCOUNT_MAIL,
    Icon: MailIcon,
    placeholder: 'hadyanyasrizal@gmail.com'
  },
  phone: {
    id: 'phone',
    name: 'Phone',
    url: 'tel:' + ACCOUNT_PHONE,
    Icon: PhoneIcon,
    placeholder: '+62 878 8851 5625'
  }
};

export const CertificateUrls: Record<string, string> = {
  qsd: CERTIFICATE_QSD_URL,
  english: CERTIFICATE_ENGLISH_URL,
  react: CERTIFICATE_REACT_URL
};
