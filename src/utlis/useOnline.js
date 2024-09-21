import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initialize with actual online status


  useEffect(() => {
    const handleOnline = () => setIsOnline(true);  // Set online status
    const handleOffline = () => setIsOnline(false); // Set offline status

    // Add event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup function to remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return isOnline; // Return the current online status
};

export default useOnline;
