import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { FaHeart } from "react-icons/fa";
import { trackActiveUsers } from "../utils/gtag";

export function Footer() {
  const { t } = useTranslation();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Track active users in Google Analytics
    trackActiveUsers();
    
    // Remove fake real-time user simulation
    setVisitorCount(0); // Set default value (since GA API does not provide this data)
    
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 dark:text-gray-300 flex items-center space-x-2">
            <span>{t("footer.credit")}</span>
            <FaHeart color="red" />
          </p>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            {/* <span>{t("footer.visitors")}:</span>
            <span className="font-mono">{visitorCount}</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
