import { motion } from "motion/react";
import { Phone, Calendar } from "lucide-react";

export function Booking() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-graphite to-charcoal" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sunset/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
              READY TO BOOK YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-coral">DETAIL?</span>
            </h2>
            <p className="text-warm-white/70 mb-10 font-bold uppercase tracking-widest text-[10px]">
              Schedule your next detail with Precision Edge Auto Detail and experience the difference. Fast, professional, and mobile.
            </p>

            <div className="flex flex-col gap-4">
              <a href="https://heygoldie.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-sm hover:bg-white/10 transition-colors border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-sunset to-coral flex items-center justify-center text-black shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="font-black uppercase italic text-lg tracking-tighter">Book Appointment</div>
                  <div className="text-[10px] text-warm-white/60 font-bold uppercase tracking-widest">Via HeyGoldie.com</div>
                </div>
              </a>

              <a href="tel:9567061732" className="flex items-center gap-4 bg-white/5 p-4 rounded-sm hover:bg-white/10 transition-colors border border-white/10">
                <div className="w-12 h-12 bg-charcoal border border-white/20 flex items-center justify-center text-warm-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-black uppercase italic text-lg tracking-tighter">Call Now</div>
                  <div className="text-[10px] text-warm-white/60 font-bold uppercase tracking-widest">(956) 706-1732</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-white/5 p-8 md:p-10 rounded-sm border border-white/10 relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunset to-coral" />
              <h3 className="font-display text-2xl font-black uppercase italic tracking-tighter mb-8">Request a Quote</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-warm-white/80 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-sunset transition-colors text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-warm-white/80 uppercase tracking-widest">Phone</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-sunset transition-colors text-sm" placeholder="(555) 555-5555" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-[10px] font-bold text-warm-white/80 uppercase tracking-widest">Vehicle (Year / Make / Model)</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-sunset transition-colors text-sm" placeholder="e.g. 2022 Tesla Model Y" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-warm-white/80 uppercase tracking-widest">Service Type</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-sunset transition-colors text-warm-white appearance-none text-sm">
                    <option>Complete Detail</option>
                    <option>Interior Deep Cleaning</option>
                    <option>Exterior Wash & Wax</option>
                    <option>Ceramic Coating</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-warm-white/80 uppercase tracking-widest">Preferred Date</label>
                  <input type="date" className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-sunset transition-colors text-warm-white text-sm" />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-[10px] font-bold text-warm-white/80 uppercase tracking-widest">Message (Optional)</label>
                <textarea className="w-full bg-black/50 border border-white/10 rounded-sm px-4 py-3 focus:outline-none focus:border-sunset transition-colors h-24 resize-none text-sm" placeholder="Any specific areas of concern? (e.g. seat stains, pet hair)" />
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-sunset to-coral rounded-sm font-black uppercase italic text-black transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,99,33,0.3)]">
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
