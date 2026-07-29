"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  investigatedConditions,
  performedExams,
  WHATSAPP_APPOINTMENT_URL,
} from "@/lib/data";
import { CheckCircle2, MessageCircle } from "lucide-react";

export function ExamsSection() {
  return (
    <section id="exames" className="section-spacing bg-[linear-gradient(180deg,#fff_0%,#f7f1ea_100%)]">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#f28a1a]">Exames</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Exames realizados
            </h2>
          </div>

          <div className="grid gap-4">
            {performedExams.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#f28a1a]" />
                <p className="text-base leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Condições investigadas
            </h3>
            <div className="mt-4 grid gap-4">
              {investigatedConditions.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#f28a1a]" />
                  <p className="text-base leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Button asChild size="lg" className="min-h-11 rounded-full bg-[#f28a1a] px-8 text-base text-white hover:bg-[#db7a12]">
            <Link href={WHATSAPP_APPOINTMENT_URL} target="_blank">
              <MessageCircle className="mr-2 size-5" />
              Agende sua consulta
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="overflow-hidden rounded-4xl border bg-white shadow-xl">
            <Image
              src="/images/Fifth.png"
              alt="Dra. Lidiane Landim com paciente"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
