import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, SprayCan, Eraser, Sparkles, Shield, ThumbsUp, CarFront } from "lucide-react";

const steps = [
  { icon: <Search />, title: "Inspect", desc: "Detailed walkaround to identify specific needs." },
  { icon: <SprayCan />, title: "Deep Clean", desc: "Thorough foam wash and interior decontamination." },
  { icon: <Eraser />, title: "Remove Stains", desc: "Targeted extraction of tough spots and spills." },
  { icon: <Sparkles />, title: "Restore Shine", desc: "Paint enhancement and surface polishing." },
  { icon: <Shield />, title: "Protect", desc: "Application of sealants or ceramic coatings." },
  { icon: <ThumbsUp />, title: "Final Walkthrough", desc: "Ensuring 100% satisfaction before hand-off." },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const carY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-charcoal">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            OUR DETAILING <span className="text-sunset">PROCESS.</span>
          </motion.h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-warm-white/70">Methodical, precise, and guaranteed to impress.</p>
        </div>

        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 rounded-full" />
          
          {/* Animated glowing line */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-sunset to-coral -translate-x-1/2 rounded-full origin-top shadow-[0_0_15px_rgba(255,99,33,0.8)]"
            style={{ height: lineHeight }}
          />

          {/* Moving car icon */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-black bg-gradient-to-br from-sunset to-coral p-2 rounded-sm shadow-[0_0_15px_rgba(255,99,33,0.5)]"
            style={{ top: carY }}
          >
             <CarFront size={20} />
          </motion.div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col md:flex-row items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Icon Node */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-sm bg-white/5 border border-white/10 z-10 text-warm-white backdrop-blur-md">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <motion.div 
                    className={`pl-20 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white/5 border border-white/10 p-6 rounded-sm inline-block w-full hover:bg-white/10 transition-colors">
                      <div className="text-sunset font-sans text-[10px] mb-2 font-bold uppercase tracking-widest">STEP 0{i + 1}</div>
                      <h3 className="font-display text-2xl font-black italic uppercase tracking-tighter mb-2 text-warm-white">{step.title}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-warm-white/50">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
