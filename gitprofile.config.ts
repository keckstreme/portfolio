// gitprofile.config.ts

const CONFIG = {
    github: {
        username: 'keckstreme', // Your GitHub org/user name. (This is the only required config)
    },
    /**
     * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
     * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
     * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
     */
    base: '/portfolio/',
    projects: {
        github: {
            display: false, // Display GitHub projects?
            header: 'Github Projects',
            mode: 'automatic', // Mode can be: 'automatic' or 'manual'
            automatic: {
                sortBy: 'stars', // Sort projects by 'stars' or 'updated'
                limit: 8, // How many projects to display.
                exclude: {
                    forks: false, // Forked projects will not be displayed if set to true.
                    projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
                },
            },
            manual: {
                // Properties for manually specifying projects
                projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
            },
        },
        external: {
            header: 'Projects',
            // To hide the `External Projects` section, keep it empty.
            projects: [
                //{
                //    title: 'Topic Word Link (released 2025)',
                //    description:
                //        'My first puzzle game under Finite Game Studio Ltd. It’s a word connect game with many minigames. Main gameplay is a word connect puzzle game.',
                //    imageUrl:
                //        '',
                //    link: 'https://play.google.com/store/apps/details?id=com.FiniteGameStudio.TopicWordLinkFGS&hl=en',
                //},
                //{
                //    title: 'DriveUp (released 2021 & released 2025)',
                //    description:
                //        `Released in 2021, it was my first legitimate complete game. Later in 2025, I remastered it and published it again. It’s a 2D hill climbing 
                //        racing game. No third party assets were used, even in the remastered version.`,
                //    imageUrl:
                //        'https://raw.githubusercontent.com/keckstreme/portfolio/main/stuff/RESUMEmedia/DriveUp/iconm.png',
                //    link: 'https://play.google.com/store/apps/details?id=com.BurakKeklik.DriveUp',
                //},
                //{
                //    title: '“Tofas Bursa Fabrikasi” (2024)',
                //    description:
                //        `Players can create as many cars as they want without any limitations and drive those cars in world maps. Players are able to save, load, 
                //        duplicate, and rename their cars. Pinch to zoom map and camera. Offering advanced controls and freedom.`,
                //    imageUrl:
                //        '',
                //    link: 'https://www.youtube.com/watch?v=rJKiJ5CFUgg',
                //},
                //{
                //    title: 'Mech Survivors (2023)',
                //    description:
                //        `This was a child of Vampire Survivors trend. It was far from finished, but had a cool UI and 3D models that I created so I wanted to feature 
                //        it here.`,
                //    imageUrl:
                //        '',
                //    link: 'https://www.youtube.com/watch?v=bBl05aa48qM',
                //},
                //{
                //    title: 'driving tech (2022)',
                //    description:
                //        `Realistic arcade car physics`,
                //    imageUrl:
                //        '',
                //    link: 'https://www.youtube.com/watch?v=VH04U8l49HU',
                //},
                //{
                //    title: 'Charge It All (2022)',
                //    description:
                //        `Charge incoming phones by selecting empty and correct charging plugs.`,
                //    imageUrl:
                //        '',
                //    link: '',
                //},
                //{
                //    title: 'Zombie Defense (2022)',
                //    description:
                //        `I wanted to create a game that I would play, therefore Zombie Defense was born. It’s a base defender shooter game.`,
                //    imageUrl:
                //        '',
                //    link: '',
                //},
                //{
                //    title: 'Shift Race (2022)',
                //    description:
                //        `My second 3D hyper-casual game under Lecten. It's a drag racing game with obstacles. Player needs to modify their car in real time to avoid losing speed.`,
                //    imageUrl:
                //        '',
                //    link: '',
                //},
                //{
                //    title: 'Toony Race (2022)',
                //    description:
                //        `My first hyper-casual and 3D game under the umbrella of Lecten. It's a level based racing game with Mario Kart mechanics.`,
                //    imageUrl:
                //        '',
                //    link: '',
                //},
                //{
                //    title: 'Incremental Jump (2021)',
                //    description:
                //        `Released in 2021, it was my second game after DriveUp. It was a Doodle Jump with incremental score features. Incremental Jump was mainly an experiment/exercise. `,
                //    imageUrl:
                //        '',
                //    link: 'https://www.youtube.com/watch?v=ojJYCIj-NEk',
                //},
            ],
        },
    },
    seo: {
        title: 'Portfolio of Burak Keklik',
        description: '',
        imageURL: '',
    },
    social: {
        linkedin: 'burak-keklik',
        x: '',
        mastodon: '',
        researchGate: '',
        facebook: '',
        instagram: '',
        reddit: '',
        threads: '',
        youtube: 'keckstreme', // example: 'pewdiepie'
        udemy: '',
        dribbble: '',
        behance: '',
        medium: '',
        dev: '',
        stackoverflow: '', // example: '1/jeff-atwood'
        skype: '',
        telegram: '',
        website: 'https://keckstreme.github.io/',
        phone: '',
        email: 'burakeklik@gmail.com',
    },
    resume: {
        fileUrl:
            'https://raw.githubusercontent.com/keckstreme/portfolio/main/stuff/RESUME.pdf', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
        'Unity',
        'C#',
        'Git',
        'Blender',
        'Photoshop',
        'Illustrator',
        'Google Play Services',
        'Apple Game Center',
        'AdMob',
        'UnityAds',
        'Google Cloud',
        'IAP - Android',
        'IAP - IOS',
    ],
    experiences: [
        {
            company: 'Finite Game Studio Ltd.',
            position: 'Full stack Unity developer',
            from: 'October 2024',
            to: 'May 2025',
            companyLink: '',
        },
        {
            company: 'Lecten Teknoloji Yazılım A.Ş',
            position: 'Unity Developer',
            from: 'October 2021',
            to: 'April 2022',
            companyLink: '',
        },
        {
            company: 'Dikey Elektronik Ltd.',
            position: 'Intern Developer',
            from: 'July 2016',
            to: 'Sept 2016',
            companyLink: '',
        },
    ],
    certifications: [
        {
            name: '',
            body: '',
            year: '',
            link: '',
        },
    ],
    educations: [
        {
            institution: 'Selcuk University',
            degree: 'Computer Engineering',
            from: '2021',
            to: 'Current',
        },
        {
            institution: 'Middle East Technical University',
            degree: 'Computer Engineering',
            from: '2018',
            to: '2020',
        },
        {
            institution: 'Konya MTAL',
            degree: 'Computer Technician',
            from: '2013',
            to: '2017',
        },
    ],

    publications: [
        {
            title: '',
            conferenceName: '',
            journalName: '',
            authors: '',
            link: '',
            description:
                '',
        },
    ],
    // Display articles from your medium or dev account. (Optional)
    blog: {
        source: '', // medium | dev
        username: '', // to hide blog section, keep it empty
        limit: 2, // How many articles to display. Max is 10.
    },
    googleAnalytics: {
        id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
        id: '',
        snippetVersion: 6,
    },
    themeConfig: {
        defaultTheme: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Display the ring in Profile picture
        displayAvatarRing: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            //'cupcake',
            //'bumblebee',
            //'emerald',
            //'corporate',
            //'synthwave',
            //'retro',
            //'cyberpunk',
            //'valentine',
            //'halloween',
            //'garden',
            //'forest',
            //'aqua',
            //'lofi',
            //'pastel',
            //'fantasy',
            //'wireframe',
            //'black',
            //'luxury',
            //'dracula',
            //'cmyk',
            //'autumn',
            //'business',
            //'acid',
            //'lemonade',
            //'night',
            //'coffee',
            //'winter',
            //'dim',
            //'nord',
            //'sunset',
            //'procyon',
        ],

        // Custom theme, applied to `procyon` theme
        customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
        },
    },

    // Optional Footer. Supports plain text or HTML.
    footer: 'dsfsdf',//`Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,

    enablePWA: false, // GitProfile is PWA enabled. The site can be installed as a Progressive Web App. To turn it off, set enablePWA to false.
};

export default CONFIG;
