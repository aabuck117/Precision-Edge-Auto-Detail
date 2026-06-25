import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop", label: "Showroom Finish", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop", label: "Exterior", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1600049216744-86dc8f828a2b?q=80&w=800&auto=format&fit=crop", label: "Interior", span: "md:col-span-1 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop", label: "Tesla", span: "md:col-span-1 md:row-span-1" },
  { src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop", label: "Paint Correction", span: "md:col-span-2 md:row-span-1" },
];

export function Gallery() {
  return (
    <section className="py-24 relative bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            RESULTS THAT SPEAK <span className="text-sunset">LOUDER.</span>
          </motion.h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-warm-white/70 max-w-2xl mx-auto">Browse our recent projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative rounded-sm overflow-hidden group ${img.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img 
                src={img.src} 
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-sunset/0 group-hover:border-sunset transition-colors duration-300 rounded-sm z-10 pointer-events-none shadow-[inset_0_0_20px_rgba(255,99,33,0)] group-hover:shadow-[inset_0_0_30px_rgba(255,99,33,0.4)]" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex justify-between items-end">
                <span className="font-display font-black uppercase italic text-xl tracking-tighter text-warm-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                  {img.label}
                </span>
                <button className="w-10 h-10 rounded-sm bg-sunset flex items-center justify-center text-black hover:bg-coral transition-colors">
                  <Maximize2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <button className="px-10 py-5 rounded-sm font-black italic uppercase text-warm-white border border-white/20 hover:bg-white/10 transition-colors backdrop-blur-sm">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
