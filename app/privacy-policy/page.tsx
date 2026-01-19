import HeroFancy from '@/components/hero/hero-fancy/HeroFancy';
import BgPattern from '@/components/ui/bg-pattern';
import { COMPANY_NAME, CONTACT_INFO } from '@/lib/constants';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Політика конфіденційності',
  description:
    'Політика конфіденційності Additive3D. Інформація про збір, обробку та захист персональних даних користувачів.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroFancy
        title="Політика"
        highlight="конфіденційності"
        description="Інформація про збір, обробку та захист ваших персональних даних"
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
                {COMPANY_NAME} поважає вашу конфіденційність і прагне захищати ваші персональні дані.
                Ця Політика конфіденційності описує, яку інформацію ми збираємо, як ми її
                використовуємо та які права ви маєте щодо своїх персональних даних.
              </p>

              {/* Section 1 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  1. Інформація, яку ми збираємо
                </h2>

                <h3 className="mb-3 text-xl font-semibold">1.1. Інформація про облікові записи</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  При реєстрації на нашій платформі ми збираємо:
                </p>
                <ul className="text-base-content/80 mb-6 list-disc space-y-2 pl-6">
                  <li>Ім'я та прізвище</li>
                  <li>Адресу електронної пошти</li>
                  <li>Номер телефону</li>
                  <li>Назву організації (за бажанням)</li>
                  <li>Пароль (зашифрований)</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">1.2. Дані замовлень</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Коли ви розміщуєте замовлення, ми збираємо:
                </p>
                <ul className="text-base-content/80 mb-6 list-disc space-y-2 pl-6">
                  <li>3D-модельні файли (формат STL)</li>
                  <li>Параметри замовлення (кількість, матеріал, пост-обробка)</li>
                  <li>Інформацію про ціни та специфікації</li>
                  <li>Метадані файлів (розмір, час завантаження)</li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">1.3. Технічна інформація</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Для забезпечення безпеки та покращення сервісу ми автоматично збираємо:
                </p>
                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>IP-адресу</li>
                  <li>Інформацію про браузер та пристрій (User Agent)</li>
                  <li>Журнал дій автентифікації (вхід, реєстрація, скидання пароля)</li>
                  <li>Дату та час вашої активності на платформі</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  2. Як ми використовуємо вашу інформацію
                </h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ми використовуємо зібрану інформацію для наступних цілей:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">Обробка замовлень</h4>
                    <p className="text-base-content/70 text-sm">
                      Для виготовлення ваших деталей, управління замовленнями та надання послуг
                      3D-друку.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">Комунікація</h4>
                    <p className="text-base-content/70 text-sm">
                      Для надсилання підтверджень замовлень, оновлень статусу та відповідей на ваші
                      запити через email.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">Безпека</h4>
                    <p className="text-base-content/70 text-sm">
                      Для запобігання шахрайству, захисту від зловмисних дій та забезпечення безпеки
                      платформи через моніторинг активності та обмеження швидкості запитів.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">Покращення сервісу</h4>
                    <p className="text-base-content/70 text-sm">
                      Для аналізу використання платформи та вдосконалення наших послуг.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  3. Зберігання та захист даних
                </h2>

                <h3 className="mb-3 text-xl font-semibold">3.1. Де зберігаються ваші дані</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ваші дані зберігаються в наступних місцях:
                </p>
                <ul className="text-base-content/80 mb-6 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Інформація про профіль та замовлення:</strong> Зберігається в базі
                    даних Supabase (постачальник хмарних послуг)
                  </li>
                  <li>
                    <strong>3D-файли:</strong> Зберігаються в захищеному хмарному сховищі Cloudflare
                    R2
                  </li>
                  <li>
                    <strong>Журнали автентифікації:</strong> Зберігаються для аудиту безпеки
                  </li>
                </ul>

                <h3 className="mb-3 text-xl font-semibold">3.2. Безпека</h3>
                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ми використовуємо сучасні технології для захисту ваших даних:
                </p>
                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>Шифрування паролів</li>
                  <li>Захищене HTTPS-з'єднання</li>
                  <li>Обмеження швидкості запитів для запобігання атакам</li>
                  <li>Моніторинг підозрілої активності</li>
                  <li>Регулярні резервні копії даних</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  4. Розголошення третім особам
                </h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ми можемо передавати ваші дані наступним категоріям третіх осіб:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">Постачальники послуг</h4>
                    <p className="text-base-content/70 mb-2 text-sm">
                      Ми використовуємо довірені сторонні сервіси для роботи платформи:
                    </p>
                    <ul className="text-base-content/70 list-disc space-y-1 pl-6 text-sm">
                      <li>
                        <strong>Supabase:</strong> Автентифікація користувачів та база даних
                      </li>
                      <li>
                        <strong>Cloudflare R2:</strong> Зберігання файлів
                      </li>
                      <li>
                        <strong>Mailjet:</strong> Надсилання email-повідомлень
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">Виробничі партнери</h4>
                    <p className="text-base-content/70 text-sm">
                      Ваші 3D-файли можуть бути передані виробничим партнерам виключно для
                      виконання замовлень. Ви надаєте згоду на це при розміщенні замовлення.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold">Юридичні вимоги</h4>
                    <p className="text-base-content/70 text-sm">
                      Ми можемо розголошувати ваші дані, якщо цього вимагає закон або для захисту
                      наших прав.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">5. Ваші права</h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Відповідно до законодавства України про захист персональних даних, ви маєте такі
                  права:
                </p>

                <ul className="text-base-content/80 space-y-3 pl-6">
                  <li>
                    <strong>Право на доступ:</strong> Ви можете запитати копію ваших персональних
                    даних, які ми зберігаємо
                  </li>
                  <li>
                    <strong>Право на виправлення:</strong> Ви можете оновлювати свою інформацію
                    профілю в будь-який час через налаштування облікового запису
                  </li>
                  <li>
                    <strong>Право на видалення:</strong> Ви можете запросити видалення вашого
                    облікового запису та персональних даних
                  </li>
                  <li>
                    <strong>Право на відкликання згоди:</strong> Ви можете відкликати згоду на
                    обробку даних у будь-який час
                  </li>
                  <li>
                    <strong>Право на заперечення:</strong> Ви можете заперечити проти обробки ваших
                    даних у певних випадках
                  </li>
                </ul>

                <div className="bg-info/10 border-info/30 mt-6 rounded border-l-4 p-4">
                  <p className="text-base-content/80 text-sm">
                    Для реалізації ваших прав, будь ласка, зв'яжіться з нами за адресою:{' '}
                    <a
                      href={CONTACT_INFO.email.link}
                      className="text-primary hover:underline font-semibold"
                    >
                      {CONTACT_INFO.email.label}
                    </a>
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">6. Файли cookie</h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Ми використовуємо cookies та подібні технології для забезпечення роботи
                  платформи:
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="mb-1 font-semibold">Необхідні cookies</h4>
                    <p className="text-base-content/70 text-sm">
                      Для автентифікації користувачів та підтримки сесій (через Supabase Auth)
                    </p>
                  </div>
                </div>

                <p className="text-base-content/70 mt-4 text-sm">
                  Ми не використовуємо аналітичні або маркетингові cookies без вашої згоди.
                </p>
              </div>

              {/* Section 7 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">7. Обмеження використання</h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Для забезпечення справедливого використання та безпеки платформи, ми
                  застосовуємо наступні обмеження:
                </p>

                <ul className="text-base-content/80 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Максимальний розмір файлу:</strong> 200 МБ на один файл
                  </li>
                  <li>
                    <strong>Деннийліміт завантаження:</strong> 200 МБ на користувача
                  </li>
                  <li>
                    <strong>Обмеження входу:</strong> 10 спроб за 15 хвилин
                  </li>
                  <li>
                    <strong>Обмеження реєстрації:</strong> 10 спроб за 30 хвилин
                  </li>
                  <li>
                    <strong>Скидання пароля:</strong> 3 спроби за годину
                  </li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">
                  8. Зміни до політики конфіденційності
                </h2>

                <p className="text-base-content/80 leading-relaxed">
                  Ми можемо час від часу оновлювати цю Політику конфіденційності. Будь-які зміни
                  будуть опубліковані на цій сторінці з оновленою датою останньої редакції. Ми
                  рекомендуємо переглядати цю політику періодично, щоб бути в курсі того, як ми
                  захищаємо вашу інформацію.
                </p>
              </div>

              {/* Section 9 */}
              <div className="bg-base-200 mb-8 rounded-lg p-8">
                <h2 className="text-primary mb-4 text-2xl font-bold">9. Контактна інформація</h2>

                <p className="text-base-content/80 mb-4 leading-relaxed">
                  Якщо у вас виникли питання щодо цієї Політики конфіденційності або обробки ваших
                  персональних даних, будь ласка, зв'яжіться з нами:
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

              {/* Governing Law */}
              <div className="bg-warning/10 border-warning/30 rounded-lg border-l-4 p-6">
                <p className="text-base-content/80 text-sm leading-relaxed">
                  <strong className="text-warning">Застосовне законодавство:</strong> Ця Політика
                  конфіденційності регулюється відповідно до законодавства України, зокрема Закону
                  України "Про захист персональних даних".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
