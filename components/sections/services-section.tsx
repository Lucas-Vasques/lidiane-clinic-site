"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="consultas" className="section-spacing bg-background">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Consultas</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Consultas e áreas de atuação
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Áreas de atuação organizadas de forma clara, com linguagem acolhedora.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-[28px] border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary transition group-hover:bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
