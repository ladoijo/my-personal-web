'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Paper from '@/components/Paper';
import Title from '@/components/Title';
import Toast from '@/components/Toast';
import { NavItems } from '@/constants/NavItemsConst';
import { AccountUrls } from '@/constants/UrlConst';
import { EmailFormData, emailService } from '@/utils/email';
import { GOOGLE_MAP_URL } from '@/utils/env';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import ContactLink from './ContactLink';

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

const Contact = memo(() => {
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<EmailFormData>();

  const handleSubmitForm = async (data: EmailFormData) => {
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await emailService.sendEmail(data);

      if (response.success) {
        setStatus({
          type: 'success',
          message: response.message
        });
        reset();
      } else {
        setStatus({
          type: 'error',
          message: response.message
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Paper id={NavItems[5].id} title="Contact" className="bg-dots relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className={`
            absolute top-8 -left-6 h-28 w-32 rotate-6 text-sky-200 opacity-60
            sm:left-4
          `}
          viewBox="0 0 200 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="18"
            y="22"
            width="164"
            height="96"
            rx="12"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="m24 34 76 52 76-52"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 92h48l10 14 10-14h48"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className={`
            absolute top-4 right-4 h-28 w-28 -rotate-6 text-amber-200 opacity-60
            sm:right-12
          `}
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74 16c22 0 40 18 40 40 0 30-32 64-40 68-8-4-40-38-40-68 0-22 18-40 40-40Z"
            fill="currentColor"
            stroke="black"
            strokeWidth="5"
          />
          <circle cx="74" cy="58" r="18" fill="white" stroke="black" strokeWidth="5" />
        </svg>
        <svg
          className={`
            absolute bottom-6 left-1/2 h-24 w-40 -translate-x-1/2 rotate-3 text-pink-200 opacity-60
          `}
          viewBox="0 0 240 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 46c0-10 8-18 18-18h80c10 0 18 8 18 18v18c0 10-8 18-18 18H86l-18 16-4-16H50c-10 0-18-8-18-18z"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path d="M82 58h58M82 74h38" stroke="black" strokeWidth="6" strokeLinecap="round" />
          <path
            d="M160 66c0-8 6-14 14-14h18c8 0 14 6 14 14v10c0 8-6 14-14 14h-8l-6 10-2-10h-8c-8 0-14-6-14-14z"
            fill="#c4f1f9"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div
        className={`
          flex flex-col gap-6
          lg:flex-row lg:gap-10
        `}
      >
        {/* Contact Form Section */}
        <section className="flex flex-1 flex-col space-y-4">
          <header>
            <Title title="Get in Touch" size="md" />
            <p className="mt-2 text-gray-600">
              Have a project in mind or a question? Reach out via the form below, email me directly,
              or connect with me on social media.
            </p>
          </header>

          <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col space-y-4">
            <div
              className={`
                grid grid-cols-1 gap-4
                sm:grid-cols-2
              `}
            >
              <div className="flex flex-col">
                <Input
                  title="Name"
                  placeholder="Your Name"
                  type="text"
                  required={true}
                  className="w-full"
                  inputSize="md"
                  error={!!errors.name}
                  disabled={isSubmitting}
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
              </div>
              <div className="flex flex-col">
                <Input
                  title="Email"
                  placeholder="youremail@domain.com"
                  type="email"
                  required={true}
                  className="w-full"
                  inputSize="md"
                  error={!!errors.email}
                  disabled={isSubmitting}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <Input
                title="Subject"
                placeholder="Project Name"
                type="text"
                required={true}
                className="w-full"
                inputSize="md"
                error={!!errors.subject}
                disabled={isSubmitting}
                {...register('subject', {
                  required: 'Subject is required',
                  minLength: {
                    value: 5,
                    message: 'Subject must be at least 5 characters'
                  }
                })}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <Input
                title="Message"
                placeholder="Description"
                rows={10}
                required={true}
                inputSize="md"
                error={!!errors.message}
                disabled={isSubmitting}
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters'
                  }
                })}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>
            <Button
              bgColor="var(--color-6)"
              className={`
                h-12 w-full
                sm:w-auto
              `}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>

          {/* Status Message */}
          {status.type && (
            <Toast
              type={status.type}
              message={status.message}
              onClose={() => setStatus({ type: null, message: '' })}
            />
          )}
        </section>
        {/* Contact Information Section */}
        <div className="flex flex-1 flex-col space-y-6">
          {/* Map */}
          <div className="relative">
            <iframe
              title="Google Map"
              className={`
                h-52 w-full rounded-md border
                sm:h-60
              `}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={GOOGLE_MAP_URL}
            />
          </div>

          {/* Contact Links */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black">Direct Contact</h2>
              <div
                className={`
                  grid grid-cols-1 gap-3
                  xl:grid-cols-2
                `}
              >
                <ContactLink
                  href={AccountUrls.mail.url}
                  icon={AccountUrls.mail.Icon}
                  iconName={AccountUrls.mail.name}
                  title="Email"
                  description={AccountUrls.mail.placeholder}
                  iconBgColor="#f87171"
                />
                <ContactLink
                  href={AccountUrls.phone.url}
                  icon={AccountUrls.phone.Icon}
                  iconName={AccountUrls.phone.name}
                  title="Phone"
                  description={AccountUrls.phone.placeholder}
                  iconBgColor="#2dd4bf"
                />
              </div>
            </section>

            {/* Social Media */}
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black">Social Media</h2>
              <div
                className={`
                  grid grid-cols-1 gap-3
                  xl:grid-cols-2
                `}
              >
                <ContactLink
                  href={AccountUrls.linkedin.url}
                  icon={AccountUrls.linkedin.Icon}
                  iconName={AccountUrls.linkedin.name}
                  title="LinkedIn"
                  description={AccountUrls.linkedin.placeholder}
                  iconBgColor="#3b82f6"
                />
                <ContactLink
                  href={AccountUrls.whatsapp.url}
                  icon={AccountUrls.whatsapp.Icon}
                  iconName={AccountUrls.whatsapp.name}
                  title="WhatsApp"
                  description={AccountUrls.whatsapp.placeholder}
                  iconBgColor="#00bba7"
                />
              </div>
            </section>

            {/* Freelance Platforms */}
            <section>
              <h2 className="mb-2 text-lg font-semibold text-black">Or Hire Me On</h2>
              <div
                className={`
                  grid grid-cols-1 gap-3
                  xl:grid-cols-2
                `}
              >
                <ContactLink
                  href={AccountUrls.upwork.url}
                  icon={AccountUrls.upwork.Icon}
                  iconName={AccountUrls.upwork.name}
                  title="Upwork"
                  description={AccountUrls.upwork.placeholder}
                  iconBgColor="#26ab15"
                />
                <ContactLink
                  href={AccountUrls.contra.url}
                  icon={AccountUrls.contra.Icon}
                  iconName={AccountUrls.contra.name}
                  title="Contra"
                  description={AccountUrls.contra.placeholder}
                  iconBgColor="#4b5563"
                  iconTextColor="#fcc462"
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
