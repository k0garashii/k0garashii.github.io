// --- DICTIONNAIRE DE TRADUCTION ---
const translations = {
    fr: {
        "nav-projects": "Projets",
        "nav-about": "À propos",
        "nav-domains": "Domaines",
        "hero-title": 'Développeur de <span class="highlight">Simulations</span> & <span class="highlight">Jeux Vidéo</span>',
        "hero-desc": "Passionné par les mathématiques appliquées, la physique et le développement bas niveau (C/C++).",
        "hero-btn": "Voir mes travaux",
        "projects-title": "Mes Projets",
        "about-title": "A propos",
        "about-desc": "Section a completer: parcours, points forts, et liens utiles.",
        "domains-title": "Domaines",
        "domain-maths-title": "Maths",
        "domain-maths-desc": "Modelisation, optimisation et geometrie pour comprendre les systemes complexes.",
        "domain-physics-title": "Physique",
        "domain-physics-desc": "Simulation de phenomene, mecanique et champs, avec validation numerique.",
        "domain-prog-title": "Programmation",
        "domain-prog-desc": "C/C++, shaders, outils et moteurs pour des projets performants.",
        "domain-ai-title": "IA",
        "domain-ai-desc": "Apprentissage supervise, systemes adaptatifs et prototypes d agents.",
        "filter-all": "Tous",
        "filter-game": "Jeux Vidéo",
        "filter-science": "Maths & Physique",
        "filter-ai": "IA",
        "filter-upcoming": "À venir",
        "maths": "Mathématiques",
        "duration-1w": "1 semaine",
        "duration-2w": "2 semaines",
        "duration-3m": "3 mois",
        "side-project": "Projet Perso",
        "group-2": "Groupe de 2",
        "group-3": "Groupe de 3",
        "p1-title": "Action 2.5D",
        "p1-desc": "Jeu inter-Cursus (Sound-Design, Game Programming, Game Design) sur Unity en 2.5D",
        "p2-title": "Tower Defense",
        "p2-desc": "Création d'un tower défense sur 2 semaines avec éditeur de map personnalisé",
        "p3-title": "Simulation de tir d'un canon en 2D",
        "p3-desc": "Simulation de trajectoire d'un tir de canon et d'un impact sur un pendule, résultant en un mouvement oscillatoire",
        "p4-title": "Rubik's Cube",
        "p4-desc": "Reproduction d'un Rubik's cube et de ses mouvements à l'aide de Quaternions, entièrements recodés",
        "p8-title": "Simulation d'une tornade dans un environnement 3D",
        "p8-desc": "Simulation d'une tornade dans un environnement 3D avec gestion des particules et des forces",
        "p11-title": "Moteur de jeu",
        "p11-desc": "À développer",
    },
    en: {
        "nav-projects": "Projects",
        "nav-about": "About",
        "nav-domains": "Domains",
        "hero-title": '<span class="highlight">Simulation</span> & <span class="highlight">Game</span> Developer',
        "hero-desc": "Passionate about applied mathematics, physics, and low-level development (C/C++).",
        "hero-btn": "View my work",
        "projects-title": "My Projects",
        "about-title": "About",
        "about-desc": "Section to complete: background, strengths, and useful links.",
        "domains-title": "Domains",
        "domain-maths-title": "Math",
        "domain-maths-desc": "Modeling, optimization, and geometry to understand complex systems.",
        "domain-physics-title": "Physics",
        "domain-physics-desc": "Phenomena simulation, mechanics, and fields with numerical validation.",
        "domain-prog-title": "Programming",
        "domain-prog-desc": "C/C++, shaders, tools, and engines for high-performance projects.",
        "domain-ai-title": "AI",
        "domain-ai-desc": "Supervised learning, adaptive systems, and agent prototypes.",
        "filter-all": "All",
        "filter-game": "Video Games",
        "filter-science": "Math & Physics",
        "filter-ai": "AI",
        "filter-upcoming": "Upcoming",
        "maths": "Mathematics",
        "duration-1w": "1 week",
        "duration-2w": "2 weeks",
        "duration-3m": "3 months",
        "side-project": "Side Project",
        "group-2": "Team of 2",
        "group-3": "Team of 3",
        "p1-title": "2.5D Action Game",
        "p1-desc": "Cross-curriculum project (Sound Design, Programming, Game Design) using Unity 2.5D",
        "p2-title": "Tower Defense",
        "p2-desc": "Developed in 2 weeks with a custom map editor using C++ and Raylib",
        "p3-title": "2D Cannon Simulation",
        "p3-desc": "Trajectory simulation of a cannon shot and impact on a pendulum, resulting in oscillatory motion",
        "p4-title": "Rubik's Cube",
        "p4-desc": "Reproduction of a Rubik's cube and its movements using Quaternions, fully recoded",
        "p8-title": "3D Tornado Simulation",
        "p8-desc": "Simulation of a tornado in a 3D environment with particle and force management",
        "p11-title": "Game Engine",
        "p11-desc": "To be developed",
    }
};

// --- LOGIQUE DE TRADUCTION ---
const langBtn = document.getElementById('lang-switch');
let currentLang = 'fr';
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('primary-nav');

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    langBtn.innerText = currentLang === 'fr' ? 'EN' : 'FR';
    updateLanguage();
});

function updateLanguage() {
    // Traduction des textes simples
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Traduction des textes avec HTML (pour le titre Hero)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// --- LOGIQUE DE FILTRAGE (CORRIGÉE) ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // On ne gère pas le bouton de langue comme un filtre
        if(btn.id === 'lang-switch') return;

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});