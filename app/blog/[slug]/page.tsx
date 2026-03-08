import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

const posts = [
  {
    title: "Quando escutar com calma muda todo o tratamento",
    excerpt:
      "Uma jornada de investigação cuidadosa em uma criança com dor abdominal recorrente, mostrando como atenção aos detalhes pode transformar o cuidado.",
    slug: "quando-escutar-com-calma-muda-o-tratamento",
    image: "/images/story-1.png",
    category: "Consulta",
    date: "08 mar 2026",
    content: [
      "Cada paciente chega ao consultório com uma história única. Muitas vezes, sintomas que parecem pequenos ou passageiros escondem um padrão que precisa ser observado com calma.",
      "Em situações como dor abdominal recorrente, a escuta cuidadosa da criança e da família ajuda a organizar melhor os sinais, entender a evolução do quadro e definir o melhor caminho para investigação.",
      "Mais do que tratar sintomas isolados, o objetivo é construir clareza, segurança e confiança durante todo o processo de cuidado.",
    ],
  },
  {
    title: "Pequenos sinais, grandes respostas",
    excerpt:
      "Um caso que reforça a importância de avaliar sintomas persistentes com sensibilidade, clareza e acompanhamento próximo da família.",
    slug: "pequenos-sinais-grandes-respostas",
    image: "/images/story-2.png",
    category: "Gastropediatria",
    date: "06 mar 2026",
    content: [
      "Alguns quadros começam com sinais discretos, mas persistentes. Por isso, observar frequência, intensidade e contexto dos sintomas faz diferença.",
      "A avaliação cuidadosa permite identificar quando é hora de tranquilizar, quando é preciso investigar mais e como orientar a família com clareza.",
      "O acompanhamento próximo ajuda a transformar incerteza em direção segura.",
    ],
  },
  {
    title: "Cuidar também é orientar a família",
    excerpt:
      "Uma história sobre acolhimento, explicação clara e construção de confiança durante o processo de diagnóstico e tratamento.",
    slug: "cuidar-tambem-e-orientar-a-familia",
    image: "/images/story-3.png",
    category: "Acompanhamento",
    date: "04 mar 2026",
    content: [
      "Em pediatria, o cuidado acontece em conjunto com a família. Explicar cada etapa de forma simples e respeitosa é parte essencial do tratamento.",
      "Quando responsáveis entendem o que está sendo investigado, quais são os objetivos e quais sinais devem ser observados, o acompanhamento se torna mais leve e eficiente.",
      "Cuidar também é comunicar com empatia.",
    ],
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <main className="section-spacing bg-background">
        <div className="container-shell">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4" />
            Voltar para o blog
          </Link>

          <div className="mt-10 rounded-[28px] border bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-extrabold text-foreground">
              Artigo não encontrado
            </h1>
            <p className="mt-4 text-muted-foreground">
              O conteúdo que você procura não está disponível no momento.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <section className="section-spacing">
        <div className="container-shell">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <ArrowLeft className="size-4" />
            Voltar para o blog
          </Link>

          <article className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-4xl border bg-white shadow-sm">
            <div className="relative h-80 w-full md:h-105">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
                {post.category}
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-foreground">
                {post.title}
              </h1>

              <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <CalendarDays className="size-4" />
                <span>{post.date}</span>
              </div>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-8 space-y-6 text-base leading-8 text-foreground/90">
                {post.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}