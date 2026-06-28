// قاموس الترجمة
const translations = {
    ar: {
        nav_home: "الرئيسية", nav_skills: "المهارات", nav_projects: "المشاريع",
        hero_greet: "~/مرحباً_بالعالم $", hero_iam: "أنا", hero_name: "عمر الفاروق",
        hero_title: "خبير تقني، مصمم، ومسوق رقمي",
        hero_desc: "أجمع بين قوة البرمجة والأمن السيبراني، وبين إبداع التصميم وذكاء التسويق الرقمي. أقدم حلولاً متكاملة تبدأ من الفكرة وبناء العلامة التجارية، مروراً بالتطوير، وصولاً إلى استهداف الجمهور المناسب.",
        btn_skills: "اكتشف مهاراتي", btn_projects: "المشاريع",
        term_whoami: "Omar Al-Farooq - Multidisciplinary Expert",
        term_cap: "[Cybersecurity, Code, Design, Marketing, Branding]",
        term_exec: "Executing full-stack strategies...",
        skills_title: "ترسانة المهارات",
        skill_1: "أمن سيبراني", skill_2: "برمجة وتطوير", skill_3: "تصميم مواقع", skill_4: "تصميم جرافيكي",
        skill_5: "إعلانات ممولة", skill_6: "إدارة سوشيال ميديا", skill_7: "بناء العلامة التجارية", skill_8: "استراتيجية رقمية",
        proj_title: "سجل العمليات (أمثلة)",
        proj_1_title: "حملة تسويقية متكاملة", proj_1_desc: "بناء هوية بصرية كاملة لعلامة تجارية، وإطلاق إعلانات ممولة مستهدفة لزيادة المبيعات.",
        proj_2_title: "منصة ويب آمنة", proj_2_desc: "تصميم وتطوير موقع ويب احترافي مع تطبيق أعلى معايير الأمن السيبراني لحماية البيانات.",
        proj_3_title: "إدارة التواجد الرقمي", proj_3_desc: "إدارة صفحات السوشيال ميديا وتنفيذ استراتيجيات تسويقية لزيادة التفاعل وبناء مجتمع نشط.",
        footer_text: "مبني بواسطة شغف بالكود والحماية والتسويق"
    },
    en: {
        nav_home: "Home", nav_skills: "Skills", nav_projects: "Projects",
        hero_greet: "~/hello_world $", hero_iam: "I am", hero_name: "Omar Al-Farooq",
        hero_title: "Tech Expert, Designer & Digital Marketer",
        hero_desc: "I combine the power of programming and cybersecurity with the creativity of design and digital marketing. I provide end-to-end solutions from branding to development and targeted advertising.",
        btn_skills: "Discover Skills", btn_projects: "View Projects",
        term_whoami: "Omar Al-Farooq - Multidisciplinary Expert",
        term_cap: "[Cybersecurity, Code, Design, Marketing, Branding]",
        term_exec: "Executing full-stack strategies...",
        skills_title: "My Arsenal",
        skill_1: "Cybersecurity", skill_2: "Programming", skill_3: "Web Design", skill_4: "Graphic Design",
        skill_5: "Paid Ads", skill_6: "Social Media", skill_7: "Branding", skill_8: "Digital Strategy",
        proj_title: "Operation Logs (Projects)",
        proj_1_title: "Integrated Marketing Campaign", proj_1_desc: "Building a complete brand identity and launching targeted paid ads to boost sales.",
        proj_2_title: "Secure Web Platform", proj_2_desc: "Designing and developing a professional website with top-tier cybersecurity standards.",
        proj_3_title: "Digital Presence Mgmt", proj_3_desc: "Managing social media pages and implementing marketing strategies to build an active community.",
        footer_text: "Built with passion for Code, Security & Marketing"
    },
    fr: {
        nav_home: "Accueil", nav_skills: "Compétences", nav_projects: "Projets",
        hero_greet: "~/bonjour_le_monde $", hero_iam: "Je suis", hero_name: "Omar Al-Farooq",
        hero_title: "Expert Tech, Designer & Marketeur",
        hero_desc: "Je combine la programmation et la cybersécurité avec la créativité du design et du marketing digital. J'offre des solutions complètes, de la marque au développement.",
        btn_skills: "Mes Compétences", btn_projects: "Mes Projets",
        term_whoami: "Omar Al-Farooq - Multidisciplinary Expert",
        term_cap: "[Cybersecurity, Code, Design, Marketing, Branding]",
        term_exec: "Exécution des stratégies full-stack...",
        skills_title: "Mon Arsenal",
        skill_1: "Cybersécurité", skill_2: "Programmation", skill_3: "Création Web", skill_4: "Design Graphique",
        skill_5: "Publicité Payante", skill_6: "Réseaux Sociaux", skill_7: "Branding", skill_8: "Stratégie Digitale",
        proj_title: "Journal des Opérations",
        proj_1_title: "Campagne Marketing", proj_1_desc: "Création d'une identité visuelle complète et lancement de publicités ciblées.",
        proj_2_title: "Plateforme Web Sécurisée", proj_2_desc: "Conception d'un site web professionnel avec des normes de cybersécurité de haut niveau.",
        proj_3_title: "Gestion de Présence", proj_3_desc: "Gestion des réseaux sociaux et stratégies pour construire une communauté active.",
        footer_text: "Construit avec passion pour le Code et la Sécurité"
    }
};

// دالة تغيير اللغة
function setLanguage(lang) {
    const htmlTag = document.documentElement;

    // تحديث الاتجاه (RTL/LTR) واللغة
    if(lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
    } else {
        htmlTag.setAttribute('dir', 'ltr');
    }
    htmlTag.setAttribute('lang', lang);

    // تحديث النصوص
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// الاستماع لتغيير القائمة المنسدلة
document.getElementById('lang-switcher').addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});