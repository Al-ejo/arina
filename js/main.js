/* ============================================
   ARINA'S MEMORY WEBSITE — SHARED JS
   Features: Starfield, Trip Panel,
   Typewriter, AI Love Letter,
   Page Transitions, Birthday Surprise Mode
   ============================================ */

/* ── Language System ── */
const translations = {
  en: {
    'nav.home':    'Home',
    'nav.timeline':'Timeline',
    'nav.gallery': 'Gallery',
    'nav.story':   'Our Story',
    'nav.trips':   'Trips',
    'nav.magic':   'Magic',
    'nav.private': 'Private',
    'nav.lang':    'RU',
    'nav.videos':  'Videos',

    'hero.label':         'A love story',
    'hero.title1':        'Every moment',
    'hero.title2':        'with you',
    'hero.subtitle':      'our memories, our adventures, our magic.',
    'hero.btn1':          'Explore our story',
    'hero.btn2':          'See the gallery',
    'hero.counter.label': 'days together',

    'home.chapters.label':    'Our chapters',
    'home.chapters.title':    'Every page of us',
    'home.chapters.subtitle': 'From our very first moment to every adventure since.',
    'chapter.timeline':       'Timeline',
    'chapter.timeline.desc':  'Every milestone, every first, every ordinary day that became extraordinary.',
    'chapter.gallery':        'Gallery',
    'chapter.gallery.desc':   'A thousand moments captured — slide through our favorite pictures.',
    'chapter.story':          'Our story',
    'chapter.story.desc':     'The full story of us — how we got here and everything in between.',
    'chapter.trips':          'Trips',
    'chapter.trips.desc':     'Every place we have explored together, mapped and remembered.',
    'chapter.magic':          'Magic',
    'chapter.magic.desc':     'A special world just for you — Hogwarts, spells, and a little magic.',
    'chapter.private':        'Private',
    'chapter.private.desc':   'Our most private, precious moments — just for us.',
    'chapter.explore':        'Explore →',

    'note.label':  'A note for you',
    'note.text':   'You are my favorite story — the one I want to keep writing, forever.',
    'note.author': '— with all my love',

    'gallery.label':           'Our memories',
    'gallery.title':           'Photo gallery',
    'gallery.subtitle':        'Every picture tells our story. Click any photo to open it, or hit slideshow to watch them all.',
    'gallery.grid':            'Grid',
    'gallery.slideshow':       'Slideshow',
    'gallery.close':           'Close',
    'gallery.prev':            '← Prev',
    'gallery.next':            'Next →',
    'gallery.of':              'of',

    'videos.label':            'Our moments',
    'videos.title':            'Video memories',
    'videos.subtitle':         'The moments too beautiful to just be photos — watch our story unfold.',
    'videos.play':             'Play video',
    'videos.close':            'Close',
    'videos.caption.default':  'A memory we will always cherish.',

    'enter.tagline':     'this place was made for you',
    'enter.placeholder': 'enter the secret...',
    'enter.btn':         'Enter ✦',
    'enter.error':       'Hmm, try again my love',

    'footer.tagline': 'Made with love, for you.',
    'footer.copy':    '© 2025 · Always yours',

    'weather.ny':      'New York',
    'weather.ko':      'Kolomna',
    'weather.tagline': 'same sky, different side',
    'weather.loading': 'loading...',
    'weather.clear':   'Clear skies',
    'weather.cloudy':  'Cloudy',
    'weather.rain':    'Rainy',
    'weather.snow':    'Snowing',
    'weather.fog':     'Foggy',
    'weather.thunder': 'Thunderstorm',
    'weather.drizzle': 'Drizzle',

    'birthday.greeting': 'Happy Birthday, Arina! 🎂',
    'birthday.sub':      'Today is your day — this whole site is celebrating you.',
    'birthday.btn':      'Make a wish ✨',
    'birthday.wish':     'Every wish you make today, I hope it all comes true. I love you so much.',

    'ai.btn':         'Write me something ✦',
    'ai.another':     '↺ Write another',
    'ai.loading':     'Writing something just for you...',
    'ai.error':       'Something went wrong — try again my love.',
  },

  ru: {
    'nav.home':    'Главная',
    'nav.timeline':'Хроника',
    'nav.gallery': 'Галерея',
    'nav.story':   'Наша история',
    'nav.trips':   'Путешествия',
    'nav.magic':   'Магия',
    'nav.private': 'Личное',
    'nav.lang':    'EN',
    'nav.videos':  'Видео',

    'hero.label':         'История любви',
    'hero.title1':        'Каждый момент',
    'hero.title2':        'с тобой',
    'hero.subtitle':      'наши воспоминания, наши приключения, наша магия.',
    'hero.btn1':          'Наша история',
    'hero.btn2':          'Смотреть галерею',
    'hero.counter.label': 'дней вместе',

    'home.chapters.label':    'Наши главы',
    'home.chapters.title':    'Каждая страница о нас',
    'home.chapters.subtitle': 'От самого первого мгновения до каждого нашего приключения.',
    'chapter.timeline':       'Хроника',
    'chapter.timeline.desc':  'Каждый важный момент, каждый первый шаг, каждый обычный день, ставший особенным.',
    'chapter.gallery':        'Галерея',
    'chapter.gallery.desc':   'Тысяча запечатлённых моментов — листай наши любимые фотографии.',
    'chapter.story':          'Наша история',
    'chapter.story.desc':     'Вся наша история — как мы сюда пришли и всё, что было между.',
    'chapter.trips':          'Путешествия',
    'chapter.trips.desc':     'Каждое место, которое мы исследовали вместе, отмечено на карте.',
    'chapter.magic':          'Магия',
    'chapter.magic.desc':     'Особый мир только для тебя — Хогвартс, заклинания и немного волшебства.',
    'chapter.private':        'Личное',
    'chapter.private.desc':   'Наши самые сокровенные, драгоценные моменты — только для нас.',
    'chapter.explore':        'Открыть →',

    'note.label':  'Записка для тебя',
    'note.text':   'Ты — моя любимая история, которую я хочу писать вечно.',
    'note.author': '— с любовью',

    'gallery.label':           'Наши воспоминания',
    'gallery.title':           'Фотогалерея',
    'gallery.subtitle':        'Каждый снимок рассказывает нашу историю. Нажми на фото, чтобы открыть, или запусти слайдшоу.',
    'gallery.grid':            'Сетка',
    'gallery.slideshow':       'Слайдшоу',
    'gallery.close':           'Закрыть',
    'gallery.prev':            '← Назад',
    'gallery.next':            'Вперёд →',
    'gallery.of':              'из',

    'videos.label':            'Наши моменты',
    'videos.title':            'Видеовоспоминания',
    'videos.subtitle':         'Моменты, слишком прекрасные, чтобы быть просто фото — смотри, как разворачивается наша история.',
    'videos.play':             'Смотреть',
    'videos.close':            'Закрыть',
    'videos.caption.default':  'Воспоминание, которое мы всегда будем хранить.',

    'enter.tagline':     'это место создано для тебя',
    'enter.placeholder': 'введи секрет...',
    'enter.btn':         'Войти ✦',
    'enter.error':       'Хм, попробуй ещё раз, моя любовь',

    'footer.tagline': 'Сделано с любовью, для тебя.',
    'footer.copy':    '© 2025 · Всегда твой',

    'weather.ny':      'Нью-Йорк',
    'weather.ko':      'Коломна',
    'weather.tagline': 'одно небо, разные стороны',
    'weather.loading': 'загрузка...',
    'weather.clear':   'Ясно',
    'weather.cloudy':  'Облачно',
    'weather.rain':    'Дождь',
    'weather.snow':    'Снег',
    'weather.fog':     'Туман',
    'weather.thunder': 'Гроза',
    'weather.drizzle': 'Морось',

    'birthday.greeting': 'С Днём Рождения, Арина! 🎂',
    'birthday.sub':      'Сегодня твой день — весь этот сайт празднует тебя.',
    'birthday.btn':      'Загадай желание ✨',
    'birthday.wish':     'Каждое желание, которое ты загадаешь сегодня — пусть всё сбудется. Я тебя очень люблю.',

    'ai.btn':         'Напиши мне что-нибудь ✦',
    'ai.another':     '↺ Ещё раз',
    'ai.loading':     'Пишу кое-что специально для тебя...',
    'ai.error':       'Что-то пошло не так — попробуй ещё раз.',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('.lang-label').forEach(el => {
    el.textContent = t('nav.lang');
  });
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ru' : 'en';
  localStorage.setItem('lang', currentLang);
  applyTranslations();
  document.querySelectorAll('.lang-toggle, .lang-float').forEach(btn => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => btn.style.transform = '', 150);
  });
  // Re-trigger typewriter on language change
  if (document.getElementById('typewriter-text')) startTypewriter();
  // Re-write quote in new language
  refreshQuoteForLang();
  // Update weather descriptions
  initWeather();
  // Update AI btn text
  const aiBtn = document.getElementById('ai-love-btn');
  if (aiBtn && !aiBtn.disabled) aiBtn.textContent = t('ai.btn');
}

/* ══════════════════════════════════════════
   FEATURE 3 — STARFIELD
   Animated canvas on home hero
══════════════════════════════════════════ */
function initStarfield() {
  const canvas = document.getElementById('starfield-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = 200;
  const stars = Array.from({ length: COUNT }, () => ({
    x:            Math.random(),
    y:            Math.random(),
    r:            Math.random() * 1.8 + 0.2,
    speed:        Math.random() * 0.00012 + 0.00004,
    opacity:      Math.random() * 0.7 + 0.15,
    twinkle:      Math.random() * Math.PI * 2,
    twinkleSpeed: Math.random() * 0.025 + 0.005,
    color: ['rgba(242,196,206,','rgba(201,160,192,','rgba(212,175,106,','rgba(253,246,240,'][Math.floor(Math.random()*4)],
  }));

  let raf;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.twinkle += s.twinkleSpeed;
      const op = s.opacity * (0.55 + 0.45 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color + op.toFixed(2) + ')';
      ctx.fill();
      s.y -= s.speed;
      if (s.y < -0.01) { s.y = 1.01; s.x = Math.random(); }
    });
    raf = requestAnimationFrame(draw);
  }
  draw();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else draw();
  });
}

/* ══════════════════════════════════════════
   FEATURE 6 — TYPEWRITER EFFECT
   Home page hero subtitle
══════════════════════════════════════════ */
function startTypewriter() {
  const el     = document.getElementById('typewriter-text');
  const cursor = document.getElementById('typewriter-cursor');
  if (!el) return;

  const texts = {
    en: 'our memories, our adventures, our magic.',
    ru: 'наши воспоминания, наши приключения, наша магия.',
  };

  const text = texts[currentLang] || texts.en;
  el.textContent = '';
  if (cursor) { cursor.style.opacity = '1'; cursor.style.transition = 'none'; }

  if (el._twInterval) clearInterval(el._twInterval);
  let i = 0;
  el._twInterval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i++];
    } else {
      clearInterval(el._twInterval);
      if (cursor) setTimeout(() => {
        cursor.style.transition = 'opacity 0.6s ease';
        cursor.style.opacity = '0';
      }, 2800);
    }
  }, 40);
}

/* ══════════════════════════════════════════
   FEATURE 9 — PAGE TRANSITIONS
   Smooth cream crossfade on all nav clicks
══════════════════════════════════════════ */
function initPageTransitions() {
  const overlay = document.createElement('div');
  overlay.id = 'page-overlay';
  overlay.style.cssText = [
    'position:fixed','inset:0','z-index:9998',
    'background:#FDF6F0','opacity:0',
    'pointer-events:none','transition:opacity 0.32s ease',
  ].join(';');
  document.body.appendChild(overlay);

  // Intercept internal links
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) return;
    if (link.target === '_blank') return;
    e.preventDefault();
    overlay.style.pointerEvents = 'all';
    overlay.style.opacity = '1';
    setTimeout(() => { window.location.href = href; }, 330);
  });

  // Fade in on arrival
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    requestAnimationFrame(() => {
      overlay.style.opacity = '0';
      setTimeout(() => { overlay.style.pointerEvents = 'none'; }, 330);
    });
  });
}

/* ══════════════════════════════════════════
   FEATURE 10 — BIRTHDAY SURPRISE MODE
   Arina's birthday: March 28
══════════════════════════════════════════ */
function launchConfetti() {
  const canvas  = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;z-index:9997;pointer-events:none;';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  const ctx    = canvas.getContext('2d');
  const colors = ['#F2C4CE','#C9A0C0','#D4AF6A','#7A5C7F','#FAE8EC','#2C1A2E','#FFF'];
  const pieces = Array.from({ length: 150 }, () => ({
    x:       Math.random() * canvas.width,
    y:       -20 - Math.random() * 300,
    w:       5 + Math.random() * 9,
    h:       3 + Math.random() * 5,
    color:   colors[Math.floor(Math.random() * colors.length)],
    speed:   1.5 + Math.random() * 4,
    angle:   Math.random() * Math.PI * 2,
    spin:    (Math.random() - 0.5) * 0.18,
    drift:   (Math.random() - 0.5) * 1.5,
    opacity: 0.85 + Math.random() * 0.15,
  }));

  let frames = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
      p.y += p.speed; p.x += p.drift;
      p.angle += p.spin; p.opacity -= 0.004;
    });
    frames++;
    if (frames < 200) requestAnimationFrame(draw);
    else canvas.remove();
  }
  draw();
}

function initBirthdayMode() {
  const today = new Date();
  const isBirthday = today.getMonth() === 2 && today.getDate() === 28;
  if (!isBirthday) return;

  // Only activate on home page
  if (!document.getElementById('days-counter')) return;

  // Birthday banner
  const banner = document.createElement('div');
  banner.style.cssText = [
    'position:fixed','top:0','left:0','right:0','z-index:1100',
    'background:linear-gradient(135deg,rgba(242,196,206,0.97),rgba(201,160,192,0.97))',
    'backdrop-filter:blur(12px)','-webkit-backdrop-filter:blur(12px)',
    'padding:12px 2rem','display:flex','align-items:center',
    'justify-content:center','gap:1rem','flex-wrap:wrap',
    'border-bottom:1px solid rgba(122,92,127,0.2)',
  ].join(';');

  banner.innerHTML = `
    <span style="font-family:Georgia,serif;font-size:1.05rem;font-weight:700;color:#2C1A2E">
      ${t('birthday.greeting')}
    </span>
    <span style="font-size:0.82rem;color:#7A5C7F">${t('birthday.sub')}</span>
    <button id="bday-btn" style="
      padding:7px 18px;border-radius:50px;
      background:#7A5C7F;color:#FDF6F0;border:none;
      cursor:pointer;font-size:0.8rem;font-weight:500;
      letter-spacing:0.04em;font-family:inherit;
    ">${t('birthday.btn')}</button>`;

  document.body.prepend(banner);

  // Push nav down
  const nav = document.querySelector('.nav');
  if (nav) nav.style.top = banner.offsetHeight + 'px';

  document.getElementById('bday-btn').addEventListener('click', () => {
    // Wish modal
    const modal = document.createElement('div');
    modal.style.cssText = [
      'position:fixed','inset:0','z-index:9999',
      'background:rgba(44,26,46,0.88)',
      'backdrop-filter:blur(16px)','-webkit-backdrop-filter:blur(16px)',
      'display:flex','align-items:center','justify-content:center','padding:2rem',
    ].join(';');
    modal.innerHTML = `
      <div style="background:#fff;border-radius:32px;padding:3rem 2.5rem;
        max-width:420px;width:100%;text-align:center;
        border:1px solid rgba(242,196,206,0.5);
        animation:wishIn 0.5s cubic-bezier(0.4,0,0.2,1) forwards">
        <style>@keyframes wishIn{from{opacity:0;transform:scale(0.92) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}</style>
        <div style="font-size:3.5rem;margin-bottom:1rem">🎂</div>
        <div style="font-family:Georgia,serif;font-size:1.5rem;font-weight:700;
          color:#2C1A2E;margin-bottom:1rem">${t('birthday.greeting')}</div>
        <p style="font-family:Georgia,serif;font-style:italic;font-size:1.05rem;
          color:#7A5C7F;line-height:1.8;margin-bottom:1.5rem">
          ${t('birthday.wish')}
        </p>
        <button onclick="document.body.removeChild(this.closest('[style*=fixed]'))"
          style="padding:12px 32px;border-radius:50px;background:#7A5C7F;
          color:#FDF6F0;border:none;cursor:pointer;font-size:0.9rem;font-weight:500">
          ✦
        </button>
      </div>`;
    document.body.appendChild(modal);
    launchConfetti();
  });

  // Auto confetti on load
  setTimeout(launchConfetti, 800);
}

/* ══════════════════════════════════════════
   FEATURE 7 — AI LOVE LETTER GENERATOR
   Calls Anthropic API from story.html
══════════════════════════════════════════ */
function initAILoveLetter() {
  const btn = document.getElementById('ai-love-btn');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const output  = document.getElementById('ai-love-output');
    const loading = document.getElementById('ai-love-loading');
    const lang    = currentLang;

    btn.disabled = true;
    btn.style.opacity = '0.6';
    if (output)  output.style.display  = 'none';
    if (loading) loading.style.display = 'flex';

    const prompt = lang === 'ru'
      ? `Ты пишешь от имени Андреса — его романтическое послание Арине. Андрес и Арина познакомились в Стамбуле в октябре 2025 года. Они снова встретились в Тбилиси в январе 2026 года. В марте 2026 года Андрес впервые посетил её дом в Коломне, Россия. Андрес любит в Арине её заботу, понимание, поддержку даже через расстояние, её чувство юмора и то, как спокойно и по-домашнему он чувствует себя рядом с ней. Они нежно называют друг друга "два маленьких червячка". Напиши уникальное, тёплое и искреннее любовное послание на русском языке, 3–4 предложения. Только текст послания — никаких вступлений, подписей или объяснений.`
      : `You are writing on behalf of Andrés — a romantic message to Arina. Andrés and Arina first met in Istanbul in October 2025. They met again in Tbilisi in January 2026. In March 2026 Andrés visited her home in Kolomna, Russia for the first time. Andrés loves Arina for her caring nature, how understanding she is, the support she gives even across the distance, her humor, and how calm and at home he feels with her. They affectionately call each other "two little worms". Write a unique, warm and sincere love message in English, 3–4 sentences. Only the message text — no preambles, sign-offs or explanations.`;

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      const data = await res.json();
      const text = data.content?.map(b => b.text || '').join('').trim();

      if (loading) loading.style.display = 'none';
      if (output) {
        output.style.display = 'block';
        output.style.opacity = '0';
        output.style.transform = 'translateY(12px)';
        const textEl = output.querySelector('.ai-text');
        if (textEl) textEl.textContent = text || t('ai.error');
        requestAnimationFrame(() => {
          output.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
          output.style.opacity = '1';
          output.style.transform = 'translateY(0)';
        });
      }
    } catch (err) {
      if (loading) loading.style.display = 'none';
      if (output) {
        output.style.display = 'block';
        const textEl = output.querySelector('.ai-text');
        if (textEl) textEl.textContent = t('ai.error');
      }
    }

    btn.disabled = false;
    btn.style.opacity = '1';
    btn.textContent = t('ai.another');
  });
}

/* ══════════════════════════════════════════
   FEATURE 6 — WEATHER WIDGET
   New York vs Kolomna via Open-Meteo (free, no key)
══════════════════════════════════════════ */
async function initWeather() {
  const nyTempEl  = document.getElementById('weather-ny-temp');
  const nyDescEl  = document.getElementById('weather-ny-desc');
  const nyIconEl  = document.getElementById('weather-ny-icon');
  const koTempEl  = document.getElementById('weather-ko-temp');
  const koDescEl  = document.getElementById('weather-ko-desc');
  const koIconEl  = document.getElementById('weather-ko-icon');
  if (!nyTempEl) return;

  const cities = [
    { lat: 40.7128, lng: -74.0060, tempEl: nyTempEl, descEl: nyDescEl, iconEl: nyIconEl },
    { lat: 55.0953, lng:  38.7775, tempEl: koTempEl, descEl: koDescEl, iconEl: koIconEl },
  ];

  function weatherIcon(code) {
    if (code === 0)               return '☀️';
    if ([1,2].includes(code))     return '⛅';
    if (code === 3)               return '☁️';
    if ([45,48].includes(code))   return '🌫️';
    if ([51,53,55].includes(code))return '🌦️';
    if ([61,63,65,80,81,82].includes(code)) return '🌧️';
    if ([71,73,75,77,85,86].includes(code)) return '❄️';
    if ([95,96,99].includes(code))return '⛈️';
    return '🌡️';
  }

  function weatherDesc(code) {
    if (code === 0)               return t('weather.clear');
    if ([1,2,3].includes(code))   return t('weather.cloudy');
    if ([45,48].includes(code))   return t('weather.fog');
    if ([51,53,55].includes(code))return t('weather.drizzle');
    if ([61,63,65,80,81,82].includes(code)) return t('weather.rain');
    if ([71,73,75,77,85,86].includes(code)) return t('weather.snow');
    if ([95,96,99].includes(code))return t('weather.thunder');
    return '—';
  }

  for (const city of cities) {
    try {
      const res  = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true&temperature_unit=celsius`
      );
      const data = await res.json();
      const cw   = data.current_weather;
      const temp = Math.round(cw.temperature);
      city.tempEl.textContent = `${temp}°C`;
      city.descEl.textContent = weatherDesc(cw.weathercode);
      city.iconEl.textContent = weatherIcon(cw.weathercode);
    } catch {
      city.tempEl.textContent = '—';
      city.descEl.textContent = t('weather.loading');
    }
  }
}

/* ══════════════════════════════════════════
   FEATURE 7 — DAILY SELF-WRITING LOVE QUOTE
   Fetches from Quotable API (love tag), caches daily.
   Translates to Russian via Anthropic API when needed.
══════════════════════════════════════════ */
const QUOTE_KEY      = 'aa_quote_cache';
const QUOTE_DATE_KEY = 'aa_quote_date';
const QUOTE_RU_KEY   = 'aa_quote_ru_cache';

async function fetchDailyQuote() {
  const today    = new Date().toDateString();
  const cached   = localStorage.getItem(QUOTE_KEY);
  const cachedDt = localStorage.getItem(QUOTE_DATE_KEY);

  if (cached && cachedDt === today) {
    return JSON.parse(cached);
  }

  try {
    const res  = await fetch('https://api.quotable.io/random?tags=love&maxLength=120');
    if (!res.ok) throw new Error('API error');
    const data = await res.json();
    const quote = { text: data.content, author: data.author };
    localStorage.setItem(QUOTE_KEY,      JSON.stringify(quote));
    localStorage.setItem(QUOTE_DATE_KEY, today);
    localStorage.removeItem(QUOTE_RU_KEY);
    return quote;
  } catch {
    // Fallback quotes with Russian translations built in — rotate by day
    const fallbacks = [
      {
        text:   'You are my favorite story — the one I want to keep writing, forever.',
        textRu: 'Ты — моя любимая история, которую я хочу писать вечно.',
        author: 'with all my love',
        authorRu: 'с любовью',
      },
      {
        text:   'In all the world, there is no heart for me like yours.',
        textRu: 'Во всём мире нет для меня сердца, как твоё.',
        author: 'Maya Angelou',
        authorRu: 'Майя Энджелоу',
      },
      {
        text:   'I love you not only for what you are, but for what I am when I am with you.',
        textRu: 'Я люблю тебя не только за то, кто ты есть, но и за то, кем я становлюсь рядом с тобой.',
        author: 'Roy Croft',
        authorRu: 'Рой Крофт',
      },
      {
        text:   'Whatever our souls are made of, yours and mine are the same.',
        textRu: 'Из чего бы ни были сделаны наши души — твоя и моя сделаны из одного.',
        author: 'Emily Brontë',
        authorRu: 'Эмили Бронте',
      },
      {
        text:   'You are the finest, loveliest, tenderest person I have ever known.',
        textRu: 'Ты — самый прекрасный, любимый и нежный человек, которого я когда-либо знал.',
        author: 'F. Scott Fitzgerald',
        authorRu: 'Ф. Скотт Фицджеральд',
      },
      {
        text:   'I would rather spend one lifetime with you than face all the ages of this world alone.',
        textRu: 'Я бы предпочёл прожить одну жизнь с тобой, чем в одиночестве пережить все века этого мира.',
        author: 'J.R.R. Tolkien',
        authorRu: 'Дж.Р.Р. Толкин',
      },
      {
        text:   'If I know what love is, it is because of you.',
        textRu: 'Если я знаю, что такое любовь — это благодаря тебе.',
        author: 'Herman Hesse',
        authorRu: 'Герман Гессе',
      },
    ];
    const idx = new Date().getDate() % fallbacks.length;
    const q = fallbacks[idx];
    // Store with Russian already embedded
    const quote = { text: q.text, author: q.author, textRu: q.textRu, authorRu: q.authorRu };
    localStorage.setItem(QUOTE_KEY,      JSON.stringify(quote));
    localStorage.setItem(QUOTE_DATE_KEY, today);
    return quote;
  }
}

async function translateQuoteToRussian(text) {
  const cached = localStorage.getItem(QUOTE_RU_KEY);
  if (cached) return cached;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Translate this love quote to Russian. Return only the translated text, nothing else: "${text}"`,
        }],
      }),
    });
    const data = await res.json();
    const translated = data.content?.map(b => b.text || '').join('').trim();
    if (translated) localStorage.setItem(QUOTE_RU_KEY, translated);
    return translated || text;
  } catch {
    return text;
  }
}

function writeQuote(text, author, onDone) {
  const textEl   = document.getElementById('quote-text');
  const authorEl = document.getElementById('quote-author');
  if (!textEl || !authorEl) return;

  // Add handwriting font
  if (!document.getElementById('handwriting-font')) {
    const link = document.createElement('link');
    link.id   = 'handwriting-font';
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&display=swap';
    document.head.appendChild(link);
  }

  textEl.style.fontFamily   = "'Dancing Script', cursive";
  textEl.style.fontSize     = 'clamp(1.2rem, 2.5vw, 1.8rem)';
  textEl.style.fontWeight   = '500';
  textEl.style.lineHeight   = '1.6';
  textEl.textContent        = '';
  authorEl.style.opacity    = '0';
  authorEl.style.transition = 'opacity 0.8s ease';

  // Blinking cursor
  const cursor = document.createElement('span');
  cursor.className = 'quote-writing-cursor';
  textEl.appendChild(cursor);

  let i = 0;
  const iv = setInterval(() => {
    if (i < text.length) {
      cursor.insertAdjacentText('beforebegin', text[i++]);
    } else {
      clearInterval(iv);
      cursor.remove();
      authorEl.textContent = `— ${author}`;
      setTimeout(() => {
        authorEl.style.opacity = '1';
        if (onDone) onDone();
      }, 400);
    }
  }, 38);
}

async function initDailyQuote() {
  const textEl = document.getElementById('quote-text');
  if (!textEl) return;

  const quote = await fetchDailyQuote();

  if (currentLang === 'ru') {
    // Use built-in Russian if available, otherwise translate via API
    if (quote.textRu) {
      writeQuote(quote.textRu, quote.authorRu || quote.author);
    } else {
      const ruText = await translateQuoteToRussian(quote.text);
      writeQuote(ruText, quote.author);
    }
  } else {
    writeQuote(quote.text, quote.author);
  }
}

async function refreshQuoteForLang() {
  const textEl = document.getElementById('quote-text');
  if (!textEl) return;
  const quote = await fetchDailyQuote();
  if (currentLang === 'ru') {
    if (quote.textRu) {
      writeQuote(quote.textRu, quote.authorRu || quote.author);
    } else {
      const ruText = await translateQuoteToRussian(quote.text);
      writeQuote(ruText, quote.author);
    }
  } else {
    writeQuote(quote.text, quote.author);
  }
}

/* ══════════════════════════════════════════
   FEATURE 10 — SEASONAL EFFECTS
   Auto-detects season and animates accordingly
══════════════════════════════════════════ */
function initSeasonalEffects() {
  const canvas = document.getElementById('seasonal-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const month = new Date().getMonth(); // 0=Jan

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); particles.length = 0; spawnParticles(); });

  // Determine season
  let season;
  if (month >= 2 && month <= 4)  season = 'spring';   // Mar–May
  else if (month >= 5 && month <= 7)  season = 'summer';   // Jun–Aug
  else if (month >= 8 && month <= 10) season = 'autumn';   // Sep–Nov
  else season = 'winter';                                    // Dec–Feb

  const seasonConfig = {
    spring: {
      count: 25,
      colors: ['#F2C4CE','#FAE8EC','#F7D6DC','#E8A0B4','#FFF0F3'],
      minSize: 6, maxSize: 14,
      speedY: [0.4, 1.2], speedX: [-0.4, 0.4],
      spin: true, wobble: true,
      draw(ctx, p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        // Petal shape
        ctx.beginPath();
        ctx.ellipse(0, -p.size/2, p.size/3, p.size/2, 0, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }
    },
    summer: {
      count: 18,
      colors: ['#D4AF6A','#F0D9A8','#FAE8B0','#E8C84A','#FFF5CC'],
      minSize: 3, maxSize: 6,
      speedY: [-0.6, -0.2], speedX: [-0.3, 0.3],
      spin: false, wobble: true,
      draw(ctx, p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = p.opacity * (0.5 + 0.5 * Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.restore();
      }
    },
    autumn: {
      count: 22,
      colors: ['#D4AF6A','#C97A3A','#E8A050','#A05020','#C9622A'],
      minSize: 7, maxSize: 16,
      speedY: [0.5, 1.4], speedX: [-0.6, 0.6],
      spin: true, wobble: true,
      draw(ctx, p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        // Leaf shape
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size/2, p.size, 0.3, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }
    },
    winter: {
      count: 35,
      colors: ['#E8F0FF','#D0DCFF','#F0F4FF','#FFFFFF','#C8D8F8'],
      minSize: 2, maxSize: 5,
      speedY: [0.3, 0.9], speedX: [-0.3, 0.3],
      spin: false, wobble: true,
      draw(ctx, p) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      }
    },
  };

  const cfg = seasonConfig[season];
  const particles = [];

  function spawnParticles() {
    for (let i = 0; i < cfg.count; i++) {
      particles.push(createParticle(true));
    }
  }

  function rand(min, max) { return min + Math.random() * (max - min); }

  function createParticle(randomY = false) {
    return {
      x:       rand(0, canvas.width),
      y:       randomY ? rand(0, canvas.height) : -20,
      size:    rand(cfg.minSize, cfg.maxSize),
      color:   cfg.colors[Math.floor(Math.random() * cfg.colors.length)],
      speedY:  rand(cfg.speedY[0], cfg.speedY[1]),
      speedX:  rand(cfg.speedX[0], cfg.speedX[1]),
      angle:   rand(0, Math.PI * 2),
      spin:    cfg.spin ? rand(-0.03, 0.03) : 0,
      wobble:  0,
      wobbleSpeed: rand(0.01, 0.03),
      opacity: rand(0.3, 0.7),
      twinkle: rand(0, Math.PI * 2),
    };
  }

  spawnParticles();

  let raf;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      cfg.draw(ctx, p);
      p.y       += p.speedY;
      p.x       += p.speedX + Math.sin(p.wobble) * 0.3;
      p.angle   += p.spin;
      p.wobble  += p.wobbleSpeed;
      p.twinkle += 0.04;

      // Reset when off screen
      const offBottom = p.y > canvas.height + 20;
      const offTop    = p.y < -20 && p.speedY < 0;
      if (offBottom || offTop) {
        particles[i] = createParticle(false);
        if (offTop) particles[i].y = canvas.height + 20;
      }
    });
    raf = requestAnimationFrame(draw);
  }

  draw();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else draw();
  });
}

/* ── Month translation utility ── */
const MONTHS_RU = {
  'January':   'Январь',
  'February':  'Февраль',
  'March':     'Март',
  'April':     'Апрель',
  'May':       'Май',
  'June':      'Июнь',
  'July':      'Июль',
  'August':    'Август',
  'September': 'Сентябрь',
  'October':   'Октябрь',
  'November':  'Ноябрь',
  'December':  'Декабрь',
};

function localizeDate(dateStr) {
  if (currentLang !== 'ru') return dateStr;
  // Replace any English month name found in the string
  let result = dateStr;
  for (const [en, ru] of Object.entries(MONTHS_RU)) {
    result = result.replace(en, ru);
  }
  return result;
}

/* ── Scroll Animations ── */
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in,.fade-in-left,.fade-in-right').forEach(el => obs.observe(el));
}

/* ── Nav Scroll ── */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
}

/* ── Hamburger ── */
function initHamburger() {
  const h = document.querySelector('.hamburger');
  const d = document.querySelector('.nav-drawer');
  if (!h || !d) return;
  h.addEventListener('click', () => { h.classList.toggle('open'); d.classList.toggle('open'); });
  d.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    h.classList.remove('open'); d.classList.remove('open');
  }));
}

/* ── Days Counter ── */
function initDaysCounter() {
  const el = document.getElementById('days-counter');
  if (!el) return;
  const diff = Math.floor((new Date() - new Date('2025-03-03')) / 86400000);
  let count = 0;
  const step = diff / (1800 / 16);
  const iv = setInterval(() => {
    count += step;
    if (count >= diff) { count = diff; clearInterval(iv); }
    el.textContent = Math.floor(count).toLocaleString();
  }, 16);
}

/* ── Floating Petals ── */
function initPetals() {
  const c = document.querySelector('.petal-container');
  if (!c) return;
  const colors = ['#F2C4CE','#C9A0C0','#FAE8EC','#D4AF6A'];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'floating-petal';
    p.style.cssText = `left:${Math.random()*100}%;width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${8+Math.random()*12}s;animation-delay:${Math.random()*10}s;`;
    c.appendChild(p);
  }
}

/* ── Auth System ── */
const AUTH_KEY  = 'aa_auth';
const PASSWORDS = ['happy birthday','с днём рождения','с днем рождения'];

function isAuthenticated() { return localStorage.getItem(AUTH_KEY) === 'true'; }

function checkAuth() {
  const path     = window.location.pathname.toLowerCase();
  const filename = path.split('/').pop();

  // These are the only pages that don't require auth
  const publicPages = ['enter.html', ''];
  const isPublic = publicPages.includes(filename) ||
                   path.endsWith('/arina/') ||
                   path.endsWith('/arina');

  if (!isAuthenticated() && !isPublic) {
    window.location.replace('enter.html');
    return;
  }

  // Already logged in — skip entry page
  if (isAuthenticated() && filename === 'enter.html') {
    window.location.replace('index.html');
    return;
  }
}

function attemptLogin(pw) { return PASSWORDS.includes(pw.trim().toLowerCase()); }
function login() {
  localStorage.setItem(AUTH_KEY, 'true');
  const redirect = sessionStorage.getItem('aa_redirect');
  sessionStorage.removeItem('aa_redirect');
  if (redirect && !redirect.includes('enter.html')) {
    window.location.replace(redirect);
  } else {
    window.location.replace('index.html');
  }
}
function logout() { localStorage.removeItem(AUTH_KEY); window.location.replace('enter.html'); }

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  applyTranslations();
  initScrollAnimations();
  initNavScroll();
  initHamburger();
  initDaysCounter();
  initPetals();
  initPageTransitions();
  initStarfield();
  initSeasonalEffects();
  initAILoveLetter();
  initBirthdayMode();
  initWeather();

  // Clear quote cache once to pick up new Russian fallbacks
  const _qv = localStorage.getItem('aa_quote_version');
  if (_qv !== '2') {
    localStorage.removeItem(QUOTE_KEY);
    localStorage.removeItem(QUOTE_DATE_KEY);
    localStorage.removeItem(QUOTE_RU_KEY);
    localStorage.setItem('aa_quote_version', '2');
  }

  initDailyQuote();

  if (document.getElementById('typewriter-text')) setTimeout(startTypewriter, 700);

  // Floating mobile lang toggle
  const floatBtn = document.createElement('button');
  floatBtn.className = 'lang-float';
  floatBtn.setAttribute('aria-label', 'Toggle language');
  floatBtn.innerHTML = '<span class="flag">🌸</span><span class="lang-label">RU</span>';
  floatBtn.addEventListener('click', toggleLanguage);
  document.body.appendChild(floatBtn);

  document.querySelectorAll('.lang-toggle').forEach(b => b.addEventListener('click', toggleLanguage));
});
