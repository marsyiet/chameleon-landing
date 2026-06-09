"use client"

import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { AppNavigationMenu } from "./navigation"
import { useTranslations } from "next-intl"

export default function Navbar() {
  const t = useTranslations("HomePage")
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/globe.svg"
            alt="Chameleon"
            className="h-8 w-8"
          />

          <span className="hidden sm:block text-lg font-semibold">
            Cameleon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          {/* <AppNavigationMenu />*/}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button
              asChild
            >
              <Link href="/sign-in">
                {t("hero.get-started")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-4">
              Menu
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}