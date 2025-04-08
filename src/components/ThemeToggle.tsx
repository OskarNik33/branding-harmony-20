import { useState, useEffect } from "react";
import { useTheme } from "@/providers/ThemeProvider";
const ThemeToggle = () => {
  const {
    theme,
    setTheme
  } = useTheme();
  const [position, setPosition] = useState({
    x: 20,
    y: 20
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    // Load saved position from localStorage if available
    const savedPosition = localStorage.getItem('theme-toggle-position');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);
  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      setDragOffset({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      });
      setIsDragging(true);
    }
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // Ensure the toggle stays within viewport bounds
      const toggleWidth = 80; // Estimated width of the toggle
      const toggleHeight = 120; // Estimated height of the toggle
      const maxX = window.innerWidth - toggleWidth;
      const maxY = window.innerHeight - toggleHeight;
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));
      setPosition({
        x: boundedX,
        y: boundedY
      });

      // Save position to localStorage
      localStorage.setItem('theme-toggle-position', JSON.stringify({
        x: boundedX,
        y: boundedY
      }));
    }
  };
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      const newX = e.touches[0].clientX - dragOffset.x;
      const newY = e.touches[0].clientY - dragOffset.y;

      // Ensure the toggle stays within viewport bounds
      const toggleWidth = 80; // Estimated width of the toggle
      const toggleHeight = 120; // Estimated height of the toggle
      const maxX = window.innerWidth - toggleWidth;
      const maxY = window.innerHeight - toggleHeight;
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));
      setPosition({
        x: boundedX,
        y: boundedY
      });

      // Save position to localStorage
      localStorage.setItem('theme-toggle-position', JSON.stringify({
        x: boundedX,
        y: boundedY
      }));
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add event listeners for mouse/touch movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove as any);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove as any);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, dragOffset]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return <div className={`fixed z-50 transition-all duration-300 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} style={{
    left: `${position.x}px`,
    top: `${position.y}px`
  }} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
      <div className={`toggle-container ${theme === "dark" ? "on" : ""}`} onClick={toggleTheme} role="button" tabIndex={0} aria-label="Toggle theme">
        <div className="toggle-state off-state">
          <img src="/light-switch-off.png" alt="Switch Off" className="w-20 h-30 select-none" />
        </div>
        <div className="toggle-state on-state">
          <img alt="Switch On" className="w-20 h-30 select-none" src="/lovable-uploads/9ac21e63-8616-44ac-b234-0117faf3e317.png" />
        </div>
      </div>
    </div>;
};
export default ThemeToggle;