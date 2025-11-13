'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Paper from '@/components/Paper';
import Title from '@/components/Title';
import Toast from '@/components/Toast';
import { NavItems } from '@/constants/NavItemsConst';
import { AccountUrls } from '@/constants/UrlConst';
import { EmailFormData, emailService } from '@/utils/email';
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
    <Paper id={NavItems[5].id} title="Contact" className="bg-dots">
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
              bgColor="#7fcec6"
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
              src="https://www.google.com/maps?q=-6.9175,107.6191&z=13&output=embed"
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
