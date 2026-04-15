"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      q: "Не испортит ли плёнка краску моей машины?",
      a: "Нет. Мы используем сертифицированную виниловую плёнку, которая снимается без следов. Более того — она дополнительно защищает лакокрасочное покрытие от сколов и выгорания. Оклейку и снятие выполняют только профессионалы в партнёрской мастерской."
    },
    {
      q: "Мне придётся ездить больше или менять маршруты?",
      a: "Нет. Вы ездите так же, как и раньше. На работу, за детьми, по заказам. Нет минимального пробега, нет обязательных маршрутов. Мы подбираем бренд под вашу реальную географию."
    },
    {
      q: "Как и когда я получаю деньги?",
      a: "Выплата — на банковскую карту, один раз в месяц, до 5-го числа. Никаких скрытых комиссий. Договор — прозрачный, вы видите все условия до начала сотрудничества."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-brand-dark">
      <div className="max-w-[680px] mx-auto w-full">
        <h2 className="font-display font-bold text-[24px] sm:text-[30px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-text-primary text-center mb-8 sm:mb-10 md:mb-12">
          Ответы на три главных вопроса
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className={`border border-brand-steel rounded-xl transition-colors duration-300 overflow-hidden ${
                  isOpen ? "bg-brand-slate" : "bg-brand-charcoal"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal focus-visible:ring-accent-gold rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-body font-semibold text-[17px] md:text-[18px] text-text-primary">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ease-in-out mt-0.5 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`} 
                    aria-hidden="true" 
                  />
                </button>
                
                <div 
                  className={`grid transition-all duration-400 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 font-body text-[15px] md:text-[16px] leading-[1.7] text-text-secondary">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
