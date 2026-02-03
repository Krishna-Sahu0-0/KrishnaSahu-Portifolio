import { motion } from "framer-motion";
import { Github, Linkedin, Download, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-24 pb-10 md:pb-0 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-2 border-violet-500 dark:border-violet-400 mb-6 md:mb-8 relative overflow-hidden">
            {/* Glittering effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-600/40 to-transparent dark:via-white/20 animate-shimmer"></div>
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400 relative z-10" />
            <span className="text-xs md:text-sm font-medium text-violet-700 dark:text-violet-300 relative z-10">Available for Internship</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight"
          >
            Hello, I'm{' '}
            <span className="gradient-text block mt-1 md:mt-2">Krishna Sahu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium mb-4 md:mb-6"
          >
            Computer Science (AI & ML) Student | Full-Stack & Data Science Enthusiast
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mb-8 md:mb-12 leading-relaxed mx-auto md:mx-0"
          >
            Building scalable web applications and analyzing real-world data to
            support data-driven decision making. Passionate about creating innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-12 justify-center md:justify-start"
          >
            <a href="/resume.pdf" className="btn-primary group">
              <Download size={20} />
              <span>Download Resume</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a 
              href="https://github.com/Krishna-Sahu0-0" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-violet-600 dark:hover:bg-violet-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/krishna-sahu00" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-violet-600 dark:hover:bg-violet-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center md:justify-end items-center order-first md:order-last md:-mt-12 md:mr-8"
        >
          <div className="relative">
            {/* Placeholder for profile image - Oval vertical shape */}
            <div className="w-48 h-64 md:w-96 md:h-[420px] bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white text-4xl md:text-6xl font-bold shadow-2xl shadow-violet-500/50" style={{borderRadius: '50%/50%'}}>
              KS
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-violet-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-violet-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
