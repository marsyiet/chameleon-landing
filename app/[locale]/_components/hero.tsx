"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
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
    <div className="relative min-h-screen">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="flex flex-col p-8 justify-center gap-8">
          <h1 className="font-semibold max-w-3xl text-white">{t("hero.title")}</h1>
          <p className="text-xl max-w-lg text-white/80">{t("hero.description")}</p>
          <Button variant="default" asChild className="ml-1 gap-1.5 w-fit font-medium text-white">
            <Link href="/sign-in">
              {t("hero.get-started")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  )
}