
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved position from localStorage if available
    const savedPosition = localStorage.getItem('theme-toggle-position');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (toggleRef.current) {
      const rect = toggleRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (toggleRef.current && e.touches[0]) {
      const rect = toggleRef.current.getBoundingClientRect();
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
      const maxX = window.innerWidth - (toggleRef.current?.offsetWidth || 100);
      const maxY = window.innerHeight - (toggleRef.current?.offsetHeight || 150);
      
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));
      
      setPosition({ x: boundedX, y: boundedY });
      
      // Save position to localStorage
      localStorage.setItem('theme-toggle-position', JSON.stringify({ x: boundedX, y: boundedY }));
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      const newX = e.touches[0].clientX - dragOffset.x;
      const newY = e.touches[0].clientY - dragOffset.y;
      
      // Ensure the toggle stays within viewport bounds
      const maxX = window.innerWidth - (toggleRef.current?.offsetWidth || 100);
      const maxY = window.innerHeight - (toggleRef.current?.offsetHeight || 150);
      
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));
      
      setPosition({ x: boundedX, y: boundedY });
      
      // Save position to localStorage
      localStorage.setItem('theme-toggle-position', JSON.stringify({ x: boundedX, y: boundedY }));
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

  return (
    <div 
      ref={toggleRef}
      className={`switch-container fixed z-50 transition-all duration-300 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="text-xs mb-1 font-mono text-center select-none">
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
      <div className="text-xs mt-1 font-mono text-center select-none">
        OFF
      </div>
    </div>
  );
};

export default ThemeToggle;
