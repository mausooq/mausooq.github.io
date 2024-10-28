'use client'

import PreviewImage from "@/components/Preview-Image";
import useScreenSize from "@/hooks/useScreenSize";
import { useWindow } from "@/hooks/useWindow";
import { Chip } from "@nextui-org/chip";
import { Accordion, AccordionItem, Card, CardBody, CardFooter, CardHeader, Divider, Image, Link } from "@nextui-org/react";
import NextImage from "next/image";
import SideMenu from "./components/side-menu";

export default function Home() {
  const technologies: Record<string, string[]> = {
    language: ["HTML", "Javascript", "TypeScript", "Python", "GO",],
    // vue: ["Vue 2/3", "Vuex", "Vue Router", "Nuxt.js", "Vitepress"],
    style: ["Tailwind", "Bootstrap", "CSS",],
    react: ["React", "Nuxt.js", "Redux", "React-Query",],
    build: ["Vite", "Webpack",],
    // graph: ["Three.js", "Echarts",],
    backend: ["Node.js", "Django", "Express.js", "PHP", "MySQL", "MongoDB", "Docker",],
    tools: ["Git",],
    AppDev:["React Native", "Android Studio", "SupaBase","FireBase"],
    DevBoard:["Arduino", "raspberry pi", "Esp32", "STM-32"],
    Business_Applications: ["Microsoft PowerApps", "Sharepoint", "Salesforce"],
    Blockchain: ["Smart Contracts", "Hyperledger Fabric"," Etherium", "Truffle", "Ganache"],
    // platform: ["Cloudflare", "Vercel",]

  }

  const chipTheme: ("default" | "primary" | "secondary" | "success" | "warning" | "danger")[] = ["primary", "secondary", "success", "warning", "danger", "default"]
  const chipVariants: ("solid" | "bordered" | "flat" | "faded" | "shadow")[] = ["solid", "bordered", "flat", "faded", "shadow"]

  const experienceList = [
    {
      title: "Intern",
      company: "BEEKODER Technologies Pvt. Ltd. ",
      time: "October - November 2023",
      desc: "Enhanced problem-solving skills and knowledge of data structures and algorithms in Java. Utilized Java for backend application development. Gained experience with SQL for database management."
    },
    // {
    //   title: "Intern",
    //   company: "Samagra Technologies ",
    //   time: "January 2024",
    //   desc: "Designed and deployed blockchain networks on both Hyperledger Fabric and Ethereum. Implemented smart contracts to ensure secure and tamper-proof data management. Analyzed and compared throughput and latency metrics across blockchain networks. Created graphical comparisons showing the advantages of private blockchain."
    // },
    {
      title: "Freelancer Web Developer ",
      company: "EyeqDotNet ",
      time: "2023",
      desc: "Developed a secure login page for EyeQdotnet’s bug bounty platform. Implemented a dynamic leaderboard section to enhance user engagement. Integrated a merchandise shop seamlessly into EyeQdotnet’s website."
    }
  ];  

  const sideProjects = [
    {
      title: "Student Achievement Management System",
      desc: " A web app for tracking academic progress, extracurricular activities, projects, and internships. Features include a secure database schema, user authentication with password encryption, session management, and admin controls for profile management and activity monitoring. Promotes self-awareness and continuous improvement.",
      preview: "Project1.jpg",
      github: "https://github.com/mausooq/SAMS"
    },
    {
      title: "Invest-IQ",
      desc: "Full stack crypto app developed using React Native and Expo. Features include crypto management for tracking investments, real-time data integration with Rapid API for live prices and market updates, user profiles for personalized settings, and secure wallet integration for managing digital assets.",
      preview: "Project2.jpg",
      github: "https://github.com/mausooq/InvestIQ"
    },
    {
      title :"Learn Lux",
      desc: "A MERN stack course selling app where admins can add, edit courses, and view users, while users can enroll in courses.",
      preview: "Project3.jpg",
      github: "https://github.com/mausooq/Learn-Lux"  
    },    
    {
      title: "Embed Club - Website",
      desc: "Contributed to the development of the Embed Club website, a platform dedicated to embedded systems education.",
      preview: "Project4.png",
      open: "https://embedclub.org",
      // github:"https://github.com/mausooq/embed-club"
    },
    {
      title: "Clinical Trials",
      desc: "Developed a platform using Flask to compare public (Ethereum) and private (Hyperledger) blockchains in clinical trials.",
      preview: "Project5.jpg",
      github:"https://github.com/mausooq/blockchain"
    },
    // {
    //   title: "Vite Vue2 Starter Template",
    //   desc: "vite-vue2-starter is a template for quickly starting Vue.js 2 projects. Built on the Vite v5 build tool",
    //   github: "https://github.com/mausooq/embed-club"
    // }
  ]

  const { isSmallScreen, showSideMenu } = useScreenSize();
  const _window = useWindow()

  return (
    <>
      {showSideMenu && <SideMenu />}
      <div className="mx-auto w-full text-center mt-16 md:flex justify-center gap-12">
        <div className="avatar hover:scale-110 duration-300 flex justify-center items-center">
          <Image className="rounded-tl-lg rounded-br-lg" width={200} height={200} src="/avatar.jpeg" alt="avatar" as={NextImage} />
        </div>
        <div>
          <h1
            className="hover:text-shadow-3 m-0 font-heading font-black transition-all duration-300 text-primary text-4xl md:text-5xl mt-4">
            Abdul Mausooq</h1>
          <div className="flex flex-col gap-4 font-extrabold text-lg md:text-left mt-4">
            <p>FullStack Developer 💻</p>
            <p>Embeded System 🚀</p>
            <p>Beginner App Developer 🤯</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-2">
        <h4 className="hover:text-shadow-3 m-0 font-heading text-lg font-black transition-all duration-300">A
          bit about me</h4>
        <p>Dedicated software developer with a solid background in web development, app development, and development
        boards. Skilled in developing responsive web applications and real-time systems. Adept in various programming
        languages and frameworks, ready to bring technical expertise and enthusiasm to a forward-thinking team</p>
      </div>
      <div className="px-4 mt-4 w-full">
        <h4
          className="hover:text-shadow-3 m-0 font-heading text-lg font-black tracking-[-0.1rem] transition-all duration-300">
        </h4>
        <Accordion variant="splitted" selectionMode="multiple" defaultExpandedKeys={["technologies and tools", "personal traits"]}>
          <AccordionItem
            title="Technologies and Tools"
            key="technologies and tools"
            aria-label="technologies and tools"
          >
            {Object.keys(technologies).map((key) => (
              <div key={key} className="flex flex-wrap gap-2 mb-2">
                {technologies[key].map((tech) => (
                  <Chip
                    key={tech}
                    color={chipTheme[Math.floor(Math.random() * chipTheme.length)]}
                    variant={chipVariants[Math.floor(Math.random() * chipVariants.length)]}
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
            ))}
          </AccordionItem>
          <AccordionItem
            title="Personal Traits"
            key="personal traits"
            aria-label="Personal Traits"
          >
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
            🎓 <span className="font-bold">Aspiring Computer Scientist</span>:Dedicated to mastering the world of technology and software development.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
            💻<span className="font-bold">Web Development Enthusiast</span>: Passionate about creating responsive and user-friendly web applications.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🦆<span className="font-bold">Work-Life Balance Advocate</span>: Valuing work-life balance, I prioritize maintaining harmony between professional and personal life.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🐸<span className="font-bold">Technical Excellence Pursuer</span>: Detail-oriented and constantly striving for excellence in technical implementations, I stay updated with the latest advancements in the field.
            </p>

            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
              🐲<span className="font-bold">AI Technology Follower</span>: I'm particularly interested in AI technology, especially in how it can be utilized to enhance work efficiency. I enjoy experimenting with various AI tools and staying updated on the latest advancements in the field.
            </p>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="my-12 px-4 w-full" id="experience">
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Experience</h1>

        <Accordion selectionMode="multiple" defaultExpandedKeys={experienceList.map((exp) => exp.title)}>
          {experienceList.map((exp, idx) => (
            <AccordionItem
              title={exp.title}
              subtitle={exp.company + exp.time}
              key={exp.title}
              aria-label={exp.title}
            >
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 leading-loose">
                {exp.desc}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div >

      <div className="mb-12 px-4 w-full" id="education">
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Education</h1>
        <div>
          <h3 className="text-2xl font-bold">Bachelor of Computer Science Engineering</h3>
          <p className="text-lg">P.A. College Of Engineering (2024 - 2025) </p>
          <p className="text-lg">GPA 8.8 </p>
        </div>
      </div>

      <div className="mb-12 px-4" id="side-projects" >
        <h1
          className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
          Side Projects</h1>
        <div className="flex flex-wrap gap-4">
          {
            sideProjects.map((project) => (
              <Card className="md:w-[300px] w-full" key={project.github}>
                <CardHeader className="flex gap-3">
                  <h2 className="text-md">{project.title}</h2>
                </CardHeader>
                <Divider />
                <CardBody>
                {project.preview && _window?.self === _window?.top && !isSmallScreen ? (
                    <div className="flex gap-2 h-[400px]">
                      <p className="text-sm w-1/3 text-gray-500 dark:text-gray-400 leading-loose">{project.desc}</p>
                      <PreviewImage url={project.preview} />
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-loose">{project.desc}</p>
                  )}
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-3">
                     <Link
                    isExternal
                    showAnchorIcon
                    href={project.preview}
                    isDisabled={!project.preview}
                  >
                    Preview
                  </Link>
                {project.github && (
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.github}
                  >
                    GitHub
                  </Link>
                )}
                {project.open && (
                  <Link
                    isExternal
                    showAnchorIcon
                    href={project.open}
                  >
                    Open
                  </Link>
                )}
                {!project.github && !project.open && (
                  <Link
                    isExternal
                    showAnchorIcon
                    href="#"
                    isDisabled={true} 
                  >
                    Open
                  </Link>
                )}
              </CardFooter>
              </Card>
            ))
          }
        </div >
      </div >
    </ >
  );
}
