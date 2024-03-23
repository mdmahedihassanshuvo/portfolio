import { useNavigation } from "react-router-dom";
import person2 from "../../assets/Person/person2.png";
import { Helmet } from "react-helmet-async";
import Loading from "../Loading/Loading";

const About = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading />;
  }
  return (
    <div className="md:py-[40px] p-[20px]">
      <Helmet title="MH - About Me" />
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-[100px] md:mx-[100px]">
        <div className="md:w-1/2 md:mb-0 mb-5">
          <img
            className="md:w-[80%] md:h-[457px] h-40 rounded-2xl float-right"
            src={person2}
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-4xl font-bold">
            <span className="text-blue-600">About</span> Me
          </h3>
          <hr className="border-2" />
          <div className="md:mt-5 mt-2 md:space-y-4">
            <p className="md:text-3xl text-xl font-bold">
              Hi I'm, <br />
              Md. Mahedi Hassan Shuvo
            </p>
            <p className="md:text-2xl text-lg font-medium">
              FRONTEND WEB DEVELOPER IN DHAKA, BANGLADESH
            </p>
            <p className="text-lg font-normal text-justify">
              As a web developer, my goal is to create engaging and intuitive
              web applications that enhance user experience. I’m eager to expand
              my skills and explore new technologies to bring innovative ideas
              to life. My focus is on clean code, attention to detail, and
              passion for problem-solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
