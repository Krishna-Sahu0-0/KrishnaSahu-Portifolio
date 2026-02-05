import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ExternalLink, Github, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Determine items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 ? 3 : 1;
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality with smooth transition
  useEffect(() => {
    if (isDragging) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, itemsPerView === 1 ? 3000 : 5000); // 3s for mobile, 5s for desktop

    return () => clearInterval(interval);
  }, [currentIndex, itemsPerView, isDragging]);

  // Create extended array for infinite loop effect
  const extendedProjects = [...projects, ...projects, ...projects];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset to middle section when reaching edges
  useEffect(() => {
    if (currentIndex >= projects.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(projects.length);
      }, 600);
    } else if (currentIndex < projects.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(projects.length);
      }, 600);
    } else {
      setTimeout(() => setIsTransitioning(false), 600);
    }
  }, [currentIndex]);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-100 via-purple-100 to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjViZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzAtMy4zMTQgMi42ODYtNiA2LTZzNi02IDYtNnYtNmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnptMCAxMmMwLTMuMzE0IDIuNjg2LTYgNi02czYtNiA2LTZ2LTZjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Showcasing my latest work and technical expertise</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-full shadow-xl hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all duration-300 hover:scale-110 border-2 border-violet-200 dark:border-violet-500/30"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-full shadow-xl hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 transition-all duration-300 hover:scale-110 border-2 border-violet-200 dark:border-violet-500/30"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ 
                x: itemsPerView === 1 
                  ? `calc(-${currentIndex} * (100% + 1.5rem))` 
                  : `calc(-${currentIndex} * (33.333% + 0.667rem))` 
              }}
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.6
              }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, { offset }) => {
                setIsDragging(false);
                if (offset.x < -50) {
                  nextSlide();
                } else if (offset.x > 50) {
                  prevSlide();
                }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
            >
              {extendedProjects.map((p, i) => (
                <motion.div
                  key={i}
                  className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 md:p-8 border border-violet-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 flex-shrink-0"
                  style={{ 
                    width: itemsPerView === 1 ? '100%' : 'calc((100% - 4rem) / 3)'
                  }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 to-purple-500/0 group-hover:from-violet-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{p.title}</h3>
                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map((t, idx) => (
                        <span key={`${i}-${idx}`} className="text-xs font-medium bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 px-3 py-1.5 rounded-lg border border-violet-200 dark:border-violet-500/30">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                      {p.certificate && (
                        <a href={p.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                          <Award size={16} />
                          <span>Certificate</span>
                        </a>
                      )}
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(projects.length + idx);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % projects.length) === idx
                    ? 'w-8 bg-violet-600 dark:bg-violet-400' 
                    : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-violet-400 dark:hover:bg-violet-500'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
