"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const stats = [
    { value: "50+", label: "老茶收藏" },
    { value: "20y", label: "藏茶年份" },
  ];

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-tea-amber overflow-hidden">
      {/* 噪點層置於背景漸層之上，文字之下 */}
      <div className="absolute inset-0 z-0 noise-bg opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center pt-[10vh] on-dark">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* 品牌標籤 */}
          <div className="mb-12">
            <p className="text-primary text-2xl font-black tracking-[0.4em] uppercase mb-4">Since 1995</p>
            <div className="w-16 h-0.5 bg-primary/40 mx-auto"></div>
          </div>

          {/* 巨大金屬標題 */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-tight mb-12 tracking-wider">
            <span className="text-secondary-foreground">時光的</span>
            <span className="text-metallic font-black">厚度</span>
            <br />
            <span className="text-secondary-foreground">舌尖上的陳香</span>
          </h1>

          {/* 大字體副標題 */}
          <p className="text-2xl md:text-3xl text-secondary-foreground/80 max-w-4xl mx-auto mb-20 font-serif leading-relaxed font-bold">
            專注於二十年以上老茶收藏，在曜寬.居，我們不只品茶，<br className="hidden md:block" />
            更是在品味一段被封存的歲月。
          </p>

          {/* 金屬按鈕 */}
          <div className="mb-24">
            <Link
              href="https://liff.line.me/2005749792-3dA04B1r"
              className="btn-metallic inline-block px-20 py-6 rounded-sm text-2xl tracking-[0.2em]"
            >
              預約今日茶席
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 捲動引導 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" 
        />
      </div>
    </header>
  );
}
