# RPS Arena Landing Page

Landing page с waitlist функциональностью для RPS Arena.

## Функциональность

- **Waitlist форма** - пользователи могут подписаться на уведомления о запуске
- **Адаптивный дизайн** - работает на всех устройствах
- **Современный UI** - использует стили проекта с градиентами и анимациями
- **API endpoint** - `/api/waitlist` для обработки подписок

## Компоненты

### RPSLogo
Переиспользуемый компонент логотипа с настраиваемыми размерами:
- `size`: 'sm' | 'md' | 'lg'
- `showText`: boolean (показывать ли текст)
- `className`: дополнительные CSS классы

### Landing Page
Основная страница с:
- Hero секцией с waitlist формой
- Статистикой
- Особенностями игры
- CTA секцией

## API

### POST /api/waitlist
Принимает email и сохраняет в waitlist.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully added to waitlist"
}
```

## Интеграция с базой данных

Для полной функциональности нужно добавить сохранение в Supabase:

```typescript
// В /api/waitlist/route.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

// В POST handler:
await supabase.from('waitlist').insert({ 
  email, 
  created_at: new Date() 
})
```

## Стили

Использует существующие стили проекта:
- Orbitron шрифт
- Градиенты purple/pink/blue
- Темная тема
- Tailwind CSS классы
