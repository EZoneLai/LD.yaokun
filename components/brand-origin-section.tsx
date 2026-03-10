"use client";

import { motion } from "framer-motion";

export function BrandOriginSection() {
  const stats = [
    { num: "20y+", label: "遵循傳統", desc: "只收藏 2005 年以前的真正老茶。" },
    { num: "誠信", label: "追求實在", desc: "只分享我自己也喝的茶：不出天價，不搞炒作。" },
    { num: "100%", label: "純正台灣", desc: "幫您找到最棒的在地滋味，好茶就在台灣。" }
  ];

  return (
    <section id="brand-origin" className="py-32 bg-secondary text-secondary-foreground relative noise-bg border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center on-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-label">Philosophy</span>
          
          <h2 className="font-serif text-4xl md:text-6xl font-normal leading-tight mb-12 tracking-tight text-white">
           真誠的分享，<br />
           只是想讓你喝到 <span className="text-5xl md:text-7xl font-bold text-metallic ml-2 inline-block">真</span>
          </h2>

          <div className="w-24 h-1 bg-primary/30 mb-12"></div>

          <div className="space-y-8 text-2xl text-secondary-foreground/80 font-serif font-bold leading-relaxed">
           <p>
             存了二十幾年的雲南老茶，台灣自然倉。後來發現，身邊有很多人需要乾淨、真實、且喝了身心舒暢的好茶。
           </p>
           <p>
             於是有了曜寬.居——一個讓你好好喝一杯真實茶湯的地方。
           </p>
          </div>

          <div className="mt-16 border-l-8 border-primary/20 pl-10">
            <p className="font-serif italic text-3xl text-secondary-foreground leading-relaxed font-black opacity-90">
              「把自己的喜好分享給你，<br />
              在沖泡的過程中禪修，<br />
              熬煮的等待中漸入安靜，<br />
              品嚐經得起歲月沉澱，<br />
              時間的味道。」
            </p>
          </div>        </motion.div>

        <div className="flex flex-col justify-center space-y-20 tabular-nums">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start gap-8 group">
              <div className="font-serif text-[8vw] md:text-6xl lg:text-7xl text-primary/30 group-hover:text-primary transition-colors duration-500 w-auto md:w-56 text-left md:text-right shrink-0 leading-none font-black uppercase">
                {stat.num}
              </div>
              <div className="pt-2">
                <div className="text-secondary-foreground font-black tracking-widest text-3xl mb-4 uppercase">{stat.label}</div>
                <p className="text-xl text-secondary-foreground/60 font-bold leading-relaxed max-w-sm">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
