import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { Star } from "lucide-react";
import { MouseEvent, useEffect } from "react";

export function FinalCTA() {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(window.innerHeight / 2);
    }
  }, [mouseX, mouseY]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, black 0%, transparent 100%)`;

  return (
    <section 
      className="py-32 relative overflow-hidden flex items-center justify-center min-h-[70vh] bg-charcoal"
      onMouseMove={handleMouseMove}
    >
      {/* Matte / Dull Base Layer */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay" />
      </div>

      {/* Glossy / Corrected Paint Layer Revealed by Spotlight */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#4a1808] to-charcoal" />
        
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sunset/40 rounded-full blur-[100px]"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-coral/30 rounded-full blur-[120px]"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-warm-yellow/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"
          animate={{ x: ['-50%', '-30%', '-50%'], y: ['-50%', '-70%', '-50%'], scale: [1, 0.8, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBMMDAgNDBaIiBzdHJva2U9InJnYmEoMjU1LDk5LDMzLDAuMTUpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMEw0MCAwWiIgc3Ryb2tlPSJyZ2JhKDI1NSw5OSwzMywwLjE1KSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] bg-[length:40px_40px]" />
      </motion.div>

      {/* Floating particles/beads (Water Beading Effect) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {[...Array(30)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.5)] backdrop-blur-sm"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
               width: Math.random() * 4 + 2 + "px",
               height: Math.random() * 4 + 2 + "px",
             }}
             animate={{
               y: [0, -150],
               x: [0, (Math.random() - 0.5) * 50],
               opacity: [0, 1, 0],
             }}
             transition={{
               duration: Math.random() * 5 + 5,
               repeat: Infinity,
               ease: "linear",
               delay: Math.random() * 5,
             }}
           />
         ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto"
        >
          <div className="flex items-center justify-center gap-1 text-warm-yellow mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 text-warm-white drop-shadow-2xl">
            BRING BACK THAT <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-coral">BRAND NEW FEELING.</span>
          </h2>
          <p className="text-xl md:text-2xl text-warm-white/80 font-medium italic max-w-2xl mx-auto mb-10 drop-shadow-md">
            Premium detailing, real results, and a vehicle you’ll be proud to drive again.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://heygoldie.com" target="_blank" rel="noreferrer" className="px-10 py-5 bg-gradient-to-r from-sunset to-coral rounded-sm font-black uppercase italic text-black text-lg transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,99,33,0.4)] hover:shadow-[0_0_50px_rgba(255,99,33,0.6)]">
              Book Now
            </a>
            <a href="tel:9567061732" className="px-10 py-5 bg-white/5 border border-white/20 rounded-sm font-black uppercase italic text-warm-white text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
              Call (956) 706-1732
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] text-warm-white/60 font-bold uppercase tracking-widest">
            <span>4.9★ Google Rated</span>
            <span className="hidden sm:inline">•</span>
            <span>35 Reviews</span>
            <span className="hidden sm:inline">•</span>
            <span>Open Until 8 PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Subtle particle background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ff6b35\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12 border-b border-white/5 pb-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-black italic uppercase tracking-tighter mb-2 text-warm-white">PRECISION EDGE</h3>
            <p className="text-warm-white/50 text-[10px] font-bold tracking-widest uppercase">Auto Detail</p>
            <div className="flex items-center justify-center md:justify-start gap-1 mt-4 text-warm-yellow">
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
              <Star size={14} fill="currentColor" />
            </div>
            <p className="text-warm-white/50 text-[10px] font-bold uppercase tracking-widest mt-2">4.9 Google Rating (35 Reviews)</p>
          </div>

          {/* Links */}
          <div className="flex gap-16 text-center md:text-left">
            <div>
              <h4 className="font-black italic uppercase text-warm-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-warm-white/60 text-[10px] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-sunset transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-sunset transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-sunset transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-sunset transition-colors">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black italic uppercase text-warm-white mb-4">Contact</h4>
              <ul className="space-y-2 text-warm-white/60 text-[10px] font-bold uppercase tracking-widest">
                <li><a href="tel:9567061732" className="hover:text-sunset transition-colors">(956) 706-1732</a></li>
                <li>Miami, FL</li>
                <li>Open until 8 PM</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-warm-white/40 text-[10px] font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Precision Edge Auto Detail. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
             Premium Auto Detailing
          </div>
        </div>
      </div>
    </footer>
  );
}
