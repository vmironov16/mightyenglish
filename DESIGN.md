---
version: alpha
name: Mighty English
description: >-
  Design system for the landing page of Mighty English / Мощный английский —
  the premium personal-brand English school of Rudolf Ladner. Premium frame,
  hand-drawn soul. An "intelligent troublemaker": academically precise yet
  bold, warm and a little mischievous.

colors:
  primary: "#322D6B"
  on-primary: "#FBFAF7"
  secondary: "#1E1B40"
  on-secondary: "#FBFAF7"
  accent: "#CC2936"
  on-accent: "#FBFAF7"
  accent-hover: "#A8212C"
  gold: "#C9A24B"
  on-gold: "#1E1B40"
  surface: "#FBFAF7"
  surface-card: "#FFFFFF"
  surface-dark: "#1E1B40"
  on-surface: "#1E1B40"
  on-surface-variant: "#6B6880"
  on-surface-dark: "#FBFAF7"
  border: "#E5E3DC"

typography:
  h1:
    fontFamily: Unbounded
    fontSize: 4rem
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.5px"
  h2:
    fontFamily: Unbounded
    fontSize: 2.75rem
    fontWeight: 800
    lineHeight: 1.1
  h3:
    fontFamily: Unbounded
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.04em"
  button:
    fontFamily: Unbounded
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.2
  quote:
    fontFamily: Lora
    fontSize: 1.625rem
    fontWeight: 500
    lineHeight: 1.45

rounded:
  sm: 8px
  md: 12px
  lg: 16px
  pill: 999px

spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 96px

elevation:
  card: "0 4px 16px rgba(30,27,64,0.06)"
  card-hover: "0 12px 28px rgba(30,27,64,0.12)"
  cta: "0 6px 20px rgba(204,41,54,0.30)"
  cta-mega: "0 10px 32px rgba(204,41,54,0.40)"

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 18px 36px
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 16px 32px
  button-secondary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-cta-mega:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    rounded: "{rounded.lg}"
    padding: 24px 56px
  card-service:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-tariff-recommended:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-review:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 32px
  section-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-surface-dark}"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.pill}"
    padding: 6px 16px
---

## Overview

**Mighty English / Мощный английский** — лендинг авторской школы английского
языка Рудольфа Ладнера. Это не сайт «школы», а пространство одного сильного
преподавателя. Лендинг продаёт личный бренд: человек покупает человека.

**Эстетика в трёх словах: премиально, рукотворно, дерзко.**

Визуальная метафора — «премиальный каркас с рукотворной душой». Строгая,
просторная сетка в глубоком тёмно-синем и тёплом off-white держит дорогую,
почти плакатную типографику и hand-drawn акценты в фирменном синем. Бренд —
«интеллигентный хулиган»: академически точный, но живой, тёплый и слегка
дерзкий. Архетип — Мудрец с примесью Бунтаря.

Принципы, которым подчинены все решения:
- **Человек в центре.** Крупное фото Рудольфа встречает гостя на первом
  экране; его голос звучит в каждом заголовке.
- **Премиум, но не занудно.** Дорогой каркас (воздух, сетка, типографика) +
  живые рукотворные детали. Скелет — премиум, кровь — характер.
- **Mobile-first.** Большинство гостей приходят с телефона из Telegram и
  Instagram. Проектируем от 375px вверх.
- **Один акцент — одно действие.** Британский красный появляется редко и
  почти только на кнопках, поэтому каждый CTA считывается мгновенно.
- **Telegram — главная дверь.** Все ключевые CTA ведут в Telegram.

Целевые брейкпоинты: 375px (мобильный, база) · 768px (планшет) ·
1024px (ноутбук) · 1440px (десктоп, основной макет).

## Colors

Палитра построена вокруг глубокого тёмно-синего из логотипа и единственного
горячего акцента. Тёмно-синий несёт авторитет преподавателя университета,
красный — энергию «Мощного» и прямую отсылку к британскому флагу на языке в
логотипе. Фон — тёплый off-white, а не чисто-белый: так интерфейс сразу
считывается как продуманный и дорогой, а не как дефолтный шаблон.

- **Primary `#322D6B`** — фирменный глубокий синий. Логотип, хедер,
  заголовки, тёмно-синие плашки. Это «преподаватель университета» в цвете.
- **On-primary `#FBFAF7`** — светлый off-white для текста и иконок поверх
  primary.
- **Secondary `#1E1B40`** — чернильный сине-чёрный. Тёмные секции
  («О Рудольфе», финальный CTA), создаёт глубину и контраст ритма.
- **On-secondary `#FBFAF7`** — светлый текст поверх secondary.
- **Accent `#CC2936`** — британский красный. Только главные призывы к
  действию и точечные «горячие» детали. Используется дозированно — каждый
  красный элемент должен «кричать».
- **On-accent `#FBFAF7`** — текст на красных кнопках.
- **Accent-hover `#A8212C`** — затемнённый красный для состояния hover.
- **Gold `#C9A24B`** — золотой акцент. Только премиум-тариф и награды;
  маркирует «вершину продуктовой лестницы».
- **On-gold `#1E1B40`** — тёмный текст поверх золота.
- **Surface `#FBFAF7`** — тёплый off-white, основной фон страницы.
- **Surface-card `#FFFFFF`** — чистый белый для карточек поверх off-white;
  лёгкий контраст приподнимает карточку над фоном.
- **Surface-dark `#1E1B40`** — фон тёмных акцентных секций.
- **On-surface `#1E1B40`** — основной текст: почти чёрный с синим подтоном.
- **On-surface-variant `#6B6880`** — приглушённый сине-серый: подписи,
  caption, второстепенный текст, зачёркнутые старые цены.
- **On-surface-dark `#FBFAF7`** — текст на тёмных секциях.
- **Border `#E5E3DC`** — деликатные границы и разделители на светлом фоне.

Контраст проверен по WCAG AA: `on-surface` на `surface`, `on-surface-dark`
на `surface-dark`, `on-accent` на `accent`, `on-primary` на `primary` —
все пары проходят для основного текста (≥ 4.5:1). `on-surface-variant`
использовать только для крупного или второстепенного текста.

## Typography

Три шрифта, все с полной кириллицей. Выразительные геометрические заголовки
для удара, нейтральный гротеск для длинных текстов, антиква-italic — для
«человеческого голоса» в цитатах.

- **Unbounded** — заголовки `h1`–`h3` и текст кнопок. Геометрический,
  объёмный, «мощный» гротеск с характером: округлый и дерзкий одновременно.
  Перекликается с округлым жирным шрифтом существующего логотипа.
- **Inter** — основной текст `body-lg` / `body-md` и `label-caps`.
  Нейтральный, отлично читаемый экранный гротеск; не спорит с
  выразительными заголовками, спокойно держит длинные блоки «О Рудольфе»
  и FAQ.
- **Lora** *(Italic)* — токен `quote`. Гуманистическая антиква для прямых
  цитат Рудольфа. Контраст с гротесками выделяет цитату как «голос
  человека», а не элемент интерфейса.

Размеры заданы для десктопа (макет 1440px). На мобильном (375px)
масштабировать: `h1` → 2.25rem, `h2` → 1.75rem, `h3` → 1.375rem,
`body-lg` → 1rem, `quote` → 1.25rem. Использовать плавный clamp() между
брейкпоинтами. `label-caps` — для надзаголовков секций и плашек, всегда
капсом с трекингом. Подключать только перечисленные начертания,
`font-display: swap`.

Резерв: если Unbounded окажется тяжёл для длинных заголовков — заменить
на Onest или Manrope (оба с кириллицей), сохранив веса.

## Layout

Сетка просторная: воздух — главный инструмент премиальности.

- **Контейнер:** макс. ширина контента 1200px, по центру; боковые поля
  24px на мобильном, 48px+ на десктопе.
- **Сетка:** 12 колонок на десктопе, 1 колонка на мобильном. Карточки
  услуг — 3 в ряд (десктоп) / стопкой (мобильный); тарифы — 3 в ряд /
  вертикальной стопкой, рекомендованный идёт первым на мобильном.
- **Шкала отступов** (`spacing`): `xs` 8px · `sm` 16px · `md` 24px ·
  `lg` 48px · `xl` 96px. Вертикальные отступы между секциями — `xl` на
  десктопе, 56px на мобильном. Внутренние отступы карточек — `lg`.
- **Ритм:** чередовать светлые (`surface`) и тёмные (`surface-dark`)
  секции для смены ритма при скролле.
- **Разделители секций:** без прямых линий. Использовать смену фона,
  мягкую диагональ среза или рисованную волнистую линию цветом
  `{colors.primary}`. Линейки-бордюры — только внутри карточек.
- **Навигация:** sticky-хедер. На мобильном — логотип-знак + бургер
  (якорное меню). Мобильный sticky-bar снизу с главным CTA, появляется
  после прокрутки Hero.

## Elevation & Depth

Глубина создаётся мягкими тенями и сменой фона, без параллакса
(параллакс бьёт по производительности на мобильных — не использовать).

- **`elevation.card`** — `0 4px 16px rgba(30,27,64,0.06)` — карточки услуг,
  тарифов и отзывов в покое. Тень мягкая, сине-чёрная, едва заметная.
- **`elevation.card-hover`** — `0 12px 28px rgba(30,27,64,0.12)` — карточка
  при наведении, в паре с подъёмом `translateY(-6px)`.
- **`elevation.cta`** — `0 6px 20px rgba(204,41,54,0.30)` — цветная тень
  под красными кнопками: кнопка «светится» и выходит на передний план.
- **`elevation.cta-mega`** — `0 10px 32px rgba(204,41,54,0.40)` — усиленная
  тень для финальной mega-кнопки.

Слои по глубине: фон секции → карточка (`card`) → hover-карточка
(`card-hover`) → sticky-хедер и мобильный CTA-bar (поверх всего).

## Shapes

Скругления — умеренные: мягко и дружелюбно, но не «детски-округло».
Премиум держится на сдержанности.

- **`rounded.sm` 8px** — мелкие элементы: инпуты, плашки, теги.
- **`rounded.md` 12px** — кнопки `button-primary` и `button-secondary`,
  по умолчанию для интерактивных элементов.
- **`rounded.lg` 16px** — карточки услуг, тарифов, отзывов; mega-кнопка.
- **`rounded.pill` 999px** — капсульные элементы: бейдж «Выбор
  большинства», аватарки учеников, лейблы-капсулы.

Hand-drawn слой — часть фирменной формы и поверх геометрии:
рисованные подчёркивания под ключевыми словами заголовков, стрелки между
шагами методики, рамка-обводка вокруг главного CTA, кавычка в карточке
отзыва. Все рисованные элементы — единой толщиной линии, цветом
`{colors.primary}`, с лёгкой «нервностью» штриха как авторский почерк.
Иконки — hand-drawn outline в `{colors.primary}`, нарисованы под бренд.

## Components

- **`button-primary`** — главный CTA («Записаться в Telegram»). Фон
  `accent`, текст `on-accent`, шрифт `button`, скругление `md`, тень
  `elevation.cta`. Опциональная hand-drawn обводка. Hover —
  `button-primary-hover`: фон `accent-hover`, подъём `translateY(-2px)`,
  тень усиливается.
- **`button-secondary`** — второстепенное действие («Познакомиться в
  Telegram»). Прозрачно-светлый фон `surface`, граница 2px `primary`,
  текст `primary`. Hover — `button-secondary-hover`: заливка `primary`,
  текст `on-primary`.
- **`button-cta-mega`** — финальная кнопка в закрывающем блоке. Фон
  `accent`, скругление `lg`, увеличенный padding, тень `elevation.cta-mega`.
  На тёмной секции — обязательная hand-drawn обводка для «вспышки».
- **`card-service`** — карточка услуги/формата. Белый фон `surface-card`,
  скругление `lg`, граница 1px `border`, тень `elevation.card`. Внутри:
  hand-drawn иконка → заголовок `h3` → описание `body-md` → цена → ссылка-
  CTA. Hover — подъём `translateY(-6px)`, тень `elevation.card-hover`.
- **`card-tariff-recommended`** — рекомендованный тариф (Расширенный).
  Та же база, но граница 2px `primary`, приподнят на 12px, сверху
  капсульный бейдж `badge` с текстом «Выбор большинства». Премиум-тариф —
  отдельная карточка с золотым акцентом `gold` на заголовке и рамке.
  Старая цена — зачёркнута, цветом `on-surface-variant`; новая — крупно,
  `h3` / Unbounded 800.
- **`card-review`** — карточка отзыва. Белый фон, скругление `lg`. Внутри:
  круглое фото ученика (`rounded.pill`) или скриншот в рамке мессенджера →
  имя + формат занятий (`label-caps`, цвет `on-surface-variant`) → текст
  отзыва шрифтом `quote` (Lora Italic) → крупная рисованная кавычка
  цветом `primary` в углу.
- **`section-dark`** — тёмная акцентная секция («О Рудольфе», финальный
  CTA). Фон `surface-dark`, текст `on-surface-dark`. Внутри — светлые
  кнопки и hand-drawn акценты.
- **`badge`** — капсульная плашка-лейбл (например «Выбор большинства»,
  «Идёт набор»). Фон `primary`, текст `on-primary`, шрифт `label-caps`,
  скругление `pill`.

Состояния (hover, active) описаны отдельными записями с родственным
именем. Анимации: вход элементов — fade-in + slide-up ~20px, мягкий
ease-out 0.5–0.6с; hand-drawn подчёркивания «дорисовываются» через
SVG stroke; счётчики цифр — анимация набора числа. Уважать
`prefers-reduced-motion`.

## Do's and Don'ts

**Делать:**
- Ставить настоящее фото Рудольфа в центр — формальный образ (кардиган +
  галстук) в Hero и блоке доверия, тёплый образ (красный свитер) в
  «О Рудольфе», методике, отзывах и footer.
- Держать много воздуха: щедрые `spacing.xl` между секциями — это и есть
  премиальность.
- Использовать один и тот же CTA-текст и цвет `accent` на всех главных
  кнопках — единое предсказуемое действие.
- Развивать hand-drawn логотип в систему акцентов: подчёркивания, стрелки,
  рамки, мультяшный аватар-проводник в методике и FAQ.
- Чередовать светлые и тёмные секции для ритма.
- Проектировать mobile-first и проверять контраст по WCAG AA.

**Не делать:**
- Не использовать чисто-белый `#FFFFFF` как фон страницы — только тёплый
  `surface` `#FBFAF7`. Чистый белый — для карточек.
- Не заливать красным `accent` крупные плоскости и не делать им фон
  секций — он только для действий и точечных акцентов.
- Не применять стоковые фото улыбающихся людей — только настоящие фото
  Рудольфа и реальные скриншоты учеников.
- Не делать сайт «детским»: hand-drawn — это дозированный акцент на
  премиум-каркасе, а не сплошной фон и не мультяшность во всех секциях.
- Не использовать параллакс и тяжёлые анимации — производительность
  важнее красоты, Lighthouse Performance не ниже 90.
- Не добавлять корпоративный сине-бело-оранжевый шаблон и не терять
  живой голос Рудольфа — ни в визуале, ни в текстах.
