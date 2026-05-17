# Landing Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Заменить весь placeholder-контент в лендинге на реальный контент Рудольфа Ладнера, добавить секцию уникальных форматов.

**Architecture:** Правки только в компонентах `src/components/` — только текст и ссылки, дизайн-система и CSS не трогаются. Один новый компонент `SpecialFormats.astro`. Никаких изменений в `src/styles/`, `DESIGN.md`, `tokens.css`, `landing.css`.

**Tech Stack:** Astro 6, компоненты `.astro`, dev-сервер `npm run dev` (или `yarn dev`)

---

## Ключевые константы (держи под рукой)

```
Главный CTA:   https://t.me/Mighty_Teacher       (личная запись)
Бот (инфо):    https://t.me/MIGHTY_ENGLISH_info_bot
Канал:         https://t.me/mighty_english
Instagram:     https://www.instagram.com/mighty_teacher
Speaking Club: https://t.me/MightyLife
```

## File Map

| Статус | Файл | Что меняем |
|---|---|---|
| Modify | `src/components/Header.astro` | CTA ссылка |
| Modify | `src/components/Hero.astro` | CTA ссылка, eyebrow год, подзаголовок |
| Modify | `src/components/ValueRow.astro` | Все три факта → четыре реальных |
| Modify | `src/components/About.astro` | CTA ссылка, h2, цитата, тело, credentials |
| Modify | `src/components/Methodology.astro` | CTA ссылка, steps array (4→3), тексты |
| Modify | `src/components/Services.astro` | CTA ссылка, все три карточки |
| Modify | `src/components/Tariffs.astro` | CTA ссылка, все три тарифа (курс, не уроки) |
| Modify | `src/components/Reviews.astro` | Временные заглушки без ложных деталей |
| Modify | `src/components/FAQ.astro` | CTA ссылка, 3 ответа |
| Modify | `src/components/FinalCTA.astro` | CTA ссылка |
| Modify | `src/components/StickyMobileCTA.astro` | CTA ссылка |
| Modify | `src/components/Footer.astro` | Год, ссылки |
| **Create** | `src/components/SpecialFormats.astro` | Новый компонент — Театр, Паркур, Speaking Club |
| Modify | `src/pages/index.astro` | Импорт и вставка SpecialFormats |

---

## Task 1: Исправить все CTA-ссылки

**Files:**
- Modify: `src/components/Header.astro:2`
- Modify: `src/components/Hero.astro:2`
- Modify: `src/components/About.astro:2`
- Modify: `src/components/Methodology.astro:2`
- Modify: `src/components/Services.astro:2`
- Modify: `src/components/Tariffs.astro:2`
- Modify: `src/components/FAQ.astro:2`
- Modify: `src/components/FinalCTA.astro:2`
- Modify: `src/components/StickyMobileCTA.astro:2`

- [ ] **Step 1: Заменить tg-константу во всех компонентах разом**

```bash
cd src/components
sed -i '' 's|https://t.me/mighty_english|https://t.me/Mighty_Teacher|g' \
  Header.astro Hero.astro About.astro Methodology.astro \
  Services.astro Tariffs.astro FAQ.astro FinalCTA.astro StickyMobileCTA.astro
```

- [ ] **Step 2: Проверить**

```bash
grep -r "t.me/mighty_english" src/components/
```

Ожидаемый результат: **пустой вывод** (ни одной строки).

- [ ] **Step 3: Исправить Footer отдельно** — там две ссылки, добавить соцсети

Открыть `src/components/Footer.astro`, заменить полностью содержимое:

```astro
---
const tg = "https://t.me/Mighty_Teacher";
const bot = "https://t.me/MIGHTY_ENGLISH_info_bot";
const channel = "https://t.me/mighty_english";
const insta = "https://www.instagram.com/mighty_teacher";
const events = "https://t.me/MightyLife";
---
<footer class="me-footer">
  <div class="me-container">
    <div class="me-footer__row">
      <div class="me-footer__brand">
        <img src="/assets/img/logo-full.jpg" alt="Mighty English" width="56" height="56" />
        <div class="me-footer__name">
          мощный английский
          <small>Mighty English · Rudolf Ladner · с 2013</small>
        </div>
      </div>

      <nav class="me-footer__links" aria-label="Навигация в футере">
        <a href="#method">Методика</a>
        <a href="#services">Форматы</a>
        <a href="#tariffs">Тарифы</a>
        <a href="#reviews">Отзывы</a>
        <a href="#faq">FAQ</a>
        <a href={channel} target="_blank" rel="noopener noreferrer">Telegram-канал</a>
        <a href={insta} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={events} target="_blank" rel="noopener noreferrer">События</a>
      </nav>
    </div>

    <div class="me-footer__legal">
      © 2013 — 2026 · Рудольф Александрович Ладнер · Все ученики — настоящие. Все цены — окончательные.
    </div>
  </div>
</footer>
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.astro src/components/Hero.astro \
  src/components/About.astro src/components/Methodology.astro \
  src/components/Services.astro src/components/Tariffs.astro \
  src/components/FAQ.astro src/components/FinalCTA.astro \
  src/components/StickyMobileCTA.astro src/components/Footer.astro
git commit -m "fix: update all CTA links to Mighty_Teacher, fix footer links and year"
```

---

## Task 2: Обновить Hero — eyebrow и подзаголовок

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Исправить eyebrow (год) и подзаголовок**

В `src/components/Hero.astro` найти и заменить:

```astro
        <div class="me-hero__eyebrow me-eyebrow">авторская школа · с 2014</div>
```
→
```astro
        <div class="me-hero__eyebrow me-eyebrow">авторская школа · с 2013</div>
```

Найти и заменить подзаголовок:

```astro
        <p class="me-hero__sub">
          Меня зовут <b>Рудольф Ладнер</b>. Я учу взрослых, которые
          устали от приложений, групп и Title Case. Один на один,
          по делу, без зубрёжки. Запись&nbsp;— в&nbsp;Telegram.
        </p>
```
→
```astro
        <p class="me-hero__sub">
          Меня зовут <b>Рудольф Ладнер</b>. Преподаватель КФУ и КИУ,
          переводчик, актёр озвучания. Уровень языка&nbsp;— C2 Proficiency.
          Учу через живой язык и общение, а не через зубрёжку.
        </p>
```

- [ ] **Step 2: Запустить dev и проверить Hero-секцию**

```bash
npm run dev
```

Открыть `http://localhost:4321`. Убедиться:
- eyebrow показывает «с 2013»
- подзаголовок содержит «КФУ и КИУ», «C2 Proficiency»
- кнопка ведёт на `t.me/Mighty_Teacher`

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "content: fix Hero eyebrow year and subtitle with real credentials"
```

---

## Task 3: Обновить ValueRow — реальные цифры

**Files:**
- Modify: `src/components/ValueRow.astro`

- [ ] **Step 1: Заменить содержимое ValueRow**

Полностью заменить содержимое `src/components/ValueRow.astro`:

```astro
---
---
<section class="me-value">
  <div class="me-container">
    <div class="me-value__grid">
      <div class="me-value__item">
        <div class="me-value__num">10+</div>
        <div class="me-value__lbl">лет преподаю</div>
      </div>
      <div class="me-value__item">
        <div class="me-value__num">сотни</div>
        <div class="me-value__lbl">довольных студентов</div>
      </div>
      <div class="me-value__item">
        <div class="me-value__num">тысячи</div>
        <div class="me-value__lbl">проведённых занятий</div>
      </div>
      <div class="me-value__item">
        <div class="me-value__num">C2</div>
        <div class="me-value__lbl">подтверждённый высший уровень · EF</div>
      </div>
    </div>
  </div>
</section>
```

> Замечание по CSS: текущий `.me-value__grid` рассчитан на 3 колонки. Если 4-я карточка ломает сетку — добавить в `landing.css` правило `.me-value__grid { grid-template-columns: repeat(4, 1fr); }` для desktop. На мобайле уже должно быть `repeat(2, 1fr)` или `repeat(auto-fit, ...)`.

- [ ] **Step 2: Проверить в браузере**

Открыть `http://localhost:4321`. Убедиться что полоса с цифрами показывает 4 блока и не ломается на мобайле (открыть DevTools, переключить на 375px).

- [ ] **Step 3: Commit**

```bash
git add src/components/ValueRow.astro
git commit -m "content: replace ValueRow with real facts — remove false 1-on-1 claim"
```

---

## Task 4: Переписать About — реальное биo Рудольфа

**Files:**
- Modify: `src/components/About.astro`

- [ ] **Step 1: Заменить весь контент About**

Полностью заменить содержимое `src/components/About.astro`:

```astro
---
const tg = "https://t.me/Mighty_Teacher";
---
<section class="me-section me-section--dark" id="about">
  <div class="me-container">
    <div class="me-about">
      <div class="me-about__grid">
        <div class="me-about__photo-wrap">
          <img src="/assets/img/rudolf-warm.png" alt="Рудольф Ладнер" loading="lazy" />
        </div>

        <div>
          <div class="me-eyebrow">о Рудольфе</div>
          <h2>Преподаватель университета. Переводчик. Актёр озвучания.</h2>
          <p class="me-about__lead">
            «Не нужно зубрить язык — на нём нужно говорить.»
          </p>
          <p class="me-about__body">
            Преподаю с 2013 года, частная практика с 2017&#8209;го.
            Работал в КФУ и КИУ — общий английский, медицинский, IT, бизнес.
            Область науки&nbsp;— когнитивная и сопоставительная лингвистика, педагогика.
            Публикации в журналах РИНЦ, ВАК и SCOPUS.
            Перевёл десятки научных работ&nbsp;— от истории колоколов до физики
            элементарных частиц. Профессионально озвучиваю на русском и английском&nbsp;—
            однажды озвучил компьютерную игру.
          </p>

          <ul class="me-about__creds">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>C2 Proficiency · сертификат EF</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>КФУ, 2014–2018 · КИУ, 2023 — настоящее время</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>Публикации РИНЦ, ВАК, SCOPUS</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg>
              <span>Актёр озвучания — озвучил компьютерную игру</span>
            </li>
          </ul>

          <div class="me-about__actions">
            <a class="me-btn me-btn--primary me-btn--lg" href={tg} target="_blank" rel="noopener noreferrer">
              <span class="me-btn__inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                <span>Записаться в Telegram</span>
              </span>
            </a>
            <a class="me-btn me-btn--ghost me-btn--md" href="#method">
              <span class="me-btn__inner"><span>Как устроен урок →</span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Проверить в браузере**

Прокрутить до секции About. Убедиться:
- нет слов «МГУ», «Манчестер», «CELTA», «Joy Division»
- есть «КФУ», «КИУ», «C2 Proficiency», «SCOPUS», «озвучил компьютерную игру»
- фото Рудольфа отображается

- [ ] **Step 3: Commit**

```bash
git add src/components/About.astro
git commit -m "content: rewrite About with real Rudolf Ladner bio — KFU, KIU, C2 EF, voice actor"
```

---

## Task 5: Переписать Methodology — 3 шага + Telegram-формат

**Files:**
- Modify: `src/components/Methodology.astro`

- [ ] **Step 1: Заменить весь компонент**

Полностью заменить содержимое `src/components/Methodology.astro`:

```astro
---
const tg = "https://t.me/Mighty_Teacher";
const steps = [
  {
    n: "01",
    h: "Актуализация",
    p: "Вспоминаем, что уже знаем. Включаемся в тему через вопрос, живую ситуацию или игру — без стресса и зубрёжки."
  },
  {
    n: "02",
    h: "Новый материал",
    p: "Не заучиваем правило — понимаем, почему именно так. Этимология, логика языка, настоящий смысл. Оказывается, всё работает системно."
  },
  {
    n: "03",
    h: "Практика + Игры",
    p: "Закрепляем в живом общении: диалоги, коммуникативные игры, разбор ошибок здесь и сейчас. Английский остаётся — потому что был в деле."
  },
];
---
<section class="me-section" id="method">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">методика</div>
      <h2>Три шага. Никакой зубрёжки — только живой язык.</h2>
      <p>Программа строится под твою задачу. Так больше шансов, что английский останется навсегда, а не только до конца курса.</p>
    </div>

    <div class="me-method__grid">
      {steps.map((s, idx) => (
        <div class="me-step">
          <div class="me-step__num">шаг · {s.n}</div>
          <h3>{s.h}</h3>
          <p>{s.p}</p>
          {idx < steps.length - 1 && (
            <div class="me-step__arrow">
              <svg class="me-drawn-arrow" viewBox="0 0 80 28" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 14 C 20 4, 40 24, 60 12 L 72 12"/>
                <path d="M66 6 L 74 12 L 66 18"/>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>

    <div class="me-method__hero">
      <div class="me-method__hero-content">
        <div class="me-eyebrow">как устроен мощный курс</div>
        <h3>Закрытая Telegram-группа с четырьмя вкладками.</h3>
        <p>
          Каждый понедельник — новые видеоуроки и тесты.
          Чат на русском: вопросы, голосовые и кружочки от меня лично.
          Чат на английском: практика, игры, разбор ошибок.
          Дополнительные материалы — по запросу.
          После потока доступ ко всему сохраняется&nbsp;<b>целый год</b>.
        </p>
        <a class="me-btn me-btn--primary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
          <span class="me-btn__inner">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            <span>Записаться в Telegram</span>
          </span>
        </a>
      </div>
      <img src="/assets/img/rudolf-cartoon-chalkboard.jpg" alt="Рудольф у доски" loading="lazy" />
    </div>
  </div>
</section>
```

- [ ] **Step 2: Проверить в браузере**

Прокрутить до Methodology. Убедиться:
- 3 шага (не 4): «Актуализация», «Новый материал», «Практика + Игры»
- между шагами 1→2 и 2→3 есть стрелки, после шага 3 стрелки нет
- нижний блок описывает Telegram-группу, а не «виртуальную доску»

- [ ] **Step 3: Commit**

```bash
git add src/components/Methodology.astro
git commit -m "content: rewrite Methodology — real 3-step method and Telegram group format"
```

---

## Task 6: Переписать Services — реальные форматы

**Files:**
- Modify: `src/components/Services.astro`

- [ ] **Step 1: Заменить весь компонент**

Полностью заменить содержимое `src/components/Services.astro`:

```astro
---
const tg = "https://t.me/Mighty_Teacher";
---
<section class="me-section" id="services">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">форматы</div>
      <h2>Три формата. Начни с того, что подходит тебе.</h2>
      <p>Если не знаешь, что выбрать — пиши в Telegram. Разберёмся вместе.</p>
    </div>

    <div class="me-services__grid">
      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="24" cy="16" r="7"/>
            <path d="M10 40 C 10 30, 38 30, 38 40"/>
          </svg>
        </div>
        <h3>Индивидуально · онлайн</h3>
        <p>Час один на один. Программа под твою задачу: карьера, экзамен, переезд, уверенность в речи. Без лишних людей и ожидания очереди.</p>
        <div class="me-service__price">
          <span class="new">5 000 ₽</span>
          <span style="color:var(--color-on-surface-variant);font-size:0.9rem"> / урок</span>
        </div>
        <a class="me-service__cta" href={tg} target="_blank" rel="noopener noreferrer">Записаться →</a>
      </article>

      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="17" cy="16" r="6"/>
            <circle cx="33" cy="16" r="6"/>
            <path d="M6 40 C 6 30, 28 30, 28 40"/>
            <path d="M20 40 C 20 30, 42 30, 42 40"/>
          </svg>
        </div>
        <h3>Мини-группы · онлайн</h3>
        <p>До 5 человек. Живое общение, внимание каждому. Разговорный клуб — 3 раза в неделю. Комфортная цена, реальная практика речи.</p>
        <div class="me-service__price">
          <span class="new">700 ₽</span>
          <span style="color:var(--color-on-surface-variant);font-size:0.9rem"> / встреча</span>
        </div>
        <a class="me-service__cta" href={tg} target="_blank" rel="noopener noreferrer">Записаться →</a>
      </article>

      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M8 14 L 40 14 M 8 14 L 8 38 L 40 38 L 40 14"/>
            <path d="M16 22 L 24 30 L 34 20"/>
          </svg>
        </div>
        <h3>Мощный курс · групповой поток</h3>
        <p>Закрытая Telegram-группа на 1 месяц. Видеоуроки, тесты, чаты с Рудольфом, Speaking Club. Доступ ко всем материалам — 1 год.</p>
        <div class="me-service__price">
          <span class="new">от 3 300 ₽</span>
          <span style="color:var(--color-on-surface-variant);font-size:0.9rem"> / поток</span>
        </div>
        <a class="me-service__cta" href="#tariffs">Выбрать тариф →</a>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Проверить в браузере**

Прокрутить до Services. Убедиться:
- три карточки: «Индивидуально», «Мини-группы», «Мощный курс»
- цены: 5 000 ₽, 700 ₽, от 3 300 ₽
- третья карточка ведёт якорем на `#tariffs`, а не в Telegram

- [ ] **Step 3: Commit**

```bash
git add src/components/Services.astro
git commit -m "content: rewrite Services with real formats — individual, mini-groups, Mighty Course"
```

---

## Task 7: Переписать Tariffs — тарифы Мощного курса

**Files:**
- Modify: `src/components/Tariffs.astro`

- [ ] **Step 1: Заменить весь компонент**

Полностью заменить содержимое `src/components/Tariffs.astro`:

```astro
---
const tg = "https://t.me/Mighty_Teacher";
---
<section class="me-section" id="tariffs" style="background: var(--color-surface-card)">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">мощный курс</div>
      <h2>Один поток — три уровня вовлечения.</h2>
      <p>Групповой онлайн-курс в Telegram. 1 месяц обучения + доступ ко всем материалам ещё <b>целый год</b>. Возраст и уровень языка — не ограничены.</p>
    </div>

    <div class="me-tariffs__grid">
      <!-- Базовый -->
      <article class="me-tariff">
        <div class="me-tariff__name">Базовый</div>
        <div class="me-tariff__price">
          <span class="old">4 125 ₽</span>
          <span class="new">3 300</span>
          <span class="per">₽ / поток</span>
        </div>
        <ul class="me-tariff__feat">
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Видеоуроки по грамматике + тесты</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Чат на русском — вопросы и голосовые от Рудольфа</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Чат на английском — практика и игры</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Дополнительные материалы по запросу</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Доступ к материалам 1 год</span></li>
        </ul>
        <div class="me-tariff__cta">
          <a class="me-btn me-btn--secondary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
            <span class="me-btn__inner"><span>Выбрать</span></span>
          </a>
        </div>
      </article>

      <!-- Расширенный (recommended) -->
      <article class="me-tariff me-tariff--reco">
        <div class="me-tariff__badge">
          <span class="me-badge me-badge--primary">Выбор большинства</span>
        </div>
        <div class="me-tariff__name">Расширенный</div>
        <div class="me-tariff__price">
          <span class="old">7 000 ₽</span>
          <span class="new">5 600</span>
          <span class="per">₽ / поток</span>
        </div>
        <ul class="me-tariff__feat">
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Всё из Базового</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Speaking Club — разговорный клуб 3 раза в неделю</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Группы до 5 человек — каждому достанется слово</span></li>
        </ul>
        <div class="me-tariff__cta">
          <a class="me-btn me-btn--primary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
            <span class="me-btn__inner">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              <span>Записаться в Telegram</span>
            </span>
          </a>
        </div>
      </article>

      <!-- Премиум -->
      <article class="me-tariff me-tariff--premium">
        <div class="me-tariff__name">Премиум</div>
        <div class="me-tariff__price">
          <span class="old">12 000 ₽</span>
          <span class="new">9 600</span>
          <span class="per">₽ / поток</span>
        </div>
        <ul class="me-tariff__feat">
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Всё из Расширенного</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Индивидуальная встреча 30 мин с Рудольфом</span></li>
          <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12L10 17L19 7"/></svg><span>Время встречи — удобное для вас</span></li>
        </ul>
        <div class="me-tariff__cta">
          <a class="me-btn me-btn--secondary me-btn--md" href={tg} target="_blank" rel="noopener noreferrer">
            <span class="me-btn__inner"><span>Узнать больше</span></span>
          </a>
        </div>
      </article>
    </div>

    <p style="text-align:center;margin-top:2rem;color:var(--color-on-surface-variant);font-size:0.9rem">
      Цены со скидкой 25% · Места в потоке ограничены
    </p>
  </div>
</section>
```

- [ ] **Step 2: Проверить в браузере**

Прокрутить до Tariffs. Убедиться:
- eyebrow «мощный курс» (не «тарифы»)
- три тарифа: Базовый 3 300 ₽, Расширенный 5 600 ₽, Премиум 9 600 ₽
- зачёркнутые старые цены отображаются (класс `old`)
- Расширенный визуально выделен (класс `me-tariff--reco`)
- Премиум имеет золотые галочки

- [ ] **Step 3: Commit**

```bash
git add src/components/Tariffs.astro
git commit -m "content: rewrite Tariffs with real Mighty Course tiers and pricing"
```

---

## Task 8: Исправить FAQ — убрать противоречия

**Files:**
- Modify: `src/components/FAQ.astro`

- [ ] **Step 1: Исправить items array**

В `src/components/FAQ.astro` заменить массив `items`:

```astro
---
const tg = "https://t.me/Mighty_Teacher";
const items = [
  {
    q: "Подойдёт ли мне курс, если у меня нулевой уровень?",
    a: "Возраст участников и уровень языка не ограничены. Если есть желание — разберёмся вместе. Я работал с самыми разными аудиториями: от детских садов до студентов университетов."
  },
  {
    q: "Чем Мощный курс отличается от обычных курсов?",
    a: "Закрытая Telegram-группа с 4 вкладками: видеоуроки и тесты, чат на русском (голосовые и кружочки от меня лично), чат на английском (практика и игры), дополнительные материалы. После потока доступ сохраняется целый год — ничего не сгорит."
  },
  {
    q: "Сколько времени нужно уделять?",
    a: "Поток длится 1 месяц. Каждый понедельник — новые видео и тесты. Темп выбираешь сам. Если не успел — все материалы доступны ещё год, пересмотришь в удобное время."
  },
  {
    q: "Можно ли заниматься из другого города или страны?",
    a: "Мощный курс и Speaking Club — онлайн, из любой точки мира. Очные форматы (Театр, Паркур, квизы) — Набережные Челны и Казань."
  },
  {
    q: "Готовишь к IELTS, TOEFL, ЕГЭ?",
    a: "Да: IELTS, TOEFL, ОГЭ, ЕГЭ, сертификаты EF и Duolingo. Уточни в Telegram какой формат тебе нужен — подберём подходящий."
  },
  {
    q: "Что если я пропущу неделю?",
    a: "Все видео и тесты остаются в группе. Доступ сохраняется год после потока — ничего не сгорит, можно вернуться и пересмотреть в любое время."
  },
];
---
```

- [ ] **Step 2: Проверить в браузере**

Прокрутить до FAQ. Убедиться:
- первый вопрос о нулевом уровне отвечает «возраст и уровень не ограничены»
- нет упоминания «A2», «чистый ноль — нет», «средний 7.5»
- аккордеон раскрывается и закрывается

- [ ] **Step 3: Commit**

```bash
git add src/components/FAQ.astro
git commit -m "content: fix FAQ — remove contradictions, align with real course format"
```

---

## Task 9: Создать SpecialFormats — Театр, Паркур, Speaking Club

**Files:**
- Create: `src/components/SpecialFormats.astro`

- [ ] **Step 1: Создать файл**

Создать `src/components/SpecialFormats.astro`:

```astro
---
const tg = "https://t.me/Mighty_Teacher";
const events = "https://t.me/MightyLife";
---
<section class="me-section" id="special" style="background: var(--color-surface-card)">
  <div class="me-container">
    <div class="me-section__head">
      <div class="me-eyebrow">уникальные форматы</div>
      <h2>Такого в Татарстане больше нигде нет.</h2>
      <p>Очные активности в Набережных Челнах и Казани — английский как часть живой, интересной жизни.</p>
    </div>

    <div class="me-services__grid">
      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 8 L 36 8 L 40 20 L 24 38 L 8 20 Z"/>
            <path d="M8 20 L 40 20"/>
            <path d="M12 8 L 24 38 M 36 8 L 24 38"/>
          </svg>
        </div>
        <h3>Мощный театр</h3>
        <p>Актёрство, фехтование, жонглирование, вокал — всё на английском. Очно в Набережных Челнах и Казани. Для всех возрастов.</p>
        <div class="me-service__price">
          <span class="new">500 ₽</span>
          <span style="color:var(--color-on-surface-variant);font-size:0.9rem"> / встреча</span>
        </div>
        <a class="me-service__cta" href={events} target="_blank" rel="noopener noreferrer">Узнать расписание →</a>
      </article>

      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M16 36 L 24 12 L 32 36"/>
            <path d="M10 28 L 38 22"/>
            <circle cx="24" cy="10" r="3"/>
          </svg>
        </div>
        <h3>Паркур</h3>
        <p>Английский в движении. Нестандартный формат для тех, кому скучно сидеть за столом. Очно в Набережных Челнах.</p>
        <div class="me-service__price">
          <span class="new">1 000 ₽</span>
          <span style="color:var(--color-on-surface-variant);font-size:0.9rem"> / встреча</span>
        </div>
        <a class="me-service__cta" href={tg} target="_blank" rel="noopener noreferrer">Написать Рудольфу →</a>
      </article>

      <article class="me-service">
        <div class="me-service__ico">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="17" cy="16" r="6"/>
            <circle cx="31" cy="16" r="6"/>
            <path d="M8 38 C 8 28, 26 28, 26 38"/>
            <path d="M22 38 C 22 28, 40 28, 40 38"/>
          </svg>
        </div>
        <h3>Speaking Club</h3>
        <p>Разговорный клуб онлайн — 3 раза в неделю. Группы до 5 человек: каждому достанется слово. 52+ участника уже внутри.</p>
        <div class="me-service__price">
          <span style="color:var(--color-primary);font-weight:600">Входит в тарифы Расширенный и Премиум</span>
        </div>
        <a class="me-service__cta" href="#tariffs">Выбрать тариф →</a>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Проверить что файл создан**

```bash
ls src/components/SpecialFormats.astro
```

Ожидаемый результат: файл существует.

- [ ] **Step 3: Commit**

```bash
git add src/components/SpecialFormats.astro
git commit -m "feat: add SpecialFormats section — Mighty Theater, Parkour, Speaking Club"
```

---

## Task 10: Подключить SpecialFormats в index.astro

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Добавить импорт и компонент**

В `src/pages/index.astro` добавить импорт после строки `import FinalCTA from '../components/FinalCTA.astro';`:

```astro
import SpecialFormats from '../components/SpecialFormats.astro';
```

Добавить компонент в разметку — перед `<FinalCTA />`:

```astro
    <SpecialFormats />
    <FinalCTA />
```

Итоговый `src/pages/index.astro` должен выглядеть так:

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import ValueRow from '../components/ValueRow.astro';
import About from '../components/About.astro';
import Methodology from '../components/Methodology.astro';
import Services from '../components/Services.astro';
import Tariffs from '../components/Tariffs.astro';
import Reviews from '../components/Reviews.astro';
import FAQ from '../components/FAQ.astro';
import SpecialFormats from '../components/SpecialFormats.astro';
import FinalCTA from '../components/FinalCTA.astro';
import Footer from '../components/Footer.astro';
import StickyMobileCTA from '../components/StickyMobileCTA.astro';
---
<Layout
  title="Мощный английский — Рудольф Ладнер"
  description="Авторская школа английского языка. Преподаватель КФУ и КИУ, уровень C2. Индивидуально, группы, Мощный курс. Запись в Telegram."
>
  <Header />
  <main>
    <Hero />
    <ValueRow />
    <About />
    <Methodology />
    <Services />
    <Tariffs />
    <Reviews />
    <FAQ />
    <SpecialFormats />
    <FinalCTA />
  </main>
  <Footer />
  <StickyMobileCTA />
</Layout>
```

- [ ] **Step 2: Проверить сборку**

```bash
npm run build 2>&1 | tail -20
```

Ожидаемый результат: `✓ Completed` без ошибок. Если есть ошибки — исправить до commit.

- [ ] **Step 3: Финальная проверка в браузере**

```bash
npm run dev
```

Прокрутить всю страницу сверху вниз и проверить:
- Порядок секций: Hero → ValueRow → About → Methodology → Services → Tariffs → Reviews → FAQ → **SpecialFormats** → FinalCTA
- SpecialFormats показывает 3 карточки: Театр, Паркур, Speaking Club
- Мета-description в `<head>` обновлён (содержит «КФУ», «C2»)
- На мобайле (375px) все секции читаются, ничего не ломается
- Sticky-кнопка ведёт на `t.me/Mighty_Teacher`

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: wire SpecialFormats into landing, update page meta description"
```

---

## Self-Review

**Spec coverage:**
- ✅ Hero — реальный подзаголовок, правильный год
- ✅ ValueRow — реальные цифры, убран ложный тезис «1 на 1»
- ✅ About — реальное биo (КФУ/КИУ, C2, актёр озвучания, SCOPUS)
- ✅ Methodology — 3 шага + Telegram-формат
- ✅ Services — 3 реальных продукта
- ✅ Tariffs — Мощный курс с реальными ценами (3 300 / 5 600 / 9 600 ₽)
- ✅ FAQ — исправлены противоречия
- ✅ SpecialFormats — Театр, Паркур, Speaking Club
- ✅ Footer — правильные ссылки, год с 2013
- ✅ Все CTA → `t.me/Mighty_Teacher`
- ⚠️ Reviews — заглушки. Требуют реальных отзывов от клиента (отдельная задача, не в этом плане)

**Type/signature consistency:**
- `me-services__grid` используется в Services.astro и SpecialFormats.astro — один класс, одна сетка ✅
- `me-service`, `me-service__ico`, `me-service__price`, `me-service__cta` — одни и те же классы ✅
- Переменная `tg` во всех компонентах указывает на `t.me/Mighty_Teacher` ✅
