module.exports = {
  siteTitle: 'GardnerJS.com ',
  siteDescription: 'gardnerjs.com',
  keyWords: ['gatsbyjs', 'react',],
  authorName: 'Justin Gardner',
  twitterUsername: 'just_n_gardner',
  githubUsername: 'JustinSGardner',
  authorAvatar: '/images/profile.1.jpeg',
  authorDescription: `Welcome! I'm Justin, a Developer who is very passionate about what I do. I have proven very capable in taking on new challenges as I have recently completed a Full Immersive Coding Bootcamp while being a fully involved dad to 2 young children and a puppy (11wks).<br /> 
  I am continuously learning and developing as a Public Speaker, Musician & Leader. <br/><br/>Feel free to reach out through Social Media or Email me direct.`,
  
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
  portfolio: [
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
    },
    {
      image: "/images/gardnerjs.png",
      description: "This website; using React.js w/ Gatsby.js",
      url: "https://github.com/JustinSGardner/gardnerjs"
    },
    {
      image: "/images/memory-game.png",
      description: "A matching game made for my son in React.js",
      url: "https://github.com/JustinSGardner/memory-game"
    },
    {
      image: "/images/under-construction.png",
      description: "More projects in the works... Check back.",
      url: "https://github.com/JustinSGardner"
    }
  ],
  blog:[
    {
      image: "/images/BlogPost1.png",
      description: "You CAN drink water through a fire hose!",
      slug: "/bootcamp",
    },
    {
      image: "/images/beyond-the-door.png",
      description: "How to acheive greatness in Leadership.",
      slug: "/vision-casting",
    }
  ],
  social: {
    twitter: "https://twitter.com/just_n_gardner",
    linkedin: "https://www.linkedin.com/in/justin-gardner-981477156/",
    github: "https://github.com/justinsgardner",
    email: "justin@gardnerjs.com"
  },
  siteUrl: 'https://gardnerjs.com',
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover1.2.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/android-chrome-256x256.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
    {
      label: 'Blog',
      url: '/blog',
    }
  ]
}