import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Check } from "lucide-react"

export function OnlineShopSection() {
  const products = [
    {
      name: "龍年古樹普洱生茶小餅",
      price: "NT$ 500",
      originalPrice: "NT$ 600",
      unit: "10入 / 包",
      description: "採自海拔 1,900 公尺古茶區。梅子香氣開場，轉為水蜜桃甜韻。耐泡 15-20 水。",
      image: "/products/longnian-raw.jpg",
      features: ["6-7g 獨立包裝，一餅一泡", "150年大葉種古樹精華", "限量 50 組"],
      href: "https://www.nonishops.com/products/%E9%BE%8D%E5%B9%B4%E5%8F%A4%E6%A8%B9%E6%99%AE%E6%B4%B1%E8%8C%B6%E5%B0%8F%E9%A4%85-10%E5%85%A5-",
    },
    {
      name: "龍年古樹普洱熟茶小餅",
      price: "NT$ 300",
      originalPrice: "NT$ 400",
      unit: "10入 / 包",
      description: "近百年古樹製作。木質陳香醇厚，口感滑順如絲。溫潤暖胃，可連續沖泡 10 次以上。",
      image: "/products/longnian-ripe.jpg",
      features: ["6-7g 完美茶量，泡茶零負擔", "傳統發酵工藝，無堆味", "限量 50 組"],
      href: "https://www.nonishops.com/products/%E9%BE%8D%E5%B9%B4%E5%8F%A4%E6%A8%B9%E6%99%AE%E6%B4%B1%E8%8C%B6%E7%86%9F%E8%8C%B6%E5%B0%8F%E9%A4%85-14%E5%85%A5-",
    },
  ]

  return (
    <section id="online-shop" className="bg-background py-24 md:py-32 noise-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header - 統一規格 */}
        <div className="text-center mb-20">
          <p className="text-base font-black tracking-[0.3em] uppercase text-primary mb-6">
            Best Sellers
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal mb-6 text-center tracking-tight">
            <span className="text-metallic">龍年限定</span>
            <span className="text-foreground">古樹小茶餅</span>
          </h2>
          <p className="text-xl md:text-2xl tracking-[0.25em] text-primary-dark uppercase font-serif mb-8">
            Signature Ancient Tree Mini Cakes
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-bold">
            來自雲南 1900 公尺高山，一餅一泡，鎖住新鮮。
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <article
              key={index}
              className="group bg-white rounded-sm border border-border overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/10] relative overflow-hidden bg-muted/10">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-black tracking-widest shadow-lg">Sale</span>
                </div>
                <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>

              <div className="p-10">
                <h3 className="font-serif text-3xl text-foreground mb-4 font-bold">{product.name}</h3>
                <div className="flex items-baseline gap-4 mb-2">
                  <p className="text-metallic text-3xl font-black">{product.price}</p>
                  <p className="text-lg text-muted-foreground line-through italic">{product.originalPrice}</p>
                  <span className="ml-auto text-primary font-bold">{product.unit}</span>
                </div>
                <p className="text-lg text-black leading-relaxed mb-8 border-l-4 border-primary/20 pl-6">{product.description}</p>
                <div className="space-y-4 mb-10">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-foreground/80 font-bold">
                      <Check className="text-primary w-5 h-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={product.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 btn-metallic text-primary-foreground py-4 text-lg font-black tracking-widest rounded-sm shadow-xl">
                  前往商城購買
                  <ExternalLink size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
