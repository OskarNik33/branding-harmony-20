
import { useState, useEffect } from "react";
import { useTheme } from "@/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Show toggle after scrolling a bit
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate position that follows scroll but stays in viewport
  const getToggleStyles = () => {
    // Stay within viewport bounds
    const maxTop = window.innerHeight - 120;
    const calculatedTop = Math.min(100 + scrollY * 0.1, maxTop);

    return {
      top: `${calculatedTop}px`, 
    };
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!isVisible) return null;

  return (
    <div 
      className="switch-container fixed right-6 z-50 transition-all duration-300 ease-out"
      style={getToggleStyles()}
    >
      <div className="text-xs mb-1 font-mono text-center">
        ON
      </div>
      <div 
        className="light-switch brutalist-border"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        role="button"
        tabIndex={0}
      >
        <div className={`switch-toggle ${theme === "dark" ? "on" : "off"}`}></div>
      </div>
      <div className="text-xs mt-1 font-mono text-center">
        OFF
      </div>
    </div>
  );
};

export default ThemeToggle;
