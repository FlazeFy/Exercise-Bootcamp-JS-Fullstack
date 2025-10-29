import AtomBreakline from "@/components/atoms/a_breakline";
import MoleculeFooter from "@/components/molecules/m_footer";
import OrganismsContact from "@/components/organisms/o_contact";
import OrganismsLatestWork from "@/components/organisms/o_latest_work";
import OrganismsNavbar from "@/components/organisms/o_navbar";
import OrganismsSkill from "@/components/organisms/o_skill";
import OrganismsWelcome from "@/components/organisms/o_welcome";
import OrganismsWorkExperience from "@/components/organisms/o_work_experience";
import { faDatabase, faMobileScreen, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const menuItem = [
    { title: "About Me", target: "#aboutSection" },
    { title: "Experience", target: "#experienceSection" },
    { title: "Education", target: "#educationSection" },
    { title: "Portfolio", target: "#portfolioSection" }
  ]
  
  const skillItem = [
    { 
      title: "Back-End Development",
      content: "This is my main focus in software development. I code using PHP, Go, and JavaScript. For frameworks, I usually use Laravel, CodeIgniter, Echo (Go), and Express.",
      total_project: 6,
      total_certificate: 5,
      icon: faDatabase
    },
    {
      title: "Front-End Development",
      content: "When it comes to developing front-end applications, I use HTML, CSS, and JavaScript. The frameworks I typically work with are Next.js and React.js.",
      total_project: 4,
      total_certificate: 2,
      icon: faPaintBrush
    },
    {
      title: "Mobile Development",
      content: "I also develop mobile applications using Flutter, with Dart as the programming language.",
      total_project: 1,
      total_certificate: 2,
      icon: faMobileScreen
    }
  ];

  const workItem = [
    { 
      title: "PinMarker",
      content: "Location marker apps",
      imagePath: './'
    },
    {
      title: "GudangKu",
      content: "Inventory management apps",
      imagePath: './'
    },
    {
      title: "MyRide",
      content: "Vehicle & trip management apps",
      imagePath: './'
    }
  ];

  const contactItem = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/leonardho-rante-sitanggang/"
    },
    {
      title: "Github",
      url: "https://github.com/FlazeFy"
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/leonardhorante_08/"
    }
  ]

  const workExperienceItem = [
    {
      company: "PT. Astragraphia Information Technology, South Jakarta",
      role: "IT Developer",
      period: "Jan 2024 - Now",
      type: "Full-Time | Hybrid",
      description: "As IT Developer (Contract) placed to work with PT Telekomunikasi Selular (Telkomsel) IT Support Business Division, focusing on regional Jabodetabek. Participated in the development of DACITA, a monitoring application for all operational data centers across Indonesia. Worked alongside 4 Developer. The application featured a data center dashboard and statistics, asset management, and data center documentation management system. Utilized Laravel for full-stack development and PostgreSQL for database management. Additionally, created and executed test cases for some features using Postman scripts.",
      color: '#2C7A7B'
    },
    {
      company: "Informatics Laboratory Telkom University, Bandung",
      role: "Practicum Assistant Of Web Programming",
      period: "Sep 2023 - Jan 2024",
      type: "Part-Time | Onsite",
      description: "As Practicum Assistant at the Informatics Laboratory, responsible for managing, reviewing assignments, grading, and providing guidance for 3 classes in the Web Development course. Taught fundamental web programming, the implementation of MVC using Laravel, database modeling with ERD, Rest API using Express JS, and MySQL for database management.",
      color: '#80cd82'
    },
    {
      company: "Informatics Laboratory Telkom University, Bandung",
      role: "Practicum Assistant Of Mobile Programming",
      period: "Feb 2023 - Jun 2023",
      type: "Part-Time | Onsite",
      description: "As Practicum Assistant at the Informatics Laboratory, responsible for managing, reviewing assignments, grading, and providing guidance for 2 classes in the Mobile Development course. Taught fundamental mobile programming, Flutter for the mobile framework, Rest API Fetching, and Firebase Realtime Database for database management.",
      color: '#f9f871'
    },
    {
      company: "Informatics Laboratory Telkom University, Bandung",
      role: "Practicum Assistant Of Database",
      period: "Feb 2023 - Jun 2023",
      type: "Part-Time | Onsite",
      description: "As Practicum Assistant at the Informatics Laboratory, responsible for managing, reviewing assignments, grading, and providing guidance for 3 classes in the Database course. Taught fundamental database modeling using ERD and performed SQL querying with Oracle Database.",
      color: '#ff8848'
    },
    {
      company: "Informatics Laboratory Telkom University, Bandung",
      role: "Practicum Assistant Of Web Programming",
      period: "Sep 2022 - Jan 2023",
      type: "Part-Time | Onsite",
      description: "As Practicum Assistant at the Informatics Laboratory, responsible for managing, reviewing assignments, grading, and providing guidance for 2 classes in the Web Development course. Taught fundamental web programming, the implementation of MVC using CodeIgniter, database modeling with ERD, Rest API using Express JS, and MySQL for database management.",
      color: '#9ba0cc'
    },
    {
      company: "Bandung Techno Park",
      role: "Laravel Developer",
      period: "Jul 2022 - Aug 2022",
      type: "Internship | Hybrid",
      description: "As Laravel Developer assigned to work with Eazy Team, contributing to the development of a Learning Management System for Universitas Indonesia Maju. Utilized Laravel for full-stack development and PostgreSQL for database management. Worked alongside 2 intern students to develop a feature for PDF document export.",
      color: '#94f7b2'
    } 
  ]

  return (
    <div className="">
      <OrganismsNavbar menuItem={menuItem} appName="FlazeFy"/>
      <AtomBreakline length={2}/>
      <OrganismsWelcome 
        username="Leo" job="Software Engineer" 
        yearsExp={2} shortBio={"I code web and mobile applications. People know me as <b>passionate</b> and <b>curious</b>, always eager to <b>explore</b> new knowledge."}
        educationInfo="I graduated in 2024 with a degree in <b>Software Engineering</b> from <b>Telkom University</b>. I'm currently studying Fullstack JavaScript Web Development at <b>Purwadika</b> and improving my English skills at <b>English First</b>"
        profilePic='/profile_pic.jpg'
      />
      <AtomBreakline length={4}/>
      <OrganismsSkill skillItem={skillItem}/>
      <AtomBreakline length={4}/>
      <OrganismsLatestWork workItem={workItem}/>
      <AtomBreakline length={4}/>
      <OrganismsWorkExperience workExperienceItem={workExperienceItem}/>
      <AtomBreakline length={4}/>
      <OrganismsContact contactItem={contactItem} address="South Jakarta, DKI Jakarta" email="flazen.edu@gmail.com" bodyEmail="Hii, Leo. I'm ..."/>
      <AtomBreakline length={4}/>
      <MoleculeFooter appName="FlazeFy"/>
    </div>
  );
}
