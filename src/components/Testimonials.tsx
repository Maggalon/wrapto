import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Оклеил двери и заднее стекло четыре месяца назад. Плёнку наклеили аккуратно, на мою Тойоту легла идеально. Получаю 9 000 ₽ каждый месяц — хватает закрыть бензин полностью. Снимать пока не планирую.",
      name: "Алексей, 34 года",
      role: "водитель, Toyota Fielder",
      location: "Вторая Речка",
    },
    {
      quote: "Сначала переживала за краску — у меня Honda Fit, слежу за состоянием. Но плёнку сняли после первого контракта — ни царапины, ни следа клея. Сейчас уже на втором бренде. Деньги приходят вовремя, без задержек.",
      name: "Марина, 28 лет",
      role: "курьер, Honda Fit",
      location: "Чуркин",
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-0 bg-brand-dark overflow-hidden">
      <div className="max-w-[1008px] mx-auto w-full">
        {/* Header has padding for mobile, container has none to allow full-bleed scroll */}
        <h2 className="px-4 font-display font-bold text-[24px] sm:text-[30px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-text-primary text-center mb-8 sm:mb-10 md:mb-12">
          Водители Владивостока уже зарабатывают с Wrapto
        </h2>

        {/* Horizontal scroll container on mobile, Grid on desktop */}
        <div className="flex overflow-x-auto pb-8 -mb-8 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 md:gap-6 px-4 md:overflow-visible">
          {testimonials.map((testim, idx) => (
            <div 
              key={idx}
              className="relative shrink-0 w-[85vw] min-w-[300px] max-w-[480px] snap-center mr-4 md:mr-0 md:w-auto bg-brand-charcoal border border-brand-steel rounded-2xl p-7 animate-in slide-in-from-bottom-8 fade-in duration-500 ease-out"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-6 font-display font-extrabold text-[48px] leading-none text-accent-gold opacity-40 select-none" aria-hidden="true">
                "
              </div>
              
              <p className="font-body italic text-[15px] md:text-[16px] leading-[1.65] text-text-primary relative z-10 pt-8">
                {testim.quote}
              </p>
              
              <div className="w-10 h-[2px] bg-accent-gold my-4" aria-hidden="true" />
              
              <div className="mb-1">
                <span className="font-body font-semibold text-[15px] md:text-[16px] text-text-primary">
                  {testim.name}
                </span>
              </div>
              
              <div className="font-body text-[13px] md:text-[14px] leading-[1.5] text-text-secondary">
                {testim.role}<br />
                {testim.location}
              </div>
              
              <div className="flex items-center gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-accent-gold text-accent-gold" aria-hidden="true" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
{/* To hide scrollbar on webkit without disabling functionality */}
<style dangerouslySetInnerHTML={{__html: `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`}} />
    </section>
  );
}
