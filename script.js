let currentLang = "de";
const tools = {
  lebenslauf: [
    {
      name: "Resume.io",
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
      description: "Erstellt Lebensläufe mit KI und bietet moderne Vorlagen.",
      link: "https://www.kickresume.com",
      image: "https://www.google.com/s2/favicons?domain=kickresume.com&sz=64"
    },
    {
      name: "Canva",
      description: "Sehr gut für schöne Lebenslauf-Designs und Vorlagen.",
      link: "https://www.canva.com",
      image: "https://www.google.com/s2/favicons?domain=canva.com&sz=64"
    }
  ],

  bewerbung: [
    {
      name: "Grammarly",
      description: "Hilft beim Verbessern von Bewerbungstexten auf Englisch.",
      link: "https://www.grammarly.com",
      image: "https://www.google.com/s2/favicons?domain=grammarly.com&sz=64"
    },
    {
      name: "ChatGPT",
      description: "Kann Bewerbungsschreiben, Lebensläufe und Interviewantworten formulieren.",
      link: "https://chatgpt.com",
      image: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64"
    },
    {
      name: "Rezi",
      description: "KI-Tool speziell für Lebenslauf und Bewerbungsoptimierung.",
      link: "https://www.rezi.ai",
      image: "https://www.google.com/s2/favicons?domain=rezi.ai&sz=64"
    }
  ],

  logo: [
    {
      name: "Looka",
      description: "Erstellt Logos und Branding mit KI.",
      link: "https://looka.com",
      image: "https://www.google.com/s2/favicons?domain=looka.com&sz=64"
    },
    {
      name: "Canva",
      description: "Einfaches Tool für Logos, Designs und Social-Media-Grafiken.",
      link: "https://www.canva.com",
      image: "https://www.google.com/s2/favicons?domain=canva.com&sz=64"
    }
  ],

  texte: [
    {
      name: "ChatGPT",
      description: "Sehr gut für Texte, Ideen, Zusammenfassungen und Content.",
      link: "https://chatgpt.com",
      image: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64"
    },
    {
      name: "Jasper",
      description: "KI-Schreibtool für Marketingtexte, Blogartikel und Werbung.",
      link: "https://www.jasper.ai",
      image: "https://www.google.com/s2/favicons?domain=jasper.ai&sz=64"
    },
    {
      name: "Copy.ai",
      description: "Hilft beim Erstellen von Werbetexten, E-Mails und Social-Media-Posts.",
      link: "https://www.copy.ai",
      image: "https://www.google.com/s2/favicons?domain=copy.ai&sz=64"
    }
  ]
};

function searchTools() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");

  results.innerHTML = "";

  let matchedTools = [];

if (
  input.includes("lebenslauf") ||
  input.includes("cv") ||
  input.includes("resume")
) {
  matchedTools = tools.lebenslauf;

} else if (
  input.includes("bewerbung") ||
  input.includes("anschreiben") ||
  input.includes("job") ||
  input.includes("interview") ||
  input.includes("application") ||
  input.includes("cover letter") ||
  input.includes("cv") ||
  input.includes("candidature") ||
  input.includes("سيرة") ||
  input.includes("وظيفة") ||

   // Spanisch
  input.includes("currículum") ||
  input.includes("empleo") ||
  input.includes("trabajo") ||

  // Chinesisch
  input.includes("简历") ||
  input.includes("工作") ||
  input.includes("求职")
) {
  matchedTools = tools.bewerbung;


} else if (
  input.includes("logo") ||
  input.includes("design") ||
  input.includes("branding")
) {
  matchedTools = tools.logo;

} else if (
  input.includes("text") ||
  input.includes("schreiben") ||
  input.includes("content") ||
  input.includes("blog") ||
  input.includes("artikel")
) {
  matchedTools = tools.texte;
}
    if (matchedTools.length === 0) {
  results.innerHTML = `
 <div class="card">
      <h2>Keine passenden Tools gefunden</h2>
      <p>Versuche Wörter wie Lebenslauf, Bewerbung, Logo oder Texte.</p>
    </div>
  `;
  return;
}
matchedTools.forEach(tool => {
  results.innerHTML += `
    <div class="card">
      <div class="card-header">
        <img src="${tool.image}" alt="${tool.name} Logo">
        <h2>${tool.name}</h2>
      </div>
      <p>${tool.description[currentLang]}</p>
      <a href="${tool.link}" target="_blank">Zum Tool</a>
    </div>
  `;
});
}
function quickSearch(keyword) {
  document.getElementById("searchInput").value = keyword;
  searchTools();
}