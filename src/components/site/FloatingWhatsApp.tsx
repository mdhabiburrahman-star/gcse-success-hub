import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with TutorMentor Near Me — private home tutor London"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-4 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_-10px_oklch(0.7_0.17_150/60%)] transition hover:scale-105"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
      </span>
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp tutor</span>
    </a>
  );
}
