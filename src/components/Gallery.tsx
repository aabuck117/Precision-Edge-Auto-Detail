import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Image as ImageIcon, Edit2, UploadCloud, Trash2 } from "lucide-react";
import localforage from "localforage";

// Auto-import all images from the gallery directory
const modules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const localImages = Object.values(modules) as string[];

// Use local images if they exist, otherwise fallback to unsplash placeholders
const baseImages = localImages.length > 0 ? localImages : [
  "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1605810730825-782eb00b65e9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80"
];

type UploadedImage = {
  id: string;
  dataUrl: string;
};

type GalleryItem = {
  id?: string;
  src: string;
  isDeletable: boolean;
};

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Load saved images from IndexedDB on mount
  useEffect(() => {
    async function loadImages() {
      const saved = await localforage.getItem<UploadedImage[]>('gallery_images');
      if (saved) {
        setUploadedImages(saved);
      }
    }
    loadImages();
  }, []);

  const saveImages = async (newImages: UploadedImage[]) => {
    setUploadedImages(newImages);
    await localforage.setItem('gallery_images', newImages);
  };

  const handleDrop = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
    if (files.length === 0) return;
    
    const newImgs = await Promise.all(
      files.map((file) => {
        return new Promise<UploadedImage>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve({
              id: Math.random().toString(36).substring(7),
              dataUrl: e.target?.result as string
            });
          };
          reader.readAsDataURL(file);
        });
      })
    );

    saveImages([...newImgs, ...uploadedImages]);
  }, [uploadedImages]);

  const handleDelete = (idToRemove: string) => {
    const filtered = uploadedImages.filter(img => img.id !== idToRemove);
    saveImages(filtered);
  };

  const allImages: GalleryItem[] = [
    ...uploadedImages.map(img => ({ id: img.id, src: img.dataUrl, isDeletable: true })),
    ...baseImages.map(src => ({ src, isDeletable: false }))
  ];

  // Display the first 3 images in the preview section
  const previewImages = allImages.slice(0, 3).map(i => i.src);

  return (
    <section id="gallery" className="pt-12 pb-24 bg-jet-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-sunset/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <ImageIcon size={14} className="text-sunset" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-warm-white">Our Work</span>
          </motion.div>
          <h2 className="font-black italic uppercase text-5xl md:text-6xl text-warm-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-coral">Results</span>
          </h2>
          <p className="text-warm-white/70 font-bold uppercase tracking-widest text-[10px] leading-loose max-w-xl mx-auto">
            A showcase of perfection. Every vehicle treated as a masterpiece.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {previewImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-white/5"
              onClick={() => setIsOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src={src} 
                alt={`Detailing work ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <div className="bg-sunset/20 backdrop-blur-md p-4 rounded-full text-warm-white border border-sunset/50">
                  <ImageIcon size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative px-10 py-5 bg-carbon border border-white/10 rounded-sm font-black uppercase italic text-warm-white overflow-hidden inline-flex items-center gap-3 transition-colors hover:border-sunset/50"
          >
            <span className="relative z-10">View Full Gallery</span>
            <ImageIcon size={18} className="relative z-10 text-sunset group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-sunset/20 to-coral/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.button>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12"
          >
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40 backdrop-blur-md z-20">
                <div>
                  <h3 className="text-2xl font-black italic uppercase text-warm-white flex items-center gap-3">
                    <ImageIcon className="text-sunset" />
                    Portfolio Gallery
                  </h3>
                  <p className="text-warm-white/50 text-sm font-bold tracking-widest uppercase mt-1">
                    {allImages.length} Shots
                  </p>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 text-xs font-black uppercase transition-colors ${
                      isEditing 
                        ? 'bg-sunset text-black' 
                        : 'bg-white/5 text-warm-white hover:bg-white/10'
                    }`}
                  >
                    <Edit2 size={14} />
                    {isEditing ? 'Done' : 'Edit Gallery'}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-white/5 rounded-full hover:bg-sunset hover:text-black transition-colors text-warm-white"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                
                {/* Drag and Drop Zone (Visible only in Edit Mode) */}
                <AnimatePresence>
                  {isEditing && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      className="overflow-hidden"
                    >
                      <div 
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        className={`w-full border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors ${
                          isDragging ? 'border-sunset bg-sunset/5' : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}
                      >
                        <UploadCloud size={48} className={`mb-4 ${isDragging ? 'text-sunset' : 'text-white/40'}`} />
                        <h4 className="font-black italic uppercase text-warm-white mb-2 text-xl">Drag & Drop Photos Here</h4>
                        <p className="text-white/50 text-xs font-bold tracking-widest uppercase mb-4">Supported: JPG, PNG, WEBP</p>
                        <div className="bg-sunset/10 text-sunset/80 text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-sunset/20">
                          * Photos added here are saved locally to your browser.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allImages.map((item, i) => (
                    <motion.div
                      key={item.id || i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-black/50 border border-white/5"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 transition-opacity duration-300 ${isEditing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                      
                      <img 
                        src={item.src} 
                        alt={`Gallery item ${i + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Delete Button (Visible only in Edit Mode for user-uploaded images) */}
                      {isEditing && item.isDeletable && (
                        <button
                          onClick={() => handleDelete(item.id!)}
                          className="absolute top-4 right-4 z-20 p-3 bg-red-500/90 hover:bg-red-500 text-white rounded-full shadow-lg transition-transform hover:scale-110"
                          title="Delete Photo"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
                
                <div className="py-12 text-center text-warm-white/40 font-bold tracking-widest text-sm uppercase">
                  End of Gallery
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
