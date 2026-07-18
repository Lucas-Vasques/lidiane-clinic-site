import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsapp() {
  return (
    <Link
      href="https://wa.me/message/CDM4GY5YCUKUA1"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_12px_30px_-8px_rgba(139,195,74,0.55)] transition hover:scale-105"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="size-6" />
    </Link>
  );
}