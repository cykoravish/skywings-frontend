import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="z-40 fixed bottom-0 left-0 right-0 bg-gray-500 text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
      <p className="text-lg font-semibold py-10">
        We use cookies to enhance your experience. By continuing, you agree to
        our <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2 md:mt-0"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;