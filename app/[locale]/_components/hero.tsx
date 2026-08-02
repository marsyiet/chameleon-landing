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
export default function Hero({className}: {className?: string}) {
  const t = useTranslations("HomePage")
  return (
    <div className={className}>
      <div className="relative lg:min-h-screen overflow-hidden">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          className="object-cover -z-20"
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <div
          className="absolute inset-0 opacity-20 -z-10"
          style={{ background: "var(--gradient-primary)" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:min-h-screen">
          <div className="flex flex-col p-8 justify-center gap-8">
            <h1 className="font-semibold max-w-6xl text-white">{t("hero.title")}</h1>
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

      {/* Bandeau institutionnel : hors image, sur fond neutre */}
      <div className="border-t bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-8 py-16 text-center">
          <p className="max-w-2xl text-sm text-muted-foreground">
            {t("hero.disclaimer")}
          </p>

          <div className="flex items-center gap-8">
            {partnerLogos.map((logo) => (
              <Link
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={40}
                  className="h-20 w-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}