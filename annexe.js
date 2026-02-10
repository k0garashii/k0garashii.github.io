const translations = {
    fr: {
        common: {
            back: "Retour au portfolio",
            objectiveTitle: "Objectif du projet",
            mathChallengesTitle: "Defis Mathematiques",
            challengesTitle: "Defis",
            visualTitle: "Representation visuelle",
            downloadTitle: "Telecharger le Projet",
            downloadDesc: "Fichier ZIP contenant la build du projet",
            downloadCta: "Telecharger",
            codeTitle: "Apercu du Code (C++)",
            placeholderVideo: "Video du moteur en action",
            architectureBadge: "Architecture logicielle",
            maths: "Mathematiques",
            "duration-1w": "1 semaine",
            "duration-2w": "2 semaines",
            "group-3": "Groupe de 3",
            "side-project": "Projet Perso"
        },
        canon: {
            pageTitle: "Details du Projet | Canon",
            title: "Simulation d'un tir de canon en 2D",
            objectiveText:
                "Ce projet visait a simuler un tir de canon en 2D, incluant la trajectoire d'un projectile et sa collision avec un pendule. Le projet vise a simuler le mouvement d'un projectile tire par un canon, en utilisant les equations de la cinematique, a la fois dans un environnement sans frottements et dans un autre environnement plus realiste incluant la resistance de l'air. Il simule egalement l'interaction lors de la collision du projectile avec un pendule cible. Le projet a ete developpe a l'aide du langage de programmation C# et du moteur de jeu Unity.",
            canonChallenges:
                "- Calculer l'equation horaire de l'obus du canon<br>\n- Calculer la force resultante a l'impact sur le pendule<br>\n- Calculer la trajectoire de l'obus en prenant en compte la friction de l'air<br>\n- Simuler la trajectoire de l'obus en fonction de parametres initiaux particuliers",
            trajectoryTitle: "Trajectoire du Projectile",
            frictionOff: "Sans forces de frottement",
            frictionOn: "Avec forces de frottement",
            impactTitle: "Force a l'Impact",
            linearVelocity: "Vitesse lineaire de la boite apres impact :",
            angularVelocity: "Vitesse angulaire de la boite apres impact :"
        },
        rubik: {
            pageTitle: "Details du Projet | Rubik's Cube",
            title: "Rubik's Cube",
            objectiveText:
                "QuaterCube est un projet Unity visant a explorer et maitriser l'utilisation des quaternions pour gerer les rotations 3D. Il s'agit d'une simulation de Rubik's Cube entierement implementee en utilisant uniquement des quaternions, recodes en partie.",
            rubikChallenges:
                "- Comprendre et appliquer les rotations par quaternions dans Unity.<br>\n- Manipuler les transformations 3D sans gimbal lock.<br>\n- Reproduire les mouvements complexes d'un Rubik's Cube en utilisant la composition de quaternions.",
            actionsTitle: "Actions",
            actionGenerate: "Generer",
            actionGenerateDesc: " : Cree un nouveau Rubik's Cube en utilisant la taille selectionnee, la profondeur de melange et la sensibilite de la souris.",
            actionInvert: "Inverser",
            actionInvertDesc: " : Resout le Rubik's Cube en inversant toutes les rotations qui ont ete effectuees precedemment.",
            actionSave: "Sauvegarder",
            actionSaveDesc: " : Sauvegarde l'etat actuel du cube (pour que vous puissiez quitter le jeu et garder votre progression).",
            actionLoad: "Recuperer",
            actionLoadDesc: " : Recree le cube en fonction des donnees sauvegardees, restaurant le dernier etat connu."
        },
        tornado: {
            pageTitle: "Details du Projet | Tornade",
            title: "Simulation d'une tornade dans un environnement 3D",
            descriptionTitle: "Description et objectifs du projet",
            descriptionText:
                "L'objectif etait de faire une simulation d'une tornade dans un environnement 3D, incluant la modelisation des forces et des mouvements associes. Le projet vise a simuler le comportement dynamique d'une tornade en utilisant les equations de Burgers-Rott, dans un environnement realiste. Le projet a ete developpe a l'aide du moteur de jeu Unreal Engine 5.6.",
            tornadoChallenges:
                "- Appliquer les equations de Burgers-Rott sur Unreal Engine<br>\n- Representer le bruit de la tornade a l'aide d'une force de turbulence<br>\n- Calculer le facteur d'evasement de la tornade pour une representation plus realiste<br>\n- Transiter d'un etat d'aspiration a un etat d'expulsion",
            tornadoHowTitle: "Comment fonctionne la tornade ?",
            tornadoHowText:
                "Concretement, une tornade possede plusieurs caracteristiques physiques distinctes, telles que la rotation rapide de l'air, une pression atmospherique basse au centre, et des forces de turbulence qui influencent son comportement dynamique.\nDans ce projet, je me suis concentre sur 4 facteurs physiques majeurs.<br><br>",
            noiseTitle: "Le bruit",
            gammaTitle: "Le gamma (force de rotation)",
            flowTitle: "L'ecoulement (ou champ de vitesse)",
            flowText:
                "Il est modelise a l'aide des 3 elements majeurs qui forment une tornade : la vitesse radiale (Vr), la vitesse tangente (Vt) et la vitesse verticale (Vz).<br><br>",
            flowResult:
                "La vitesse finale du flux d'air a une position donnee est obtenue en combinant ces trois composantes vectorielles.<br><br>",
            openingTitle: "Ouverture",
            openingText:
                "Maintenant que la representation visuelle de la tornade est fonctionnelle et realiste, il ne reste plus qu'a creer les interactions avec les objets environnants. Et c'est ce qui sera continue dans un futur projet !"
        },
        engine: {
            pageTitle: "Details du Projet | Moteur Vulkan",
            title: "Creation d'un moteur de jeu (Vulkan)",
            objectiveText:
                "L'objectif etait de comprendre les couches bas-niveau des API graphiques modernes en implementant une pipeline de rendu complete.",
            mathChallengesText:
                "Pour la gestion des cameras, j'ai du implementer des matrices de projection :"
        },
        chromestesia: {
            pageTitle: "Details du Projet | Chromestesia",
            title: "Action 2.5D Unity",
            objectiveText:
                "L'objectif etait de comprendre les couches bas-niveau des API graphiques modernes en implementant une pipeline de rendu complete."
        }
    },
    en: {
        common: {
            back: "Back to portfolio",
            objectiveTitle: "Project goal",
            mathChallengesTitle: "Math challenges",
            challengesTitle: "Challenges",
            visualTitle: "Visual preview",
            downloadTitle: "Download the Project",
            downloadDesc: "ZIP file containing the project build",
            downloadCta: "Download",
            codeTitle: "Code preview (C++)",
            placeholderVideo: "Engine video in action",
            architectureBadge: "Software architecture",
            maths: "Mathematics",
            "duration-1w": "1 week",
            "duration-2w": "2 weeks",
            "group-3": "Team of 3",
            "side-project": "Side Project"
        },
        canon: {
            pageTitle: "Project Details | Cannon",
            title: "2D Cannon Shot Simulation",
            objectiveText:
                "This project aimed to simulate a 2D cannon shot, including the trajectory of a projectile and its collision with a pendulum. It models the motion of a projectile fired by a cannon using kinematics equations, both in a frictionless environment and in a more realistic one that includes air resistance. It also simulates the interaction when the projectile collides with a target pendulum. The project was developed using C# and the Unity game engine.",
            canonChallenges:
                "- Compute the projectile time equation<br>\n- Compute the resulting force at impact on the pendulum<br>\n- Compute the trajectory while accounting for air friction<br>\n- Simulate the trajectory based on specific initial parameters",
            trajectoryTitle: "Projectile Trajectory",
            frictionOff: "Without friction",
            frictionOn: "With friction",
            impactTitle: "Impact Force",
            linearVelocity: "Linear velocity of the box after impact:",
            angularVelocity: "Angular velocity of the box after impact:"
        },
        rubik: {
            pageTitle: "Project Details | Rubik's Cube",
            title: "Rubik's Cube",
            objectiveText:
                "QuaterCube is a Unity project aimed at exploring and mastering the use of quaternions to handle 3D rotations. It is a Rubik's Cube simulation implemented entirely using only quaternions, partially re-coded.",
            rubikChallenges:
                "- Understand and apply quaternion rotations in Unity.<br>\n- Manipulate 3D transforms without gimbal lock.<br>\n- Reproduce complex Rubik's Cube moves using quaternion composition.",
            actionsTitle: "Actions",
            actionGenerate: "Generate",
            actionGenerateDesc: " : Creates a new Rubik's Cube using the selected size, shuffle depth, and mouse sensitivity.",
            actionInvert: "Reverse",
            actionInvertDesc: " : Solves the Rubik's Cube by reversing all rotations performed previously.",
            actionSave: "Save",
            actionSaveDesc: " : Saves the current cube state so you can leave the game and keep your progress.",
            actionLoad: "Restore",
            actionLoadDesc: " : Recreates the cube from saved data, restoring the last known state."
        },
        tornado: {
            pageTitle: "Project Details | Tornado",
            title: "Tornado Simulation in a 3D Environment",
            descriptionTitle: "Description and project goals",
            descriptionText:
                "The goal was to create a tornado simulation in a 3D environment, including the modeling of forces and associated motions. The project simulates the dynamic behavior of a tornado using the Burgers-Rott equations in a realistic environment. It was developed using Unreal Engine 5.6.",
            tornadoChallenges:
                "- Apply the Burgers-Rott equations in Unreal Engine<br>\n- Represent the tornado noise using a turbulence force<br>\n- Compute the flare factor for a more realistic representation<br>\n- Transition from an intake state to an outflow state",
            tornadoHowTitle: "How does the tornado work?",
            tornadoHowText:
                "In practice, a tornado has several distinct physical characteristics, such as rapid air rotation, low atmospheric pressure at the core, and turbulence forces that influence its dynamic behavior.\nIn this project, I focused on 4 major physical factors.<br><br>",
            noiseTitle: "Noise",
            gammaTitle: "Gamma (rotational force)",
            flowTitle: "Flow (or velocity field)",
            flowText:
                "It is modeled using the three major components that form a tornado: radial velocity (Vr), tangential velocity (Vt), and vertical velocity (Vz).<br><br>",
            flowResult:
                "The final airflow velocity at a given position is obtained by combining these three vector components.<br><br>",
            openingTitle: "Next steps",
            openingText:
                "Now that the visual representation of the tornado is functional and realistic, the next step is to create interactions with surrounding objects. This will be continued in a future project!"
        },
        engine: {
            pageTitle: "Project Details | Vulkan Engine",
            title: "Game Engine Creation (Vulkan)",
            objectiveText:
                "The goal was to understand the low-level layers of modern graphics APIs by implementing a complete rendering pipeline.",
            mathChallengesText:
                "For camera management, I had to implement projection matrices:"
        },
        chromestesia: {
            pageTitle: "Project Details | Chromestesia",
            title: "2.5D Unity Action",
            objectiveText:
                "The goal was to understand the low-level layers of modern graphics APIs by implementing a complete rendering pipeline."
        }
    }
};

const langToggle = document.getElementById("lang-toggle");
const page = document.body.dataset.page || "common";
const langStorageKey = "siteLang";
let currentLang = localStorage.getItem(langStorageKey) || "fr";

const getTranslation = (key) => {
    const langMap = translations[currentLang] || {};
    const pageMap = langMap[page] || {};
    const commonMap = langMap.common || {};
    return pageMap[key] ?? commonMap[key];
};

const applyTranslations = () => {
    document.documentElement.lang = currentLang;

    const titleKey = document.body.dataset.titleKey;
    if (titleKey) {
        const titleValue = getTranslation(titleKey);
        if (titleValue) {
            document.title = titleValue;
        }
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = getTranslation(key);
        if (value) {
            el.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        const value = getTranslation(key);
        if (value) {
            el.innerHTML = value;
        }
    });

    if (langToggle) {
        langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
        langToggle.setAttribute(
            "aria-label",
            currentLang === "fr" ? "Switch to English" : "Passer en francais"
        );
    }
};

if (langToggle) {
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        localStorage.setItem(langStorageKey, currentLang);
        applyTranslations();
    });
}

applyTranslations();
