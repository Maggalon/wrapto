import { Zap } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-[80px] sm:py-[100px] md:py-[120px] px-4 relative overflow-hidden">
      {/* Background with CTA Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#007C66_0%,#005F4E_50%,#007C66_100%)] -z-20" />
      
      {/* Subtle glow / shimmer */}
      <div className="absolute top-1/2 left-1/2 min-w-[800px] min-h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-[600px] mx-auto w-full flex flex-col items-center text-center">
        <h2 className="font-display font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-white">
          Ваша машина проезжает тысячи километров каждый месяц. Пусть они приносят деньги.
        </h2>
        
        <p className="mt-4 md:mt-5 font-body text-[17px] md:text-[18px] leading-[1.6] text-white/80">
          Оставьте заявку за 2 минуты. Мы свяжемся, подберём бренд и рассчитаем ваш доход.
        </p>

        <button className="mt-8 md:mt-10 flex items-center justify-center gap-2 bg-accent-gold text-brand-dark px-8 py-4 rounded-xl font-body font-semibold text-[17px] md:text-[18px] leading-none tracking-[0.02em] w-full sm:w-auto min-w-[200px] shadow-[0_4px_20px_rgba(255,158,0,0.25)] hover:bg-accent-gold-hover hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(255,158,0,0.35)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(255,158,0,0.2)] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#007C66] focus-visible:ring-accent-gold">
          <Zap className="w-5 h-5 text-brand-dark/80 group-hover:text-brand-dark transition-colors" />
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
