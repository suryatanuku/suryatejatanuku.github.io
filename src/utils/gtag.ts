// Google Analytics Tracking ID
export const GA_TRACKING_ID: string = "G-1X3Q9SYNF4"; // Replace with your actual Measurement ID

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// ✅ Initialize Google Analytics Script
export const initializeGA = () => {
  if (typeof window !== "undefined" && !window.gtag) {
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID);
  }
};

// ✅ Track Page Views
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// ✅ Track Custom Events
interface GTagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const trackEvent = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackActiveUsers = (): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "user_engagement", {
      event_category: "realtime",
      event_label: "Active Users",
      value: Date.now(), // Just logs the event
    });
  }
};

