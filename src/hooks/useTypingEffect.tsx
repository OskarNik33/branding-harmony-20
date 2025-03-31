
import { useState, useEffect } from 'react';

export function useTypingEffect(
  fullText: string,
  initialText: string = "",
  typingSpeed: number = 150,
  delayBeforeTyping: number = 500
) {
  const [displayText, setDisplayText] = useState(initialText);
  const [currentIndex, setCurrentIndex] = useState(initialText.length);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (currentIndex === initialText.length && !isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, delayBeforeTyping);
    } else if (isTyping && currentIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);
    } else if (currentIndex >= fullText.length) {
      setIsTyping(false);
    }
    
    return () => clearTimeout(timeout);
  }, [fullText, initialText, currentIndex, isTyping, typingSpeed, delayBeforeTyping]);

  return { displayText, isTyping };
}
