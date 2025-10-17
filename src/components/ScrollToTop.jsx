import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay ensures images / content load pe scroll ho jaye
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 50); // 50ms delay

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
