import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Stethoscope } from "lucide-react";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Quando escutar com calma muda todo o tratamento",
    excerpt:
      "Uma jornada de investigação cuidadosa em uma criança com dor abdominal recorrente, mostrando como atenção aos detalhes pode transformar o cuidado.",
    slug: "quando-escutar-com-calma-muda-o-tratamento",
    image: "/images/story-1.png",
    category: "Consulta",
    date: "08 mar 2026",
    readTime: "4 min de leitura",
  },
  {
    title: "Pequenos sinais, grandes respostas",
    excerpt:
      "Um caso que reforça a importância de avaliar sintomas persistentes com sensibilidade, clareza e acompanhamento próximo da família.",
    slug: "pequenos-sinais-grandes-respostas",
    image: "/images/story-2.png",
    category: "Gastropediatria",
    date: "06 mar 2026",
    readTime: "5 min de leitura",
  },
  {
    title: "Cuidar também é orientar a família",
    excerpt:
      "Uma história sobre acolhimento, explicação clara e construção de confiança durante o processo de diagnóstico e tratamento.",
    slug: "cuidar-tambem-e-orientar-a-familia",
    image: "/images/story-3.png",
    category: "Acompanhamento",
    date: "04 mar 2026",
    readTime: "4 min de leitura",
  },
  {
    title: "A importância de observar sintomas persistentes",
    excerpt:
      "Nem todo desconforto gastrointestinal é passageiro. Entender a duração, intensidade e frequência dos sintomas faz toda a diferença.",
    slug: "a-importancia-de-observar-sintomas-persistentes",
    image: "/images/story-1.png",
    category: "Orientação",
    date: "02 mar 2026",
    readTime: "3 min de leitura",
  },
  {
    title: "Como a escuta da família ajuda no diagnóstico",
    excerpt:
      "O acompanhamento cuidadoso dos relatos dos responsáveis pode revelar padrões importantes e acelerar o caminho até a resposta correta.",
    slug: "como-a-escuta-da-familia-ajuda-no-diagnostico",
    image: "/images/story-2.png",
    category: "Família",
    date: "28 fev 2026",
    readTime: "4 min de leitura",
  },
  {
    title: "Acolhimento, clareza e confiança no consultório",
    excerpt:
      "Explicar com calma cada etapa da investigação e do tratamento é parte essencial de um cuidado realmente humanizado.",
    slug: "acolhimento-clareza-e-confianca-no-consultorio",
    image: "/images/story-3.png",
    category: "Cuidado",
    date: "25 fev 2026",
    readTime: "3 min de leitura",
  },
];

const featuredPost = posts[0];
const latestPosts = posts.slice(1);

export default function BlogPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-background">
        <section className="section-spacing border-b border-border/60 bg-[linear-gradient(180deg,#f8fbfc_0%,#eef7fa_100%)]">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Blog
              </p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Histórias, orientações e conteúdo sobre cuidado digestivo
              </h1>

              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Um espaço para compartilhar experiências de cuidado, informação
                de qualidade e conteúdos que aproximam famílias de um atendimento
                mais humano e especializado.
              </p>

              <div className="mt-8 flex justify-center">
                <Button asChild className="rounded-full px-6">
                  <Link href="#artigos">Explorar artigos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-shell">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl bg-secondary p-3">
                <Stethoscope className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  Destaque
                </p>
                <h2 className="text-2xl font-extrabold text-foreground">
                  História em destaque
                </h2>
              </div>
            </div>

            <article className="overflow-hidden rounded-4xl border bg-white shadow-sm">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-80">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
                    {featuredPost.category}
                  </div>

                  <h3 className="mt-5 text-3xl font-extrabold leading-tight text-foreground">
                    {featuredPost.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="size-4" />
                      {featuredPost.date}
                    </span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                    >
                      Ler artigo completo
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="artigos" className="pb-20">
          <div className="container-shell">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
                  Artigos recentes
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                  Conteúdo para informar e acolher
                </h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {latestPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-[28px] border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <div className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
                      {post.category}
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug text-foreground">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="size-4" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                      >
                        Ler mais
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}