import Button from "../components/reusable/Button";
import Footer from "../components/reusable/Footer";
import Header from "../components/reusable/Header";
import PathPages from "../components/reusable/PathPages";
import TopHeader from "../components/reusable/TopHeader";

const NotFound = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "404 Error", to: "/notfound" },
  ];
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="lg:p-inline p-4 lg:mt-20 mt-8">
        <PathPages links={links} lastIndex={1} />
        <div className="flex flex-col lg:gap-10 gap-4 justify-center items-center lg:my-[140px] my-12">
          <h1 className="lg:text-[110px] text-5xl font-medium tracking-[3%]">
            404 Not Found
          </h1>
          <p>Your visited page not found. You may go home page.</p>
          <div className="lg:mt-20 mt-8">
            <Button text="Back to home page" to="/" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
