import { ClipboardEdit, Wrench, CreditCard } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <ClipboardEdit className="w-6 h-6 text-accent-gold" />,
      title: "Оставьте заявку и получите предложение от бренда",
      description: "Пройдите регистрацию в Телеграм-боте: марка и год авто, район проживания, средний пробег. Мы подберём рекламодателя, которому подходит именно ваш маршрут по Владивостоку."
    },
    {
      num: "02",
      icon: <Wrench className="w-6 h-6 text-accent-gold" />,
      title: "Приезжайте на оклейку в партнёрскую мастерскую",
      description: "Профессиональная оклейка занимает 2–4 часа. Используется премиальная виниловая плёнка, которая защищает лакокрасочное покрытие. Для вас это бесплатно."
    },
    {
      num: "03",
      icon: <CreditCard className="w-6 h-6 text-accent-gold" />,
      title: "Ездите как обычно — получайте деньги каждый месяц",
      description: "Никаких обязательных маршрутов или лишних километров. Живёте и передвигаетесь по городу в привычном режиме. Оплата приходит на карту до 5-го числа."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-brand-charcoal overflow-hidden">
      <div className="max-w-[1120px] mx-auto w-full">
        <h2 className="font-display font-bold text-[24px] sm:text-[30px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-text-primary text-center mb-8 sm:mb-10 md:mb-12">
          Три шага — и ваша машина начинает зарабатывать
        </h2>

        <div className="relative flex flex-col md:flex-row gap-5 md:gap-7 items-stretch">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[24px] left-[16%] right-[16%] h-[2px] border-t-2 border-dashed border-brand-steel z-0" aria-hidden="true" />

          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative z-10 flex-1 bg-brand-dark border border-brand-steel rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] hover:border-accent-gold/30 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <span className="font-body font-semibold text-[11px] md:text-[13px] leading-[1.3] uppercase tracking-[0.08em] text-accent-gold">
                  {step.num}
                </span>
              </div>

              <h3 className="font-display font-bold text-[20px] md:text-[24px] leading-[1.3] text-text-primary mb-2 transition-colors">
                {step.title}
              </h3>

              <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-text-secondary mt-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
