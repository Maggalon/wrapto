import Link from "next/link";
import { Send, Music, MessagesSquare } from "lucide-react"; // Using available icons as placeholders for social media

export function Footer() {
  const currentYear = new Date().getFullYear(); // Just slightly future proof

  return (
    <footer className="bg-brand-dark border-t border-brand-steel py-8 px-4">
      <div className="max-w-[1120px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        
        <div className="font-body text-[13px] text-text-muted font-medium text-center md:text-left tracking-[0.02em]">
          Wrapto · Владивосток · {Math.max(currentYear, 2026)}
        </div>

        {/* Legal Links placeholder */}
        <div className="flex items-center gap-6 font-body text-[13px] text-text-muted text-center">
          <Link href="#" className="hover:text-text-primary transition-colors focus:outline-none focus-visible:text-accent-gold">
            Политика конфиденциальности
          </Link>
          <Link href="#" className="hidden sm:inline-block hover:text-text-primary transition-colors focus:outline-none focus-visible:text-accent-gold">
            Пользовательское соглашение
          </Link>
        </div>

        {/* Social Icons Placeholder */}
        <div className="flex items-center gap-4 text-text-muted">
          <a href="#" aria-label="Telegram" className="hover:text-text-primary transition-colors focus:outline-none focus-visible:text-accent-gold">
            <Send className="w-5 h-5 -rotate-45" aria-hidden="true" />
          </a>
          <a href="#" aria-label="VK" className="hover:text-text-primary transition-colors focus:outline-none focus-visible:text-accent-gold">
            <Music className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="#" aria-label="WhatsApp" className="hover:text-text-primary transition-colors focus:outline-none focus-visible:text-accent-gold">
            <MessagesSquare className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
