module.exports = {
  siteTitle: 'Welcome! I\'m Justin',
  
  keyWords: ['gatsbyjs', 'react',],
  authorName: 'Justin Gardner',
  twitterUsername: 'just_n_gardner',
  githubUsername: 'JustinSGardner',
  authorAvatar: '/images/profile.1.jpeg',
  authorDescription: `Developer who is very passionate about what I do. I have proven very capable in taking on new challenges as I have recently completed a Full Emmersive Coding Bootcamp while being a fully involved dad to a son(4yrs) daughter(3yrs) and a puppy(11wks) .<br /> 
  I am continuously learning and developing as a Public Speaker, Musician & Leader. `,
  skills: [
    {
      name: 'HTML',
      level: 75
    },
    {
      name: 'CSS',
      level: 70
    },
    {
      name: 'Javascript',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 65
    },
    {
      name: 'React',
      level: 75
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    {
      company: "DigitalCrafts",
      begin: {
        month: 'Jul',
        year: '2020'
      },
      duration: null,
      occupation: "Full Stack Developer",
      description: "Soon to be a Graduate of a Full-Stack Coding Bootcamp where I have learned to solve challenges through the power of code."
  
    },  {
      company: "National Analytical Laboratories",
      begin: {
        month: 'Aug',
        year: '2014'
      },
      duration: '5yrs',
      occupation: "Environmental Consultant",
      description: "Project Management. Ensured successful navigation of EPA/OSHA regulations throughout Client-specific construction project."
  
    }, {
      company: "SAF Insurance",
      begin: {
        month: 'Sep',
        year: '2011'
      },
      duration: '3yrs',
      occupation: "Training Manager",
      description: "Train and manage/coach a team of up to 24 employees. Implemented proven techniques and strategies in helping employees reach their full potential and acieve desired sales goals."
    }, 
  ],
  portifolio: [
    {
      image: "/images/salon.png",
      description: "Art review and social interaction platform",
      url: "https://salon-talk.com"
    },
    {
      image: "/images/to-do-today.png",
      description: "Event finder based on city+current date",
      url: "https://to-do-today.netlify.app/"
    },
    {
      image: "/images/terminal-kombat.png",
      description: "Teminal-based fighting game in Python",
      url: "https://github.com/JustinSGardner/Terminal-Kombat"
    },{
      image: "/images/gardnerjs.png",
      description: "This website; using React.js w/ Gatsby.js",
      url: "https://github.com/JustinSGardner/"
    },
  ],
  social: {
    twitter: "https://twitter.com/just_n_gardner",
    linkedin: "https://www.linkedin.com/in/justin-gardner-981477156/",
    github: "https://github.com/justinsgardner",
    email: "justin@gardnerjs.com"
  },
  siteUrl: 'https://gardnerjs.com',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover1.2.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: '/images/profile.1.jpeg',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}