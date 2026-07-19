"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-grid overflow-hidden section-spacing">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <Badge className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary">
            Cuidado especializado para adultos e crianças
          </Badge>

          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Vamos cuidar juntos da{" "}
              <span className="text-primary">saúde intestinal</span> da sua
              criança.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Atendimento em gastropediatria e endoscopia digestiva com
              acolhimento, experiência acadêmica sólida e abordagem moderna
              para toda a família.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="existing-classes w-full sm:w-auto"
            >
              <Link href="https://wa.me/message/CDM4GY5YCUKUA1" target="_blank">
                <MessageCircle className="mr-2 size-5" />
                Agende sua consulta pelo WhatsApp
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="existing-classes w-full sm:w-auto"
            >
              <Link href="#consultas">Ver áreas de atuação</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-secondary p-3">
                  <Stethoscope className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">
                    Gastropediatria especializada
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Condutas baseadas em experiência clínica e acadêmica.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-secondary p-3">
                  <ShieldCheck className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Atendimento humanizado</p>
                  <p className="text-sm text-muted-foreground">
                    Cuidado acolhedor para crianças, adultos e responsáveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-linear-to-br from-secondary via-white to-accent/15 blur-2xl" />

          <div className="relative mx-auto max-w-140 overflow-hidden rounded-[36px] border border-white/60 bg-white shadow-[0_30px_80px_-25px_rgba(23,120,155,0.35)]">
<Image
  src="/images/Main.png"
  alt="Dra. Lidiane Landim"
  width={900}
  height={1100}
  className="h-full w-full object-cover"
  priority
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}