import Image from "next/image"

export function ShopSection() {
  const puerCollection = [
    {
      name: "1980年班禪景茶",
      type: "生緊茶",
      price: "NT$ 4,000",
      weight: "250g",
      tag: "稀世珍品",
      image: "/products/1980-panchen.jpg",
      highlight: true,
    },
    {
      name: "2000雲南江城圓茶春尖",
      type: "生餅",
      price: "NT$ 6,500",
      weight: "357g",
      tag: "頂級江城野韻",
      image: "/products/2000-jiangcheng.jpg",
      highlight: true,
    },
    {
      name: "1996年易武大樹散茶",
      type: "生散茶",
      price: "NT$ 4,200",
      weight: "200g",
      tag: "易武經典",
      image: "/products/1996-yiwu-pro.jpg",
    },
    {
      name: "1997年景谷磚",
      type: "熟磚",
      price: "NT$ 3,500",
      weight: "250g",
      tag: "紅濃明亮",
      image: "/products/1997-jinggu.jpg",
    },
    {
      name: "2000年7581熟磚",
      type: "熟磚",
      price: "NT$ 2,500",
      weight: "250g",
      tag: "二十五年熟香",
      image: "/products/2002-7581-pro.jpg", // 暫用商攝圖
    },
    {
      name: "2002年7581熟磚",
      type: "熟磚",
      price: "NT$ 2,000",
      weight: "250g",
      tag: "二十餘年熟香",
      image: "/products/2002-7581-pro.jpg",
    },
  ]

  const taiwanCollection = [
    {
      name: "蜜香貴妃茶",
      type: "紅茶",
      price: "NT$ 2,000",
      weight: "150g",
      tag: "極致蜜香",
      image: "/products/tw-guifei-pro.jpg",
    },
    {
      name: "日月潭著唌紅玉紅茶",
      type: "紅玉紅茶",
      price: "NT$ 2,000",
      weight: "75g",
      tag: "珍稀著唌",
      image: "/products/tw-hongyu-bug-pro.jpg",
    },
    {
      name: "阿里山烏龍茶",
      type: "烏龍茶",
      price: "NT$ 600",
      weight: "150g",
      tag: "高山氣韻",
      image: "/products/tw-alishan-pro.jpg",
    },
    {
      name: "龍眼木功夫焙茶",
      type: "焙茶",
      price: "NT$ 800",
      weight: "75g",
      tag: "木炭焙火",
      image: "/products/tw-longan-pro.jpg",
    },
  ]

  return (
    <section id="shop" className="relative bg-secondary py-24 md:py-32 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0">
        <Image
          src="/images/texture-dark.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 on-dark">
        {/* Puer Collection */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <p className="text-base font-medium tracking-[0.25em] uppercase text-primary mb-6">
              The Aged Collection
            </p>
            <h2 className="text-metallic font-serif text-4xl md:text-6xl font-normal mb-10 text-center">
              雲南普洱收藏
            </h2>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto text-center">
              二十年至四十年的時光沉澱，從班禪緊茶到江城春尖，
              <br className="hidden md:block" />
              每一口都是大地與歲月的濃縮。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {puerCollection.map((tea, index) => (
              <TeaCard key={index} tea={tea} />
            ))}
          </div>
        </div>

        {/* Taiwan Collection */}
        <div>
          <div className="text-center mb-16">
            <p className="text-base font-medium tracking-[0.25em] uppercase text-primary mb-6 text-center">
              Pure Formosa
            </p>
            <h2 className="text-metallic font-serif text-4xl md:text-6xl font-normal mb-10 text-center">
              台灣名茶系列
            </h2>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto text-center">
              產自台灣最高海拔的純粹，感受高山氣韻與傳統焙火工藝，
              <br className="hidden md:block" />
              盞現純正的島嶼茶香。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {taiwanCollection.map((tea, index) => (
              <TeaCard key={index} tea={tea} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TeaCardProps {
  tea: {
    name: string
    type: string
    price: string
    weight: string
    tag: string
    image: string
    highlight?: boolean
  }
  compact?: boolean
}

function TeaCard({ tea, compact }: TeaCardProps) {
  return (
    <div
      className={`group bg-card/5 border border-primary/20 rounded-sm p-6 hover:border-primary/50 transition-all duration-300 hover:bg-card/10 flex flex-col ${
        compact ? "" : ""
      }`}
    >
      {/* Image Area */}
      <div className="aspect-[4/3] relative overflow-hidden bg-black/20 mb-6 rounded-sm">
        <Image
          src={tea.image}
          alt={tea.name}
          fill
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3 right-3">
          <span className="text-xs px-3 py-1 bg-primary text-primary-foreground rounded-sm shadow-lg font-bold">
            {tea.tag}
          </span>
        </div>
      </div>

      {/* Type */}
      <p className="text-base text-primary/70 tracking-wide mb-2 font-bold">
        {tea.type}
      </p>

      {/* Name */}
      <h3 className={`font-serif text-secondary-foreground mb-4 font-bold flex-grow ${compact ? "text-xl h-14" : "text-2xl h-16"} line-clamp-2`}>
        {tea.name}
      </h3>

      {/* Price */}
      <div className="pt-4 border-t border-primary/20 flex items-baseline justify-between">
        <p className="text-metallic text-2xl font-bold">
          {tea.price}
        </p>
        <p className="text-base text-secondary-foreground/60 font-bold">
          / {tea.weight}
        </p>
      </div>
    </div>
  )
}
