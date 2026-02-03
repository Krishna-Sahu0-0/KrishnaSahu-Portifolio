import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          {/* Left - Copyright */}
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2 text-center md:text-left">
            © 2026 Krishna Sahu. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind
          </p>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Krishna-Sahu0-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/krishna-sahu00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:krishna@example.com"
              className="text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
