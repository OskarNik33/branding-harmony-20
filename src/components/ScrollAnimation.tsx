// components/ScrollAnimation.tsx
import { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 456;

function getCurrentFrame(index: number) {
  return `/frames/${index}.jpg`;
}

const ScrollAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const images = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getCurrentFrame(i);
      images.current.push(img);
    }
  }, []);

 useEffect(() => {
   const canvas = canvasRef.current;
   const context = canvas?.getContext("2d");

   let currentFrameIndex = 0;
   let ticking = false;

   const render = (index: number) => {
     const img = images.current[index];
     if (img && context && canvas) {
       context.clearRect(0, 0, canvas.width, canvas.height);
       context.drawImage(img, 0, 0, canvas.width, canvas.height);
     }
   };

   const handleScroll = () => {
     if (!ticking) {
       window.requestAnimationFrame(() => {
         const scrollTop = window.scrollY;
         const maxScrollTop = document.body.scrollHeight - window.innerHeight;
         const scrollFraction = scrollTop / maxScrollTop;
         const newFrameIndex = Math.min(
           TOTAL_FRAMES - 1,
           Math.floor(scrollFraction * TOTAL_FRAMES)
         );

         if (newFrameIndex !== currentFrameIndex) {
           currentFrameIndex = newFrameIndex;
           render(currentFrameIndex);
         }

         ticking = false;
       });

       ticking = true;
     }
   };

   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
 }, []);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 1920;
      canvas.height = 1080;
    }
  }, []);

  return (
    <section className="relative h-[3000px]">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      />
    </section>
  );
};

export default ScrollAnimation;
