const navLinks = [
  {
    name: "Projets",
    link: "#work",
  },
  {
    name: "Expérience",
    link: "#experience",
  },
  {
    name: "Compétences",
    link: "#skills",
  },
  {
    name: "Avis",
    link: "#testimonials",
  },
];

const words = [
  { text: "Idées", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Maquettes", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Idées", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Maquettes", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Années d'expérience" },
  { value: 200, suffix: "+", label: "Clients satisfaits" },
  { value: 108, suffix: "+", label: "Projets réalisés" },
  { value: 90, suffix: "%", label: "Taux de fidélisation" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Sens de la qualité",
    desc: "Des résultats de haute qualité avec une attention à chaque détail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Communication fiable",
    desc: "Des mises à jour à chaque étape pour garantir transparence et clarté.",
  },
  {
    imgPath: "/images/time.png",
    title: "Livraison ponctuelle",
    desc: "Des projets livrés dans les délais, avec qualité et exigence.",
  },
];

const techStackImgs = [
  {
    name: "Développeur React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Développeur Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Développeur Backend",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Développeur Interactif",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Chef de projet",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Développeur React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Développeur Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Développeur Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Développeur Interactif",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Chef de projet",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian a apporté créativité et expertise technique à l'équipe, améliorant nettement nos performances frontend. Son travail a été précieux pour offrir des expériences plus rapides.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Développeur Frontend",
    date: "Janvier 2023 - Présent",
    responsibilities: [
      "Développer et maintenir des fonctionnalités orientées utilisateur pour le site Hostinger.",
      "Collaborer étroitement avec les designers UI/UX pour des expériences fluides.",
      "Optimiser les applications web pour la vitesse et l'évolutivité.",
    ],
  },
  {
    review:
      "Les contributions d’Adrian aux applications web de Docker ont été remarquables. Il aborde les défis avec un véritable esprit de résolution de problèmes.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Développeur Full‑Stack",
    date: "Juin 2020 - Décembre 2023",
    responsibilities: [
      "Piloter le développement des applications web de Docker en mettant l’accent sur l’évolutivité.",
      "Travailler avec les équipes backend pour intégrer les API de manière fluide avec le frontend.",
      "Contribuer à des projets open‑source utilisés dans l’écosystème Docker.",
    ],
  },
  {
    review:
      "Le travail d’Adrian sur l’application mobile d’Appwrite a apporté un haut niveau de qualité et d’efficacité. Il a livré des solutions qui ont amélioré notre expérience mobile et atteint nos objectifs produit.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Développeur React Native",
    date: "Mars 2019 - Mai 2020",
    responsibilities: [
      "Concevoir des applications mobiles multi‑plateformes avec React Native, intégrées aux services backend d’Appwrite.",
      "Améliorer les performances et l’UX via optimisation du code et tests.",
      "Coordonner avec l’équipe produit pour implémenter des fonctionnalités selon les retours.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Je n’ai que des éloges pour Adrian. Il a su transformer des exigences complexes en un site fluide et fonctionnel. Ses capacités de résolution de problèmes sont remarquables.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Travailler avec Adrian fut une excellente expérience. Il a transformé notre site vieillissant en une plateforme moderne et agréable. Son sens du détail et son exigence de qualité sont incomparables. Je le recommande vivement pour tout projet web.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborer avec Adrian a été un vrai plaisir. Son professionnalisme, sa réactivité et sa volonté de livrer des résultats d’exception ont été constants. Son enthousiasme pour chaque aspect du développement se démarque vraiment.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "C’était un plaisir de travailler avec Adrian. Il a rendu notre site obsolète moderne, intuitif et facile à naviguer. Excellent travail dans l’ensemble.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "L’expertise d’Adrian en développement web est impressionnante. Il a livré une solution robuste et scalable pour notre e‑commerce, et nos ventes en ligne ont fortement augmenté depuis le lancement. Un vrai pro !",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian a été un partenaire de travail idéal. Il a parfaitement compris nos besoins et livré un site au‑delà de nos attentes. Ses compétences en frontend comme en backend sont de haut niveau.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
