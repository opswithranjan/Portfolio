/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Image assets (ESM imports, bundled and hashed by Vite)
import pietLogo from "./assets/images/piet.jpg";
import csLogo from "./assets/images/cs.png";
import fev11Logo from "./assets/images/fev11.jpeg";
import mediusLogo from "./assets/images/medius.avif";
import medius1Image from "./assets/images/medius1.png";
import devopsfolioImage from "./assets/images/devopsfolio.png";
import msftExpertImage from "./assets/images/microsoft-certified-expert-badge.png";
import azureAdminImage from "./assets/images/azure-administrator.png";
import ckaImage from "./assets/images/CKA.png";
import cksImage from "./assets/images/CKS.png";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ranjan Singh",
  title: "Hi all, I'm Ranjan",
  subTitle: emoji(
    "A DevSecOps engineer turned Senior Technical Support & Customer Success Engineer 🚀. I build secure, scalable cloud infrastructure with Docker, Kubernetes, Terraform, and AWS/GCP/Azure, and now help teams ship reliably by solving complex challenges across CI/CD, package management, and DevOps integrations at Cloudsmith."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1ARoC2Lph1zdj57yz_xajGLuWjxtAxsOL?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/opswithranjan",
  linkedin: "https://www.linkedin.com/in/ranjan-singh-335845206/",
  gmail: "singhranjan9024@gmail.com",
  gitlab: "https://gitlab.com/opswithranjan",
  facebook: "https://www.facebook.com/lifeofranjan",
  medium: "https://medium.com/@opswithranjan",
  stackoverflow: "", // TODO: add your real Stack Overflow profile URL, or leave empty to hide the icon
  instagram: "https://instagram.com/simply.ranjan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVSECOPS ENGINEER & CUSTOMER-OBSESSED SENIOR SUPPORT ENGINEER WHO TURNS COMPLEX CLOUD PROBLEMS INTO SHIPPED SOLUTIONS",
  skills: [
    emoji(
      "⚡ Automate and harden CI/CD pipelines so teams ship faster, safer, and more reliably."
    ),
    emoji(
      "⚡ Solve complex customer challenges across DevOps, package/artifact management, and cloud integrations."
    ),
    emoji(
      "⚡ Bridge engineering and customers, turning tricky technical issues into clear fixes and lasting success."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Automation",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Collaboration",
      fontAwesomeClassname: "fas fa-users"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "fab fa-ansible"
    },
    {
      skillName: "Bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Poornima Institute of Engineering and Technology",
      logo: pietLogo,
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2018 - July 2022",
      desc: "Participated in the research of DevSecops Trends and published 3 papers.",
      descBullets: [
        "Ranked top 10% in the program.",
        "Took courses about Software Engineering, Web Security, Operating Systems etc."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Automation", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Security",
      progressPercentage: "80%"
    },
    {
      Stack: "Collaboration",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Technical Support Engineer",
      company: "Cloudsmith",
      companylogo: csLogo,
      date: "August 2024 - Present",
      desc: "I'm a Senior Technical Support & Customer Success Engineer at Cloudsmith, where I solve complex customer challenges across CI/CD, package management, and DevOps integrations. I also build internal tooling and automation that improves how features are supported, helping customers get a smoother and more reliable experience.",
    },
    {
      role: "DevSecOps Engineer",
      company: "Fev India Pvt Ltd",
      companylogo: fev11Logo,
      date: "April 2022 - August 2024",
      desc: "I streamlined the development and operations pipeline, ensuring efficient deployment and management of software solutions critical to automotive design, production, and testing processes. I ensured the secure development and deployment of automotive software solutions, maintaining best-in-class security practices within the DevOps lifecycle and mitigating cybersecurity risks in line with industry standards and regulations.",
    },
    {
      role: "DevSecOps Engineer",
      company: "Medius Technologies Pvt Ltd",
      companylogo: mediusLogo,
      date: "Jan 2021 - Apr 2022",
      desc: "I spearheaded the integration of development, security, and operations, ensuring the secure and efficient deployment of our cloud-based debt management solutions. I maintained security controls, conducted risk assessments, automated deployment processes, and guided the team in implementing secure coding practices."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set "true" only when GitHub data is fetched at build time (see README env setup); otherwise it triggers a failed /profile.json fetch
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "STARTUPS AND COMPANIES I'VE HELPED BUILD THEIR TECH",
  projects: [
    {
      image: csLogo,
      projectName: "Serviceability at Cloudsmith",
      projectDesc: "An internal serviceability initiative I designed and built at Cloudsmith to make every product feature easier to support. It pairs a lightweight review framework with automation that streamlines support workflows, surfaces health signals, and keeps quality high as features ship. The goal is simple: features that reach customers ready to support, with clear visibility instead of guesswork.",
      footerLink: [
        {
          name: "About Cloudsmith",
          url: "https://cloudsmith.com/"
        }
      ]
    },
    {
      image: medius1Image,
      projectName: "TheMedius.ai",
      projectDesc: "Medius is at the forefront of debt management and envisions advancing the economy by empowering financial institutions with practical, technologically advanced solutions for managing their loan accounts. Our cloud platform, built on award-winning machine learning and a robust strategy engine, helps resolve NPAs and provides an empathetic collection experience. Our team of recovery attorneys developed a technology that allows banks not only to foresee but also control risks, thanks to automated pre-litigation and litigation services powered by pre-approved terminology. We're inspired to reduce risks by providing impactful solutions, and we've built a fully automated cloud collection software trusted by recognized banks, NBFCs, and lenders to deliver end-to-end, SaaS-based, collection management tools integrated with legal workflows.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://themedius.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: devopsfolioImage,
      projectName: "DevSecOpsFolio",
      projectDesc: "A clean, beautiful and responsive portfolio template for DevSecOps Engineers! It allows users to showcase their skills, education, work experience, open-source projects, achievements, blogs, and more. The template, built with advanced technologies like React and Node.js, can be personalized as desired, with an ability to link to GitHub and Medium accounts. It is highly user-friendly, providing instructions for setting up and running the project locally for development and testing. The portfolio can also be dockerized for efficient deployment​.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/opswithranjan/Portfolio"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Azure Certified DevOps Engineer Expert",
      subtitle:
        "Demonstrated mastery in implementing DevOps practices on the Microsoft Azure platform, showcasing advanced skills in automating workflows, optimizing delivery pipelines, and ensuring seamless collaboration between development and operations teams.",
      image: msftExpertImage,
      imageAlt: "Microsoft Certified DevOps Engineer Expert badge",
      footerLink: [
        // TODO: add your real AZ-400 verification/credential URL, then restore the button:
        // {name: "Verify", url: "https://learn.microsoft.com/api/credentials/share/..."}
      ]
    },
    {
      title: "Microsoft Azure Administrator Associate",
      subtitle:
        "Validated proficiency in deploying, managing, and maintaining Azure resources, demonstrating expertise in implementing and monitoring cloud solutions on the Microsoft Azure platform.",
      image: azureAdminImage,
      imageAlt: "Microsoft Azure Administrator Associate badge",
      footerLink: [
        // TODO: add your real AZ-104 verification/credential URL, then restore the button:
        // {name: "Verify", url: "https://learn.microsoft.com/api/credentials/share/..."}
      ]
    },
    
    {
      title: "Linux Foundation Certified Kubernetes Administrator (CKA)",
      subtitle: "Validated proficiency in Kubernetes administration, showcasing skills in deploying and managing containerized applications.",
      image: ckaImage,
      imageAlt: "Certified Kubernetes Administrator (CKA) badge",
      footerLink: [
        // TODO: add your real CKA verification URL (credly.com/badges/...), then restore the button:
        // {name: "Verify", url: "https://www.credly.com/badges/..."}
      ]
    },
    {
      title: "Linux Foundation Certified Kubernetes Security Specialist (CKS)",
      subtitle: "Recognized expertise in securing Kubernetes clusters and ensuring robust containerized application environments.",
      image: cksImage,
      imageAlt: "Certified Kubernetes Security Specialist (CKS) badge",
      footerLink: [
        // TODO: add your real CKS verification URL (credly.com/badges/...), then restore the button:
        // {name: "Verify", url: "https://www.credly.com/badges/..."}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set "true" only when MEDIUM_USERNAME is configured at build time; otherwise it triggers a failed /blogs.json fetch
  // TODO: add your own posts here, or set MEDIUM_USERNAME in env to auto-fetch, then flip display to true
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  // TODO: add your own talks here, then flip display to true
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // TODO: add your podcast embed link(s) here, then flip display to true
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9001002191",
  email_address: "singhranjan9024@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", // TODO: your X/Twitter username without @, then set display to true
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
