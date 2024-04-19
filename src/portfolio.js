/* Change this file to get personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen 动画容器
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG  动态机器人-静态图片
};

const greeting = {
  username: "Mei Meng",
  title: "Hi all, I'm Mei",
  subTitle: emoji(
    "A front-end developer who is eager to learn and grow. 🎉 Experienced in utilizing web application development tools like JavaScript, React.js, Node.js, and React Native.Passionate about exploring cutting-edge technologies on the internet."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1e6heFB7WyxevKbWulfGGfTZkrdR9nCSI/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/liujiaodaliao",
  linkedin: "https://www.linkedin.com/in/meijia-meng-fr-ch/",
  gmail: "liujiaodaliao2021@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "A PASSIONATE FRONT-END DEVELOPER WHO LOVES TO EXPLORE EVERY ASPECT OF WEB DEVELOPMENT STACKS",
  skills: [
    emoji(
      "✨ Design captivating user interfaces with interactive front-end features for your website"
    ),
    emoji(
      "✨ Enhance website performance through optimized design and functionality"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "VsCode",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "OpenClassrooms",
      logo: require("./assets/images/openclassroomslogo.webp"),
      subHeader: "development integrator Web",
      duration: "June 2023 - April 2024",
      desc: "Started the web integrator training program",
      descBullets: [
        "Successfully completed diverse web projects during OpenClassrooms training progr"
      ]
    },
    {
      schoolName: "Beijing University of Civil Engineering and Architecture",
      logo: require("./assets/images/BUCEAlogo.webp"),
      subHeader: "Bachelor Mechanical Engineering and Automation",
      duration: "September 2004 - June 2008",
      desc: "received the Outstanding Student Scholarship every year",
      descBullets: [
        "In 2007, internship in sales at Beijing Hyundai Motor Company.",
        "In 2008, internship in Beijing Public Transport, transitioned to full-time position."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend(HTML, CSS, JavaScript, React, Sass)", 
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend(Node.js, MongoDB, Swagger)",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming(Optimize SEO)",
      progressPercentage: "60%"
    },
    {
      Stack: "Soft Skills(project management, Notion, Pockets)",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes  username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Electrical and Mechanical Engineer",
      company: "Beijing Public Transport",
      companylogo: require("./assets/images/BJGJlogo.webp"),
      date: " 2008 – 2010",
      desc: "contract CDI",
      descBullets: [
        "Collect and analyze data and write the report",
        "Proposer des solutions raisonnables et des mesures préventives "
      ]
    },
    {
      role: "vehicle market researcher",
      company: "Beijing Pamri",
      companylogo: require("./assets/images/pamri.png"),
      date: " 2010 – 2014",
      desc: "contract CDI",
      descBullets: [
        "Collect and analyze data and write the marketing report",
        "Coordinate services, and provide analyses, project progress and suggestions"
      ]
    },
    {
      role: "Cost Engineer",
      company: "Beijing Sino-aero Construction Engineering Co.,Ltd.",
      companylogo: require("./assets/images/bjzhhkj.webp"),
      date: " 2014 – 2016",
      desc: "contract CDI",
      descBullets: [
        "Participate in Calls for Tenders, manage technical and commercial aspects, and negotiate commercial points"
      ]
    }
  ]
};


// Some projects you have worked on

const latestProjects = {
  title: "Latest Projects",
  subtitle: "Projects completed in the OpenClassrooms Web Integrator course",
  projects: [
    {
      image: require("./assets/images/Kasaimmobilier.webp"),
      projectName: "kasa Immobilier",
      projectDesc:
        "development of a Front-End of a real estate rental siteweb with React. ",
      projectDesc2: "🖋️ L'objectif a été de reloocker et refondre le site web “Kasa”en un site dynamique avec  JavaScript / React pour le Front-End et Node.js pour le Back-End. J'ai installé les produits : Npm, React “App” et “Router”, et Node.js. J'ai développé en HTML, CSS et JavaScript/REACT.",
        footerLink: [
        {
          name: emoji("🔗 source github "),
          url: "https://github.com/liujiaodaliao/Kasa_location_immobiliere_avec_React_P8.git"
        }
        //  we can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/724-Events.webp"),
      projectName: "724-Events",
      projectDesc: "Debug an event planning agency website with React. ",
      projectDesc2: "🖋️ L'objectif a été de modifier le front-end d’une application pour avoir une expérience de correction et modification du code. J'ai installé les produits :  Testt Driven Developpement, React Developer Tool . J'ai développé en HTML, CSS et JavaScript/REACT et Node.js.",
      footerLink: [
        {
          name: emoji("🔗 source github "),
          url: "https://github.com/liujiaodaliao/724-Events_p10.git"
        }
      ]
    },
    {
      image: require("./assets/images/ArgentBank.webp"),
      projectName: "ArgentBank",
      projectDesc:
        "Implement the front-end of a banking application with React. ",
      projectDesc2: "🖋️ L'objectif a été de développer le front-end d’une application bancaire en ligne pour créer une expérience utilisateur dynamique et réactive. J'ai installé les produits : Npm, React, Redux, Nodes.js. J'ai développé en HTML, CSS et JavaScript/REACT, REDUX et Swagger.",
        footerLink: [
        {
          name: emoji("🔗 source github "),
          url: "https://github.com/liujiaodaliao/ArgentBank_p11.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle: "Nearing completion of the Network Integrator Training Program",

  achievementsCards: [
    {
      title: "Openclassrooms: development Web Integrator",
      subtitle:
        "Nearing completion of the Network Integrator Training Program.",
      image: require("./assets/images/openclassroomslogo.webp"),
      imageAlt: "openclassrooms logo",
      footerLink: [
        {
          name: "School Certificate",
          url: "https://drive.google.com/file/d/1bEgNtngqic0LdqB86iSUMeLK4FWiT-R4/view?usp=sharing"
        },
        {
          name: "Mentor Assessment",
          url: "https://drive.google.com/file/d/1BnJd3isC52_gvfWflzP7gdPjj7tlZ4wE/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// contact Section

const contactInfo = {
  title: emoji("Contact Me 📲"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+33-0000000000",
  email_address: "liujiaodaliao2021@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  latestProjects,
  achievementSection,
  contactInfo,
};
