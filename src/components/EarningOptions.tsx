export function EarningOptions() {
  const tiers = [
    {
      name: "Лайт",
      surface: "Заднее стекло",
      priceRange: "3 000–5 000 ₽",
      featured: false,
    },
    {
      name: "Стандарт",
      surface: "Двери + заднее крыло",
      priceRange: "7 000–12 000 ₽",
      featured: true,
      badge: "Популярное",
    },
    {
      name: "Максимум",
      surface: "Полная оклейка кузова",
      priceRange: "15 000–25 000 ₽",
      featured: false,
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-brand-dark">
      <div className="max-w-[1120px] mx-auto w-full flex flex-col items-center">
        <h2 className="font-display font-bold text-[24px] sm:text-[30px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-text-primary text-center mb-8 sm:mb-10 md:mb-12">
          Выберите формат — и начните получать доход
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center w-full max-w-[960px]">
          {/* Order in mobile: Featured first, then others */}
          {tiers.sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).map((tier) => (
            <div 
              key={tier.name}
              className={`relative flex-1 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] flex flex-col
                ${tier.featured 
                  ? "bg-brand-slate border-2 border-accent-gold p-8 md:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,158,0,0.15)] z-10 order-first md:order-none" 
                  : "bg-brand-charcoal border border-brand-steel p-7 hover:border-accent-gold/30 order-last md:order-none"
                }
              `}
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`font-body font-semibold text-[11px] md:text-[13px] leading-[1.3] uppercase tracking-[0.08em] ${tier.featured ? "text-accent-gold" : "text-text-muted"}`}>
                  {tier.featured && "★ "}{tier.name}
                </span>
                
                {tier.badge && (
                  <span className="bg-accent-gold text-brand-dark font-body font-semibold text-[11px] leading-none rounded-full px-3 py-1">
                    {tier.badge}
                  </span>
                )}
              </div>

              <div className="w-8 h-[2px] bg-brand-steel mb-4" aria-hidden="true" />
              
              <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-text-secondary flex-grow mb-6">
                {tier.surface}
              </p>

              <div>
                <div className={`font-display font-bold text-[24px] sm:text-[30px] md:text-[36px] leading-[1.2] tracking-[-0.01em] ${tier.featured ? "text-accent-gold" : "text-text-primary"}`}>
                  {tier.priceRange}
                </div>
                <div className="font-body text-[13px] md:text-[14px] text-text-muted mt-1">
                  /мес
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-[12px] md:text-[13px] leading-[1.4] tracking-[0.02em] text-text-muted italic max-w-[520px] text-center">
          Точный размер зависит от марки авто, вашего пробега и района. После заявки мы рассчитаем сумму лично для вас.
        </p>

        <a 
          href="https://t.me/wrapto_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 font-body font-semibold text-[15px] md:text-[16px] tracking-[0.02em] text-accent-gold border-2 border-accent-gold rounded-xl px-7 py-3.5 hover:bg-accent-gold/10 hover:border-accent-gold-hover active:bg-accent-gold/[0.14] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:ring-accent-gold text-center"
        >
          Рассчитать мой доход
        </a>
      </div>
    </section>
  );
}
