import Link from "next/link";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem sou", href: "#quem-sou" },
  { label: "Consultas", href: "#consultas" },
  { label: "Exames", href: "#exames" },
  { label: "Contato", href: "#contato" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b4f67] text-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div>
              <p className="font-heading text-2xl font-extrabold leading-none">
                DRA. <span className="text-[#8bc34a]">LIDIANE</span> LANDIM
              </p>
              <p className="mt-2 text-sm text-white/70">
                Gastropediatria e Endoscopia Digestiva
              </p>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/75">
              Atendimento humanizado e especializado para crianças, adultos e
              famílias, com foco em saúde digestiva e acompanhamento seguro.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/85 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Contato
            </h3>

            <div className="space-y-3">
              <Link
                href="https://wa.me/message/CDM4GY5YCUKUA1"
                target="_blank"
                className="flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
              >
                <MessageCircle className="size-4" />
                <span>(85) 99215-7396</span>
              </Link>

              <Link
                href="https://www.instagram.com/lidianegastropediatra?igsh=MTR4ZzhtNm8xN2NoYQ%3D%3D&utm_source=qr"
                target="_blank"
                className="flex items-center gap-3 text-sm text-white/85 transition hover:text-white"
              >
                <Instagram className="size-4" />
                <span>Instagram profissional</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Endereço
            </h3>

            <div className="flex items-start gap-3 text-sm leading-7 text-white/85">
              <MapPin className="mt-1 size-4 shrink-0" />
              <div>
                <p>Av. Santos Dumont, 1510 — Sala 409</p>
                <p>Edifício Manhattan Square Garden, Aldeota</p>
                <p>Fortaleza / CE — CEP 60150-161</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dra. Lidiane Landim. Todos os direitos reservados.</p>
          <p>RQE 10121/14075 | CREMEC 14396</p>
        </div>
      </div>
    </footer>
  );
}