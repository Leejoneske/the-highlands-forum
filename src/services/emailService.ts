
export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailFormData): Promise<void> => {
  // This would normally call an email service API
  console.log('Sending email with data:', data);
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const openEmailClient = (data: EmailFormData): void => {
  const { email, subject, message } = data;
  const body = encodeURIComponent(message);
  const mailtoLink = `mailto:contact@thehighlandsforum.com?subject=${subject}&body=${body}`;
  window.open(mailtoLink);
};
