"use client"

import Link from "next/link"
import { ArrowRight, Shield, Radar, SearchIcon } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  const t = useTranslations("HomePage")

  return (
    <section className="relative overflow-hidden flex itemms-center justify-center">
      <div className="container mx-auto mt-20">
        <div className="mx-auto max-w-4xl text-center ">
          <h1>
            {t("hero.title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg max-w-sm text-muted-foreground md:text-xl">
            {t("hero.description")}
          </p>

          <Input type="text" placeholder="Rechercher des domaines, adresses, services..." 
          className="min-h-16 text-xl! mt-12 max-w-xl bg-accent"/>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="text-lg px-8! px-4!"
            >
              <p>Rechercher</p>
              <span><SearchIcon /></span>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8! px-4!"
            >
              <Link href="/#">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}