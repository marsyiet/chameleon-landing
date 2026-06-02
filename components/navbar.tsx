"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { AppNavigationMenu } from "./navigation"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.svg"
            alt="Chameleon"
            className="h-8 w-8"
          />

          <span className="hidden sm:block text-lg font-semibold">
            Chameleon
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <AppNavigationMenu />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button size="sm">Get Started</Button>
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
              <div className="mt-8 flex flex-col gap-4">
                <Link href="/platform">
                  Platform
                </Link>

                <Link href="/threat-intelligence">
                  Threat Intelligence
                </Link>

                <Link href="/asm">
                  Attack Surface
                </Link>

                <Link href="/solutions">
                  Solutions
                </Link>

                <Link href="/pricing">
                  Pricing
                </Link>

                <Link href="/docs">
                  Documentation
                </Link>

                <div className="mt-4 border-t pt-4">
                  <LanguageToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}