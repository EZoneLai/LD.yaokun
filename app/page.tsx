import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ContrastSection } from "@/components/contrast-section"
import { BrandOriginSection } from "@/components/brand-origin-section"
import { ExperienceSection } from "@/components/experience-section"
import { ShopSection } from "@/components/shop-section"
import { OnlineShopSection } from "@/components/online-shop-section"
import { GallerySection } from "@/components/gallery-section"
import { AccessSection } from "@/components/access-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ContrastSection />
      <BrandOriginSection />
      <ExperienceSection />
      <ShopSection />
      <OnlineShopSection />
      <GallerySection />
      <AccessSection />
      <Footer />
    </main>
  )
}
