import Link from "next/link"

export function Footer() {
  const navigation = [
    { label: "極致反差", href: "#contrast" },
    { label: "品牌初衷", href: "#brand-origin" },
    { label: "專業服務", href: "#experience" },
    { label: "精品茶選", href: "#shop" },
  ]

  const contact = [
    { label: "台北市士林區大南路", href: "#access" },
    { label: "預約制・專屬茶席", href: "https://liff.line.me/2005749792-3dA04B1r" },
  ]

  return (
    <footer className="bg-secondary py-20 md:py-32 border-t border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-8 lg:px-10 on-dark relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <h3 className="text-metallic font-serif text-4xl font-black tracking-widest">曜寬.居</h3>
            <p className="text-xl text-secondary-foreground/70 leading-relaxed font-bold max-w-sm">
              二十年歲月陳韻，獻給在都會喧囂中渴求片刻靜謐的你。安於心寬，盞現真實。
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="#"
                className="text-lg text-secondary-foreground/60 hover:text-primary transition-colors font-black tracking-widest"
              >
                Instagram
              </Link>
              <Link
                href="https://page.line.me/815ndzxp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-metallic px-6 py-2.5 text-base rounded-full shadow-xl"
              >
                官方Line
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:pl-12">
            <h4 className="text-xl font-black tracking-[0.2em] uppercase text-primary mb-10 border-b border-primary/20 pb-4 inline-block">
              內容導覽
            </h4>
            <ul className="space-y-6">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-lg text-secondary-foreground/70 hover:text-primary transition-colors font-bold tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black tracking-[0.2em] uppercase text-primary mb-10 border-b border-primary/20 pb-4 inline-block">
              聯絡資訊
            </h4>
            <ul className="space-y-6">
              {contact.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-lg text-secondary-foreground/70 hover:text-primary transition-colors font-bold tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-sm text-secondary-foreground/40 font-bold tracking-widest uppercase">
              &copy; 2026 曜寬.居 LD.yaokun. All Rights Reserved.
            </p>
            <p className="text-xs text-secondary-foreground/30 font-bold tracking-widest uppercase">
              Design & Tech by{" "}
              <Link
                href="https://www.longsuntech.com.tw/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300 underline underline-offset-4"
              >
                LONGSUN TECHNOLOGY 容晟科技
              </Link>
            </p>
          </div>
          <p className="text-lg text-primary/60 font-serif font-black tracking-[0.3em] uppercase">
            心寬則曜，隱於士林
          </p>
        </div>
      </div>
    </footer>
  )
}
