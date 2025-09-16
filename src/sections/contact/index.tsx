'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Paper from '@/components/Paper';
import Title from '@/components/Title';
import { NavItems } from '@/constants/NavItemsConst';
import { AccountUrls } from '@/constants/UrlConst';
import Link from 'next/link';
import { useState, memo, useCallback } from 'react';
import styles from './contact.module.css';

type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INIT_CONTACT_MESSAGE: ContactMessage = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

// Reusable ContactLink component
interface ContactLinkProps {
  href: string;
  icon: React.ComponentType<{ name: string; className?: string }>;
  iconName: string;
  title: string;
  description?: string;
  iconBgColor: string;
  iconTextColor?: string;
}

const ContactLink = memo(
  ({
    href,
    icon: Icon,
    iconName,
    title,
    description,
    iconBgColor,
    iconTextColor = 'text-white'
  }: ContactLinkProps) => {
    // Map Tailwind colors to CSS custom properties
    const getHoverBgColor = (bgClass: string): string => {
      const colorMap: Record<string, string> = {
        'bg-[#f87171]': '#f87171',
        'bg-[#2dd4bf]': '#2dd4bf',
        'bg-[#3b82f6]': '#3b82f6',
        'bg-[#00bba7]': '#00bba7',
        'bg-[#26ab15]': '#26ab15',
        'bg-[#4b5563]': '#4b5563'
      };
      return colorMap[bgClass] || '#000000';
    };

    return (
      <Link
        href={href}
        className={styles.contactLink}
        style={
          {
            '--hover-bg-color': getHoverBgColor(iconBgColor)
          } as React.CSSProperties
        }
      >
        <Icon
          name={iconName}
          className={`h-16 w-16 p-2 transition-colors duration-300 ${iconBgColor} ${iconTextColor}`}
        />
        <div className={`flex flex-col p-2`}>
          <h3 className="font-bold">{title}</h3>
          {description && <span className="text-gray-500">{description}</span>}
        </div>
      </Link>
    );
  }
);

ContactLink.displayName = 'ContactLink';

const Contact = memo(() => {
  const [contactMessage, setContactMessage] = useState<ContactMessage>(INIT_CONTACT_MESSAGE);

  const handleFormChange = useCallback((key: keyof ContactMessage, value: string) => {
    setContactMessage((prev) => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // Add form submission logic here
      console.log('Form submitted:', contactMessage);
    },
    [contactMessage]
  );

  return (
    <Paper id={NavItems[5].id} title="Contact" className={styles.dotsBackground}>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        {/* Contact Form Section */}
        <section className="flex flex-1 flex-col space-y-4">
          <header>
            <Title title="Get in Touch" size="md" />
            <p className="mt-2 text-gray-600">
              Have a project in mind or a question? Reach out via the form below, email me directly,
              or connect with me on social media.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                title="Name"
                placeholder="Your Name"
                type="text"
                value={contactMessage.name}
                onChange={(e) => handleFormChange('name', e.target.value)}
                required={true}
                className="w-full"
                inputSize="md"
              />
              <Input
                title="Email"
                placeholder="youremail@domain.com"
                type="email"
                value={contactMessage.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
                required={true}
                className="w-full"
                inputSize="md"
              />
            </div>
            <Input
              title="Subject"
              placeholder="Project Name"
              type="text"
              value={contactMessage.subject}
              onChange={(e) => handleFormChange('subject', e.target.value)}
              required={true}
              className="w-full"
              inputSize="md"
            />
            <Input
              title="Message"
              placeholder="Description"
              value={contactMessage.message}
              rows={10}
              onChange={(e) => handleFormChange('message', e.target.value)}
              required={true}
              inputSize="md"
            />
            <Button bgColor="#6880e5" className="h-12 w-full sm:w-auto" type="submit">
              Submit
            </Button>
          </form>
        </section>
        {/* Contact Information Section */}
        <div className="flex flex-1 flex-col space-y-6">
          {/* Map */}
          <div className="relative">
            <iframe
              title="Google Map"
              className="h-52 w-full rounded-md border sm:h-60"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=-6.9175,107.6191&z=13&output=embed"
            />
          </div>

          {/* Contact Links */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black">Direct Contact</h2>
              <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                <ContactLink
                  href={AccountUrls.mail.url}
                  icon={AccountUrls.mail.Icon}
                  iconName={AccountUrls.mail.name}
                  title="Email"
                  description={AccountUrls.mail.placeholder}
                  iconBgColor="bg-[#f87171]"
                />
                <ContactLink
                  href={AccountUrls.phone.url}
                  icon={AccountUrls.phone.Icon}
                  iconName={AccountUrls.phone.name}
                  title="Phone"
                  description={AccountUrls.phone.placeholder}
                  iconBgColor="bg-[#2dd4bf]"
                />
              </div>
            </section>

            {/* Social Media */}
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black">Social Media</h2>
              <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                <ContactLink
                  href={AccountUrls.linkedin.url}
                  icon={AccountUrls.linkedin.Icon}
                  iconName={AccountUrls.linkedin.name}
                  title="LinkedIn"
                  description={AccountUrls.linkedin.placeholder}
                  iconBgColor="bg-[#3b82f6]"
                />
                <ContactLink
                  href={AccountUrls.whatsapp.url}
                  icon={AccountUrls.whatsapp.Icon}
                  iconName={AccountUrls.whatsapp.name}
                  title="WhatsApp"
                  description={AccountUrls.whatsapp.placeholder}
                  iconBgColor="bg-[#00bba7]"
                />
              </div>
            </section>

            {/* Freelance Platforms */}
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black">Or Hire Me On</h2>
              <div className="grid grid-cols-1 gap-3 xl:grid-cols-2">
                <ContactLink
                  href={AccountUrls.upwork.url}
                  icon={AccountUrls.upwork.Icon}
                  iconName={AccountUrls.upwork.name}
                  title="Upwork"
                  description={AccountUrls.upwork.placeholder}
                  iconBgColor="bg-[#26ab15]"
                />
                <ContactLink
                  href={AccountUrls.contra.url}
                  icon={AccountUrls.contra.Icon}
                  iconName={AccountUrls.contra.name}
                  title="Contra"
                  description={AccountUrls.contra.placeholder}
                  iconBgColor="bg-[#4b5563]"
                  iconTextColor="text-[#fcc462]"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Paper>
  );
});

Contact.displayName = 'Contact';

export default Contact;
