import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

import { WHATSAPP_APPOINTMENT_URL } from "@/lib/data";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem sou", href: "#quem-sou" },
  { label: "Consultas", href: "#consultas" },
  { label: "Exames", href: "#exames" },
  { label: "Contato", href: "#contato" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div className="w-full max-w-[310px] rounded-xl bg-transparent px-4 py-2.5">
              <Image
                src="/brand/lidiane-logo-horizontal.png"
                alt=""
                width={957}
                height={214}
                className="h-auto w-full object-contain"
              />
            </div>
            <span className="sr-only">
              DRA. LIDIANE LANDIM — Gastropediatria e Endoscopia Digestiva
            </span>

            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              Atendimento humanizado e especializado para crianças, adultos e
              famílias, com foco em saúde digestiva e acompanhamento seguro.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex text-sm text-foreground transition hover:text-primary max-md:min-h-11 max-md:items-center"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Contato
            </h3>

            <div className="space-y-3">
              <Link
                href={WHATSAPP_APPOINTMENT_URL}
                target="_blank"
                className="flex items-center gap-3 text-sm text-foreground transition hover:text-primary max-md:min-h-11"
              >
                <MessageCircle className="size-4" />
                <span>(85) 99215-7396</span>
              </Link>

              <Link
                href="https://www.instagram.com/lidianegastropediatra?igsh=MTR4ZzhtNm8xN2NoYQ%3D%3D&utm_source=qr"
                target="_blank"
                className="flex items-center gap-3 text-sm text-foreground transition hover:text-primary max-md:min-h-11"
              >
                <Instagram className="size-4" />
                <span>Instagram profissional</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Endereço
            </h3>

            <div className="flex items-start gap-3 text-sm leading-7 text-foreground">
              <MapPin className="mt-1 size-4 shrink-0" />
              <div>
                <p>Av. Santos Dumont, 1510 — Sala 409</p>
                <p>Edifício Manhattan Square Garden, Aldeota</p>
                <p>Fortaleza / CE — CEP 60150-161</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Dra. Lidiane Landim. Todos os direitos reservados.</p>
          <p>RQE 10121/14075 | CREMEC 14396</p>
        </div>
      </div>
    </footer>
  );
}
