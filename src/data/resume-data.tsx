// import ConsultlyLogo from "../images/logos/consultly.svg";
// import AmbitLogo from "../images/logos/ambit.png";
// import BarepapersLogo from "../images/logos/barepapers.svg";
// import BimLogo from "../images/logos/bim.png";
// import CDGOLogo from "../images/logos/cdgo.png";
// // import ClevertechLogo from "../images/logos/clevertech.png";
// import EvercastLogo from "../images/logos/evercast.svg";
// import Howdy from "../images/logos/howdy.png";
// import JarockiMeLogo from "../images/logos/jarocki.svg";
// import JojoMobileLogo from "../images/logos/jojomobile.png";
// import MonitoLogo from "../images/logos/monito.svg";
// import MobileVikingsLogo from "../images/logos/mv.png";
// import NSNLogo from "../images/logos/nsn.svg";
// import ParabolLogo from "../images/logos/parabol.svg";
// import TastyCloudLogo from "../images/logos/tastycloud.png";
// import YearProgressLogo from "../images/logos/yearprogress.svg";
// import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { DevToIcon } from "@/components/icons/DevToIcon";

export const RESUME_DATA = {
  name: "Manjula R",
  initials: "MR",
  location: "Chennai,TN,IST",
  locationLink: "https://www.google.com/maps/place/Chennai,+Tamil+Nadu/@13.0473169,79.8793343,10z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0826802!4d80.2707184!16zL20vMGM4dGs?entry=ttu",
  about:
  "Proficient in implementing robust, automated infrastructure and deployment strategies to ensure seamless product delivery",
  summary:
  "Motivated DevOps Engineer with 2+ years' hands-on experience automating and optimizing deployment pipelines across diverse platforms. Skilled in problem-solving and adapting to dynamic environments, adept at driving productivity through workflow enhancements. Passionate about embracing emerging technologies for creating scalable, secure systems, committed to continuous learning and improvement.",
  avatarUrl: "https://avatars.githubusercontent.com/u/100277950?s=400&u=4c7dee485274ff3d74eb3ad93282f1bb4461ab70&v=4",
  personalWebsiteUrl: "https://manjula.fyi",
  contact: {
    email: "manjula.rajamani@protonmail.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/manjularajamani",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/manjula-rajamani",
        icon: LinkedInIcon,
      },
      {
        name: "Dev.to",
        url: "https://dev.to/manjularajamani",
        icon: DevToIcon,
      },
    ],
  },
  education: [
    {
      school: "AVS College of Engineering",
      degree:"Bachelor's Degree in Electronic and Communication Engineering",
      start: "2016",
      end: "2020",
    },
  ],
  certifications: [
    {
      title: "AWS Certified DevOps Engineer - Professional",
      issuingOrganization: "Amazon Web Services (AWS)",
      start: "2023",
      end: "2026",
    },
  ],
  awardsandachievements: [
    {
      title: "Employee of the Month - SIT",
      organization: "itTRIDENT",
      date: "Sep 2022",
      description: "Received recognition for exceptional contributions to the seamless deployment of applications on AWS infrastructure, demonstrating a commitment to excellence in optimizing deployment workflows",
    },
  ],
  work: [
    {
      company: "itTRIDENT",
      link: "https://ittrident.com/",
      badges: [],
      title: "DevOps Engineer",
      start: "2022",
      end: "Present",
      description:
         "Managed AWS cloud infrastructure, maintaining EC2 instances, S3 buckets, configuring ECS and EKS, and optimizing VPC settings. Automated application deployments via AWS cloud-native pipeline, reducing deployment time significantly. Built AWS infrastructure with CloudFormation and Terraform for IaC. Implemented Amazon Route 53 as SMTP server integrating SPF and DKIM for secure email transactions. Managed IAM users, policies, and roles. Utilized Cloud Build YAML for deploying applications across various GCP services (Cloud Run, Cloud Storage, Compute Engine, Cloud Registry). Leveraged AWS CodeCommit, GCP's Source Repository, and GitHub for source code management. Configured SSL for domain-linked applications.",
    },
    {
      company: "itTRIDENT",
      link: "https://ittrident.com/",
      badges: [],
      title: "Junior DevOps Engineer",
      start: "2021",
      end: "2022",
      description:
        "In my role as a Junior DevOps professional, I've specialized in deploying open-source projects seamlessly. I've fine-tuned Docker setups and Docker Compose configurations to ensure smooth project launches. My expertise extends to orchestrating Kubernetes deployments through GitLab's CI/CD, showcased by setting up infrastructure on CentOS 8 servers efficiently. Using Jenkins pipelines, I've smoothly deployed React and Node.js applications onto EC2 instances, showcasing my prowess in agile deployment methods. Additionally, I've demonstrated my commitment to operational efficiency by crafting an efficient Ansible playbook for a forum application.",
    },
  ],
  skills: [
    "AWS",
    "GCP",
    "Azure",
    "Jenkins",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Fly.io",
  ],
  projects: [
    {
      title: "LUFI",
      techStack: [
        "Docker",
        "Docker compose"
      ],
      description: "Dockerized this temp file hosting site source",
      link: {
        href: "https://github.com/manjularajamani/lufi",
      },
    },
    {
      title: "FLUXBB",
      techStack: ["Ansible", "Terraform", "Hetzner"],
      description:
      "I orchestrated the seamless deployment of FluxBB forums on Hetzner using Terraform's Infrastructure as Code (IaC) in conjunction with Ansible for efficient configuration management.",
      link: {
        href: "https://github.com/manjularajamani/fluxbb-hetzner-deploy",
      },
    },
    {
      title: "HYPERTEXT-EDITOR",
      techStack: ["Docker"],
      description:
        "Dockerized the application and submitted a PR",
      link: {
        href: "https://github.com/manjularajamani/hypertext-editor",
      },
    },
    {
      title: "IRIS-WEB",
      techStack: ["Docker", "Helm", "AWS EKS"],
      description:
        "I spearheaded the drafting of a comprehensive Helm chart for the Iris-web application, actively contributing to its seamless deployment. Notably, my Helm chart for Iris-web was successfully merged into the repository, streamlining and enhancing the application's deployment process.",
      link: {
        href: "https://github.com/manjularajamani/iris-web",
      },
    },
    {
      title: "KANBAN-BOARD",
      techStack: ["AWS EKS", "Docker", "Terraform"],
      description:
        "Drafted a K8s YAML manifest for this full-stack application and deployed the webapp to a bare-metal (Dell OptiPlex 5090) k8s cluster to test out internally at our DC and later applied the manifest in an EKS cluster for production usage. Additionally, modularized the EKS cluster provisioning in a terraform module for importing into future projects",
      link: {
        href: "https://github.com/manjularajamani/kanban-board",
      },
    },
    {
      title: "MICROBIN",
      techStack: ["Fly.io", "Docker"],
      description: "Deployed the Micronbin application onto fly.io's micro VM infrastructure, ensuring its seamless operation within that environment.",
      link: {
        href: "https://github.com/manjularajamani/microbin",
      },
    },
    {
      title: "SRI IYYAPPA TRUST",
      techStack: [
        "AWS ECS",
        "GitHub Actions",
        "Docker"
      ],
      description:
        "Deployed a MERN (MongoDB, Express.js, React.js, Node.js) application on AWS ECS using GitHub Actions. Additionally, I configured ACM (AWS Certificate Manager) to ensure secure browsing access.",
      // link: {
      //   href: "https://parabol.co/",
      // },
    },
    {
      title: "VOLUNTEER MANAGEMENT APP",
      techStack: [
        "AWS ECS",
        "GitHub Action",
        "Docker",
        "Android",
        "IOS"
      ],
      description:
        "I orchestrated the deployment of the app on AWS ECS, ensuring its availability, while also overseeing the successful launch of Android and iOS versions on the Google Play Store and Apple App Store, expanding its accessibility across platforms.",
      // link: {
      //   href: "https://www.evercast.us/",
      // },
    },
    {
      title: "THEHIVE",
      techStack: ["Kubernetes", "Helm"],
      description:
        "I drafted Helm charts for TheHive application and submitted the pull request, contributing to the project's infrastructure enhancement.",
      link: {
        href: "https://github.com/manjularajamani/helm-charts/tree/thehive",
      },
    },
  ],
} as const;
