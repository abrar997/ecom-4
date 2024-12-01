import Footer from "../components/reusable/Footer";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/reusable/TopHeader";
import Services from "../components/reusable/Services";
import FirstSectionAbout from "../components/About/FirstSectionAbout";
import NumberOfUsers from "../components/About/NumberOfUsers";
import OurTeam from "../components/About/OurTeam";
import { NumberOfUsersData, TeamData } from "../assets/mockData";
import Header from "../components/reusable/Header";

const About = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "About", to: "/about" },
  ];

  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:mt-20 mt-8 lg:mb-[130px] mb-12 grid lg:gap-[42px] gap-8">
        <div className="lg:p-inline p-4">
          <PathPages lastIndex={1} links={links} />
        </div>
        <div className="grid lg:gap-[140px] gap-12">
          <FirstSectionAbout />
          <div className="lg:p-inline px-4 grid lg:gap-[140px] gap-12">
            <NumberOfUsers data={NumberOfUsersData} />
            <OurTeam data={TeamData} />
          </div>
          <Services />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
