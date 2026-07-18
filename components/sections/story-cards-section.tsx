"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    title: "Quando escutar com calma muda todo o tratamento",
    excerpt:
      "Uma jornada de investigação cuidadosa em uma criança com dor abdominal recorrente, mostrando como atenção aos detalhes pode transformar o cuidado.",
    image: "/images/story-1.png",
    category: "Consulta",
    slug: "quando-escutar-com-calma-muda-o-tratamento",
  },
  {
    title: "Pequenos sinais, grandes respostas",
    excerpt:
      "Um caso que reforça a importância de avaliar sintomas persistentes com sensibilidade, clareza e acompanhamento próximo da família.",
    image: "/images/story-2.png",
    category: "Gastropediatria",
    slug: "pequenos-sinais-grandes-respostas",
  },
  {
    title: "Cuidar também é orientar a família",
    excerpt:
      "Uma história sobre acolhimento, explicação clara e construção de confiança durante o processo de diagnóstico e tratamento.",
    image: "/images/story-3.png",
    category: "Acompanhamento",
    slug: "cuidar-tambem-e-orientar-a-familia",
  },
];

export function StoryCardsSection() {
  return (
    <section className="section-spacing bg-background">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Histórias de cuidado
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Experiências reais que refletem acolhimento, atenção e confiança
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Relatos inspirados em vivências do consultório, mostrando a
            importância de um cuidado humano e individualizado.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story, index) => (
            <motion.article
              key={story.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[32px] border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
                  {story.category}
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-foreground">
                  {story.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {story.excerpt}
                </p>

                <div className="mt-6">
                  <Link
                    href={`/blog/${story.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                  >
                    Ler história completa
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Ver todas as histórias
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}