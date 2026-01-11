import { OrderEmailData } from '../send-order-email';

/**
 * Generate HTML email template for order confirmation
 * Following Additive3D brand design with gold (#ffd231) accent color
 */
export function generateOrderConfirmationHTML(orderData: OrderEmailData): string {
  const filesListHTML = orderData.files
    .map(
      (file, index) => `
    <tr style="border-bottom: 1px solid #161616;">
      <td style="padding: 12px; text-align: center; font-size: 14px;">${index + 1}</td>
      <td style="padding: 12px; font-size: 14px;">${file.name}</td>
      <td style="padding: 12px; text-align: center; font-size: 14px;">${file.quantity} шт</td>
      <td style="padding: 12px; text-align: center; font-size: 14px;">${file.weight.toFixed(2)} г</td>
      <td style="padding: 12px; text-align: right; font-size: 14px;">${file.totalPrice.toFixed(2)} грн</td>
      <td style="padding: 12px; text-align: center;">
        <a href="${file.url}" style="color: #ffd231; text-decoration: none; font-weight: 600; font-size: 14px;">Завантажити</a>
      </td>
    </tr>
  `
    )
    .join('');

  return `
<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Підтвердження замовлення - Additive3D</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Inter', Arial, sans-serif; background-color: #161616; color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #161616;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; background-color: #262626; border-radius: 8px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color: #ffd231; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 28px; font-weight: 700; color: #161616;">
                Additive3D
              </h1>
              <p style="margin: 10px 0 0 0; font-size: 16px; color: #161616; font-weight: 500;">
                Підтвердження замовлення
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 10px 0; font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 24px; font-weight: 600; color: #ffd231;">
                Вітаємо${orderData.userName ? ', ' + orderData.userName : ''}!
              </h2>

              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #f5f5f5;">
                Дякуємо за ваше замовлення. Ми отримали ваші файли та розпочинаємо обробку замовлення.
              </p>

              <!-- Order Info Box -->
              <table cellpadding="0" cellspacing="0" style="margin: 30px 0; width: 100%; background-color: #2d2d2d; border-radius: 4px;">
                <tr>
                  <td style="padding: 25px;">
                    <table cellpadding="0" cellspacing="0" style="width: 100%;">
                      <tr>
                        <td style="padding: 10px 0;">
                          <strong style="color: #f5f5f5; font-size: 16px;">Номер замовлення:</strong>
                        </td>
                        <td style="padding: 10px 0; text-align: right; color: #ffd231; font-size: 16px; font-weight: 600;">
                          ${orderData.orderNumber}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-top: 1px solid #161616;">
                          <strong style="color: #f5f5f5;">Кількість файлів:</strong>
                        </td>
                        <td style="padding: 10px 0; text-align: right; color: #f5f5f5; border-top: 1px solid #161616;">
                          ${orderData.files.length}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 10px 0; border-top: 1px solid #161616;">
                          <strong style="color: #f5f5f5;">Загальна вага:</strong>
                        </td>
                        <td style="padding: 10px 0; text-align: right; color: #f5f5f5; border-top: 1px solid #161616;">
                          ${orderData.totalWeight.toFixed(2)} г
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 15px 0; border-top: 2px solid #ffd231;">
                          <strong style="color: #ffd231; font-size: 18px;">Загальна вартість:</strong>
                        </td>
                        <td style="padding: 15px 0; text-align: right; border-top: 2px solid #ffd231;">
                          <strong style="color: #ffd231; font-size: 20px;">${orderData.totalPrice.toFixed(2)} грн</strong>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Files Table -->
              <h3 style="margin: 30px 0 15px 0; font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 18px; font-weight: 600; color: #ffd231;">
                Ваші файли:
              </h3>

              <table cellpadding="0" cellspacing="0" style="width: 100%; background-color: #2d2d2d; border-radius: 4px; overflow: hidden;">
                <thead>
                  <tr style="background-color: #161616;">
                    <th style="padding: 12px; text-align: center; color: #ffd231; font-weight: 600; font-size: 14px;">№</th>
                    <th style="padding: 12px; text-align: left; color: #ffd231; font-weight: 600; font-size: 14px;">Назва</th>
                    <th style="padding: 12px; text-align: center; color: #ffd231; font-weight: 600; font-size: 14px;">К-сть</th>
                    <th style="padding: 12px; text-align: center; color: #ffd231; font-weight: 600; font-size: 14px;">Вага</th>
                    <th style="padding: 12px; text-align: right; color: #ffd231; font-weight: 600; font-size: 14px;">Ціна</th>
                    <th style="padding: 12px; text-align: center; color: #ffd231; font-weight: 600; font-size: 14px;">Файл</th>
                  </tr>
                </thead>
                <tbody style="color: #f5f5f5;">
                  ${filesListHTML}
                </tbody>
              </table>

              <!-- Attachment Notice -->
              <div style="margin: 30px 0; padding: 20px; background-color: #2d2d2d; border-radius: 4px; border-left: 4px solid #7db9dc;">
                <p style="margin: 0; color: #f5f5f5; line-height: 1.6; font-size: 14px;">
                  <strong style="color: #7db9dc;">📎 Детальний прайс у вкладенні</strong><br>
                  До цього листа додано Excel-файл з повним прайсом та деталями замовлення, включаючи ПДВ.
                </p>
              </div>

              <!-- Next Steps -->
              <div style="margin: 30px 0; padding: 20px; background-color: #2d2d2d; border-radius: 4px; border-left: 4px solid #40cf72;">
                <p style="margin: 0; color: #f5f5f5; line-height: 1.6; font-size: 14px;">
                  <strong style="color: #40cf72;">✓ Наступні кроки:</strong><br>
                  Ми зв'яжемося з вами найближчим часом для підтвердження деталей замовлення та обговорення термінів виконання.
                </p>
              </div>

              <p style="margin: 30px 0 10px 0; font-size: 16px; line-height: 1.6; color: #f5f5f5;">
                З повагою,<br>
                <strong style="color: #ffd231;">Команда Additive3D</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #161616; padding: 30px; text-align: center; border-top: 1px solid #2d2d2d;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #8b7355;">
                © ${new Date().getFullYear()} Additive3D. Усі права захищені.
              </p>
              <p style="margin: 0; font-size: 12px; color: #8b7355;">
                Професійні послуги 3D-друку для вашого бізнесу
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Generate plain text version for email clients that don't support HTML
 */
export function generateOrderConfirmationText(orderData: OrderEmailData): string {
  return `
Вітаємо${orderData.userName ? ', ' + orderData.userName : ''}!

Дякуємо за ваше замовлення в Additive3D.

ДЕТАЛІ ЗАМОВЛЕННЯ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Номер замовлення: ${orderData.orderNumber}
Кількість файлів: ${orderData.files.length}
Загальна вага: ${orderData.totalWeight.toFixed(2)} г
Загальна вартість: ${orderData.totalPrice.toFixed(2)} грн

ВАШІ ФАЙЛИ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${orderData.files.map((file, i) => `${i + 1}. ${file.name}
   Кількість: ${file.quantity} шт
   Вага: ${file.weight.toFixed(2)} г
   Ціна: ${file.totalPrice.toFixed(2)} грн
   Завантажити: ${file.url}`).join('\n\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📎 Детальний прайс у вкладенні
До цього листа додано Excel-файл з повним прайсом та деталями замовлення, включаючи ПДВ.

✓ Наступні кроки:
Ми зв'яжемося з вами найближчим часом для підтвердження деталей замовлення та обговорення термінів виконання.

З повагою,
Команда Additive3D

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© ${new Date().getFullYear()} Additive3D. Усі права захищені.
Професійні послуги 3D-друку для вашого бізнесу
  `.trim();
}
