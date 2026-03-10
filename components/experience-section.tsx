"use client";

import { motion } from "framer-motion";

export function ExperienceSection() {
  const services = [
    { id: "01", title: "茶味品評", price: "$680", desc: "教學如何品評", detail: "從觀色、聞香到品味，系統化帶您進入老茶的感官世界。" },
    { id: "02", title: "私人識茶", price: "$663", desc: "店內現有茶款試喝", detail: "根據您的喜好，挑選店內收藏的高品質老茶進行試飲。" },
    { id: "03", title: "茶香調酒體驗", price: "$780", desc: "內含兩杯調酒", detail: "將老茶的陳韻融入現代調酒工藝，體驗味覺的微妙轉化。" },
    { id: "04", title: "茶參數測試服務", price: "$1660", desc: "協助測試規劃沖泡參數", detail: "專業茶器與經驗結合。為您的藏茶找出最佳沖泡參數。" }
  ];

  return (
    <section id="experience" className="py-32 bg-card text-card-foreground relative noise-bg border-t border-border">
      <div className="section-inner max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-label">Tea Rituals</motion.span>
          <h2 className="font-serif text-4xl md:text-6xl font-normal mb-8 text-foreground tracking-tight">
            茶之章：<span className="text-primary italic">味・香・醇</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold leading-relaxed text-foreground/80 max-w-3xl mx-auto">
            從味覺到調酒，由茶開啟。<br />我們提供多維度的專業茶事服務，邀請您細品每一刻時光。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((item, idx) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group p-10 border border-border hover:border-primary/40 transition-all duration-500 rounded-sm bg-white shadow-sm hover:shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="font-serif text-5xl text-primary/20 group-hover:text-primary transition-colors duration-500 block mb-2">{item.id}</span>
                  <h3 className="text-2xl md:text-3xl font-serif text-secondary font-black tracking-wide">{item.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif text-primary font-black tracking-tighter">{item.price}</span>
                </div>
              </div>
              <p className="text-primary font-black text-base mb-4 tracking-widest uppercase">{item.desc}</p>
              <p className="text-secondary font-bold text-lg leading-relaxed mb-10 opacity-80">{item.detail}</p>
              <a href="https://liff.line.me/2005749792-3dA04B1r" target="_blank" rel="noopener noreferrer" className="btn-metallic px-8 py-3 text-center block rounded-sm shadow-lg text-sm">立即預約席位</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
