import { BsShopWindow } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";
import { FaSackDollar } from "react-icons/fa6";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/TopHeader";
import Services from "../components/reusable/Services";
import Team1 from "../assets/images/team-1.png";
import Team2 from "../assets/images/team-2.png";
import Team3 from "../assets/images/team-3.png";
import FirstSectionAbout from "../components/About/FirstSectionAbout";
import NumberOfUsers from "../components/About/NumberOfUsers";
import OurTeam from "../components/About/OurTeam";

const About = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "About", to: "/about" },
  ];
  const numberOfUsers = [
    {
      icon: <BsShopWindow className="p-1" />,
      number: "10.5k ",
      text: "Sallers active our site",
    },
    { icon: <CiDollar />, number: "33K ", text: "Monthly Product Sale" },
    {
      icon: <TbShoppingBag className="p-0.5" />,
      number: "45.5K ",
      text: "Customer active in our site",
    },
    {
      icon: <FaSackDollar className="p-1" />,
      number: "25K ",
      text: "Anual gross sale in our site",
    },
  ];
  const TeamData = [
    { title: "Tom Cruise", position: "Founder & Chairman", image: Team1 },
    { title: "Emma Watson", position: "Managing director", image: Team2 },
    { title: "Will Smith", position: "product designer", image: Team3 },
  ];
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:mt-20 mt-8 lg:mb-[130px] mb-12 grid lg:gap-[42px] gap-12">
        <div className="lg:p-inline p-4">
          <PathPages lastIndex={1} links={links} />
        </div>
        <div className="grid lg:gap-[140px] gap-12">
          <FirstSectionAbout />
          <div className="lg:p-inline px-4 grid lg:gap-[140px] gap-12">
            <NumberOfUsers data={numberOfUsers} />
            <OurTeam data={TeamData} />
            <Services />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
