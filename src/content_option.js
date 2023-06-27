const logotext = "Marion E.";
const meta = {
    title: "Marion EYLER",
    description: "Je suis Marion EYLER, étudiante en Motion Design et Filmaker sur Strasbourg.",
};

const introdata = {
    title: "Marion EYLER",
    animated: {
        first: "J'aime le cinéma",
        second: "J'aime le motion design",
        third: "J'ai envie de créer",
    },
    description: "Je suis Marion EYLER, étudiante en Motion Design et Filmaker sur Strasbourg. J'ai toujours été passionnée par le cinéma et l'audiovisuel. J'ai donc décidé de me lancer dans cette voie. Je suis actuellement en 2ème année à E-artsup Strasbourg. Je suis à la recherche d'un stage de 3 mois en tant que monteuse, motion designer ou photographe au cours de l'année 2024.",
    your_img_url: "/assets/profil.jpg",
};

const dataabout = {
    title: "Un peu plus sur moi",
    aboutme: "Je suis Marion EYLER, étudiante en Motion Design et Filmaker sur Strasbourg. J'ai toujours été passionnée par le cinéma et l'audiovisuel. J'ai donc décidé de me lancer dans cette voie. Je suis actuellement en 2ème année à E-artsup Strasbourg. Je suis à la recherche d'un stage de 3 mois en tant que monteuse, motion designer ou photographe au cours de l'année 2024.",
};
const worktimeline = [
    {
        jobtitle: "Graphiste",
        where: "Espace Image",
        date: "2023",
    },
    {
        jobtitle: "Chargée de Communication BDE",
        where: "BDE BeeColor E-artsup Strasbourg",
        date: "2022-2023",
    },
    {
        jobtitle: "Mediateur Numerique",
        where: "Cab'Anne des Créateurs",
        date: "2021",
    },
];

const skills = [{
        name: "Photo",
        value: 90,
    },
    {
        name: "Lightroom",
        value: 75,
    },
    {
        name: "Photoshop",
        value: 70,
    },
    {
        name: "Illustrator",
        value: 80,
    },
    {
        name: "Indesign",
        value: 95,
    },
    {
        name: "After Effects",
        value: 85,
    },
    {
        name: "Premiere Pro",
        value: 75,
    },
];

// const services = [
// ];

const dataportfolio = [
    {
        content: "/assets/ref1.jpg",
        description: "",
        isVid: false,
    },
    {
        content: "/assets/ref2.jpg",
        description: "",
        isVid: false,
    },
    {
        content: "/assets/thomas1.jpg",
        description: "",
        isVid: false,
    },
    {
        content: "/assets/thomas2.jpg",
        description: "",
        isVid: false,
    },
    {
        content: "/assets/intro1.jpg",
        description: "",
        isVid: false,
    },
    {
        content: "/assets/animrenard.mp4",
        description: "",
        isVid: true,
    },
    {
        content: "/assets/intro.mp4",
        description: "",
        isVid: true,
    },
    {
        content: "/assets/planet.mp4",
        description: "",
        isVid: true,
    },
];

const contactConfig = {
    YOUR_EMAIL: "marioneyler@gmail.com",
    YOUR_FONE: "+33 7 61 03 79 23",
    description: "Contactez moi pour plus d'informations, je vous répondrai dans les plus brefs délais.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_utjzcmi",
    YOUR_TEMPLATE_ID: "template_3avorro",
    YOUR_USER_ID: "E056RsmH0Yv3FFG7h",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    // services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};