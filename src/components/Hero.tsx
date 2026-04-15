import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-[136px] pb-[64px] sm:pt-[160px] sm:pb-[80px] md:pt-[184px] md:pb-[96px] px-4 min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(170deg,#0D0F14_0%,#131720_40%,#1A1520_70%,#0D0F14_100%)] -z-20" />
      
      {/* Decorative effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)] -z-10" />

      <div className="max-w-[720px] mx-auto w-full flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
        <h1 className="font-display font-extrabold text-[32px] leading-[1.1] sm:text-[42px] md:text-[56px] text-text-primary tracking-[-0.02em] max-w-[640px]">
          Ваша машина уже зарабатывает — вы просто об этом не знали
        </h1>
        
        <p className="mt-4 md:mt-6 font-body text-[17px] sm:text-[18px] md:text-[20px] leading-[1.6] text-text-secondary max-w-[520px]">
          Wrapto — сервис, который платит водителям за рекламу на автомобиле. Вы ездите как обычно, а бренды платят вам каждый месяц.
        </p>

        <button className="mt-8 md:mt-12 flex items-center justify-center gap-2 bg-accent-gold text-brand-dark px-8 py-4 rounded-xl font-body font-semibold text-[17px] md:text-[18px] leading-none tracking-[0.02em] w-full max-w-[360px] md:w-auto min-w-[200px] shadow-[0_4px_20px_rgba(245,166,35,0.25)] hover:bg-accent-gold-hover hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(245,166,35,0.35)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(245,166,35,0.2)] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:ring-accent-gold">
          <Zap className="w-5 h-5 text-brand-dark/80 group-hover:text-brand-dark transition-colors" />
          Оставить заявку
        </button>
      </div>
    </section>
  );
}
