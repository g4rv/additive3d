import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import { COMPANY_NAME, CONTACT_INFO } from '@/lib/constants';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Умови використання',
  description:
    "Умови використання сервісу Additive3D. Правила надання послуг 3D-друку, права та обов'язки сторін.",
  path: '/terms-and-conditions',
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <HeroFancy
        title="Умови"
        highlight="використання"
        description="Правила надання послуг та використання платформи"
      />

      <section className="bg-base-100 relative isolate py-16 lg:py-24">
        <BgPattern pattern="dots" opacity={0.05} className="absolute inset-0" />

        <div className="custom-container relative z-10">
          <div className="mx-auto max-w-4xl">
            {/* Last Updated */}
            <div className="bg-base-200 border-base-300 mb-8 rounded-lg border p-6">
              <p className="text-base-content/70 text-sm">
                <strong>Остання редакція:</strong> 19 січня 2026 року
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-base-content/80 mb-8 text-lg leading-relaxed">
                Ласкаво просимо до {COMPANY_NAME}! Ці Умови використання (далі — "Умови")
                регулюють ваш доступ та використання нашої платформи та послуг 3D-друку. Використовуючи
                наш веб-сайт та послуги, ви погоджуєтесь з цими Умовами в повному обсязі.
              </p>

              <div className="bg-info/10 border-info/30 mb-8 rounded border-l-4 p-4">
                <p className="text-base-content/80 text-sm">
                  <strong>Важливо:</strong> Якщо ви не погоджуєтесь з цими Умовами, будь ласка, не
                  використовуйте наші послуги.
                </p>
              </div>

              {/* Section 1 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">1. Визначення термінів</h2>

                <ul className="text-base-content/80 space-y-2">
                  <li>
                    <strong>"Ми", "Наша компанія"</strong> — {COMPANY_NAME}, постачальник послуг
                    3D-друку та супутніх технологій
                  </li>
                  <li>
                    <strong>"Ви", "Користувач", "Клієнт"</strong> — фізична або юридична особа, що
                    використовує наші послуги
                  </li>
                  <li>
                    <strong>"Платформа"</strong> — веб-сайт та онлайн-сервіси {COMPANY_NAME}
                  </li>
                  <li>
                    <strong>"Послуги"</strong> — 3D-друк, 3D-сканування, 3D-моделювання та
                    супутні послуги
                  </li>
                  <li>
                    <strong>"Замовлення"</strong> — запит на виготовлення деталей за допомогою
                    наших технологій
                  </li>
                  <li>
                    <strong>"Файли"</strong> — 3D-моделі та технічна документація, що
                    завантажуються на платформу
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  2. Реєстрація та облікові записи
                </h2>

                <h3 className="mb-3 text-xl font-semibold">2.1. Створення облікового запису</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Для використання деяких функцій платформи вам необхідно створити обліковий запис.
                  При реєстрації ви зобов'язуєтесь:
                </p>
                <ul className="text-base-content/80 mb-6 list-disc space-y-2 pl-6">
                  <li>Надавати точну, актуальну та повну інформацію</li>
                  <li>Підтримувати конфіденційність ваших облікових даних</li>
                  <li>Негайно повідомляти нас про будь-яке несанкціоноване використання</li>
                  <li>Нести відповідальність за всю діяльність у вашому обліковому записі</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">2.2. Обмеження віку</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Ви повинні бути повнолітнім (18 років або старше) для використання наших послуг.
                  Створюючи обліковий запис, ви підтверджуєте, що досягли необхідного віку.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  3. Надання послуг
                </h2>

                <h3 className="mb-3 text-xl font-semibold">3.1. Опис послуг</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  {COMPANY_NAME} надає наступні послуги:
                </p>
                <ul className="text-base-content/80 mb-6 list-disc space-y-2 pl-6">
                  <li>3D-друк із використанням технологій MJF, FDM та LFAM</li>
                  <li>3D-сканування високої точності</li>
                  <li>3D-моделювання та CAD-послуги</li>
                  <li>Реверс-інжиніринг</li>
                  <li>Інспекція геометрії</li>
                  <li>Пост-обробка (фарбування, хімічне згладжування)</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">3.2. Процес замовлення</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="mb-1 font-semibold">Крок 1: Завантаження файлів</h4>
                    <p className="text-base-content/70 text-sm">
                      Ви завантажуєте 3D-моделі у форматі STL через наш калькулятор вартості
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Крок 2: Розрахунок вартості</h4>
                    <p className="text-base-content/70 text-sm">
                      Платформа автоматично розраховує вартість на основі об'єму, матеріалу та
                      параметрів
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Крок 3: Підтвердження замовлення</h4>
                    <p className="text-base-content/70 text-sm">
                      Ви підтверджуєте замовлення та надаєте необхідні згоди
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Крок 4: Виробництво</h4>
                    <p className="text-base-content/70 text-sm">
                      Ми виготовляємо деталі відповідно до специфікацій
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Крок 5: Доставка</h4>
                    <p className="text-base-content/70 text-sm">
                      Готові деталі доставляються або видаються клієнту
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  4. Ціни та оплата
                </h2>

                <h3 className="mb-3 text-xl font-semibold">4.1. Визначення ціни</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ціни розраховуються на основі наступних факторів:
                </p>
                <ul className="text-base-content/80 mb-6 list-disc space-y-2 pl-6">
                  <li>Об'єм та вага 3D-моделі</li>
                  <li>Обраний матеріал та технологія друку</li>
                  <li>Кількість деталей</li>
                  <li>Додаткова пост-обробка (фарбування, згладжування)</li>
                  <li>Термінові замовлення (якщо застосовується)</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">4.2. ПДВ</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Всі ціни вказані без урахування ПДВ. ПДВ у розмірі 20% додається до загальної
                  суми замовлення відповідно до українського законодавства.
                </p>

                <h3 className="mb-3 text-xl font-semibold">4.3. Умови оплати</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  <strong>Передплата:</strong> Оплата повної вартості замовлення вимагається до
                  початку виробництва. Ми не розпочинаємо роботу над замовленням до отримання
                  оплати.
                </p>

                <h3 className="mb-3 text-xl font-semibold">4.4. Зміна цін</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Ми залишаємо за собою право змінювати ціни в будь-який час. Зміни цін не
                  застосовуються до замовлень, які вже підтверджені та оплачені.
                </p>
              </div>

              {/* Section 5 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  5. Скасування та повернення коштів
                </h2>

                <h3 className="mb-3 text-xl font-semibold">5.1. Політика повернення</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  <strong className="text-warning">Важливо:</strong> Оплата здійснюється до початку
                  виробництва. Після початку виготовлення деталей повернення коштів не
                  здійснюється, оскільки виробництво є індивідуальним та виконується за вашими
                  специфікаціями.
                </p>

                <h3 className="mb-3 text-xl font-semibold">5.2. Скасування до виробництва</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Ви можете скасувати замовлення та отримати повне повернення коштів, якщо
                  виробництво ще не розпочато. Для скасування зв'яжіться з нами якомога швидше.
                </p>

                <h3 className="mb-3 text-xl font-semibold">5.3. Дефектні деталі</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Якщо виготовлені деталі мають виробничі дефекти або не відповідають
                  специфікаціям через нашу помилку, ми безкоштовно повторно виготовимо деталі або
                  повернемо кошти на ваш розсуд.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  6. Інтелектуальна власність
                </h2>

                <h3 className="mb-3 text-xl font-semibold">6.1. Ваша інтелектуальна власність</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Ви зберігаєте всі права на інтелектуальну власність щодо 3D-моделей та файлів,
                  які ви завантажуєте на нашу платформу. Ми не заявляємо права власності на ваші
                  файли.
                </p>

                <h3 className="mb-3 text-xl font-semibold">6.2. Ліцензія на використання</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Завантажуючи файли та розміщуючи замовлення, ви надаєте нам обмежену ліцензію на
                  використання ваших файлів виключно з метою виготовлення замовлених деталей та
                  надання послуг.
                </p>

                <h3 className="mb-3 text-xl font-semibold">6.3. Конфіденційність файлів</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ми зобов'язуємось:
                </p>
                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>Зберігати ваші файли у конфіденційності</li>
                  <li>Не розголошувати їх третім особам без вашої згоди</li>
                  <li>Використовувати їх лише для виконання замовлень</li>
                  <li>Не відтворювати деталі без вашого дозволу</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  7. Заборонений контент та використання
                </h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ви погоджуєтесь не завантажувати файли та не використовувати наші послуги для:
                </p>

                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>Виготовлення зброї, вибухових пристроїв або небезпечних предметів</li>
                  <li>
                    Порушення прав інтелектуальної власності третіх осіб (контрафактні товари)
                  </li>
                  <li>Незаконної діяльності або порушення законодавства</li>
                  <li>Створення шкідливих, образливих або непристойних матеріалів</li>
                  <li>Виготовлення підробок документів чи валюти</li>
                </ul>

                <div className="bg-warning/10 border-warning/30 mt-6 rounded border-l-4 p-4">
                  <p className="text-base-content/80 text-sm">
                    <strong className="text-warning">Важливо:</strong> Ми залишаємо за собою право
                    відмовити у виконанні замовлення, якщо вважаємо, що воно порушує ці Умови або
                    законодавство.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  8. Обмеження використання платформи
                </h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Для забезпечення справедливого використання сервісу встановлені наступні
                  обмеження:
                </p>

                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>Максимальний розмір одного файлу: 200 МБ</li>
                  <li>Денний ліміт завантаження: 200 МБ на користувача</li>
                  <li>Обмеження швидкості спроб входу: 10 спроб за 15 хвилин</li>
                  <li>Обмеження реєстрації: 10 спроб за 30 хвилин</li>
                </ul>

                <p className="text-base-content/70 mt-4 text-sm">
                  При перевищенні цих обмежень ваш доступ може бути тимчасово обмежений для
                  захисту платформи.
                </p>
              </div>

              {/* Section 9 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  9. Гарантії та обмеження відповідальності
                </h2>

                <h3 className="mb-3 text-xl font-semibold">9.1. Гарантія якості</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Ми гарантуємо, що деталі будуть виготовлені відповідно до технічних
                  специфікацій, що вказані в ваших файлах, та з використанням обраних матеріалів і
                  технологій.
                </p>

                <h3 className="mb-3 text-xl font-semibold">9.2. Обмеження відповідальності</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ми не несемо відповідальності за:
                </p>
                <ul className="text-base-content/80 mb-6 list-disc space-y-2 pl-6">
                  <li>Помилки або неточності у ваших 3D-моделях</li>
                  <li>
                    Непридатність деталей для конкретного застосування (відповідальність клієнта)
                  </li>
                  <li>Затримки, викликані обставинами непереборної сили</li>
                  <li>Непрямі або випадкові збитки</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">9.3. Максимальна відповідальність</h3>
                <p className="text-base-content/80 leading-relaxed">
                  Наша максимальна відповідальність за будь-які претензії обмежується сумою,
                  сплаченою вами за конкретне замовлення, до якого відноситься претензія.
                </p>
              </div>

              {/* Section 10 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  10. Конфіденційність
                </h2>

                <p className="text-base-content/80 leading-relaxed">
                  Використання ваших персональних даних регулюється нашою{' '}
                  <a href="/privacy-policy" className="text-primary hover:underline font-semibold">
                    Політикою конфіденційності
                  </a>
                  , яка є невід'ємною частиною цих Умов.
                </p>
              </div>

              {/* Section 11 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  11. Термін дії та припинення
                </h2>

                <h3 className="mb-3 text-xl font-semibold">11.1. Термін дії</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Ці Умови залишаються чинними доти, доки ви використовуєте наші послуги або маєте
                  активний обліковий запис.
                </p>

                <h3 className="mb-3 text-xl font-semibold">11.2. Припинення з вашого боку</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Ви можете припинити використання наших послуг у будь-який час, видаливши ваш
                  обліковий запис або звернувшись до нас з проханням про видалення.
                </p>

                <h3 className="mb-3 text-xl font-semibold">11.3. Припинення з нашого боку</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ми можемо призупинити або припинити ваш доступ до платформи, якщо:
                </p>
                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>Ви порушуєте ці Умови</li>
                  <li>Ви надаєте неправдиву інформацію</li>
                  <li>Ваша діяльність створює ризик для нас або інших користувачів</li>
                  <li>Це вимагається законодавством</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">12. Зміни до Умов</h2>

                <p className="text-base-content/80 leading-relaxed">
                  Ми залишаємо за собою право змінювати ці Умови в будь-який час. Зміни набувають
                  чинності з моменту їх публікації на цій сторінці. Ваше продовження використання
                  послуг після змін означає вашу згоду з новими Умовами.
                </p>
              </div>

              {/* Section 13 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  13. Застосовне право та врегулювання спорів
                </h2>

                <h3 className="mb-3 text-xl font-semibold">13.1. Застосовне право</h3>
                <p className="text-base-content/80 mb-6 leading-relaxed">
                  Ці Умови регулюються та тлумачяться відповідно до законодавства України.
                </p>

                <h3 className="mb-3 text-xl font-semibold">13.2. Врегулювання спорів</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  У разі виникнення будь-яких спорів або розбіжностей:
                </p>
                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>
                    Спочатку ми намагатимемося вирішити їх шляхом переговорів та взаємних
                    консультацій
                  </li>
                  <li>
                    Якщо спір не вдасться вирішити дружнім шляхом, він підлягає розгляду в судах
                    України
                  </li>
                </ul>
              </div>

              {/* Section 14 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">14. Контактна інформація</h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Якщо у вас виникли питання щодо цих Умов або наших послуг, будь ласка,
                  зв'яжіться з нами:
                </p>

                <div className="space-y-2">
                  <p className="text-base-content/80">
                    <strong>Email:</strong>{' '}
                    <a
                      href={CONTACT_INFO.email.link}
                      className="text-primary hover:underline font-medium"
                    >
                      {CONTACT_INFO.email.label}
                    </a>
                  </p>
                  <p className="text-base-content/80">
                    <strong>Телефон:</strong>{' '}
                    <a
                      href={CONTACT_INFO.phone.link}
                      className="text-primary hover:underline font-medium"
                    >
                      {CONTACT_INFO.phone.label}
                    </a>
                  </p>
                  <p className="text-base-content/80">
                    <strong>Місцезнаходження:</strong> {CONTACT_INFO.address.label}
                  </p>
                </div>
              </div>

              {/* Acceptance */}
              <div className="bg-primary/10 border-primary/30 rounded-lg border-l-4 p-6">
                <p className="text-base-content/80 text-sm leading-relaxed">
                  <strong className="text-primary">Прийняття умов:</strong> Використовуючи наші
                  послуги, реєструючись на платформі або розміщуючи замовлення, ви підтверджуєте,
                  що прочитали, зрозуміли та погоджуєтесь з цими Умовами використання в повному
                  обсязі.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
