// Portfolio Menu
export const portfolioMenu = [
  {
    id: "featured",
    title: "Featured",
  },
  {
    id: "react",
    title: "React/NextJS",
  },
  {
    id: "javascript",
    title: "JavaScript",
  },
  {
    id: "bootstrap",
    title: "Bootstrap",
  },
  {
    id: "htmlcss",
    title: "HTML CSS",
  },
];

// React Data
export const reactData = [
  {
    id: 1,
    title: 'Online Course',
    img: 'https://i.ibb.co/QdtH1Pk/online-Course.png',
    url: 'https://wd-online-course.netlify.app',
  },
  {
    id: 2,
    title: 'Instagram Clone',
    img: 'https://i.ibb.co/BsL2cGP/1.png',
    url: 'https://wd-instagram-clone.netlify.app/',
  },
  {
    id: 3,
    title: 'Netflix Clone',
    img: 'https://i.ibb.co/Yyk8fbV/1.png',
    url: 'https://netflix-clone56.netlify.app',
  },
  {
    id: 4,
    title: 'Hulu Clone',
    img: 'https://i.ibb.co/16Q3s60/hulu-clone.png',
    url: 'https://hulu-clone-aminulds.vercel.app',
  },
  {
    id: 5,
    title: 'Amazon Frontend Clone',
    img: 'https://i.ibb.co/G01SxWJ/amazon-frontend-clone.png',
    url: 'https://amazon-frontend-clone.netlify.app',
  },
].reverse();

// JavaScript Data
export const javaScriptData = [
  {
    id: 1,
    title: 'Calculator App',
    img: 'https://i.ibb.co/0htrrPr/calculator-App.png',
    url: 'https://aminulds.github.io/calculator',
  },
  {
    id: 2,
    title: 'Weather App',
    img: 'https://i.ibb.co/jfGYtR9/weather-App-Java-Script.png',
    url: 'https://aminulds.github.io/weather-app',
  },
  {
    id: 3,
    title: 'Quiz App',
    img: 'https://i.ibb.co/Y8RYhq7/quiz-App-Java-Script.png',
    url: 'https://aminulds.github.io/quiz-app',
  },
  {
    id: 4,
    title: 'OTP Matcher App',
    img: 'https://i.ibb.co/371jVVS/otp-Matcher-App.png',
    url: 'https://aminulds.github.io/OTP-matcher',
  },
  {
    id: 5,
    title: 'Bank Transaction App',
    img: 'https://i.ibb.co/dp7t4HN/bank-Transaction.png',
    url: 'https://aminulds.github.io/bank-transaction',
  },

  {
    id: 6,
    title: 'Todo List App',
    img: 'https://i.ibb.co/3pf9Y3X/todo-List-App.png',
    url: 'https://aminulds.github.io/todo-app',
  },
  {
    id: 7,
    title: 'Temperature Search App',
    img: 'https://i.ibb.co/zGc7CCf/temperature-App-Java-Script.png',
    url: 'https://aminulds.github.io/temperature-app',
  },
].reverse();

// Bootstrap Data
export const bootstrapData = [
  {
    id: 1,
    title: 'Player Board',
    img: 'https://i.ibb.co/dp0V48B/player-Board.png',
    url: 'https://aminulds.github.io/player-board',
  },
  {
    id: 2,
    title: 'E School',
    img: 'https://i.ibb.co/jVMPctg/tech-Center.png',
    url: 'https://aminulds.github.io/tech-center',
  },
  {
    id: 3,
    title: 'Panda E-Commerce Shop',
    img: 'https://i.ibb.co/jbWb6xx/panda-Shop.png',
    url: 'https://aminulds.github.io/panda-shop',
  },
  {
    id: 4,
    title: 'Electronics E-Commerce Shop',
    img: 'https://i.ibb.co/372H6bt/techShop.png',
    url: 'https://aminulds.github.io/tech-shop',
  },
].reverse();

// HTML CSS Data /
export const htmlCssData = [
  {
    id: 1,
    title: 'Personal Website',
    img: 'https://i.ibb.co/C7LWRyW/personal-Website.png',
    url: 'https://aminulds.github.io/personal-website',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    img: 'https://i.ibb.co/K6Nrx3m/personal-Porftfolio.png',
    url: 'https://aminulds.github.io/my-portfolio',
  },
  {
    id: 3,
    title: 'App Landing Page',
    img: 'https://i.ibb.co/sv8MY0V/app-Landing-Page.png',
    url: 'https://aminulds.github.io/app-landing-page',
  },
].reverse();

// Feature Data
export const featuredData = [
  ...reactData.slice(0, 4),
  ...javaScriptData.slice(0, 2),
  ...bootstrapData.slice(0, 1),
  ...htmlCssData.slice(0, 1),
];
