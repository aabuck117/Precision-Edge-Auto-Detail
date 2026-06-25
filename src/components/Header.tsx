export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 pt-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-sunset to-coral flex items-center justify-center font-black italic rounded-sm text-black">PE</div>
        <span className="text-lg font-black tracking-tighter uppercase italic text-warm-white hidden sm:block">Precision Edge</span>
      </div>
      <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-warm-white/60">
        <a href="#" className="text-warm-white border-b border-sunset">Home</a>
        <a href="#services" className="hover:text-warm-white transition-colors">Services</a>
        <a href="#reviews" className="hover:text-warm-white transition-colors">Reviews</a>
        <a href="#gallery" className="hover:text-warm-white transition-colors">Gallery</a>
        <a href="https://heygoldie.com" className="text-sunset hover:text-coral transition-colors">Book Now</a>
      </nav>
      <div className="text-right">
        <div className="text-sm font-bold text-warm-white">(956) 706-1732</div>
        <div className="text-[10px] text-warm-white/50 font-bold uppercase tracking-wider">Open until 8 PM</div>
      </div>
    </header>
  );
}
