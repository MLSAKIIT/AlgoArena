export const domains = ["WebDevelopment", "AppDevelopment", "AI/ML"];
export const tags = {
  WebDevelopment: ["Nextjs", "HTML", "CSS", "JS", "ReactJS"],
  AppDevelopment: ["Android", "IOS", "Swift", "Kotlin", "Java", "React Native"],
  "AI/ML": ["Tensorflow", "Deep learning", "NLP"],
};

export const ALLOWED_DOMAINS = {
    web: 'web',
    app: 'app',
    ai: 'ai-ml',
    cyber: 'cyber-security',
    ui: 'ui-ux',
    dsa: 'dsa',
    devops: 'devops',
    blockchain: 'blockchain',
}

export const MORE_COURSES = [
  {
      id: 1,
      course: "APP DEVELOPMENT",
      members: 99999,
      href: `/learning-paths/${ALLOWED_DOMAINS.app}`
  },
  {
      id: 2,
      course: "UI/UX",
      members: 99999,
      href: `/learning-paths/${ALLOWED_DOMAINS.ui}`
  },
  {
      id: 3,
      course: "AI ML",
      members: 99999,
      href: `/learning-paths/${ALLOWED_DOMAINS.ai}`
  },
  {
      id: 4,
      course: "CYBER SECURITY",
      members: 99999,
      href: `/learning-paths/${ALLOWED_DOMAINS.cyber}`
  },
  {
      id: 5,
      course: "DSA",
      members: 99999,
      href: `/learning-paths/${ALLOWED_DOMAINS.dsa}`
  },
  {
      id: 6,
      course: "WEB DEVELOPMENT",
      members: 99999,
      href: `/learning-paths/${ALLOWED_DOMAINS.web}`
  },
];


export const COMPLETED_COURSES = [
    {
        id:1,
        course:"WEB DEVELOPMENT",
        description:"Learn Full Stack Web Development: HTML/CSS, MySQL, PHP, JavaScript, and React and build a website from scratch!",
    },
    {
        id:2,
        course:"UI/UX",
        description:"Start Your UI/UX Career in 2024: Figma, Web & App Design Mastery with In-Depth UX Theories - From Novice to Advanced.",
    },
    {
        id:3,
        course:"APP DEVELOPMENT",
        description:"Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app. Learn XML and Kotlin and how to put them together to build your own Zomato, Instagram or any other app.",
    }
]