"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#shop", label: "老茶收藏" },
    { href: "#experience", label: "專業服務" },
    { href: "#gallery", label: "美學空間" },
    { href: "#access", label: "尋訪指引" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="曜寬.居"
              width={40}
              height={40}
              className="h-8 w-auto md:h-10 md:w-auto transition-all duration-500 group-hover:scale-110 object-contain"
            />
            <span className="text-metallic font-serif text-2xl font-medium tracking-wide">
              曜寬.居
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="https://liff.line.me/2005749792-3dA04B1r"
            className="hidden md:inline-flex btn-metallic text-primary-foreground px-6 py-2.5 text-base font-medium tracking-wide rounded-sm"
          >
            預約品茗
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="https://liff.line.me/2005749792-3dA04B1r"
                  className="inline-flex btn-metallic text-primary-foreground px-6 py-3 text-base font-medium tracking-wide rounded-sm"
                >
                  預約品茗
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
