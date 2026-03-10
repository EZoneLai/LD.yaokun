import Link from "next/link"

export function AccessSection() {
  const steps = [
    {
      number: "01",
      title: "地址資訊",
      content: "台北市士林區大南路",
      note: "詳細地址預約後告知",
    },
    {
      number: "02",
      title: "交通方式",
      content: "捷運劍潭站 1 號出口",
      note: "步行約 8-10 分鐘",
    },
    {
      number: "03",
      title: "推開那扇門",
      content: "抵達一樓入口後，請撥打預約確認函中的電話",
      note: "我們將為您開啟通往靜謐的樓梯",
    },
  ]

  return (
    <section id="access" className="bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <p className="text-base font-medium tracking-[0.25em] uppercase text-primary mb-6">
              Visit Us
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-normal text-foreground mb-10">
              尋訪指引
            </h2>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  {/* Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center">
                    <span className="text-primary text-base font-medium">
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-foreground mb-1">
                      {step.content}
                    </p>
                    <p className="text-base text-muted-foreground">
                      {step.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="https://liff.line.me/2005749792-3dA04B1r"
                className="inline-flex btn-metallic text-primary-foreground px-10 py-4 text-lg font-medium tracking-wide rounded-sm"
              >
                預約今日茶席
              </Link>
              <Link
                href="https://maps.app.goo.gl/iZr2ogyTo1BwdUCJ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/40 text-primary px-10 py-4 text-lg font-medium rounded-sm hover:bg-primary/5 transition-all"
              >
                開啟導航
              </Link>
            </div>
          </div>

          {/* Right - Map Placeholder */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="aspect-square bg-muted rounded-sm border border-border overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.421441414141!2d121.5245!3d25.0885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a94999999999%3A0x9999999999999999!2z5p曜5a-sLuWxpQ!5e0!3m2!1szh-TW!2stw!4v1710000000000!5m2!1szh-TW!2stw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.9)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
