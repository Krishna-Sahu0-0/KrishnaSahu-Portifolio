import { motion } from "framer-motion";
import { Code2, Database, Brain, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    { icon: Code2, title: "Full-Stack Dev", desc: "MERN Stack & Python" },
    { icon: Database, title: "Data Science", desc: "Visualization & Insights" },
    { icon: Brain, title: "AI & ML", desc: "Machine Learning Enthusiast" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 dark:via-violet-950/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-violet-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-10 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-violet-600 dark:text-violet-400 flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Computer Science (AI & ML) undergraduate with hands-on experience in
                full-stack web development and data science. Skilled in Python,
                MERN stack, and data visualization tools.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                Passionate about solving real-world problems using technology and creating
                innovative solutions that make a difference. Always eager to learn new technologies
                and apply them to challenging projects.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
