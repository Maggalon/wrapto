import { Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-[136px] pb-[64px] sm:pt-[160px] sm:pb-[80px] md:pt-[160px] md:pb-[96px] px-4 min-h-[85vh] flex flex-col justify-center overflow-hidden bg-brand-steel">

      {/* Background Image Container attached to right side */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[85%] lg:w-[75%] h-full z-0 pointer-events-none overflow-hidden">
        <Image
          src="/prius-gym-no-bg.png"
          alt="Автомобиль Toyota Prius с рекламной оклейкой Wrapto"
          fill
          priority
          className="object-cover object-right md:object-right-bottom scale-[1.1] sm:scale-[1.2] md:scale-[1.15] lg:scale-[1.35] translate-x-[10%] md:translate-x-[20%] lg:translate-x-[25%] transform-gpu origin-right opacity-30 sm:opacity-40 md:opacity-100 transition-all duration-500"
        />

        {/* Soft gradient masks to blend image edges seamlessly into the solid brand-steel background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-steel from-0% via-brand-steel/80 via-20% to-transparent to-60%" />
        <div className="absolute inset-x-0 top-0 h-[15vh] bg-gradient-to-b from-brand-steel via-brand-steel/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[15vh] bg-gradient-to-t from-brand-steel via-brand-steel/40 to-transparent" />
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,124,102,0.08),transparent_60%)] z-0 mix-blend-multiply pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center md:items-center">
        {/* Left side — Text content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out max-w-[640px]">
          <h1 className="font-display font-extrabold text-[32px] leading-[1.1] sm:text-[42px] md:text-[56px] text-text-primary tracking-[-0.02em]">
            Ваша машина уже зарабатывает — вы просто об этом не знали
          </h1>

          <p className="mt-4 md:mt-6 font-body text-[17px] sm:text-[18px] md:text-[20px] leading-[1.6] text-text-secondary max-w-[500px] drop-shadow-sm md:drop-shadow-none">
            Врапто — сервис, который платит водителям за рекламу на автомобиле. Вы ездите как обычно, а бренды платят вам каждый месяц.
          </p>

          <a
            href="https://t.me/wrapto_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-12 flex items-center justify-center gap-2 bg-accent-gold text-brand-dark px-8 py-4 rounded-xl font-body font-semibold text-[17px] md:text-[18px] leading-none tracking-[0.02em] w-full max-w-[360px] md:w-auto min-w-[200px] shadow-[0_4px_20px_rgba(255,158,0,0.25)] hover:bg-accent-gold-hover hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(255,158,0,0.35)] active:translate-y-0 active:shadow-[0_2px_8px_rgba(255,158,0,0.2)] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:ring-accent-gold"
          >
            <Zap className="w-5 h-5 text-brand-dark/80 group-hover:text-brand-dark transition-colors" />
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
}
