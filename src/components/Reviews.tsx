import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  { text: "Great service and professional. Ricky at Precision Edge Auto Detail is awesome.", author: "Google Reviewer" },
  { text: "My truck was dirty with grime and dust from work, came out looking brand new like out of the dealership.", author: "Google Reviewer" },
  { text: "Great communication. Punctual to the appointment. He did a great job making my Jeep look like I had just driven it out of the showroom.", author: "Google Reviewer" },
  { text: "Absolutely 100% recommend!! My car had stains on the seat that I couldn't get out but he made them look like new.", author: "Google Reviewer" },
  { text: "Precision Edge Auto Detail was INCREDIBLE! So convenient, and just an amazing job.", author: "Google Reviewer" },
  { text: "The attention to detail was amazing, and the customer service was even better. My car looks and smells brand new.", author: "Google Reviewer" },
  { text: "UNBELIEVABLE WORK! His detail services are phenomenal!", author: "Google Reviewer" },
  { text: "My Tesla Model Y looks brand new.", author: "Google Reviewer" },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-graphite/30" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-sunset/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THE <span className="text-sunset">VERDICT</span>
          </motion.h2>
          <p className="text-warm-white/70 font-bold uppercase tracking-widest text-[10px]">Real results from real customers.</p>
        </div>

        <div className="relative h-[300px] max-w-4xl mx-auto flex items-center justify-center">
          {reviews.map((review, i) => {
            // Calculate relative position for 3D effect
            let offset = i - currentIndex;
            if (offset < -Math.floor(reviews.length / 2)) offset += reviews.length;
            if (offset > Math.floor(reviews.length / 2)) offset -= reviews.length;
            
            const isActive = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <motion.div
                key={i}
                className="absolute w-full max-w-2xl"
                initial={false}
                animate={{
                  x: `${offset * 60}%`,
                  scale: isActive ? 1 : 0.8 - Math.abs(offset) * 0.1,
                  opacity: isActive ? 1 : 0.5 - Math.abs(offset) * 0.2,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-lg relative overflow-hidden group">
                  <Quote className="absolute top-4 right-4 text-white/5 w-24 h-24 rotate-12" />
                  
                  <div className="flex gap-1 text-sunset mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={20} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="font-sans text-lg md:text-xl font-medium italic leading-relaxed mb-8 text-warm-white relative z-10">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#FF6321] flex items-center justify-center font-black italic text-black">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-bold uppercase tracking-widest text-[10px]">{review.author}</div>
                      <div className="text-[10px] text-warm-white/50 flex items-center gap-1 font-bold uppercase tracking-widest">
                        <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" className="w-3 h-3" />
                        Verified Review
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Manual controls */}
        <div className="flex justify-center mt-12 gap-4">
           {reviews.map((_, i) => (
             <button
               key={i}
               onClick={() => setCurrentIndex(i)}
               className={`w-2 h-2 rounded-full transition-all duration-300 ${
                 i === currentIndex ? 'w-8 bg-sunset' : 'bg-warm-white/20 hover:bg-warm-white/40'
               }`}
               aria-label={`Go to review ${i + 1}`}
             />
           ))}
        </div>
      </div>
    </section>
  );
}
