"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-95"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border/60 bg-white shadow-sm">
              <Image
                src="/images/Logo-icon 1.png"
                alt="Logo Dra. Lidiane Landim"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="truncate font-heading text-lg font-extrabold leading-none text-primary sm:text-xl">
                Dra. <span className="text-accent">Lidiane</span> Landim
              </p>
              <p className="mt-1 truncate text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">
                Gastropediatria e Endoscopia Digestiva
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => {
              const isBlog = item.href === "/blog";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition ${
                    isBlog
                      ? "rounded-full bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/80"
                      : "text-foreground/85 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              className="rounded-full px-5 shadow-lg shadow-primary/20"
            >
              <Link href="https://wa.me/message/CDM4GY5YCUKUA1" target="_blank">
                <MessageCircle className="mr-2 size-4" />
                Agendar consulta
              </Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[88vw] max-w-sm px-6">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu de navegação</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex items-center gap-3 border-b border-border pb-6">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-border/60 bg-white shadow-sm">
                  <Image
                    src="/images/Logo-icon 1.png"
                    alt="Logo Dra. Lidiane Landim"
                    fill
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <p className="font-heading text-lg font-extrabold leading-none text-primary">
                    Dra. <span className="text-accent">Lidiane</span> Landim
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Gastropediatria
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl px-3 py-3 text-base font-semibold text-foreground transition hover:bg-muted hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <Button asChild className="w-full rounded-full">
                  <Link href="https://wa.me/5585992157396" target="_blank">
                    <MessageCircle className="mr-2 size-4" />
                    Agendar consulta
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}