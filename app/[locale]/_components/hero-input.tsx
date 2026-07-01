"use client"
import React, { useState } from "react"
import { ArrowRight, Search } from "lucide-react"
import { useTranslations } from "next-intl"

const HeroInput = () => {
  const [value, setValue] = useState("")
  const [focused, setFocused] = useState(false)
  const t = useTranslations("HomePage")

  return (
    <div
      className="flex items-center gap-2 rounded-2xl px-2 py-2 w-full max-w-xl transition-all duration-200"
      style={{
        background: "var(--card)",
        border: "1px solid color-mix(in oklch, var(--border) 80%, transparent)",
        boxShadow: focused
          ? "0 0 0 3px color-mix(in oklch, var(--gradient-from) 30%, transparent), 0 2px 12px color-mix(in oklch, var(--foreground) 6%, transparent)"
          : "0 2px 12px color-mix(in oklch, var(--foreground) 6%, transparent)",
      }}
    >
      <Search className="h-5 w-5 shrink-0 text-muted-foreground ml-1" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={t("hero.inputPlaceholder")}
        className="flex-1 bg-transparent font-medium outline-none placeholder:text-muted-foreground/70 py-4 px-2 min-w-0"
      />
      <button
        className="heroInputButton valenzka shrink-0 flex items-center gap-2 rounded-xl px-4 py-3 md:px-6 md:py-4 text-base md:text-lg font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
        style={{ background: "var(--gradient-primary)" }}
      >
        <span className="hidden sm:inline">{t("hero.inputButton")}</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default HeroInput