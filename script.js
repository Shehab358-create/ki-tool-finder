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
            <div class="card">
                <div class="card-header">
                    <img src="${tool.image}" alt="${tool.name} Logo">
                    <h2>
  <a href="${tool.page || '#'}" class="tool-link">
    ${tool.name}
  </a>
</h2>
                    <div class="tool-meta">
  <span>⭐ ${tool.score}</span>
  <span>${tool.pricing}</span>
  <span>
    ${tool.beginner ? "👶 Anfängerfreundlich" : "🚀 Profi"}
  </span>
</div>
                </div>
                <p>${typeof tool.description === "object" ? tool.description[currentLang] : tool.description}</p>
                <a href="${tool.link}" target="_blank">${toolButtonText[currentLang]}</a>
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

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    const button = document.querySelector(".theme-toggle");

    if(document.body.classList.contains("dark-mode")){
        button.innerHTML = "☀️";
    }

    else{
        button.innerHTML = "🌙";
    }
}

const examples = [
  "Ich brauche ein Bewerbungsschreiben",
  "Ich möchte ein YouTube Video erstellen",
  "Erstelle mir ein Logo",
  "Welche KI hilft bei Instagram Posts?"
];

let exampleIndex = 0;
let charIndex = 0;

const searchInput = document.getElementById("searchInput");

function typeEffect() {

  if (document.activeElement === searchInput) return;

  let currentText = examples[exampleIndex];

  searchInput.setAttribute(
    "placeholder",
    currentText.substring(0, charIndex)
  );

  charIndex++;

  if (charIndex > currentText.length) {

    setTimeout(() => {

      charIndex = 0;
      exampleIndex++;

      if (exampleIndex >= examples.length) {
        exampleIndex = 0;
      }

    }, 2000);

  }

}

setInterval(typeEffect, 120);

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