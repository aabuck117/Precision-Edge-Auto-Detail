import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Star, Skull, ThumbsUp, Leaf, Instagram } from "lucide-react";
import { useEffect, MouseEvent } from "react";

function InstaBadge() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href="https://instagram.com"
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative flex items-center gap-4 p-3 pr-8 rounded-sm bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer group shadow-2xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Inner 3D pop effect */}
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="flex items-center gap-4">
        
        {/* Animated Avatar Circle */}
        <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-shadow duration-500">
          <div className="w-full h-full rounded-full bg-[#f59e0b] flex items-center justify-center relative overflow-hidden shadow-inner">
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="relative flex flex-col items-center mt-2">
              {/* Hat */}
              <div className="w-6 h-3 bg-red-600 rounded-t-full z-20 relative -mb-1 shadow-sm" />
              {/* Brim sticking out left */}
              <div className="absolute top-1 -left-2 w-4 h-1.5 bg-red-600 rounded-l-full z-10" />
              <Skull size={24} className="text-[#1a1a1a] drop-shadow-md relative z-10" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-2 right-2 text-[#1a1a1a] z-20"
              animate={{ rotate: [0, -20, 0], scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ThumbsUp size={14} className="fill-[#1a1a1a]" />
            </motion.div>
            
            {/* Tropical leaves */}
            <Leaf size={24} className="absolute -left-2 -bottom-1 text-green-800/80 z-0 rotate-45" />
            <Leaf size={20} className="absolute right-0 -top-2 text-green-800/80 z-0 -rotate-45" />
          </div>
          
          {/* Instagram mini icon badge */}
          <div className="absolute -bottom-1 -right-1 bg-charcoal rounded-full p-1 border border-white/20 shadow-lg">
            <Instagram size={12} className="text-white" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-warm-white/50 group-hover:text-warm-white transition-colors">Follow the Vibe</span>
          <span className="font-black italic uppercase text-lg tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 drop-shadow-sm">@PrecisionEdge</span>
        </div>

      </div>
    </motion.a>
  );
}

export function Hero() {
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  // Add springs for a smoother, slightly delayed spotlight effect
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    // Initial center position after mount
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

  // The mask reveals the super glossy/vibrant layer
  const maskImage = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, black 0%, transparent 100%)`;

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
      onMouseMove={handleMouseMove}
    >
      {/* Matte / Dull Base Layer (representing unpolished paint) */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_100%)]" />
        {/* Subtle noise/texture */}
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
        {/* Vibrant Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#4a1808] to-charcoal" />
        
        {/* Animated Orbs for "Gloss" effect */}
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

        {/* Geometric Technical Grid (Precision) */}
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

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center pointer-events-none">
        {/* Rating Badge */}
        <motion.div 
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-sm px-6 py-2 flex items-center gap-2 mb-8 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-1 text-warm-yellow">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-warm-white">4.9 Google Rating (35 Reviews)</span>
        </motion.div>

        {/* Headlines */}
        <div className="max-w-4xl mx-auto mb-8 pointer-events-auto">
          <motion.h1 
            className="font-display text-6xl md:text-[100px] leading-[0.85] font-black uppercase tracking-tighter italic select-none mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-warm-white">YOUR CAR DESERVES</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset via-warm-yellow to-coral">
              THE EDGE.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg text-warm-white/70 max-w-lg mx-auto font-medium leading-relaxed drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Premium auto detailing, deep interior cleaning, paint protection, and showroom-level results delivered with precision.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="https://heygoldie.com" target="_blank" rel="noreferrer" className="group relative px-10 py-5 bg-gradient-to-r from-sunset to-coral rounded-sm font-black uppercase italic text-black overflow-hidden flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,99,33,0.3)]">
            <span className="relative z-10">Book Your Detail</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
          
          <button className="px-10 py-5 rounded-sm font-black uppercase italic text-warm-white border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
            See Results
          </button>
        </motion.div>

        {/* Interactive Insta Badge & Contact */}
        <div className="mt-16 flex flex-col items-center gap-6 pointer-events-auto z-50">
          <InstaBadge />
          
          <motion.div
            className="font-black uppercase italic text-sm text-warm-white/60 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Call: <a href="tel:9567061732" className="hover:text-sunset transition-colors">(956) 706-1732</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
