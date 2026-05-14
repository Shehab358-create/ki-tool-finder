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