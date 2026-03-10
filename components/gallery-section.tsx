import Image from "next/image"

export function GallerySection() {
  const images = [
    { src: "/space/yaokun-seat.jpg", alt: "曜寬.居 真實茶席實境", span: "lg:col-span-2 lg:row-span-2" },
    { src: "/space/space-detail-1.jpg", alt: "茶席細節", span: "col-span-1" },
    { src: "/space/space-detail-2.jpg", alt: "茶具與氛圍", span: "col-span-1" },
    { src: "/products/2000-7581-brick.jpg", alt: "2000年 7581 熟磚實體", span: "col-span-1" },
    { src: "/products/1980-panchen.jpg", alt: "班禪緊茶實體", span: "col-span-1" },
    { src: "/products/honey-concubine.jpg", alt: "蜜香貴妃烏龍茶實體", span: "col-span-1" },
  ];

  return (
    <section id="gallery" className="bg-secondary py-24 md:py-32 relative overflow-hidden noise-bg">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 on-dark">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-base font-black tracking-[0.25em] uppercase text-primary mb-6">
              The Tea Space
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-normal leading-tight">
              <span className="text-secondary-foreground">隱於士林的</span>
              <br />
              <span className="text-metallic font-black">時光茶席</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-xl text-secondary-foreground/70 leading-relaxed font-bold">
              不需要飛往京都，也不需要等待週末的山行。在士林大南路的某個二樓，一段樓梯的距離，足以隔絕人間煙火，盞現您的專屬靜謐。
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-sm overflow-hidden border border-primary/10 group ${img.span} shadow-2xl`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="font-serif text-lg italic tracking-widest text-white font-bold">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-20 pt-12 border-t border-primary/20">
          <p className="text-metallic font-serif text-3xl md:text-4xl font-black tracking-widest uppercase">
            「心寬則曜，隱於市，安於心。」
          </p>
        </div>
      </div>
    </section>
  )
}
