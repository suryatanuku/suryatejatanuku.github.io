
// Google Analytics Tracking ID
export const GA_TRACKING_ID: string = 'G-1X3Q9SYNF4'; // Replace with your Measurement ID

// Pageview Tracking
export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
