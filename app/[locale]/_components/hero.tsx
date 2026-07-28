"use client"

import Link from "next/link"
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

    <Button variant="default" asChild className="ml-1 gap-1.5 font-medium text-white">
      <Link href="/sign-in">
        {t("hero.get-started")}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Button>
  )
}