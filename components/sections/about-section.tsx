"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="quem-sou" className="section-spacing bg-white">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />

          <div className="overflow-hidden rounded-4xl border bg-slate-50 shadow-xl">
            <Image
              src="/images/Second.png"
              alt="Foto da Dra. Lidiane Landim"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary">
            Quem sou
          </Badge>

          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Dra. Lidiane Landim
            </h2>
            <p className="text-lg font-medium text-primary">
              Gastropediatria e Endoscopia Digestiva
            </p>
          </div>

          <div className="space-y-4 text-base leading-8 text-muted-foreground">
            <p>
              Especialista em Pediatria, Gastroenterologia, Nutrologia e
              Hepatologia Pediátrica, com formação em centros de excelência
              como USP e UNICAMP.
            </p>

            <p>
              Atua com endoscopia digestiva em adultos e crianças, além de
              exercer atividade acadêmica como professora universitária e
              pesquisadora.
            </p>

            <p>
              Une sólida formação técnica, experiência clínica e atendimento
              humano para oferecer um cuidado seguro, claro e acolhedor a cada
              paciente.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border bg-background p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Formação
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                USP, UNICAMP e atuação universitária
              </p>
            </div>

            <div className="rounded-3xl border bg-background p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Atendimento
              </p>
              <p className="mt-2 text-base font-semibold text-foreground">
                Adultos, crianças e acompanhamento familiar
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}