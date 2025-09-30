"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Globe, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { VisuallyHidden } from "@/components/ui/visually-hidden"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { LanguageSelector } from "@/components/language-selector"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.partners'), href: "#partners" },
    { name: t('nav.games'), href: "#games" },
    { name: t('nav.news'), href: "#news" },
    { name: t('nav.contact'), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle smooth scrolling for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Check if the href is an anchor link
    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)

      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2 border-b border-border" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          
           <Image alt="logo" src="opacNoLetters.png" width={100} height={100} className="w-16 h-16"/>
          
          <span className={`font-bold text-xl ${isScrolled ? "text-foreground" : "text-black"}`}>Game&apos;Lusive</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? "text-muted-foreground" : "text-black"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSelector isScrolled={isScrolled} />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`${isScrolled ? "text-foreground" : "text-black"}`}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <VisuallyHidden>
                <SheetTitle>{t('nav.changeLanguage')}</SheetTitle>
              </VisuallyHidden>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-purple-100">
                      <Gamepad2 className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-bold text-xl">Game&apos;Lusive</span>
                  </div>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col py-8 gap-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleAnchorClick(e, link.href)}
                        className="text-lg font-medium transition-colors hover:text-purple-600 px-2"
                      >
                        {link.name}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-4 py-6 border-t">
                  <LanguageSelector variant="mobile" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
