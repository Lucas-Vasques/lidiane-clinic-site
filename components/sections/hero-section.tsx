"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WHATSAPP_APPOINTMENT_URL } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="inicio" className="hero-grid overflow-hidden section-spacing">
      <div className="container-shell grid gap-3 sm:gap-x-12 sm:gap-y-5 lg:grid-cols-[1.1fr_0.9fr] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-y-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-intro space-y-8 max-sm:mx-auto max-sm:w-full max-sm:max-w-[350px] max-sm:space-y-3 max-sm:text-center lg:col-start-1 lg:row-start-2"
        >
          <Badge className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary max-sm:mx-auto max-sm:h-auto max-sm:max-w-[min(100%,320px)] max-sm:px-3 max-sm:py-1 max-sm:text-xs max-sm:leading-4 max-sm:whitespace-normal">
            Cuidado especializado para adultos e crianças
          </Badge>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl max-sm:mx-auto max-sm:max-w-[320px] max-sm:text-[30px] max-sm:leading-[1.15]">
            Vamos cuidar juntos da{" "}
            <span className="text-primary">saúde intestinal</span> da sua
            criança.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative sm:mt-7 lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:mt-0 lg:self-center"
        >
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-linear-to-br from-secondary via-white to-accent/15 blur-2xl" />

          <div className="relative mx-auto max-w-140 overflow-hidden rounded-[36px] border border-white/60 bg-white shadow-[0_30px_80px_-25px_rgba(133,135,96,0.35)] max-sm:h-[40svh] max-sm:max-h-[360px]">
            <Image
              src="/images/Main.png"
              alt="Dra. Lidiane Landim"
              width={900}
              height={1100}
              className="h-full w-full object-cover max-sm:object-[center_20%]"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-details space-y-8 max-sm:mx-auto max-sm:w-full max-sm:max-w-[350px] max-sm:space-y-4 max-sm:text-center sm:row-start-2 lg:col-start-1 lg:row-start-3 lg:mt-5"
        >
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Atendimento em gastropediatria e endoscopia digestiva com
            acolhimento, experiência acadêmica sólida e abordagem moderna
            para toda a família.
          </p>

          <div className="flex flex-col gap-4 max-sm:items-center sm:flex-row">
            <Button
              asChild
              size="lg"
              className="existing-classes min-h-11 w-full sm:w-auto"
            >
              <Link href={WHATSAPP_APPOINTMENT_URL} target="_blank">
                <MessageCircle className="mr-2 size-5" />
                Agende sua consulta pelo WhatsApp
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="existing-classes min-h-11 w-full sm:w-auto"
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
      </div>
    </section>
  );
}
