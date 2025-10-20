import OrganismsNavbar from "@/components/organisms/o_navbar";
import OrganismsSkill from "@/components/organisms/o_skill";
import OrganismsWelcome from "@/components/organisms/o_welcome";

export default function Home() {
  const menuItem = [
    { title: "About Me", target: "#aboutSection" },
    { title: "Experience", target: "#experienceSection" },
    { title: "Education", target: "#educationSection" },
    { title: "Portfolio", target: "#portfolioSection" },
    { title: "Contact", target: "#contactSection" },
  ]
  
  const skillItem = [
    { title: "FrontEnd Development", content: "asdsd"},
    { title: "BackEnd Development", content: "asdsd"},
    { title: "Mobile Development", content: "asdsd"},
  ]

  return (
    <div className="">
      <OrganismsNavbar menuItem={menuItem} appName="FlazeFy"/>
      <OrganismsWelcome 
        username="Leo" job="Software Engineer" 
        yearsExp={2} shortBio={"I code web and mobile applications. People know me as <b>passionate</b> and <b>curious</b>, always eager to <b>explore</b> new knowledge."}
        educationInfo="I graduated in 2024 with a degree in <b>Software Engineering</b> from <b>Telkom University</b>. I'm currently studying Fullstack JavaScript Web Development at <b>Purwadika</b> and improving my English skills at <b>English First</b>"
        profilePic='/profile_pic.jpg'
      />
      <OrganismsSkill skillItem={skillItem}/>
    </div>
  );
}
