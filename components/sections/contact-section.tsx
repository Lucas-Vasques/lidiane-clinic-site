"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

const officeImages = [
  "/images/Clinic-1.png",
  "/images/Clinic-2.png",
  "/images/Clinic-3.png",
  "/images/Clinic-4.png",
];

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-spacing relative overflow-hidden bg-[linear-gradient(135deg,#858760_0%,#686a49_100%)] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(220,128,93,0.18),transparent_28%)]" />
      <div className="container-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">
                Contato
              </p>

              <h2 className="max-w-xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Agendamento fácil, rápido e acolhedor
              </h2>

              <p className="max-w-xl text-base leading-8 text-white/80 md:text-lg">
                Entre em contato para agendar consultas e saber mais sobre o
                atendimento. Um espaço pensado para receber famílias com conforto,
                clareza e atenção em cada detalhe.
              </p>
            </div>

            <div className="space-y-4">
              <Link
                href="https://wa.me/message/CDM4GY5YCUKUA1"
                target="_blank"
                className="group flex items-center gap-4 rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:bg-white/15"
              >
                <div className="rounded-2xl bg-white/15 p-3 transition group-hover:bg-white/20">
                  <MessageCircle className="size-6" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-xl font-semibold">
                    (85) 99215-7396
                  </p>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/lidianegastropediatra?igsh=MTR4ZzhtNm8xN2NoYQ%3D%3D&utm_source=qr"
                target="_blank"
                className="group flex items-center gap-4 rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-300 hover:bg-white/15"
              >
                <div className="rounded-2xl bg-white/15 p-3 transition group-hover:bg-white/20">
                  <Instagram className="size-6" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                    Instagram
                  </p>
                  <p className="mt-1 text-xl font-semibold">
                    Siga o perfil profissional
                  </p>
                </div>
              </Link>

              <div className="rounded-[28px] border border-white/15 bg-white/10 p-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-white/15 p-3">
                    <MapPin className="size-6" />
                  </div>

                  <div className="space-y-2 text-white/90">
                    <p className="text-sm uppercase tracking-[0.18em] text-white/70">
                      Endereço
                    </p>
                    <p className="text-lg font-semibold">
                      Av. Santos Dumont, 1510 — Sala 409
                    </p>
                    <p>Edifício Manhattan Square Garden, Aldeota</p>
                    <p>Fortaleza / CE — CEP 60150-161</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 24 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
  className="space-y-5"
>
  <div>
    <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">
      Clínica
    </p>

    <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
      Conheça o espaço
    </h3>
  </div>

  <div className="grid grid-cols-2 gap-4">
    {officeImages.map((src, index) => (
      <div
        key={src}
        className="group relative aspect-4/3 overflow-hidden rounded-[30px] border border-white/15 bg-white/10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.4)] backdrop-blur-md"
      >
        <Image
          src={src}
          alt={`Imagem do consultório ${index + 1}`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </div>
    ))}
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}
