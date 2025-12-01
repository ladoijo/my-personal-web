import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from './env';

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

const ERR_CONFIG_MESSAGE = 'EmailJS configuration is incomplete';

class EmailService {
  private readonly serviceId: string;
  private readonly templateId: string;
  private readonly publicKey: string;

  constructor() {
    this.serviceId = EMAILJS_SERVICE_ID;
    this.templateId = EMAILJS_TEMPLATE_ID;
    this.publicKey = EMAILJS_PUBLIC_KEY;

    if (!this.serviceId || !this.templateId || !this.publicKey) {
      console.error(ERR_CONFIG_MESSAGE);
    }

    if (this.publicKey) {
      emailjs.init(this.publicKey);
    }
  }

  async sendEmail(data: EmailFormData): Promise<EmailResponse> {
    try {
      if (!this.serviceId || !this.templateId || !this.publicKey) {
        throw new Error(ERR_CONFIG_MESSAGE);
      }

      await emailjs.send(this.serviceId, this.templateId, {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Hadyan Putra Yasrizal',
        reply_to: data.email
      });

      return {
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      };
    } catch (error) {
      console.error('EmailJS error:', error);
      return {
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again.'
      };
    }
  }
}

export const emailService = new EmailService();
