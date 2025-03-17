
import emailjs from '@emailjs/browser';

// Using public EmailJS credentials directly
const SERVICE_ID = "service_y16i2wj";
const TEMPLATE_ID = "template_wjpihiq";
const PUBLIC_KEY = "FGh3NiEkM9YVJ0pB0";

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    console.log('Sending email with params:', templateParams);
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID, 
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
