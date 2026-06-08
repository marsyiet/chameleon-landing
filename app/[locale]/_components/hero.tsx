"use client"

import Link from "next/link"
import { ArrowRight, Shield, Radar } from "lucide-react"
import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const t = useTranslations("HomePage")

  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <Shield className="h-4 w-4" />
            <span>Cyber Threat Intelligence Platform</span>
          </div>

          <h1>
            {t("hero.title")}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg max-w-sm text-muted-foreground md:text-xl">
            {t("hero.description")}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
            >
              <Link href="/sign-in">
                {t("hero.get-started")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
            >
              <Link href="/#">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6 text-left">
              <Radar className="mb-4 h-6 w-6" />

              <h3 className="font-semibold">
                Threat Intelligence
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Monitor indicators, threat actors, malware and
                emerging cyber campaigns.
              </p>
            </div>

            <div className="rounded-lg border p-6 text-left">
              <Shield className="mb-4 h-6 w-6" />

              <h3 className="font-semibold">
                Attack Surface Management
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Discover and continuously monitor exposed
                infrastructure and services.
              </p>
            </div>

            <div className="rounded-lg border p-6 text-left">
              <Shield className="mb-4 h-6 w-6" />

              <h3 className="font-semibold">
                Critical Infrastructure Protection
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Strengthen cyber resilience across government,
                telecom, energy and financial sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}