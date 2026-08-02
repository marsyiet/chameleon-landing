"use client"

import { Check, ChevronDown } from "lucide-react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  {
    code: "en",
    label: "English",
    flag: "🇬🇧",
  },
  {
    code: "fr",
    label: "Français",
    flag: "🇫🇷",
  },
]

export function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/")

    if (languages.some((lang) => lang.code === segments[1])) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }

    router.push(segments.join("/"))
  }

  const current = languages.find((lang) => lang.code === locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <span className="text-base leading-none">{current?.flag}</span>
          <span className="text-sm font-medium">{current?.label}</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
          >
            <span className="flex flex-1 items-center gap-2">
              <span className="text-base leading-none">{language.flag}</span>
              <span className="flex-1">{language.label}</span>

              {locale === language.code && (
                <Check className="h-4 w-4" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}