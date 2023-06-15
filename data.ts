export const menuLinks = ['start', 'about', 'tech', 'experience', 'portfolio', 'contact']

export const tech = [
    {
        name: 'html',
        knowledge: 80,
        color: '#ff8566'
    },
    {
        name: 'CSS',
        knowledge: 75,
        color: '#2c98f0'
    },
    {
        name: 'Tailwind CSS',
        knowledge: 70,
        color: '#ec5453'
    },
    {
        name: 'JavaScript',
        knowledge: 82,
        color: '#a84cb8'
    },
    {
        name: 'React Js',
        knowledge: 78,
        color: '#2fa499'
    },
    {
        name: 'React Native',
        knowledge: 75,
        color: '#f9bf3f'
    },
    {
        name: 'Next JS',
        knowledge: 75,
        color: '#ff8566'
    },
    {
        name: 'TypeScript',
        knowledge: 75,
        color: '#2c98f0'
    },
    {
        name: 'Redux Toolkit',
        knowledge: 73,
        color: '#ec5453'
    },
    {
        name: 'GraphQL',
        knowledge: 68,
        color: '#a84cb8'
    },
    {
        name: 'Node Js',
        knowledge: 70,
        color: '#2fa499'
    },
    {
        name: 'Express Js',
        knowledge: 70,
        color: '#f9bf3f'
    },
    {
        name: 'PHP',
        knowledge: 70,
        color: '#ff8566'
    },
    {
        name: 'Yii',
        knowledge: 70,
        color: '#2c98f0'
    },
    {
        name: 'Flutter',
        knowledge: 55,
        color: '#ec5453'
    },
    {
        name: 'MySQL',
        knowledge: 80,
        color: '#ff8566'
    },
    {
        name: 'PostgreSQL',
        knowledge: 78,
        color: '#2c98f0'
    },
]

export const experience = [
    {
        title: 'Software Engineer I / II',
        company: 'Swoogo',
        dates: 'Jul 2021 - Feb 2023',
        description: ['Developed chat UI for event websites using React and Cometchat SDK', 'Collaborated on building new mobile app with React Native, TypeScript, Redux Toolkit, GraphQL and Golang.', 'Championed unit testing for mobile apps using Jest and react testing library'],
        website: 'https://swoogo.events/',
        tech: ["TypeScript", "React", "React Native", "Redux Toolkit", "Postgres", "GraphQL", "AWS", "GoLang", "Jest", "PHP", "Yii2", "Flutter"],
        color: '#2c98f0'
    },
    {
        title: 'Software Developer',
        company: 'Netreo',
        dates: 'Jan 2020 - Jul 2021',
        description: ['Developed software for award-winning cloud, hybrid network and application monitoring platform.','Enhanced UI performance using JavaScript and Yii2 PHP framework.'],
        website: 'https://www.netreo.com/',
        tech: ["JavaScript", "Jquery", "MySql", "AWS", "Jest", "PHP", "Yii2", "PHPUnit"],
        color: '#ec5453'
    },
    {
        title: 'Software Developer',
        company: 'StudioEase',
        dates: 'Mar 2019 - Jan 2020',
        description: ['Developed a web and mobile app to streamline data distribution among teachers, managers and Mindbody software.', 'Constructed custom APIs to ensuring timely updates of accurate Mindbody information throughout the app.', "Improved teacher's efficiency by enabling easier management of class schedules across multiple companies and locations."],
        website: 'https://studioease.net/',
        tech: ["JavaScript", "React", "MySQL", "AWS", "Node Js", "Express Js", "Jest", "PHP", "Flutter", "Firebase"],
        color: '#a84cb8'
    },
    {
        title: 'Web Application Developer',
        company: 'Nutshell Wifi',
        dates: 'Jun 2018 - Aug 2019',
        description: ['Developed user interfaces for responsive web applications utilizing HTML, CSS and JavaScript.', 'Wrote custom PHP functions and APIs, as well as creating client-side and backend CMS systems powered by PHP and MySQL.'],
        website: null,
        tech: ["JavaScript", "JQuery", "MySql", "AWS", "PHP"],
        color: '#2fa499'
    },
    {
        title: 'Front End Designer / Developer',
        company: 'AWM',
        dates: 'Nov 2017 - Jun 2018',
        description: ['Collaborated with key stakeholders to create an engaging company website aligned with brand strategy and objectives.', 'Developed a website from concept to completion while adhering to company brand guidelines and industry best practices.', 'Leveraged UI/UX principles to improve existing websites presentation and navigational structure, resulting in increased traffic and customer satisfaction.'],
        website: 'https://www.awm.tech/',
        tech: ["JavaScript", "JQuery", "PHP"],
        color: '#f9bf3f'
    },
    {
        title: 'Front End Developer',
        company: 'PriceSpider',
        dates: 'Feb 2015 - Aug 2017',
        description: ["Delivered appealing and functional web and mobile applications to enhance user experience.", "Ensured website software maintenance and enhancement.", "Constructed sophisticated web pages from mockups and prototypes efficiently with attention to detail.", "Collaborated with back-end developers to code and troubleshoot frameworks."],
        website: 'https://www.pricespider.com/',
        tech: ["JavaScript", "React", "MySQL", "AWS", "Node Js", "Express Js", "Jest"],
        color: '#ff8566'
    }
]

export const portfolio = [
    {
        key: 'hero',
        title: 'Hero Battle',
        description: 'Hero battle card game',
        techStack: ['Tailwind CSS', 'TypeScript', 'Next JS', 'Redux Toolkit','Redux TK Query'],
        integrations: null,
        url: 'https://hero-battle.vercel.app/',
        repo: 'https://github.com/Ethan22Lawrence/hero-battle',
        color: '#2c98f0'
    },
    {
        key: 'swoogo',
        title: 'Swoogo',
        description: 'Mobile app',
        techStack: ['JavaScript', 'TypeScript', 'React', 'PHP', 'Yii2', 'PostgreSQL', 'React Native', 'Redux Toolkit', 'GraphQL', 'GoLang'],
        integrations: ['Google Maps'],
        url: null,
        repo: null,
        color: '#ec5453'
    },
    {
        key: 'studioease',
        title: 'StudioEase',
        description: 'Web application and mobile app',
        techStack: ['HTML', 'CSS', 'React-Bootstrap','Material UI', 'JavaScript', 'React', 'PHP', 'Node JS', 'Express JS', 'AWS Lambda', 'Composer', 'Guzzle', 'MySQL', 'Flutter', 'Firebase'],
        integrations: ['Mailgun', 'Twilio', 'Square', 'Pipedrive CMS'],
        url: null,
        repo: null,
        color: '#a84cb8'
    },
    {
        key: 'nutshell',
        title: 'Nutshell Wifi',
        description: 'Web CMS',
        techStack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'PHP', 'Composer', 'Guzzle', 'MySQL'],
        integrations: ['Mailgun', 'BeeFree Editor', 'Google Places', 'Twilio', 'Stripe', 'Charts JS'],
        url: null,
        repo: null,
        color: '#2fa499'
    },
    {
        key: 'pricespider',
        title: 'PriceSpider',
        description: 'Web Applications',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Node JS', 'Express JS', 'Handlebars JS', 'MySQL'],
        integrations: ['Google Maps', 'Google Analytics'],
        url: null,
        repo: null,
        color: '#f9bf3f'
    }

]