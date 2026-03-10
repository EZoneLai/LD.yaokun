"use client";

import { motion } from "framer-motion";

export function ContrastSection() {
  return (
    <section id="contrast" className="py-32 bg-secondary text-secondary-foreground relative noise-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10 on-dark">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-label">Contrast</span>
          <h2 className="font-serif text-4xl md:text-6xl font-normal leading-tight mb-10 tracking-tight text-white">
            門外是人間煙火，<br />門內是你的 <span className="text-metallic">專屬靜謐</span>
          </h2>
          
          <div className="border-l-8 border-primary/40 pl-10 mb-12">
            <p className="text-2xl md:text-3xl text-metallic font-serif leading-relaxed opacity-90 font-bold uppercase tracking-widest">
              同一棟樓，兩個世界。<br />一段樓梯，足以隔絕所有噪音。
            </p>
          </div>

          <div className="space-y-8 text-xl md:text-2xl text-secondary-foreground/70 leading-loose font-bold opacity-90">
            <p>
              很多人第一次聽到「士林夜市二樓」，會直覺地跳過。
            </p>
            <p>
              推開二樓那扇門的瞬間，你會明白：有時候，城市最安靜的地方，恰好藏在最熱鬧的角落正上方。
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="hidden lg:flex justify-center pt-[20vh]"
        >
          <div className="w-[30rem] h-[30rem] rounded-full border-[6px] border-primary/40 flex items-center justify-center relative shadow-[0_0_100px_rgba(196,163,90,0.25)] overflow-hidden">
            {/* 內向暈光層：模擬光線向內匯聚，照亮中心文字 */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(196,163,90,0.15)_85%,rgba(196,163,90,0.3)_100%)]"></div>
            
            <div className="absolute inset-14 rounded-full border-2 border-primary/20 animate-logo-breath"></div>
            <div className="text-center font-serif text-4xl tracking-[0.8em] text-metallic leading-[2.2] translate-x-4 font-black relative z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              心<br />寬<br />則<br />曜
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
