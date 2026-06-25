import { motion } from "motion/react";
import { Star, Clock, MessageSquare, Diamond, CheckCircle, Navigation, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: <Star className="text-warm-yellow" />, title: "4.9-Star Rated", desc: "Consistently delivering top-tier results." },
  { icon: <Clock className="text-sunset" />, title: "Punctual Service", desc: "We value your time and arrive when scheduled." },
  { icon: <MessageSquare className="text-tropical" />, title: "Professional Comm.", desc: "Clear updates from booking to completion." },
  { icon: <Diamond className="text-cyan-400" />, title: "Attention to Detail", desc: "Every crevice, every surface, perfected." },
  { icon: <CheckCircle className="text-coral" />, title: "Brand New Feel", desc: "Vehicles look and smell like they just left the lot." },
  { icon: <Navigation className="text-sunset" />, title: "Convenient Booking", desc: "Easy online scheduling via HeyGoldie." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-charcoal to-graphite/50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WHY CHOOSE <span className="text-sunset">PRECISION EDGE</span>
          </motion.h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-warm-white/70 max-w-2xl mx-auto">More than just a car wash. We deliver an experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="bg-white/5 p-8 rounded-sm relative overflow-hidden group border border-white/10 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-sunset/10 rounded-full blur-[30px] group-hover:bg-sunset/20 transition-colors" />
              
              <div className="w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="font-display text-xl font-black italic uppercase tracking-tighter mb-2">{reason.title}</h3>
              <p className="text-warm-white/50 text-[10px] font-bold uppercase tracking-widest leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
