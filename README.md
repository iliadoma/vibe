This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
| Поле                        | Тип данных                         | Обязательное | Описание                                                          |
| --------------------------- | ---------------------------------- | ------------ | ----------------------------------------------------------------- |
| `id`                        | UUID / ObjectId                    | ✅            | Уникальный идентификатор объекта                                  |
| `название`                  | Строка                             | ✅            | Название объекта (например, "Лежак 3" или "Беседка на крыше")     |
| `описание`                  | Строка (многострочная)             | ❌            | Текстовое описание объекта                                        |
| `фото_url`                  | Строка (URL)                       | ❌            | Ссылка на фотографию объекта                                      |
| `родитель_id`               | UUID / ObjectId                    | ❌            | Ссылка на родительский объект, если это вложенный элемент         |
| `тип`                       | Enum                               | ✅            | Тип объекта: `"простое"`, `"составное"`                           |
| `таймзона`                  | Строка (например, "Europe/Moscow") | ✅            | Часовой пояс, в котором работает объект                           |
| `время_начала_работы`       | Время (чч:мм)                      | ✅            | Время начала работы объекта (например, "08:00")                   |
| `время_окончания_работы`    | Время (чч:мм)                      | ✅            | Время окончания работы (например, "22:00")                        |
| `размер_слота`              | Число (в минутах)                  | ✅            | Длительность одного слота (например, 60 минут)                    |
| `рабочие_дни`               | Массив строк                       | ✅            | Дни недели, когда объект доступен (например, \["Пн", "Вт", "Ср"]) |
| `макс_бронирований_на_слот` | Число                              | ❌            | Сколько людей могут одновременно забронировать один слот          |
| `можно_бронировать_впрок`   | Булево                             | ✅            | Разрешено ли бронировать заранее                                  |
| `макс_дней_впрок`           | Число                              | ❌            | Сколько дней вперёд можно бронировать (например, 14)              |
| `цена_за_слот`              | Число (в валюте)                   | ❌            | Если бронирование платное — стоимость за слот                     |
| `валюта`                    | Строка (ISO 4217)                  | ❌            | Валюта оплаты (например, "RUB", "USD", "UZS")                     |
| `правила_отмены`            | Строка / ID                        | ❌            | Описание или ссылка на правила отмены брони                       |
| `активен`                   | Булево                             | ✅            | Отображается ли объект в интерфейсе или выключен                  |
| `создано`                   | Дата-время                         | ✅ (авто)     | Дата создания записи                                              |
| `обновлено`                 | Дата-время                         | ✅ (авто)     | Дата последнего изменения записи                                  |

