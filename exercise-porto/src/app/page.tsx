import AtomBreakline from "@/components/atoms/a_breakline";
import OrganismsNavbar from "@/components/organisms/o_navbar";
import OrganismsSkill from "@/components/organisms/o_skill";
import OrganismsWelcome from "@/components/organisms/o_welcome";
import { faDatabase, faMobileScreen, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const menuItem = [
    { title: "About Me", target: "#aboutSection" },
    { title: "Experience", target: "#experienceSection" },
    { title: "Education", target: "#educationSection" },
    { title: "Portfolio", target: "#portfolioSection" },
    { title: "Contact", target: "#contactSection" },
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

  return (
    <div className="">
      <OrganismsNavbar menuItem={menuItem} appName="FlazeFy"/>
      <OrganismsWelcome 
        username="Leo" job="Software Engineer" 
        yearsExp={2} shortBio={"I code web and mobile applications. People know me as <b>passionate</b> and <b>curious</b>, always eager to <b>explore</b> new knowledge."}
        educationInfo="I graduated in 2024 with a degree in <b>Software Engineering</b> from <b>Telkom University</b>. I'm currently studying Fullstack JavaScript Web Development at <b>Purwadika</b> and improving my English skills at <b>English First</b>"
        profilePic='/profile_pic.jpg'
      />
      <AtomBreakline length={4}/>
      <OrganismsSkill skillItem={skillItem}/>
    </div>
  );
}
