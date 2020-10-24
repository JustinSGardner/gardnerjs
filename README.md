### Sections
- About
- Skills
- Job experiences
- Github repositories
- Portifolio

### Features
- Responsive Design, optimized for Mobile devices
- Google Analytics
- SEO
- PWA
- Dark mode
- Animations

### Mobile



### Desktop



## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    npx gatsby new my-default-starter https://github.com/santosfrancisco/gatsby-starter-cv
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    npm run develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

4. **Generate production build**

    That command will generate a production build on _public_ folder
    ```sh
      npm run build
    ```

5. **Deploy to Github pages**

    That command will deploy the production build to gh-pages branch of your repository
    > ⚠️ don't forget to check `pathPrefix` in the configuration file.


    ```sh
      npm run deploy
    ```

## Configuration

Update the configuration file with your data. The configuration file is in ```data/siteConfig.js```

:warning: NOTE: Please change googleAnalyticsId to your ID.  See https://analytics.google.com for details.

> **Skills** is a set of icons available through React.

> **jobs** is a set of your work experiences.

```js
  module.exports = {
    siteTitle: 'Welcome! I\'m Justin',
    siteDescription: `This is my Developer Portfolio Site`,
    keyWords: ['gatsbyjs', 'react', 'portfolio'],
    authorName: 'Justin Gardner',
    twitterUsername: 'just_n_gardner',
    githubUsername: 'JustinSGardner',
    authorAvatar: '/images/profile.1.jpeg',
    authorDescription: `I am a Developer who is very passionate about what I do. I have proven very capable in taking on new challenges as I have recently completed a Full Immersive Coding Bootcamp while being a fully involved dad to 2 young children and a puppy (11wks).<br /> 
  I am continuously learning and developing as a Public Speaker, Musician & Leader.`,
    
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
      url: "https://github.com/JustinSGardner/gardnerjs"
    },{
      image: "/images/memory-game.png",
      description: "A matching game made for my son in React.js",
      url: "https://github.com/JustinSGardner/memory-game"
    },{
      image: "/images/under-construction.png",
      description: "More projects in the works... Check back.",
      url: "https://github.com/JustinSGardner"
    }
  ],
    social: {
      twitter: "https://twitter.com/_franciscodf",
      linkedin: "https://www.linkedin.com/in/santos-francisco",
      github: "https://github.com/santosfrancisco",
      email: "yoshi.df@gmail.com"
    },
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
};