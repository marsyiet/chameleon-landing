"use client"
import Link from "next/link"
import { ArrowRight, Shield, Radar, SearchIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import HeroInput from "./hero-input"

const partnerLogos = [
  {
    name: "ENSPY",
    src: "/logos/polytech.png",
    href: "https://polytechnique.cm",
  },
  {
    name: "ANTIC",
    src: "/logos/antic.jpg",
    href: "https://www.antic.cm",
  },
]

export default function Hero() {
  const t = useTranslations("HomePage")
  return (
    <section className="h-dvh">
      <div
        className="relative h-full flex justify-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay pour lisibilité du texte */}
        <div className="absolute inset-0 bg-background/70 backdrop-blur-xs" />

        <div className="relative container mx-auto mt-25">
          <div className="flex items-center justify-center text-center p-5 flex-col gap-10 mx-auto max-w-4xl">
            <h1 className="valenzka max-w-4xl">
              {t("hero.title")}
            </h1>
            <h5 className="max-w-lg">
              {t("hero.description")}
            </h5>
            <HeroInput />
          </div>
        </div>
      </div>

      <div className="border-t bg-card px-4 py-10">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-5">
          <div className="flex items-center gap-10 flex-wrap justify-center">
            {partnerLogos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-80 transition-opacity duration-200 grayscale hover:grayscale-0"
              >
                <img src={logo.src} alt={logo.name} className="h-20 object-contain" />
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-lg leading-relaxed">
            Ce travail est réalisé dans le cadre d'un mémoire de fin d'études en cybersécurité.
            Il constitue un projet académique à visée démonstrative et ne représente pas un produit commercial.
          </p>
        </div>
      </div>
    </section>
  )
}