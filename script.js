let currentLang = "de";

const noResultsText = {
  de: ["Keine passenden Tools gefunden", "Versuche Wörter wie Lebenslauf, Bewerbung, Logo oder Texte."],
  en: ["No matching tools found", "Try words like resume, application, logo or texts."],
  fr: ["Aucun outil trouvé", "Essayez des mots comme CV, candidature, logo ou textes."],
  ar: ["لم يتم العثور على أدوات مناسبة", "جرب كلمات مثل السيرة الذاتية أو التقديم أو الشعار أو النصوص."],
  es: ["No se encontraron herramientas", "Prueba palabras como CV, solicitud, logo o textos."],
  zh: ["没有找到合适的工具", "请尝试简历、求职、Logo或文本等关键词。"]
};

const toolButtonText = {
  
  de: "Zum Tool",
  en: "Open Tool",
  fr: "Ouvrir l’outil",
  ar: "افتح الأداة",
  es: "Abrir herramienta",
  zh: "打开工具"
};

const workflows = {
    bewerbung: {
        title: "📄 Bewerbung erstellen",
        steps: [
            "Resume.io → Lebenslauf erstellen",
            "ChatGPT → Bewerbung schreiben",
            "Grammarly → Fehler korrigieren"
        ]
    },

    youtube: {
        title: "🎥 YouTube Content",
        steps: [
            "ChatGPT → Skript schreiben",
            "ElevenLabs → KI Stimme erzeugen",
            "Canva → Thumbnail erstellen",
            "CapCut → Video schneiden"
        ]
    },

    instagram: {
        title: "📸 Instagram Posts",
        steps: [
            "ChatGPT → Caption schreiben",
            "Canva → Design erstellen",
            "Remove.bg → Hintergrund entfernen"
        ]
    },

    logo: {
        title: "🎨 Logo Design",
        steps: [
            "Looka → Logo erstellen",
            "Canva → Branding verbessern",
            "ChatGPT → Slogan schreiben"
        ]
    }
};

const tools = {
  lebenslauf: [
    {
      name: "Resume.io",
      page: "resumeio.html",
  score: "8.9",
  pricing: "Freemium",
  beginner: true,
      description: {
    de: "Hilft dir dabei, professionelle Lebensläufe und Bewerbungsschreiben zu erstellen.",
    en: "Helps you create professional resumes and cover letters.",
    fr: "Vous aide à créer des CV et lettres de motivation.",
    ar: "يساعدك على إنشاء سير ذاتية ورسائل تقديم احترافية.",
    es: "Te ayuda a crear currículums y cartas de presentación.",
    zh: "帮助你创建专业简历和求职信。"
},
      link: "https://resume.io",
      image: "https://www.google.com/s2/favicons?domain=resume.io&sz=64"
    },
    {
       name: "Kickresume",
       page: "kickresume.html",
  score: "8.9",
  pricing: "Freemium",
  beginner: true,
      description: {
    de: "Erstellt Lebensläufe mit KI und bietet moderne Vorlagen.",
    en: "Creates AI-powered resumes and offers modern templates.",
    fr: "Crée des CV avec l’IA et propose des modèles modernes.",
    ar: "ينشئ سيرًا ذاتية بالذكاء الاصطناعي ويوفر قوالب حديثة.",
    es: "Crea currículums con IA y ofrece plantillas modernas.",
    zh: "使用AI创建简历并提供现代模板。"
},
      link: "https://www.kickresume.com",
      image: "https://www.google.com/s2/favicons?domain=kickresume.com&sz=64"
    },
    {
     name: "Canva",
     page: "canva.html",
  score: "9.3",
  pricing: "Free",
  beginner: true,
      description: {
        de: "Sehr gut für schöne Lebenslauf-Designs und Vorlagen.",
        en: "Great for beautiful resume designs and templates.",
        fr: "Idéal pour créer de beaux designs de CV.",
        ar: "ممتاز لتصميم سير ذاتية جميلة.",
        es: "Ideal para diseños de CV atractivos.",
        zh: "非常适合制作精美简历设计。"
    },
      link: "https://www.canva.com",
      image: "https://www.google.com/s2/favicons?domain=canva.com&sz=64"
    }
  ],

  bewerbung: [
    {
      name: "Grammarly",
      page: "grammarly.html",
  score: "9.0",
  pricing: "Freemium",
  beginner: true,
      description: {
    de: "Hilft beim Verbessern von Bewerbungstexten auf Englisch.",
    en: "Helps improve application texts in English.",
    fr: "Aide à améliorer les textes de candidature en anglais.",
    ar: "يساعد في تحسين نصوص التقديم باللغة الإنجليزية.",
    es: "Ayuda a mejorar textos de solicitud en inglés.",
    zh: "帮助改进英文求职文本。"
},
      link: "https://www.grammarly.com",
      image: "https://www.google.com/s2/favicons?domain=grammarly.com&sz=64"
    },
   {
  name: "ChatGPT",
 page: "chatgpt.html",
  score: "9.8",
  pricing: "Freemium",
  beginner: true,
      description: {
    de: "Kann Bewerbungsschreiben, Lebensläufe und Interviewantworten formulieren.",
    en: "Can write cover letters, resumes and interview answers.",
    fr: "Peut rédiger des lettres de motivation, CV et réponses d’entretien.",
    ar: "يمكنه كتابة رسائل التقديم والسير الذاتية وإجابات المقابلات.",
    es: "Puede escribir cartas de presentación, CV y respuestas de entrevista.",
    zh: "可以撰写求职信、简历和面试回答。"
},
      link: "https://chatgpt.com",
      image: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64"
    },
    {
      name: "Rezi",
      page: "rezi.html",
  score: "8.8",
  pricing: "Freemium",
  beginner: false,
      description: {
    de: "KI-Tool speziell für Lebenslauf und Bewerbungsoptimierung.",
    en: "AI tool specialized in resume and application optimization.",
    fr: "Outil IA spécialisé dans l’optimisation des CV et candidatures.",
    ar: "أداة ذكاء اصطناعي لتحسين السيرة الذاتية والتقديم.",
    es: "Herramienta IA especializada en optimización de CV y solicitudes.",
    zh: "专门用于优化简历和求职申请的AI工具。"
},
      link: "https://www.rezi.ai",
      image: "https://www.google.com/s2/favicons?domain=rezi.ai&sz=64"
    }
  ],

  logo: [
    {
      name: "Looka",
      page: "looka.html",
  score: "8.6",
  pricing: "Paid",
  beginner: true,
      description: {
    de: "Erstellt Logos und Branding mit KI.",
    en: "Creates logos and branding with AI.",
    fr: "Crée des logos et du branding avec l’IA.",
    ar: "ينشئ الشعارات والعلامات التجارية بالذكاء الاصطناعي.",
    es: "Crea logotipos y branding con IA.",
    zh: "使用AI创建Logo和品牌设计。"
},
      link: "https://looka.com",
      image: "https://www.google.com/s2/favicons?domain=looka.com&sz=64"
    },
   {
 name: "Canva",
 page: "canva.html",
  score: "9.3",
  pricing: "Free",
  beginner: true,
  score: "9.3",
  pricing: "Free",
  beginner: true,
       description: {
        de: "Sehr gut für schöne Lebenslauf-Designs und Vorlagen.",
        en: "Great for beautiful resume designs and templates.",
        fr: "Idéal pour créer de beaux designs de CV.",
        ar: "ممتاز لتصميم سير ذاتية جميلة.",
        es: "Ideal para diseños de CV atractivos.",
        zh: "非常适合制作精美简历设计。"
    },
      link: "https://www.canva.com",
      image: "https://www.google.com/s2/favicons?domain=canva.com&sz=64"
    }
  ],

  texte: [
    {
       name: "ChatGPT",
       page: "chatgpt.html",
  score: "9.8",
  pricing: "Freemium",
  beginner: true,
      description: {
    de: "Kann Bewerbungsschreiben, Lebensläufe und Interviewantworten formulieren.",
    en: "Can write cover letters, resumes and interview answers.",
    fr: "Peut rédiger des lettres de motivation, CV et réponses d’entretien.",
    ar: "يمكنه كتابة رسائل التقديم والسير الذاتية وإجابات المقابلات.",
    es: "Puede escribir cartas de presentación, CV y respuestas de entrevista.",
    zh: "可以撰写求职信、简历和面试回答。"
},
      link: "https://chatgpt.com",
      image: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64"
    },
    {
      name: "Jasper",
      page: "jasper.html",
  score: "8.7",
  pricing: "Paid",
  beginner: false,
      description: {
    de: "KI-Schreibtool für Marketingtexte, Blogartikel und Werbung.",
    en: "AI writing tool for marketing texts, blog articles and advertising.",
    fr: "Outil d’écriture IA pour le marketing et les blogs.",
    ar: "أداة كتابة بالذكاء الاصطناعي للمقالات والتسويق.",
    es: "Herramienta IA para marketing, blogs y publicidad.",
    zh: "用于营销、博客和广告的AI写作工具。"
},

      link: "https://www.jasper.ai",
      image: "https://www.google.com/s2/favicons?domain=jasper.ai&sz=64"
    },
    {
       name: "Copy.ai",
       page: "copyai.html",
  score: "8.5",
  pricing: "Freemium",
  beginner: true,
      description: {
    de: "Hilft beim Erstellen von Werbetexten, E-Mails und Social-Media-Posts.",
    en: "Helps create ads, emails and social media posts.",
    fr: "Aide à créer des publicités, e-mails et publications sociales.",
    ar: "يساعد في إنشاء الإعلانات ورسائل البريد ومنشورات التواصل.",
    es: "Ayuda a crear anuncios, correos y publicaciones sociales.",
    zh: "帮助创建广告、邮件和社交媒体内容。"
    },

      link: "https://www.copy.ai",
      image: "https://www.google.com/s2/favicons?domain=copy.ai&sz=64"
    }
  ],

youtube: [
  {
     name: "ChatGPT",
     page: "chatgpt.html",
  score: "9.8",
  pricing: "Freemium",
  beginner: true,
    description: {
      de: "Hilft beim Schreiben von YouTube-Skripten und Videoideen.",
      en: "Helps write YouTube scripts and video ideas."
    },
    link: "https://chatgpt.com",
    image: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64"
  },
  {
    name: "ElevenLabs",
    page: "elevenlabs.html",
  score: "9.1",
  pricing: "Freemium",
  beginner: true,
    description: {
      de: "Erstellt realistische KI-Stimmen für Videos.",
      en: "Creates realistic AI voices for videos."
    },
    link: "https://elevenlabs.io",
    image: "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=64"
  },
  {
   name: "Canva",
   page: "canva.html",
  score: "9.3",
  pricing: "Free",
  beginner: true,
    description: {
      de: "Erstellt Thumbnails und Grafiken für YouTube.",
      en: "Creates thumbnails and graphics for YouTube."
    },
    link: "https://www.canva.com",
    image: "https://www.google.com/s2/favicons?domain=canva.com&sz=64"
  },
  {
    name: "CapCut",
    page: "capcut.html",
  score: "9.0",
  pricing: "Free",
  beginner: true,
    description: {
      de: "Schneidet und bearbeitet Videos einfach und schnell.",
      en: "Edits videos quickly and easily."
    },
    link: "https://www.capcut.com",
    image: "https://www.google.com/s2/favicons?domain=capcut.com&sz=64"
  }
],

instagram: [
  {
    name: "ChatGPT",
    page: "chatgpt.html",
  score: "9.8",
  pricing: "Freemium",
  beginner: true,
    description: {
      de: "Schreibt Captions, Hashtags und Content-Ideen für Instagram.",
      en: "Writes captions, hashtags and content ideas for Instagram."
    },
    link: "https://chatgpt.com",
    image: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64"
  },
  {
    name: "Canva",
    page: "canva.html",
  score: "9.3",
  pricing: "Free",
  beginner: true,
    description: {
      de: "Erstellt Instagram Posts, Stories und Designs.",
      en: "Creates Instagram posts, stories and designs."
    },
    link: "https://www.canva.com",
    image: "https://www.google.com/s2/favicons?domain=canva.com&sz=64"
  },
  {
    name: "Remove.bg",
    page: "removebg.html",
  score: "8.7",
  pricing: "Freemium",
  beginner: true,
    description: {
      de: "Entfernt Hintergründe automatisch aus Bildern.",
      en: "Automatically removes backgrounds from images."
    },
    link: "https://www.remove.bg",
    image: "https://www.google.com/s2/favicons?domain=remove.bg&sz=64"
  }
]
};

function searchTools() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    results.innerHTML = "";

    let matchedTools = [];
    let workflowKey = "";

   if (
  input.includes("youtube") ||
  input.includes("video") ||
  input.includes("videos") ||
  input.includes("thumbnail") ||
  input.includes("content creator") ||
  input.includes("reels")
) {
  matchedTools = tools.youtube;
  workflowKey = "youtube";
}

   if (
  input.includes("instagram") ||
  input.includes("insta") ||
  input.includes("social media") ||
  input.includes("posts") ||
  input.includes("captions") ||
  input.includes("hashtags") ||
  input.includes("reels")
) {
  matchedTools = tools.instagram;
  workflowKey = "instagram";
}

    else if (
        input.includes("lebenslauf") ||
        input.includes("cv") ||
        input.includes("resume") ||
        input.includes("curriculum") ||
        input.includes("简历") ||
        input.includes("السيرة")
    ) {
        matchedTools = tools.lebenslauf;
        workflowKey = "lebenslauf";
    }

    else if (
        input.includes("bewerbung") ||
        input.includes("anschreiben") ||
        input.includes("job") ||
        input.includes("interview") ||
        input.includes("application") ||
        input.includes("cover letter") ||
        input.includes("solicitud") ||
        input.includes("trabajo") ||
        input.includes("empleo") ||
        input.includes("candidature") ||
        input.includes("التقديم") ||
        input.includes("وظيفة") ||
        input.includes("求职") ||
        input.includes("工作")
    ) {
        matchedTools = tools.bewerbung;
        workflowKey = "bewerbung";
    }

    else if (
        input.includes("logo") ||
        input.includes("design") ||
        input.includes("branding") ||
        input.includes("شعار") ||
        input.includes("标志")
    ) {
        matchedTools = tools.logo;
        workflowKey = "logo";
    }

    else if (
        input.includes("text") ||
        input.includes("texte") ||
        input.includes("schreiben") ||
        input.includes("content") ||
        input.includes("blog") ||
        input.includes("artikel")
    ) {
        matchedTools = tools.texte;
        workflowKey = "instagram";
    }

    if (matchedTools.length === 0 && workflowKey === "") {
        results.innerHTML = `
            <div class="card">
                <h2>${noResultsText[currentLang][0]}</h2>
                <p>${noResultsText[currentLang][1]}</p>
            </div>
        `;
        return;
    }

    matchedTools.forEach(tool => {
        results.innerHTML += `
    <div class="result-card">
        <div class="result-top">
            <img src="${tool.image}" alt="${tool.name} Logo" class="result-logo">

            <div class="result-info">
                <h2>
                    <a href="${tool.page || '#'}" class="tool-link">
                        ${tool.name}
                    </a>
                </h2>

                <div class="tool-meta">
                    <span>⭐ ${tool.score}</span>
                    <span>${tool.pricing}</span>
                    <span>${tool.beginner ? "👶 Anfängerfreundlich" : "🚀 Profi"}</span>
                </div>
            </div>
        </div>

        <p class="result-description">
            ${tool.description[currentLang]}
        </p>

        <a href="${tool.page || '#'}" class="tool-button">
            Zum Tool
        </a>
    </div>
     `;
  });

    showWorkflow(workflowKey);
}


function quickSearch(keyword) {
  document.getElementById("searchInput").value = keyword;
  searchTools();
}
function showWorkflow(keyword) {

    const workflowBox = document.getElementById("workflow-results");

    workflowBox.innerHTML = "";

    if (workflows[keyword]) {

        const workflow = workflows[keyword];

        let html = `
            <div class="workflow-card">
                <h2>${workflow.title}</h2>
        `;

        workflow.steps.forEach((step, index) => {

            html += `
                <div class="workflow-step">
                    <span>${index + 1}</span>
                    <p>${step}</p>
                </div>
            `;
        });

        html += `</div>`;

        workflowBox.innerHTML = html;
    }
}

function generateWorkflow(){

    const input = document
        .getElementById("goalInput")
        .value
        .toLowerCase();

    const result = document.getElementById("workflowResult");
    result.innerHTML = `
  <div class="ai-thinking">
    🧠 KI erstellt deinen optimalen Workflow...
  </div>
`;

setTimeout(() => {

    let workflowHTML = "";

    // YOUTUBE
    if(input.includes("youtube") || input.includes("video")){

        workflowHTML = `
        
        <div class="workflow-card">

            <h3>🎬 YouTube Creator Workflow</h3>

            <div class="workflow-step">
                1. ChatGPT → Skript schreiben
            </div>

            <div class="workflow-step">
                2. ElevenLabs → KI Stimme erstellen
            </div>

            <div class="workflow-step">
                3. Canva → Thumbnail erstellen
            </div>

            <div class="workflow-step">
                4. CapCut → Video schneiden
            </div>

        </div>

        `;
    }

    // INSTAGRAM
    else if(input.includes("instagram") || input.includes("social media")){

        workflowHTML = `
        
        <div class="workflow-card">

            <h3>📸 Instagram Content Workflow</h3>

            <div class="workflow-step">
                1. ChatGPT → Caption schreiben
            </div>

            <div class="workflow-step">
                2. Canva → Design erstellen
            </div>

            <div class="workflow-step">
                3. Remove.bg → Hintergrund entfernen
            </div>

        </div>

        `;
    }

    // BEWERBUNG
    else if(input.includes("bewerbung") || input.includes("lebenslauf")){

        workflowHTML = `
        
        <div class="workflow-card">

            <h3>📄 Bewerbungs Workflow</h3>

            <div class="workflow-step">
                1. Resume.io → Lebenslauf erstellen
            </div>

            <div class="workflow-step">
                2. ChatGPT → Bewerbung schreiben
            </div>

            <div class="workflow-step">
                3. Grammarly → Fehler korrigieren
            </div>

        </div>

        `;
    }

    else{

        workflowHTML = `
        
        <div class="workflow-card">

            <h3>🤖 Keine passende Workflow gefunden</h3>

            <p>
                Versuche Begriffe wie YouTube,
                Instagram oder Bewerbung.
            </p>

        </div>

        `;
    }

    result.innerHTML = workflowHTML;
}, 9000);
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("themeIcon");

  if (document.body.classList.contains("dark-mode")) {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

const examples = {
  de: [
    "Ich brauche ein Bewerbungsschreiben",
    "Ich möchte ein YouTube Video erstellen",
    "Erstelle mir ein Logo",
    "Welche KI hilft bei Instagram Posts?"
  ],
  en: [
    "I need a cover letter",
    "I want to create a YouTube video",
    "Create a logo for me",
    "Which AI helps with Instagram posts?"
  ],
  fr: [
    "J’ai besoin d’une lettre de motivation",
    "Je veux créer une vidéo YouTube",
    "Crée-moi un logo",
    "Quel outil IA aide avec les posts Instagram ?"
  ],
  es: [
    "Necesito una carta de presentación",
    "Quiero crear un video de YouTube",
    "Créame un logo",
    "¿Qué IA ayuda con publicaciones de Instagram?"
  ],
  ar: [
    "أحتاج إلى خطاب تقديم",
    "أريد إنشاء فيديو يوتيوب",
    "أنشئ لي شعاراً",
    "ما أداة الذكاء الاصطناعي المناسبة لمنشورات إنستغرام؟"
  ],
  zh: [
    "我需要一封求职信",
    "我想制作一个 YouTube 视频",
    "帮我创建一个 Logo",
    "哪个 AI 可以帮助制作 Instagram 帖子？"
  ],

};

const workflowExamples = {
  de: [
    "Ich möchte einen YouTube Kanal starten",
    "Ich brauche einen Bewerbungs-Workflow",
    "Wie erstelle ich TikTok Content?",
    "Ich möchte ein Logo designen"
  ],

  en: [
    "I want to start a YouTube channel",
    "I need a job application workflow",
    "How can I create TikTok content?",
    "I want to design a logo"
  ],

  ar: [
    "أريد إنشاء قناة يوتيوب",
    "أحتاج إلى سير عمل للتوظيف",
    "كيف أنشئ محتوى تيك توك؟",
    "أريد تصميم شعار"
  ],

fr: [
  "Je veux lancer une chaîne YouTube",
  "J’ai besoin d’un workflow de candidature",
  "Comment créer du contenu TikTok ?",
  "Je veux créer un logo"
],

es: [
  "Quiero iniciar un canal de YouTube",
  "Necesito un workflow para una solicitud",
  "¿Cómo creo contenido para TikTok?",
  "Quiero diseñar un logo"
],

zh: [
  "我想开设一个 YouTube 频道",
  "我需要一个求职申请工作流",
  "如何制作 TikTok 内容？",
  "我想设计一个 Logo"
]

};

let exampleIndex = 0;
let charIndex = 0;

const searchInput = document.getElementById("searchInput");

function typeEffect() {
  if (document.activeElement === searchInput) return;

  const currentText = examples[currentLang][exampleIndex];

  searchInput.setAttribute(
    "placeholder",
    currentText.substring(0, charIndex)
  );

  charIndex++;

  if (charIndex > currentText.length) {
    setTimeout(() => {
      charIndex = 0;
      exampleIndex++;

      if (exampleIndex >= examples[currentLang].length) {
        exampleIndex = 0;
      }
    }, 2000);
  }
}

setInterval(typeEffect, 120);

const goalInput = document.getElementById("goalInput");

let workflowCharIndex = 0;
let workflowExampleIndex = 0;

function workflowTypeEffect() {

  if (document.activeElement === goalInput) return;

  const currentText =
    workflowExamples[currentLang][workflowExampleIndex];

  goalInput.setAttribute(
    "placeholder",
    currentText.substring(0, workflowCharIndex)
  );

  workflowCharIndex++;

  if (workflowCharIndex > currentText.length) {

    setTimeout(() => {

      workflowCharIndex = 0;
      workflowExampleIndex++;

      if (
        workflowExampleIndex >=
        workflowExamples[currentLang].length
      ) {
        workflowExampleIndex = 0;
      }

    }, 2000);
  }
}

setInterval(workflowTypeEffect, 120);

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (
      elementTop < windowHeight - 100 &&
      elementBottom > 100
    ) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
  document.querySelector(".menu-toggle").classList.toggle("active");
}

function toggleLanguageMenu() {
  document.getElementById("languageMenu").classList.toggle("active");
}

function changeLanguage(lang, label) {
  currentLang = lang;

  if (lang === "ar") {
    document.body.dir = "rtl";
  } else {
    document.body.dir = "ltr";
  }

  charIndex = 0;
  exampleIndex = 0;

  document.getElementById("currentLang").textContent = label;
  document.getElementById("languageMenu").classList.remove("active");

  applyLanguage();

  const searchInput = document.getElementById("searchInput");

  if (searchInput && searchInput.value.trim() !== "") {
    searchTools();
  }
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (pageText[currentLang] && pageText[currentLang][key]) {
      element.textContent = pageText[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");

    if (pageText[currentLang] && pageText[currentLang][key]) {
      element.placeholder = pageText[currentLang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
});

const pageText = {
  de: {
    heroTitle: "Finde das beste KI-Tool für dein Problem",
    heroSubtitle: "Gib ein, wobei du Hilfe brauchst – z.B. Lebenslauf, Bewerbung, Logo oder Texte.",
    searchBtn: "Suchen",
    workflowGeneratorTitle: "🤖 AI Workflow Generator",
    workflowGeneratorSubtitle: "Beschreibe dein Ziel und erhalte automatisch den besten KI-Workflow.",
    whyTitle: "Warum MyAIFinder?",
    trendingTitle: "🔥 Trending AI Tools",
    bestWorkflowsTitle: "🚀 Beste KI Workflows",

    resumeDescription:
      "Resume.io hilft dir dabei, professionelle Lebensläufe und Bewerbungsschreiben schnell und einfach zu erstellen.",
    resumeUseTitle: "Wofür?",
    resumeUseText:
      "Lebenslauf, Bewerbungsschreiben und professionelle Vorlagen.",
    resumeForTitle: "Für wen?",
    resumeForText:
      "Perfekt für Schüler, Studenten, Bewerber und Berufseinsteiger.",
    resumeBenefitTitle: "Vorteil",
    resumeBenefitText:
      "Schnelle Erstellung mit modernen Designs und einfacher Bedienung.",
    visitTool: "Zum Tool →",
    resumePricing: "Freemium",
    resumeLevel: "👶 Anfängerfreundlich",

    /* CANVA */

canvaTitle: "Canva AI",
canvaPricing: "Freemium",
canvaLevel: "👶 Anfängerfreundlich",
canvaDescription: "Canva AI hilft dir dabei, schnell Designs, Social-Media-Grafiken, Präsentationen und Logos zu erstellen.",
canvaUseTitle: "Wofür?",
canvaUseText: "Social Media, Logos, Präsentationen, Flyer und schnelle Designs.",
canvaForTitle: "Für wen?",
canvaForText: "Perfekt für Creator, Schüler, Gründer, Bewerber und kleine Unternehmen.",
canvaBenefitTitle: "Vorteil",
canvaBenefitText: "Einfache Bedienung, viele Vorlagen und schnelle Ergebnisse ohne Design-Erfahrung.",

/* CAPCUT */

capcutTitle: "CapCut AI",
capcutPricing: "Freemium",
capcutLevel: "👶 Anfängerfreundlich",
capcutDescription: "CapCut AI hilft dir dabei, professionelle Videos, Reels und TikToks schnell und einfach zu bearbeiten.",
capcutUseTitle: "Wofür?",
capcutUseText: "TikTok, Reels, YouTube Shorts, Video-Editing und AI-Effekte.",
capcutForTitle: "Für wen?",
capcutForText: "Perfekt für Content Creator, TikToker, YouTuber und Social-Media-Anfänger.",
capcutBenefitTitle: "Vorteil",
capcutBenefitText: "Schnelle AI-Videoerstellung mit Effekten, Untertiteln und moderner Bearbeitung.",

/* CHATGPT */

chatgptTitle: "ChatGPT",
chatgptPricing: "Freemium",
chatgptLevel: "👶 Anfängerfreundlich",
chatgptDescription: "ChatGPT hilft dir beim Schreiben, Lernen, Planen, Programmieren und beim Finden schneller Antworten.",
chatgptUseTitle: "Wofür?",
chatgptUseText: "Texte, Ideen, Programmierung, Lernen, Zusammenfassungen und Problemlösungen.",
chatgptForTitle: "Für wen?",
chatgptForText: "Perfekt für Schüler, Studenten, Creator, Entwickler, Bewerber und Unternehmen.",
chatgptBenefitTitle: "Vorteil",
chatgptBenefitText: "Sehr vielseitig, einfach zu bedienen und hilfreich für fast jede Aufgabe.",

/* COPY.AI */

copyaiTitle: "Copy.ai",
copyaiPricing: "Freemium",
copyaiLevel: "👶 Anfängerfreundlich",
copyaiDescription: "Copy.ai hilft dir dabei, Marketingtexte, Social-Media-Posts, Produktbeschreibungen und E-Mails schneller zu schreiben.",
copyaiUseTitle: "Wofür?",
copyaiUseText: "Werbetexte, Blog-Ideen, E-Mails, Produkttexte und Social-Media-Inhalte.",
copyaiForTitle: "Für wen?",
copyaiForText: "Perfekt für Marketer, Creator, Selbstständige, Shops und kleine Unternehmen.",
copyaiBenefitTitle: "Vorteil",
copyaiBenefitText: "Spart Zeit beim Schreiben und liefert schnell kreative Textideen für viele Einsatzzwecke.",

/* ELEVENLABS */

elevenlabsTitle: "ElevenLabs",
elevenlabsPricing: "Freemium",
elevenlabsLevel: "🚀 Profi",
elevenlabsDescription: "ElevenLabs erstellt realistische KI-Stimmen, Sprachaufnahmen und Voiceovers mit moderner AI-Technologie.",
elevenlabsUseTitle: "Wofür?",
elevenlabsUseText: "Voiceovers, Podcasts, Videos, Hörbücher, TikToks und AI-Sprachgeneratoren.",
elevenlabsForTitle: "Für wen?",
elevenlabsForText: "Perfekt für Creator, YouTuber, Streamer, Unternehmen und Content-Produzenten.",
elevenlabsBenefitTitle: "Vorteil",
elevenlabsBenefitText: "Extrem realistische Stimmen mit vielen Sprachen, Emotionen und professioneller Qualität.",

/* GRAMMARLY */

grammarlyTitle: "Grammarly",
grammarlyPricing: "Freemium",
grammarlyLevel: "👶 Anfängerfreundlich",
grammarlyDescription: "Grammarly hilft dir dabei, Texte grammatikalisch korrekt, professionell und verständlich zu schreiben.",
grammarlyUseTitle: "Wofür?",
grammarlyUseText: "Grammatikprüfung, Rechtschreibung, E-Mails, Bewerbungen und professionelle Texte.",
grammarlyForTitle: "Für wen?",
grammarlyForText: "Perfekt für Schüler, Studenten, Bewerber, Unternehmen und Content Creator.",
grammarlyBenefitTitle: "Vorteil",
grammarlyBenefitText: "Verbessert Texte automatisch und macht Schreiben schneller und professioneller.",

/* JASPER AI */

jasperTitle: "Jasper AI",
jasperPricing: "Paid",
jasperLevel: "🚀 Profi",
jasperDescription: "Jasper AI hilft dir dabei, professionelle Marketingtexte, Blogs und Social-Media-Inhalte mit KI zu erstellen.",
jasperUseTitle: "Wofür?",
jasperUseText: "Marketingtexte, Blogs, Werbeanzeigen, SEO und Social-Media-Content.",
jasperForTitle: "Für wen?",
jasperForText: "Perfekt für Unternehmen, Marketer, Agenturen und professionelle Content Creator.",
jasperBenefitTitle: "Vorteil",
jasperBenefitText: "Erstellt hochwertige Texte schnell und spart viel Zeit bei Content-Erstellung und Marketing.",

/* KICKRESUME */

kickresumeTitle: "Kickresume",
kickresumePricing: "Freemium",
kickresumeLevel: "👶 Anfängerfreundlich",
kickresumeDescription: "Kickresume hilft dir dabei, Lebensläufe, Anschreiben und Karrieredokumente mit KI schnell und professionell zu erstellen.",
kickresumeUseTitle: "Wofür?",
kickresumeUseText: "Lebenslauf, Anschreiben, Bewerbungsvorlagen und Karriereprofile.",
kickresumeForTitle: "Für wen?",
kickresumeForText: "Perfekt für Bewerber, Studenten, Berufseinsteiger und Menschen auf Jobsuche.",
kickresumeBenefitTitle: "Vorteil",
kickresumeBenefitText: "Erstellt moderne Bewerbungsunterlagen schnell, übersichtlich und mit professionellen Vorlagen.",

/* LOOKA */

lookaTitle: "Looka",
lookaPricing: "Paid",
lookaLevel: "👶 Anfängerfreundlich",
lookaDescription: "Looka hilft dir dabei, professionelle Logos und Marken-Designs mit KI in wenigen Minuten zu erstellen.",
lookaUseTitle: "Wofür?",
lookaUseText: "Logos, Branding, Social-Media-Designs und professionelle Markenidentität.",
lookaForTitle: "Für wen?",
lookaForText: "Perfekt für Startups, Creator, kleine Unternehmen und Selbstständige.",
lookaBenefitTitle: "Vorteil",
lookaBenefitText: "Erstellt moderne Logos automatisch und spart Zeit sowie Designkosten.",

/* REMOVEBG */

removebgTitle: "Remove.bg",
removebgPricing: "Freemium",
removebgLevel: "👶 Anfängerfreundlich",
removebgDescription: "Remove.bg entfernt automatisch Hintergründe von Bildern mit moderner KI-Technologie in wenigen Sekunden.",
removebgUseTitle: "Wofür?",
removebgUseText: "Hintergrund entfernen, Produktbilder, Profilbilder, Logos und Social-Media-Grafiken.",
removebgForTitle: "Für wen?",
removebgForText: "Perfekt für Designer, Creator, Online-Shops, Fotografen und Social-Media-Nutzer.",
removebgBenefitTitle: "Vorteil",
removebgBenefitText: "Spart viel Zeit bei Bildbearbeitung und liefert schnelle professionelle Ergebnisse.",

/* REZI AI */

reziTitle: "Rezi AI",
reziPricing: "Freemium",
reziLevel: "👶 Anfängerfreundlich",
reziDescription: "Rezi AI hilft dir dabei, professionelle Lebensläufe und Bewerbungen mit KI schnell und modern zu erstellen.",
reziUseTitle: "Wofür?",
reziUseText: "Lebensläufe, Anschreiben, Bewerbungen und ATS-optimierte Karriereprofile.",
reziForTitle: "Für wen?",
reziForText: "Perfekt für Bewerber, Studenten, Berufseinsteiger und Jobsuchende.",
reziBenefitTitle: "Vorteil",
reziBenefitText: "Erstellt moderne Bewerbungsunterlagen automatisch und erhöht die Chancen bei Bewerbungen.",


     whyCard1Title: "⚡ Schnelle Empfehlungen",
whyCard1Text: "Finde in Sekunden passende KI-Tools für dein konkretes Problem.",
whyCard2Title: "🎯 Klare Auswahl",
whyCard2Text: "Keine endlosen Listen – wir zeigen dir die Tools, die wirklich passen.",
whyCard3Title: "🧩 Praktische Workflows",
whyCard3Text: "Erhalte nicht nur Tools, sondern ganze Schritt-für-Schritt-Lösungen.",

trendChatgptText: "Beste KI für Texte, Ideen und Produktivität.",
trendCanvaText: "Perfekt für Social Media, Logos und Designs.",
trendMidjourneyText: "Erstellt hochwertige KI-Bilder und Artworks.",
trendNotionText: "Organisiert Projekte und schreibt Inhalte automatisch.",

workflowApplicationTitle: "📄 Bewerbung erstellen",
workflowApplicationStep1: "Resume.io → Lebenslauf erstellen",
workflowApplicationStep2: "ChatGPT → Bewerbung schreiben",
workflowApplicationStep3: "Grammarly → Fehler korrigieren",

workflowYoutubeTitle: "🎥 YouTube Content",
workflowYoutubeStep1: "ChatGPT → Skript schreiben",
workflowYoutubeStep2: "ElevenLabs → KI Stimme erzeugen",
workflowYoutubeStep3: "Canva → Thumbnail erstellen",

// DE
catCv: "Lebenslauf",
catApplication: "Bewerbung",
catLogo: "Logo",
catText: "Texte",
searchPlaceholder: "z.B. Lebenslauf schreiben...",
workflowPlaceholder: "z.B. Ich möchte einen YouTube Kanal starten",
workflowBtn: "Workflow erstellen",

navHome: "Start",
navResume: "Lebenslauf",
navApplication: "Bewerbung",
navLogo: "Logo",
navContent: "Content",
navBlog: "Blog",
navImprint: "Impressum",
navPrivacy: "Datenschutz",
navContact: "Kontakt",
  },
 
  en: {
    heroTitle: "Find the best AI tool for your problem",
    heroSubtitle: "Enter what you need help with – e.g. resume, application, logo or texts.",
    searchBtn: "Search",
    workflowGeneratorTitle: "🤖 AI Workflow Generator",
    workflowGeneratorSubtitle: "Describe your goal and automatically get the best AI workflow.",
    whyTitle: "Why MyAIFinder?",
    trendingTitle: "🔥 Trending AI Tools",
    bestWorkflowsTitle: "🚀 Best AI Workflows",

    resumePricing: "Freemium",
    resumeLevel: "👶 Beginner Friendly",

    resumeDescription:
      "Resume.io helps you create professional resumes and cover letters quickly and easily.",
    resumeUseTitle: "What for?",
    resumeUseText:
      "Resumes, cover letters and professional templates.",
    resumeForTitle: "For whom?",
    resumeForText:
      "Perfect for students, applicants and beginners.",
    resumeBenefitTitle: "Benefit",
    resumeBenefitText:
      "Fast creation with modern designs and easy handling.",
    visitTool: "Go to tool →",

    canvaTitle: "Canva AI",
canvaPricing: "Freemium",
canvaLevel: "👶 Beginner Friendly",
canvaDescription: "Canva AI helps you quickly create designs, social media graphics, presentations, and logos.",
canvaUseTitle: "What for?",
canvaUseText: "Social media, logos, presentations, flyers, and quick designs.",
canvaForTitle: "For whom?",
canvaForText: "Perfect for creators, students, founders, applicants, and small businesses.",
canvaBenefitTitle: "Benefit",
canvaBenefitText: "Easy to use, many templates, and fast results without design experience.",

/* EN */

capcutTitle: "CapCut AI",
capcutPricing: "Freemium",
capcutLevel: "👶 Beginner Friendly",
capcutDescription: "CapCut AI helps you quickly and easily edit professional videos, reels, and TikToks.",
capcutUseTitle: "What for?",
capcutUseText: "TikTok, reels, YouTube Shorts, video editing, and AI effects.",
capcutForTitle: "For whom?",
capcutForText: "Perfect for content creators, TikTokers, YouTubers, and social media beginners.",
capcutBenefitTitle: "Benefit",
capcutBenefitText: "Fast AI video creation with effects, subtitles, and modern editing tools.",

/* EN */

chatgptTitle: "ChatGPT",
chatgptPricing: "Freemium",
chatgptLevel: "👶 Beginner Friendly",
chatgptDescription: "ChatGPT helps you with writing, learning, planning, programming, and finding quick answers.",
chatgptUseTitle: "What for?",
chatgptUseText: "Writing, ideas, programming, learning, summaries, and problem solving.",
chatgptForTitle: "For whom?",
chatgptForText: "Perfect for students, creators, developers, applicants, and businesses.",
chatgptBenefitTitle: "Benefit",
chatgptBenefitText: "Very versatile, easy to use, and useful for almost every task.",

/* EN */

copyaiTitle: "Copy.ai",
copyaiPricing: "Freemium",
copyaiLevel: "👶 Beginner Friendly",
copyaiDescription: "Copy.ai helps you write marketing texts, social media posts, product descriptions, and emails faster.",
copyaiUseTitle: "What for?",
copyaiUseText: "Advertising texts, blog ideas, emails, product texts, and social media content.",
copyaiForTitle: "For whom?",
copyaiForText: "Perfect for marketers, creators, freelancers, shops, and small businesses.",
copyaiBenefitTitle: "Benefit",
copyaiBenefitText: "Saves time writing and quickly generates creative text ideas for many purposes.",

/* EN */

elevenlabsTitle: "ElevenLabs",
elevenlabsPricing: "Freemium",
elevenlabsLevel: "🚀 Professional",
elevenlabsDescription: "ElevenLabs creates realistic AI voices, voice recordings, and voiceovers using modern AI technology.",
elevenlabsUseTitle: "What for?",
elevenlabsUseText: "Voiceovers, podcasts, videos, audiobooks, TikToks, and AI voice generators.",
elevenlabsForTitle: "For whom?",
elevenlabsForText: "Perfect for creators, YouTubers, streamers, businesses, and content producers.",
elevenlabsBenefitTitle: "Benefit",
elevenlabsBenefitText: "Extremely realistic voices with many languages, emotions, and professional quality.",

/* EN */

grammarlyTitle: "Grammarly",
grammarlyPricing: "Freemium",
grammarlyLevel: "👶 Beginner Friendly",
grammarlyDescription: "Grammarly helps you write grammatically correct, professional, and clear texts.",
grammarlyUseTitle: "What for?",
grammarlyUseText: "Grammar checking, spelling, emails, applications, and professional writing.",
grammarlyForTitle: "For whom?",
grammarlyForText: "Perfect for students, applicants, businesses, and content creators.",
grammarlyBenefitTitle: "Benefit",
grammarlyBenefitText: "Automatically improves texts and makes writing faster and more professional.",

/* EN */

jasperTitle: "Jasper AI",
jasperPricing: "Paid",
jasperLevel: "🚀 Professional",
jasperDescription: "Jasper AI helps you create professional marketing texts, blogs, and social media content with AI.",
jasperUseTitle: "What for?",
jasperUseText: "Marketing texts, blogs, ads, SEO, and social media content.",
jasperForTitle: "For whom?",
jasperForText: "Perfect for businesses, marketers, agencies, and professional content creators.",
jasperBenefitTitle: "Benefit",
jasperBenefitText: "Creates high-quality texts quickly and saves a lot of time in marketing and content creation.",

/* EN */

kickresumeTitle: "Kickresume",
kickresumePricing: "Freemium",
kickresumeLevel: "👶 Beginner Friendly",
kickresumeDescription: "Kickresume helps you quickly and professionally create resumes, cover letters, and career documents with AI.",
kickresumeUseTitle: "What for?",
kickresumeUseText: "Resumes, cover letters, job application templates, and career profiles.",
kickresumeForTitle: "For whom?",
kickresumeForText: "Perfect for applicants, students, beginners, and job seekers.",
kickresumeBenefitTitle: "Benefit",
kickresumeBenefitText: "Creates modern application documents quickly, clearly, and professionally.",

/* EN */

lookaTitle: "Looka",
lookaPricing: "Paid",
lookaLevel: "👶 Beginner Friendly",
lookaDescription: "Looka helps you create professional logos and brand designs with AI in just a few minutes.",
lookaUseTitle: "What for?",
lookaUseText: "Logos, branding, social media designs, and professional brand identity.",
lookaForTitle: "For whom?",
lookaForText: "Perfect for startups, creators, small businesses, and freelancers.",
lookaBenefitTitle: "Benefit",
lookaBenefitText: "Automatically creates modern logos while saving time and design costs.",

/* EN */

removebgTitle: "Remove.bg",
removebgPricing: "Freemium",
removebgLevel: "👶 Beginner Friendly",
removebgDescription: "Remove.bg automatically removes image backgrounds using modern AI technology in just a few seconds.",
removebgUseTitle: "What for?",
removebgUseText: "Background removal, product images, profile pictures, logos, and social media graphics.",
removebgForTitle: "For whom?",
removebgForText: "Perfect for designers, creators, online shops, photographers, and social media users.",
removebgBenefitTitle: "Benefit",
removebgBenefitText: "Saves a lot of time in image editing and delivers fast professional results.",

/* EN */

reziTitle: "Rezi AI",
reziPricing: "Freemium",
reziLevel: "👶 Beginner Friendly",
reziDescription: "Rezi AI helps you quickly create professional resumes and job applications with AI.",
reziUseTitle: "What for?",
reziUseText: "Resumes, cover letters, applications, and ATS-optimized career profiles.",
reziForTitle: "For whom?",
reziForText: "Perfect for applicants, students, beginners, and job seekers.",
reziBenefitTitle: "Benefit",
reziBenefitText: "Automatically creates modern application documents and increases job application success.",


    whyCard1Title: "⚡ Fast Recommendations",
whyCard1Text: "Find matching AI tools for your exact problem in seconds.",
whyCard2Title: "🎯 Clear Selection",
whyCard2Text: "No endless lists — we show you the tools that actually fit.",
whyCard3Title: "🧩 Practical Workflows",
whyCard3Text: "Get not only tools, but complete step-by-step solutions.",

trendChatgptText: "Best AI for writing, ideas and productivity.",
trendCanvaText: "Perfect for social media, logos and designs.",
trendMidjourneyText: "Creates high-quality AI images and artworks.",
trendNotionText: "Organizes projects and writes content automatically.",

workflowApplicationTitle: "📄 Create Application",
workflowApplicationStep1: "Resume.io → Create resume",
workflowApplicationStep2: "ChatGPT → Write application",
workflowApplicationStep3: "Grammarly → Correct mistakes",

workflowYoutubeTitle: "🎥 YouTube Content",
workflowYoutubeStep1: "ChatGPT → Write script",
workflowYoutubeStep2: "ElevenLabs → Generate AI voice",
workflowYoutubeStep3: "Canva → Create thumbnail",

// EN
catCv: "Resume",
catApplication: "Application",
catLogo: "Logo",
catText: "Texts",
searchPlaceholder: "e.g. Write a resume...",
workflowPlaceholder: "e.g. I want to start a YouTube channel",
workflowBtn: "Create workflow",

navHome: "Home",
navResume: "Resume",
navApplication: "Application",
navLogo: "Logo",
navContent: "Content",
navBlog: "Blog",
navImprint: "Imprint",
navPrivacy: "Privacy",
navContact: "Contact",
  },

  fr: {
    heroTitle: "Trouvez le meilleur outil IA pour votre problème",
    heroSubtitle: "Indiquez ce dont vous avez besoin – CV, candidature, logo ou textes.",
    searchBtn: "Rechercher",
    workflowGeneratorTitle: "🤖 Générateur de workflow IA",
    workflowGeneratorSubtitle: "Décrivez votre objectif et obtenez automatiquement le meilleur workflow IA.",
    whyTitle: "Pourquoi MyAIFinder ?",
    trendingTitle: "🔥 Outils IA populaires",
    bestWorkflowsTitle: "🚀 Meilleurs workflows IA",

    resumePricing: "Freemium",
    resumeLevel: "👶 Débutant",

    resumeDescription:
      "Resume.io t’aide à créer rapidement et facilement des CV et lettres de motivation professionnels.",
    resumeUseTitle: "Pour quoi ?",
    resumeUseText:
      "CV, lettres de motivation et modèles professionnels.",
    resumeForTitle: "Pour qui ?",
    resumeForText:
      "Parfait pour les élèves, étudiants et débutants.",
    resumeBenefitTitle: "Avantage",
    resumeBenefitText:
      "Création rapide avec des designs modernes et une utilisation simple.",
    visitTool: "Voir l’outil →",

    canvaTitle: "Canva AI",
canvaPricing: "Freemium",
canvaLevel: "👶 Débutant",
canvaDescription: "Canva AI t’aide à créer rapidement des designs, visuels pour réseaux sociaux, présentations et logos.",
canvaUseTitle: "Pour quoi ?",
canvaUseText: "Réseaux sociaux, logos, présentations, flyers et designs rapides.",
canvaForTitle: "Pour qui ?",
canvaForText: "Parfait pour les créateurs, étudiants, fondateurs, candidats et petites entreprises.",
canvaBenefitTitle: "Avantage",
canvaBenefitText: "Facile à utiliser, beaucoup de modèles et des résultats rapides sans expérience en design.",

/* FR */

capcutTitle: "CapCut AI",
capcutPricing: "Freemium",
capcutLevel: "👶 Débutant",
capcutDescription: "CapCut AI t’aide à éditer rapidement et facilement des vidéos professionnelles, reels et TikToks.",
capcutUseTitle: "Pour quoi ?",
capcutUseText: "TikTok, reels, YouTube Shorts, montage vidéo et effets IA.",
capcutForTitle: "Pour qui ?",
capcutForText: "Parfait pour les créateurs de contenu, TikTokeurs, YouTubeurs et débutants sur les réseaux sociaux.",
capcutBenefitTitle: "Avantage",
capcutBenefitText: "Création rapide de vidéos IA avec effets, sous-titres et outils modernes.",

/* FR */

chatgptTitle: "ChatGPT",
chatgptPricing: "Freemium",
chatgptLevel: "👶 Débutant",
chatgptDescription: "ChatGPT t’aide à écrire, apprendre, planifier, programmer et trouver rapidement des réponses.",
chatgptUseTitle: "Pour quoi ?",
chatgptUseText: "Textes, idées, programmation, apprentissage, résumés et résolution de problèmes.",
chatgptForTitle: "Pour qui ?",
chatgptForText: "Parfait pour les étudiants, créateurs, développeurs, candidats et entreprises.",
chatgptBenefitTitle: "Avantage",
chatgptBenefitText: "Très polyvalent, facile à utiliser et utile pour presque toutes les tâches.",

/* FR */

copyaiTitle: "Copy.ai",
copyaiPricing: "Freemium",
copyaiLevel: "👶 Débutant",
copyaiDescription: "Copy.ai t’aide à rédiger plus rapidement des textes marketing, publications réseaux sociaux, descriptions produits et e-mails.",
copyaiUseTitle: "Pour quoi ?",
copyaiUseText: "Textes publicitaires, idées de blogs, e-mails, descriptions produits et contenu réseaux sociaux.",
copyaiForTitle: "Pour qui ?",
copyaiForText: "Parfait pour les marketeurs, créateurs, indépendants, boutiques et petites entreprises.",
copyaiBenefitTitle: "Avantage",
copyaiBenefitText: "Fait gagner du temps et génère rapidement des idées créatives de textes.",

/* FR */

elevenlabsTitle: "ElevenLabs",
elevenlabsPricing: "Freemium",
elevenlabsLevel: "🚀 Professionnel",
elevenlabsDescription: "ElevenLabs crée des voix IA réalistes, des enregistrements vocaux et des voiceovers grâce à une technologie IA moderne.",
elevenlabsUseTitle: "Pour quoi ?",
elevenlabsUseText: "Voiceovers, podcasts, vidéos, livres audio, TikToks et générateurs de voix IA.",
elevenlabsForTitle: "Pour qui ?",
elevenlabsForText: "Parfait pour les créateurs, YouTubeurs, streamers, entreprises et producteurs de contenu.",
elevenlabsBenefitTitle: "Avantage",
elevenlabsBenefitText: "Voix extrêmement réalistes avec de nombreuses langues, émotions et une qualité professionnelle.",

/* FR */

grammarlyTitle: "Grammarly",
grammarlyPricing: "Freemium",
grammarlyLevel: "👶 Débutant",
grammarlyDescription: "Grammarly t’aide à écrire des textes corrects, professionnels et faciles à comprendre.",
grammarlyUseTitle: "Pour quoi ?",
grammarlyUseText: "Correction grammaticale, orthographe, e-mails, candidatures et textes professionnels.",
grammarlyForTitle: "Pour qui ?",
grammarlyForText: "Parfait pour les étudiants, candidats, entreprises et créateurs de contenu.",
grammarlyBenefitTitle: "Avantage",
grammarlyBenefitText: "Améliore automatiquement les textes et rend l’écriture plus rapide et professionnelle.",

/* FR */

jasperTitle: "Jasper AI",
jasperPricing: "Payant",
jasperLevel: "🚀 Professionnel",
jasperDescription: "Jasper AI t’aide à créer des textes marketing, blogs et contenus réseaux sociaux professionnels grâce à l’IA.",
jasperUseTitle: "Pour quoi ?",
jasperUseText: "Textes marketing, blogs, publicités, SEO et contenu réseaux sociaux.",
jasperForTitle: "Pour qui ?",
jasperForText: "Parfait pour les entreprises, marketeurs, agences et créateurs de contenu professionnels.",
jasperBenefitTitle: "Avantage",
jasperBenefitText: "Crée rapidement des textes de haute qualité et fait gagner beaucoup de temps.",

/* FR */

kickresumeTitle: "Kickresume",
kickresumePricing: "Freemium",
kickresumeLevel: "👶 Débutant",
kickresumeDescription: "Kickresume t’aide à créer rapidement et professionnellement des CV, lettres de motivation et documents de carrière avec l’IA.",
kickresumeUseTitle: "Pour quoi ?",
kickresumeUseText: "CV, lettres de motivation, modèles de candidature et profils de carrière.",
kickresumeForTitle: "Pour qui ?",
kickresumeForText: "Parfait pour les candidats, étudiants, débutants et chercheurs d’emploi.",
kickresumeBenefitTitle: "Avantage",
kickresumeBenefitText: "Crée des documents de candidature modernes rapidement et de manière professionnelle.",

/* FR */

lookaTitle: "Looka",
lookaPricing: "Payant",
lookaLevel: "👶 Débutant",
lookaDescription: "Looka t’aide à créer des logos et designs de marque professionnels avec l’IA en quelques minutes.",
lookaUseTitle: "Pour quoi ?",
lookaUseText: "Logos, branding, designs réseaux sociaux et identité visuelle professionnelle.",
lookaForTitle: "Pour qui ?",
lookaForText: "Parfait pour les startups, créateurs, petites entreprises et freelances.",
lookaBenefitTitle: "Avantage",
lookaBenefitText: "Crée automatiquement des logos modernes et réduit les coûts de design.",

/* FR */

removebgTitle: "Remove.bg",
removebgPricing: "Freemium",
removebgLevel: "👶 Débutant",
removebgDescription: "Remove.bg supprime automatiquement les arrière-plans des images grâce à une technologie IA moderne en quelques secondes.",
removebgUseTitle: "Pour quoi ?",
removebgUseText: "Suppression d’arrière-plan, images produits, photos de profil, logos et visuels réseaux sociaux.",
removebgForTitle: "Pour qui ?",
removebgForText: "Parfait pour les designers, créateurs, boutiques en ligne, photographes et utilisateurs des réseaux sociaux.",
removebgBenefitTitle: "Avantage",
removebgBenefitText: "Fait gagner beaucoup de temps dans l’édition d’images avec des résultats rapides et professionnels.",

/* FR */

reziTitle: "Rezi AI",
reziPricing: "Freemium",
reziLevel: "👶 Débutant",
reziDescription: "Rezi AI t’aide à créer rapidement des CV et candidatures professionnels grâce à l’IA.",
reziUseTitle: "Pour quoi ?",
reziUseText: "CV, lettres de motivation, candidatures et profils optimisés ATS.",
reziForTitle: "Pour qui ?",
reziForText: "Parfait pour les candidats, étudiants, débutants et chercheurs d’emploi.",
reziBenefitTitle: "Avantage",
reziBenefitText: "Crée automatiquement des documents modernes et améliore les chances d’embauche.",

// FR
    whyCard1Title: "⚡ Recommandations rapides",
whyCard1Text: "Trouvez en quelques secondes les outils IA adaptés à votre problème.",
whyCard2Title: "🎯 Sélection claire",
whyCard2Text: "Pas de listes infinies — nous montrons les outils qui correspondent vraiment.",
whyCard3Title: "🧩 Workflows pratiques",
whyCard3Text: "Obtenez non seulement des outils, mais aussi des solutions étape par étape.",

trendChatgptText: "Meilleur outil IA pour les textes, les idées et la productivité.",
trendCanvaText: "Parfait pour les réseaux sociaux, les logos et les designs.",
trendMidjourneyText: "Crée des images IA et des artworks de haute qualité.",
trendNotionText: "Organise les projets et rédige du contenu automatiquement.",

workflowApplicationTitle: "📄 Créer une candidature",
workflowApplicationStep1: "Resume.io → Créer un CV",
workflowApplicationStep2: "ChatGPT → Rédiger une candidature",
workflowApplicationStep3: "Grammarly → Corriger les erreurs",

workflowYoutubeTitle: "🎥 Contenu YouTube",
workflowYoutubeStep1: "ChatGPT → Rédiger un script",
workflowYoutubeStep2: "ElevenLabs → Générer une voix IA",
workflowYoutubeStep3: "Canva → Créer une miniature",

// FR
catCv: "CV",
catApplication: "Candidature",
catLogo: "Logo",
catText: "Textes",
searchPlaceholder: "ex. Rédiger un CV...",
workflowPlaceholder: "ex. Je veux lancer une chaîne YouTube",
workflowBtn: "Créer un workflow",

navHome: "Accueil",
navResume: "CV",
navApplication: "Candidature",
navLogo: "Logo",
navContent: "Contenu",
navBlog: "Blog",
navImprint: "Mentions légales",
navPrivacy: "Confidentialité",
navContact: "Contact",
  },
  
  es: {
    heroTitle: "Encuentra la mejor herramienta de IA para tu problema",
    heroSubtitle: "Escribe en qué necesitas ayuda – CV, solicitud, logo o textos.",
    searchBtn: "Buscar",
    workflowGeneratorTitle: "🤖 Generador de workflows IA",
    workflowGeneratorSubtitle: "Describe tu objetivo y recibe automáticamente el mejor workflow de IA.",
    whyTitle: "¿Por qué MyAIFinder?",
    trendingTitle: "🔥 Herramientas IA populares",
    bestWorkflowsTitle: "🚀 Mejores workflows IA",

    resumePricing: "Freemium",
    resumeLevel: "👶 Para principiantes",

    resumeDescription:
      "Resume.io te ayuda a crear currículums y cartas de presentación profesionales de forma rápida y sencilla.",
    resumeUseTitle: "¿Para qué?",
    resumeUseText:
      "Currículums, cartas de presentación y plantillas profesionales.",
    resumeForTitle: "¿Para quién?",
    resumeForText:
      "Perfecto para estudiantes, candidatos y principiantes.",
    resumeBenefitTitle: "Ventaja",
    resumeBenefitText:
      "Creación rápida con diseños modernos y uso sencillo.",
    visitTool: "Ir a la herramienta →",

    canvaTitle: "Canva AI",
canvaPricing: "Freemium",
canvaLevel: "👶 Para principiantes",
canvaDescription: "Canva AI te ayuda a crear rápidamente diseños, gráficos para redes sociales, presentaciones y logos.",
canvaUseTitle: "¿Para qué?",
canvaUseText: "Redes sociales, logos, presentaciones, flyers y diseños rápidos.",
canvaForTitle: "¿Para quién?",
canvaForText: "Perfecto para creadores, estudiantes, fundadores, candidatos y pequeñas empresas.",
canvaBenefitTitle: "Ventaja",
canvaBenefitText: "Fácil de usar, muchas plantillas y resultados rápidos sin experiencia en diseño.",

/* ES */

capcutTitle: "CapCut AI",
capcutPricing: "Freemium",
capcutLevel: "👶 Para principiantes",
capcutDescription: "CapCut AI te ayuda a editar videos, reels y TikToks de forma rápida y sencilla.",
capcutUseTitle: "¿Para qué?",
capcutUseText: "TikTok, reels, YouTube Shorts, edición de video y efectos IA.",
capcutForTitle: "¿Para quién?",
capcutForText: "Perfecto para creadores de contenido, TikTokers, YouTubers y principiantes en redes sociales.",
capcutBenefitTitle: "Ventaja",
capcutBenefitText: "Creación rápida de videos con efectos, subtítulos y herramientas modernas.",

/* ES */

chatgptTitle: "ChatGPT",
chatgptPricing: "Freemium",
chatgptLevel: "👶 Para principiantes",
chatgptDescription: "ChatGPT te ayuda con escritura, aprendizaje, planificación, programación y respuestas rápidas.",
chatgptUseTitle: "¿Para qué?",
chatgptUseText: "Textos, ideas, programación, aprendizaje, resúmenes y resolución de problemas.",
chatgptForTitle: "¿Para quién?",
chatgptForText: "Perfecto para estudiantes, creadores, desarrolladores, candidatos y empresas.",
chatgptBenefitTitle: "Ventaja",
chatgptBenefitText: "Muy versátil, fácil de usar y útil para casi cualquier tarea.",

/* ES */

copyaiTitle: "Copy.ai",
copyaiPricing: "Freemium",
copyaiLevel: "👶 Para principiantes",
copyaiDescription: "Copy.ai te ayuda a escribir textos de marketing, publicaciones para redes sociales, descripciones de productos y correos electrónicos más rápido.",
copyaiUseTitle: "¿Para qué?",
copyaiUseText: "Textos publicitarios, ideas de blogs, correos electrónicos, textos de productos y contenido para redes sociales.",
copyaiForTitle: "¿Para quién?",
copyaiForText: "Perfecto para marketers, creadores, freelancers, tiendas y pequeñas empresas.",
copyaiBenefitTitle: "Ventaja",
copyaiBenefitText: "Ahorra tiempo escribiendo y genera rápidamente ideas creativas de texto.",

/* ES */

elevenlabsTitle: "ElevenLabs",
elevenlabsPricing: "Freemium",
elevenlabsLevel: "🚀 Profesional",
elevenlabsDescription: "ElevenLabs crea voces IA realistas, grabaciones y voiceovers usando tecnología moderna de IA.",
elevenlabsUseTitle: "¿Para qué?",
elevenlabsUseText: "Voiceovers, podcasts, videos, audiolibros, TikToks y generadores de voz IA.",
elevenlabsForTitle: "¿Para quién?",
elevenlabsForText: "Perfecto para creadores, YouTubers, streamers, empresas y productores de contenido.",
elevenlabsBenefitTitle: "Ventaja",
elevenlabsBenefitText: "Voces extremadamente realistas con muchos idiomas, emociones y calidad profesional.",

/* ES */

grammarlyTitle: "Grammarly",
grammarlyPricing: "Freemium",
grammarlyLevel: "👶 Para principiantes",
grammarlyDescription: "Grammarly te ayuda a escribir textos correctos, profesionales y fáciles de entender.",
grammarlyUseTitle: "¿Para qué?",
grammarlyUseText: "Corrección gramatical, ortografía, correos electrónicos, solicitudes y textos profesionales.",
grammarlyForTitle: "¿Para quién?",
grammarlyForText: "Perfecto para estudiantes, candidatos, empresas y creadores de contenido.",
grammarlyBenefitTitle: "Ventaja",
grammarlyBenefitText: "Mejora automáticamente los textos y hace que escribir sea más rápido y profesional.",

/* ES */

jasperTitle: "Jasper AI",
jasperPricing: "De pago",
jasperLevel: "🚀 Profesional",
jasperDescription: "Jasper AI te ayuda a crear textos de marketing, blogs y contenido para redes sociales con IA.",
jasperUseTitle: "¿Para qué?",
jasperUseText: "Textos de marketing, blogs, anuncios, SEO y contenido para redes sociales.",
jasperForTitle: "¿Para quién?",
jasperForText: "Perfecto para empresas, marketers, agencias y creadores de contenido profesionales.",
jasperBenefitTitle: "Ventaja",
jasperBenefitText: "Crea textos de alta calidad rápidamente y ahorra mucho tiempo.",

/* ES */

kickresumeTitle: "Kickresume",
kickresumePricing: "Freemium",
kickresumeLevel: "👶 Para principiantes",
kickresumeDescription: "Kickresume te ayuda a crear currículums, cartas de presentación y documentos profesionales rápidamente con IA.",
kickresumeUseTitle: "¿Para qué?",
kickresumeUseText: "Currículums, cartas de presentación, plantillas de solicitud y perfiles profesionales.",
kickresumeForTitle: "¿Para quién?",
kickresumeForText: "Perfecto para candidatos, estudiantes, principiantes y personas que buscan trabajo.",
kickresumeBenefitTitle: "Ventaja",
kickresumeBenefitText: "Crea documentos de solicitud modernos de forma rápida y profesional.",

/* ES */

lookaTitle: "Looka",
lookaPricing: "De pago",
lookaLevel: "👶 Para principiantes",
lookaDescription: "Looka te ayuda a crear logos y diseños de marca profesionales con IA en pocos minutos.",
lookaUseTitle: "¿Para qué?",
lookaUseText: "Logos, branding, diseños para redes sociales e identidad profesional.",
lookaForTitle: "¿Para quién?",
lookaForText: "Perfecto para startups, creadores, pequeñas empresas y freelancers.",
lookaBenefitTitle: "Ventaja",
lookaBenefitText: "Crea logos modernos automáticamente y ahorra tiempo y costes de diseño.",

/* ES */

removebgTitle: "Remove.bg",
removebgPricing: "Freemium",
removebgLevel: "👶 Para principiantes",
removebgDescription: "Remove.bg elimina automáticamente fondos de imágenes usando tecnología moderna de IA en segundos.",
removebgUseTitle: "¿Para qué?",
removebgUseText: "Eliminar fondos, imágenes de productos, fotos de perfil, logos y gráficos para redes sociales.",
removebgForTitle: "¿Para quién?",
removebgForText: "Perfecto para diseñadores, creadores, tiendas online, fotógrafos y usuarios de redes sociales.",
removebgBenefitTitle: "Ventaja",
removebgBenefitText: "Ahorra mucho tiempo en edición de imágenes y ofrece resultados rápidos y profesionales.",

/* ES */

reziTitle: "Rezi AI",
reziPricing: "Freemium",
reziLevel: "👶 Para principiantes",
reziDescription: "Rezi AI te ayuda a crear currículums y solicitudes de empleo profesionales rápidamente con IA.",
reziUseTitle: "¿Para qué?",
reziUseText: "Currículums, cartas de presentación, solicitudes y perfiles optimizados para ATS.",
reziForTitle: "¿Para quién?",
reziForText: "Perfecto para candidatos, estudiantes, principiantes y personas que buscan trabajo.",
reziBenefitTitle: "Ventaja",
reziBenefitText: "Crea automáticamente documentos modernos y mejora las posibilidades de conseguir empleo.",


// ES
    whyCard1Title: "⚡ Recomendaciones rápidas",
whyCard1Text: "Encuentra herramientas de IA adecuadas para tu problema en segundos.",
whyCard2Title: "🎯 Selección clara",
whyCard2Text: "Sin listas interminables — te mostramos las herramientas que realmente encajan.",
whyCard3Title: "🧩 Workflows prácticos",
whyCard3Text: "Obtén no solo herramientas, sino soluciones completas paso a paso.",

trendChatgptText: "La mejor IA para textos, ideas y productividad.",
trendCanvaText: "Perfecto para redes sociales, logos y diseños.",
trendMidjourneyText: "Crea imágenes y artworks de IA de alta calidad.",
trendNotionText: "Organiza proyectos y escribe contenido automáticamente.",

workflowApplicationTitle: "📄 Crear solicitud",
workflowApplicationStep1: "Resume.io → Crear CV",
workflowApplicationStep2: "ChatGPT → Escribir solicitud",
workflowApplicationStep3: "Grammarly → Corregir errores",

workflowYoutubeTitle: "🎥 Contenido de YouTube",
workflowYoutubeStep1: "ChatGPT → Escribir guion",
workflowYoutubeStep2: "ElevenLabs → Generar voz IA",
workflowYoutubeStep3: "Canva → Crear miniatura",

// ES
catCv: "CV",
catApplication: "Solicitud",
catLogo: "Logo",
catText: "Textos",
searchPlaceholder: "ej. Escribir un CV...",
workflowPlaceholder: "ej. Quiero iniciar un canal de YouTube",
workflowBtn: "Crear workflow",

navHome: "Inicio",
navResume: "Currículum",
navApplication: "Solicitud",
navLogo: "Logo",
navContent: "Contenido",
navBlog: "Blog",
navImprint: "Aviso legal",
navPrivacy: "Privacidad",
navContact: "Contacto",
  },
  
  ar: {
    heroTitle: "اعثر على أفضل أداة ذكاء اصطناعي لمشكلتك",
    heroSubtitle: "اكتب ما تحتاج المساعدة فيه – مثل السيرة الذاتية أو الشعار أو النصوص.",
    searchBtn: "بحث",
    workflowGeneratorTitle: "🤖 مولد سير عمل الذكاء الاصطناعي",
    workflowGeneratorSubtitle: "اكتب هدفك واحصل تلقائياً على أفضل سير عمل بالذكاء الاصطناعي.",
    whyTitle: "لماذا MyAIFinder؟",
    trendingTitle: "🔥 أدوات الذكاء الاصطناعي الرائجة",
    bestWorkflowsTitle: "🚀 أفضل سير عمل للذكاء الاصطناعي",

    resumePricing: "مجاني جزئياً",
    resumeLevel: "👶 مناسب للمبتدئين",

    resumeDescription:
      "يساعدك Resume.io على إنشاء سير ذاتية وخطابات تقديم احترافية بسرعة وسهولة.",
    resumeUseTitle: "لأي غرض؟",
    resumeUseText:
      "السير الذاتية، خطابات التقديم والقوالب الاحترافية.",
    resumeForTitle: "لمن؟",
    resumeForText:
      "مثالي للطلاب والمتقدمين للوظائف والمبتدئين.",
    resumeBenefitTitle: "الميزة",
    resumeBenefitText:
      "إنشاء سريع بتصاميم حديثة وسهولة في الاستخدام.",
    visitTool: "اذهب إلى الأداة →",

    canvaTitle: "Canva AI",
canvaPricing: "مجاني جزئياً",
canvaLevel: "👶 مناسب للمبتدئين",
canvaDescription: "يساعدك Canva AI على إنشاء التصاميم ومنشورات التواصل الاجتماعي والعروض التقديمية والشعارات بسرعة.",
canvaUseTitle: "لأي غرض؟",
canvaUseText: "وسائل التواصل الاجتماعي، الشعارات، العروض التقديمية، المنشورات والتصاميم السريعة.",
canvaForTitle: "لمن؟",
canvaForText: "مثالي لصناع المحتوى، الطلاب، المؤسسين، المتقدمين للوظائف والشركات الصغيرة.",
canvaBenefitTitle: "الميزة",
canvaBenefitText: "سهل الاستخدام، يحتوي على قوالب كثيرة ويعطي نتائج سريعة بدون خبرة في التصميم.",

/* AR */

capcutTitle: "CapCut AI",
capcutPricing: "مجاني جزئياً",
capcutLevel: "👶 مناسب للمبتدئين",
capcutDescription: "يساعدك CapCut AI على تعديل الفيديوهات والريلز والتيك توك بسرعة وسهولة.",
capcutUseTitle: "لأي غرض؟",
capcutUseText: "تيك توك، ريلز، يوتيوب شورتس، تعديل الفيديو وتأثيرات الذكاء الاصطناعي.",
capcutForTitle: "لمن؟",
capcutForText: "مثالي لصناع المحتوى، مستخدمي تيك توك، اليوتيوبرز والمبتدئين في السوشيال ميديا.",
capcutBenefitTitle: "الميزة",
capcutBenefitText: "إنشاء فيديوهات بسرعة مع مؤثرات وترجمة وأدوات تعديل حديثة.",

/* AR */

chatgptTitle: "ChatGPT",
chatgptPricing: "مجاني جزئياً",
chatgptLevel: "👶 مناسب للمبتدئين",
chatgptDescription: "يساعدك ChatGPT في الكتابة، التعلم، التخطيط، البرمجة والعثور على إجابات سريعة.",
chatgptUseTitle: "لأي غرض؟",
chatgptUseText: "الكتابة، الأفكار، البرمجة، التعلم، التلخيص وحل المشكلات.",
chatgptForTitle: "لمن؟",
chatgptForText: "مثالي للطلاب، صناع المحتوى، المطورين، المتقدمين للوظائف والشركات.",
chatgptBenefitTitle: "الميزة",
chatgptBenefitText: "متعدد الاستخدامات، سهل الاستعمال ومفيد لمعظم المهام.",

/* AR */

copyaiTitle: "Copy.ai",
copyaiPricing: "مجاني جزئياً",
copyaiLevel: "👶 مناسب للمبتدئين",
copyaiDescription: "يساعدك Copy.ai على كتابة النصوص التسويقية ومنشورات التواصل الاجتماعي ووصف المنتجات ورسائل البريد بسرعة.",
copyaiUseTitle: "لأي غرض؟",
copyaiUseText: "الإعلانات، أفكار المدونات، الرسائل الإلكترونية، وصف المنتجات ومحتوى السوشيال ميديا.",
copyaiForTitle: "لمن؟",
copyaiForText: "مثالي للمسوقين، صناع المحتوى، المستقلين والمتاجر والشركات الصغيرة.",
copyaiBenefitTitle: "الميزة",
copyaiBenefitText: "يوفر الوقت في الكتابة ويولد أفكاراً إبداعية بسرعة.",

/* AR */

elevenlabsTitle: "ElevenLabs",
elevenlabsPricing: "مجاني جزئياً",
elevenlabsLevel: "🚀 احترافي",
elevenlabsDescription: "يقوم ElevenLabs بإنشاء أصوات وعمليات تعليق صوتي واقعية باستخدام تقنيات الذكاء الاصطناعي الحديثة.",
elevenlabsUseTitle: "لأي غرض؟",
elevenlabsUseText: "التعليق الصوتي، البودكاست، الفيديوهات، الكتب الصوتية، تيك توك ومولدات الصوت بالذكاء الاصطناعي.",
elevenlabsForTitle: "لمن؟",
elevenlabsForText: "مثالي لصناع المحتوى، اليوتيوبرز، الستريمرز، الشركات ومنتجي المحتوى.",
elevenlabsBenefitTitle: "الميزة",
elevenlabsBenefitText: "أصوات واقعية جداً مع لغات متعددة ومشاعر وجودة احترافية.",

/* AR */

grammarlyTitle: "Grammarly",
grammarlyPricing: "مجاني جزئياً",
grammarlyLevel: "👶 مناسب للمبتدئين",
grammarlyDescription: "يساعدك Grammarly على كتابة نصوص صحيحة نحوياً واحترافية وواضحة.",
grammarlyUseTitle: "لأي غرض؟",
grammarlyUseText: "التدقيق النحوي، الإملاء، الرسائل الإلكترونية، طلبات التوظيف والنصوص الاحترافية.",
grammarlyForTitle: "لمن؟",
grammarlyForText: "مثالي للطلاب، المتقدمين للوظائف، الشركات وصناع المحتوى.",
grammarlyBenefitTitle: "الميزة",
grammarlyBenefitText: "يقوم بتحسين النصوص تلقائياً ويجعل الكتابة أسرع وأكثر احترافية.",

/* AR */

jasperTitle: "Jasper AI",
jasperPricing: "مدفوع",
jasperLevel: "🚀 احترافي",
jasperDescription: "يساعدك Jasper AI على إنشاء نصوص تسويقية ومدونات ومحتوى سوشيال ميديا احترافي باستخدام الذكاء الاصطناعي.",
jasperUseTitle: "لأي غرض؟",
jasperUseText: "النصوص التسويقية، المدونات، الإعلانات، تحسين محركات البحث ومحتوى السوشيال ميديا.",
jasperForTitle: "لمن؟",
jasperForText: "مثالي للشركات، المسوقين، الوكالات وصناع المحتوى المحترفين.",
jasperBenefitTitle: "الميزة",
jasperBenefitText: "ينشئ نصوصاً عالية الجودة بسرعة ويوفر الكثير من الوقت.",

/* AR */

kickresumeTitle: "Kickresume",
kickresumePricing: "مجاني جزئياً",
kickresumeLevel: "👶 مناسب للمبتدئين",
kickresumeDescription: "يساعدك Kickresume على إنشاء السير الذاتية وخطابات التقديم والوثائق المهنية بسرعة واحترافية باستخدام الذكاء الاصطناعي.",
kickresumeUseTitle: "لأي غرض؟",
kickresumeUseText: "السير الذاتية، خطابات التقديم، قوالب التوظيف والملفات المهنية.",
kickresumeForTitle: "لمن؟",
kickresumeForText: "مثالي للمتقدمين للوظائف، الطلاب، المبتدئين والباحثين عن عمل.",
kickresumeBenefitTitle: "الميزة",
kickresumeBenefitText: "ينشئ مستندات توظيف حديثة بسرعة وبشكل احترافي ومنظم.",

/* AR */

lookaTitle: "Looka",
lookaPricing: "مدفوع",
lookaLevel: "👶 مناسب للمبتدئين",
lookaDescription: "يساعدك Looka على إنشاء شعارات وتصاميم علامات تجارية احترافية باستخدام الذكاء الاصطناعي خلال دقائق.",
lookaUseTitle: "لأي غرض؟",
lookaUseText: "الشعارات، الهوية البصرية، تصاميم السوشيال ميديا والعلامات التجارية.",
lookaForTitle: "لمن؟",
lookaForText: "مثالي للشركات الناشئة، صناع المحتوى، الشركات الصغيرة والمستقلين.",
lookaBenefitTitle: "الميزة",
lookaBenefitText: "ينشئ شعارات حديثة تلقائياً ويوفر الوقت وتكاليف التصميم.",

/* AR */

removebgTitle: "Remove.bg",
removebgPricing: "مجاني جزئياً",
removebgLevel: "👶 مناسب للمبتدئين",
removebgDescription: "يقوم Remove.bg بإزالة خلفيات الصور تلقائياً باستخدام تقنيات الذكاء الاصطناعي خلال ثوانٍ.",
removebgUseTitle: "لأي غرض؟",
removebgUseText: "إزالة الخلفية، صور المنتجات، الصور الشخصية، الشعارات وتصاميم السوشيال ميديا.",
removebgForTitle: "لمن؟",
removebgForText: "مثالي للمصممين، صناع المحتوى، المتاجر الإلكترونية، المصورين ومستخدمي السوشيال ميديا.",
removebgBenefitTitle: "الميزة",
removebgBenefitText: "يوفر الكثير من الوقت في تعديل الصور ويعطي نتائج احترافية بسرعة.",

/* AR */

reziTitle: "Rezi AI",
reziPricing: "مجاني جزئياً",
reziLevel: "👶 مناسب للمبتدئين",
reziDescription: "يساعدك Rezi AI على إنشاء سير ذاتية وطلبات توظيف احترافية بسرعة باستخدام الذكاء الاصطناعي.",
reziUseTitle: "لأي غرض؟",
reziUseText: "السير الذاتية، خطابات التقديم، طلبات التوظيف والملفات المهنية المتوافقة مع ATS.",
reziForTitle: "لمن؟",
reziForText: "مثالي للمتقدمين للوظائف، الطلاب، المبتدئين والباحثين عن عمل.",
reziBenefitTitle: "الميزة",
reziBenefitText: "ينشئ مستندات توظيف حديثة تلقائياً ويزيد فرص القبول في الوظائف.",

    // AR
whyCard1Title: "⚡ توصيات سريعة",
whyCard1Text: "اعثر خلال ثوانٍ على أدوات ذكاء اصطناعي مناسبة لمشكلتك.",
whyCard2Title: "🎯 اختيار واضح",
whyCard2Text: "بدون قوائم طويلة — نعرض لك الأدوات المناسبة فعلاً.",
whyCard3Title: "🧩 سير عمل عملي",
whyCard3Text: "احصل ليس فقط على أدوات، بل على حلول كاملة خطوة بخطوة.",

trendChatgptText: "أفضل أداة للكتابة والأفكار والإنتاجية.",
trendCanvaText: "مثالي لوسائل التواصل الاجتماعي والشعارات والتصاميم.",
trendMidjourneyText: "ينشئ صوراً وأعمالاً فنية عالية الجودة بالذكاء الاصطناعي.",
trendNotionText: "ينظم المشاريع ويكتب المحتوى تلقائياً.",

workflowApplicationTitle: "📄 إنشاء طلب وظيفة",
workflowApplicationStep1: "Resume.io → إنشاء سيرة ذاتية",
workflowApplicationStep2: "ChatGPT → كتابة طلب وظيفة",
workflowApplicationStep3: "Grammarly → تصحيح الأخطاء",

workflowYoutubeTitle: "🎥 محتوى يوتيوب",
workflowYoutubeStep1: "ChatGPT → كتابة سكريبت",
workflowYoutubeStep2: "ElevenLabs → إنشاء صوت بالذكاء الاصطناعي",
workflowYoutubeStep3: "Canva → إنشاء صورة مصغرة",

// AR
catCv: "السيرة الذاتية",
catApplication: "طلب وظيفة",
catLogo: "شعار",
catText: "نصوص",
searchPlaceholder: "مثال: كتابة سيرة ذاتية...",
workflowPlaceholder: "مثال: أريد بدء قناة يوتيوب",
workflowBtn: "إنشاء سير عمل",

navHome: "الرئيسية",
navResume: "السيرة الذاتية",
navApplication: "طلب وظيفة",
navLogo: "شعار",
navContent: "محتوى",
navBlog: "مدونة",
navImprint: "بيانات قانونية",
navPrivacy: "الخصوصية",
navContact: "اتصال",
  },
  
  zh: {
    heroTitle: "为你的问题找到最佳 AI 工具",
    heroSubtitle: "输入你需要帮助的内容，例如简历、申请、Logo 或文本。",
    searchBtn: "搜索",
    workflowGeneratorTitle: "🤖 AI 工作流生成器",
    workflowGeneratorSubtitle: "描述你的目标，并自动获得最佳 AI 工作流。",
    whyTitle: "为什么选择 MyAIFinder？",
    trendingTitle: "🔥 热门 AI 工具",
    bestWorkflowsTitle: "🚀 最佳 AI 工作流",

    resumePricing: "免费增值",
    resumeLevel: "👶 适合初学者",

     resumeDescription:
      "Resume.io 可帮助你快速轻松地创建专业简历和求职信。",
    resumeUseTitle: "用于什么？",
    resumeUseText:
      "简历、求职信和专业模板。",
    resumeForTitle: "适合谁？",
    resumeForText:
      "非常适合学生、求职者和职场新人。",
    resumeBenefitTitle: "优势",
    resumeBenefitText:
      "现代设计、快速创建且易于使用。",
    visitTool: "前往工具 →",

    canvaTitle: "Canva AI",
canvaPricing: "免费增值",
canvaLevel: "👶 适合初学者",
canvaDescription: "Canva AI 可帮助你快速创建设计、社交媒体图片、演示文稿和 logo。",
canvaUseTitle: "用于什么？",
canvaUseText: "社交媒体、logo、演示文稿、传单和快速设计。",
canvaForTitle: "适合谁？",
canvaForText: "非常适合创作者、学生、创业者、求职者和小型企业。",
canvaBenefitTitle: "优势",
canvaBenefitText: "操作简单，模板丰富，即使没有设计经验也能快速完成。",

/* ZH */

capcutTitle: "CapCut AI",
capcutPricing: "免费增值",
capcutLevel: "👶 适合初学者",
capcutDescription: "CapCut AI 可帮助你快速轻松地编辑专业视频、Reels 和 TikTok。",
capcutUseTitle: "用于什么？",
capcutUseText: "TikTok、Reels、YouTube Shorts、视频编辑和 AI 特效。",
capcutForTitle: "适合谁？",
capcutForText: "非常适合内容创作者、TikToker、YouTuber 和社交媒体初学者。",
capcutBenefitTitle: "优势",
capcutBenefitText: "快速 AI 视频制作，带有效果、字幕和现代编辑工具。",

/* ZH */

chatgptTitle: "ChatGPT",
chatgptPricing: "免费增值",
chatgptLevel: "👶 适合初学者",
chatgptDescription: "ChatGPT 可帮助你写作、学习、规划、编程以及快速找到答案。",
chatgptUseTitle: "用于什么？",
chatgptUseText: "写作、创意、编程、学习、总结和问题解决。",
chatgptForTitle: "适合谁？",
chatgptForText: "非常适合学生、创作者、开发者、求职者和企业。",
chatgptBenefitTitle: "优势",
chatgptBenefitText: "功能非常全面，易于使用，几乎适用于所有任务。",

/* ZH */

copyaiTitle: "Copy.ai",
copyaiPricing: "免费增值",
copyaiLevel: "👶 适合初学者",
copyaiDescription: "Copy.ai 可帮助你更快地撰写营销文案、社交媒体帖子、产品描述和电子邮件。",
copyaiUseTitle: "用于什么？",
copyaiUseText: "广告文案、博客创意、电子邮件、产品文案和社交媒体内容。",
copyaiForTitle: "适合谁？",
copyaiForText: "非常适合营销人员、创作者、自由职业者、商店和小型企业。",
copyaiBenefitTitle: "优势",
copyaiBenefitText: "节省写作时间，并快速生成创意文本内容。",

/* ZH */

elevenlabsTitle: "ElevenLabs",
elevenlabsPricing: "免费增值",
elevenlabsLevel: "🚀 专业级",
elevenlabsDescription: "ElevenLabs 使用现代 AI 技术创建逼真的 AI 声音、语音录音和配音。",
elevenlabsUseTitle: "用于什么？",
elevenlabsUseText: "配音、播客、视频、有声书、TikTok 和 AI 语音生成。",
elevenlabsForTitle: "适合谁？",
elevenlabsForText: "非常适合创作者、YouTuber、主播、企业和内容制作人。",
elevenlabsBenefitTitle: "优势",
elevenlabsBenefitText: "拥有多语言、情感表达和专业级质量的超真实 AI 声音。",

/* ZH */

grammarlyTitle: "Grammarly",
grammarlyPricing: "免费增值",
grammarlyLevel: "👶 适合初学者",
grammarlyDescription: "Grammarly 可帮助你写出语法正确、专业且清晰的文本。",
grammarlyUseTitle: "用于什么？",
grammarlyUseText: "语法检查、拼写、电子邮件、求职申请和专业写作。",
grammarlyForTitle: "适合谁？",
grammarlyForText: "非常适合学生、求职者、企业和内容创作者。",
grammarlyBenefitTitle: "优势",
grammarlyBenefitText: "自动改进文本，让写作更快、更专业。",

/* ZH */

jasperTitle: "Jasper AI",
jasperPricing: "付费",
jasperLevel: "🚀 专业级",
jasperDescription: "Jasper AI 可帮助你使用 AI 创建专业营销文案、博客和社交媒体内容。",
jasperUseTitle: "用于什么？",
jasperUseText: "营销文案、博客、广告、SEO 和社交媒体内容。",
jasperForTitle: "适合谁？",
jasperForText: "非常适合企业、营销人员、代理机构和专业内容创作者。",
jasperBenefitTitle: "优势",
jasperBenefitText: "快速生成高质量文本，并节省大量营销和内容创作时间。",

/* ZH */

kickresumeTitle: "Kickresume",
kickresumePricing: "免费增值",
kickresumeLevel: "👶 适合初学者",
kickresumeDescription: "Kickresume 可帮助你使用 AI 快速专业地创建简历、求职信和职业文件。",
kickresumeUseTitle: "用于什么？",
kickresumeUseText: "简历、求职信、求职模板和职业档案。",
kickresumeForTitle: "适合谁？",
kickresumeForText: "非常适合求职者、学生、职场新人和找工作的人。",
kickresumeBenefitTitle: "优势",
kickresumeBenefitText: "快速创建现代化、专业化的求职文件。",

/* ZH */

lookaTitle: "Looka",
lookaPricing: "付费",
lookaLevel: "👶 适合初学者",
lookaDescription: "Looka 可帮助你在几分钟内使用 AI 创建专业 logo 和品牌设计。",
lookaUseTitle: "用于什么？",
lookaUseText: "Logo、品牌设计、社交媒体设计和专业品牌形象。",
lookaForTitle: "适合谁？",
lookaForText: "非常适合创业公司、创作者、小型企业和自由职业者。",
lookaBenefitTitle: "优势",
lookaBenefitText: "自动生成现代化 logo，并节省时间和设计成本。",

/* ZH */

removebgTitle: "Remove.bg",
removebgPricing: "免费增值",
removebgLevel: "👶 适合初学者",
removebgDescription: "Remove.bg 使用现代 AI 技术在几秒钟内自动移除图片背景。",
removebgUseTitle: "用于什么？",
removebgUseText: "背景移除、产品图片、头像、logo 和社交媒体图片。",
removebgForTitle: "适合谁？",
removebgForText: "非常适合设计师、创作者、网店、摄影师和社交媒体用户。",
removebgBenefitTitle: "优势",
removebgBenefitText: "节省大量图片编辑时间，并快速提供专业效果。",

/* ZH */

reziTitle: "Rezi AI",
reziPricing: "免费增值",
reziLevel: "👶 适合初学者",
reziDescription: "Rezi AI 可帮助你使用 AI 快速创建专业简历和求职申请。",
reziUseTitle: "用于什么？",
reziUseText: "简历、求职信、求职申请和 ATS 优化职业档案。",
reziForTitle: "适合谁？",
reziForText: "非常适合求职者、学生、职场新人和找工作的人。",
reziBenefitTitle: "优势",
reziBenefitText: "自动创建现代化求职文件，并提高求职成功率。",

     // ZH
whyCard1Title: "⚡ 快速推荐",
whyCard1Text: "几秒钟内找到适合你具体问题的 AI 工具。",
whyCard2Title: "🎯 清晰选择",
whyCard2Text: "没有无尽列表——我们只展示真正适合你的工具。",
whyCard3Title: "🧩 实用工作流",
whyCard3Text: "不仅获得工具，还能获得完整的分步解决方案。",

trendChatgptText: "最适合写作、创意和效率提升的 AI 工具。",
trendCanvaText: "非常适合社交媒体、Logo 和设计。",
trendMidjourneyText: "生成高质量 AI 图片和艺术作品。",
trendNotionText: "自动组织项目并撰写内容。",

workflowApplicationTitle: "📄 创建申请材料",
workflowApplicationStep1: "Resume.io → 创建简历",
workflowApplicationStep2: "ChatGPT → 撰写申请信",
workflowApplicationStep3: "Grammarly → 修改错误",

workflowYoutubeTitle: "🎥 YouTube 内容",
workflowYoutubeStep1: "ChatGPT → 撰写脚本",
workflowYoutubeStep2: "ElevenLabs → 生成 AI 语音",
workflowYoutubeStep3: "Canva → 创建缩略图",

// ZH
catCv: "简历",
catApplication: "申请",
catLogo: "Logo",
catText: "文本",
searchPlaceholder: "例如：写一份简历...",
workflowPlaceholder: "例如：我想开设一个 YouTube 频道",
workflowBtn: "创建工作流",

navHome: "首页",
navResume: "简历",
navApplication: "求职",
navLogo: "Logo",
navContent: "内容",
navBlog: "博客",
navImprint: "法律声明",
navPrivacy: "隐私",
navContact: "联系",
  },
 
};

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (pageText[currentLang] && pageText[currentLang][key]) {
      element.textContent = pageText[currentLang][key];
    }
  });
}