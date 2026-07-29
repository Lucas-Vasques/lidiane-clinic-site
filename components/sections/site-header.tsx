"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, WHATSAPP_APPOINTMENT_URL } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-2xl">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 transition-opacity hover:opacity-95 sm:block"
          >
            <Image
              src="/brand/lidiane-logo-horizontal.png"
              alt=""
              width={989}
              height={246}
              className="hidden h-14 w-auto max-w-[225px] object-contain sm:block xl:max-w-[245px]"
              priority
            />
            <Image
              src="/brand/lidiane-logo-symbol.png"
              alt=""
              width={262}
              height={283}
              className="h-11 w-auto shrink-0 object-contain sm:hidden"
              priority
            />
            <span className="min-w-0 sm:sr-only">
              <span className="block truncate text-sm font-bold leading-tight">
                Dra. Lidiane Landim
              </span>
              <span className="hidden truncate text-[10px] leading-tight text-muted-foreground min-[390px]:block">
                Gastropediatria e Endoscopia Digestiva
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-foreground/85 transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              asChild
              className="min-h-11 rounded-full px-5 shadow-lg shadow-primary/20"
            >
              <Link href={WHATSAPP_APPOINTMENT_URL} target="_blank">
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
                className="size-11 rounded-full lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[88vw] max-w-sm px-6">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu de navegação</SheetTitle>
              </SheetHeader>

              <div className="mt-8 border-b border-border pb-6">
                <Image
                  src="/brand/lidiane-logo-horizontal.png"
                  alt=""
                  width={989}
                  height={246}
                  className="h-auto w-full max-w-[260px] object-contain"
                />
                <span className="sr-only">
                  Dra. Lidiane Landim — Gastropediatria
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {navLinks.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-2xl px-3 py-3 text-base font-semibold text-foreground transition hover:bg-muted hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <Button asChild className="min-h-11 w-full rounded-full">
                  <Link href={WHATSAPP_APPOINTMENT_URL} target="_blank">
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
