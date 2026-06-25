import { useState, useRef } from "react";
import { motion, useAnimationFrame } from "motion/react";
import { ArrowLeftRight } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SEE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-coral">EDGE</span> FOR YOURSELF.
          </motion.h2>
          <p className="text-warm-white/70 font-sans max-w-2xl mx-auto">Drag the slider to see the transformation.</p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize group select-none shadow-2xl shadow-sunset/10 border border-warm-white/10"
          onMouseMove={(e) => isDragging && handleMove(e.clientX)}
          onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* After Image (Full width underneath) */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600049216744-86dc8f828a2b?q=80&w=2070&auto=format&fit=crop")' }} // Clean interior placeholder
          >
             <div className="absolute top-4 right-4 glass px-4 py-1 rounded-full text-sm font-bold text-warm-white z-10">
               AFTER
             </div>
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-0"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop")', // Dirty interior placeholder
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
            }}
          >
            <div className="absolute top-4 left-4 glass px-4 py-1 rounded-full text-sm font-bold text-warm-white z-10">
               BEFORE
             </div>
             {/* Grayscale filter to make 'before' look worse if needed, but let's assume the photo is already dirty */}
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-sunset to-coral transition-all duration-0"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Handle glowing effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-sunset rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,107,53,0.8)] border-2 border-white scale-100 group-hover:scale-110 transition-transform">
              <ArrowLeftRight size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
