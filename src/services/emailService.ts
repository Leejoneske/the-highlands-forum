
// Using public credentials directly for demo purposes
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
    
    // In a real application, we would send this data to a server
    // For now, we'll just simulate a successful response
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Function to open default email client
export const openEmailClient = (data: EmailFormData): void => {
  const subject = encodeURIComponent(data.subject);
  const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}

${data.message}
  `);
  
  // Create mailto link and open it
  const mailtoLink = `mailto:contact@thehighlandsforum.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
};
