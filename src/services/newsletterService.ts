
// Service credentials for demo purposes
const SERVICE_ID = "service_y16i2wj";
const TEMPLATE_ID = "template_wjpihiq";
const PUBLIC_KEY = "FGh3NiEkM9YVJ0pB0";

export interface NewsletterSubscription {
  email: string;
}

// Store subscribers in localStorage for demonstration purposes
// In a real application, you would store this in a database
export const saveSubscriberToLocalStorage = (email: string): void => {
  try {
    const subscribers = getSubscribersFromLocalStorage();
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
    }
  } catch (error) {
    console.error('Error saving subscriber to localStorage:', error);
  }
};

export const getSubscribersFromLocalStorage = (): string[] => {
  try {
    const subscribers = localStorage.getItem('newsletter_subscribers');
    return subscribers ? JSON.parse(subscribers) : [];
  } catch (error) {
    console.error('Error getting subscribers from localStorage:', error);
    return [];
  }
};

export const isEmailSubscribed = (email: string): boolean => {
  return getSubscribersFromLocalStorage().includes(email);
};

// Function to subscribe a user to the newsletter
export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    // Check if already subscribed
    if (isEmailSubscribed(email)) {
      throw new Error('Email already subscribed');
    }

    console.log('Subscribing email:', email);
    
    // In a real application, we would send this to a server
    // For now, just save to localStorage and return success
    saveSubscriberToLocalStorage(email);
    
    // Simulate sending a confirmation email
    console.log('Confirmation email sent to:', email);
    
    return true;
  } catch (error) {
    console.error('Failed to subscribe to newsletter:', error);
    throw error;
  }
};
