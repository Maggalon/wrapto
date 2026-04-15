export function Opportunity() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4">
      <div className="max-w-[720px] mx-auto w-full flex flex-col items-center">
        <h2 className="font-display font-bold text-[24px] sm:text-[30px] md:text-[36px] leading-[1.2] tracking-[-0.01em] text-text-primary text-center mb-8 sm:mb-10 md:mb-12 max-w-[640px]">
          Содержать машину дорого. Но теперь она может содержать себя сама.
        </h2>

        <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[640px]">
          {/* Pain Bullet 1 */}
          <div className="bg-semantic-danger-bg border-l-[3px] border-semantic-danger rounded-xl p-5 sm:px-6">
            <h3 className="flex items-center gap-3 font-display font-bold text-[20px] md:text-[24px] leading-[1.3] text-text-primary">
              <span className="shrink-0 w-3 h-3 rounded-full bg-semantic-danger" aria-hidden="true" />
              Бензин дорожает каждый сезон.
            </h3>
            <p className="mt-2 font-body text-[15px] md:text-[16px] leading-[1.65] text-text-secondary pl-6">
              Средний водитель во Владивостоке тратит от 8 000 ₽ в месяц только на топливо — и эта цифра не падает.
            </p>
          </div>

          {/* Pain Bullet 2 */}
          <div className="bg-semantic-danger-bg border-l-[3px] border-semantic-danger rounded-xl p-5 sm:px-6">
            <h3 className="flex items-center gap-3 font-display font-bold text-[20px] md:text-[24px] leading-[1.3] text-text-primary">
              <span className="shrink-0 w-3 h-3 rounded-full bg-semantic-danger" aria-hidden="true" />
              Обслуживание съедает бюджет.
            </h3>
            <p className="mt-2 font-body text-[15px] md:text-[16px] leading-[1.65] text-text-secondary pl-6">
              Запчасти, ТО, мойка, шиномонтаж — автомобиль требует внимания и денег круглый год.
            </p>
          </div>

          {/* Solution Bullet */}
          <div className="bg-semantic-success-bg border-l-[3px] border-semantic-success rounded-xl p-5 sm:px-6 mt-2">
            <h3 className="flex items-center gap-3 font-display font-bold text-[20px] md:text-[24px] leading-[1.3] text-text-primary">
              <span className="shrink-0 w-3 h-3 rounded-full bg-semantic-success" aria-hidden="true" />
              Ваш ежедневный маршрут теперь приносит доход.
            </h3>
            <p className="mt-2 font-body text-[15px] md:text-[16px] leading-[1.65] text-text-secondary pl-6">
              Дорога на работу, развоз заказов, поездки по городу — каждый километр может окупаться. Без изменений в вашем расписании.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
