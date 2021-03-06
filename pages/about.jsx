import Layout from "../components/layout";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <Layout>
      <div className={"p-6"}>
        <div className={"p-0 md:p-3 lg:p-6"}>
          <p className="mb-2 text-gray-500" style={{ fontSize: 25 }}>
            About DataNeuron
          </p>
          <p className="my-2 text-3xl md:text-5xl">
            At DataNeuron, our aim is to accelerate the development and provide
            explainability for AI.
          </p>
          <br />
          <p className="my-2 font-thin text-xl md:text-2xl">
            The supervised learning approach is predominant in AI, the need for
            labelled data has dramatically increased in order to remove the
            constraints when developing AI solutions. Companies moreover do not
            have a secure platform for data exchange and model creation. &nbsp;
            <span className={"text-blue-700"}>
              <Typewriter words={["We strive to be that platform."]} />
            </span>
          </p>
          <div className="my-10">
            <p className="my-3 text-gray-500" style={{ fontSize: 25 }}>
              Our Goals
            </p>
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3">
              <div
                className={
                  "border-2 border-gray-200 w-full p-3 flex flex-col items-center justify-between h-72 "
                }
              >
                <div className="flex justify-center space-x-1 mt-16">
                  <img
                    id={"img1"}
                    src={"/img/circle.gif"}
                    alt="circle"
                    className={"w-2/12"}
                    height={60}
                  />
                  <img
                    src="/img/circle.svg"
                    alt="circle"
                    className={"w-2/12"}
                    height={60}
                  />
                  <img
                    id={"img2"}
                    src={"/img/circle.gif"}
                    alt="circle"
                    height={60}
                    className={"w-2/12"}
                  />
                  <img
                    src="/img/circle.svg"
                    alt="circle"
                    height={60}
                    className={"w-2/12"}
                  />
                  <img
                    id={"img3"}
                    src={"/img/circle.gif"}
                    alt="circle"
                    height={60}
                    className={"w-2/12"}
                  />
                </div>
                <br />
                <div className="text-center text-lg mb-6">
                  Reduce Project Staffing by 70-90%.
                </div>
              </div>
              <div
                className={
                  "border-2 border-gray-200 w-full p-3 flex flex-col items-center justify-between h-72"
                }
              >
                <img
                  src="/img/meter1.gif"
                  width={240}
                  className={"mt-6"}
                  alt="meter"
                />
                <br />
                <div className="text-center text-lg">
                  200%-400% customers??? ROI from DataNeuron???s solution(s).
                </div>
              </div>
              <div
                className={
                  "border-2 border-gray-200 w-full p-3 flex flex-col items-center justify-between h-72"
                }
              >
                <img
                  src="/img/doc_ani.gif"
                  alt="meter"
                  className={"relative top-6"}
                />
                <br />
                <div className="text-center text-lg">
                  Increase efficiency by bringing 90%+ first-pass machine
                  accuracy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white w-full border-2"
        style={{
          background: "#2C2C2C",
        }}
      >
        <p className="w-full text-center py-3 text-lg">Backed By The Best</p>
        <div className="flex justify-center w-full">
          <div className="md:flex">
            <a
              href={"https://www.windrose.capital/"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={
                  "m-3 w-11/12 md:w-auto transform hover:scale-105 duration-500 "
                }
                src="/img/aboutus1.svg"
                alt="Windrose Captical"
              ></img>
            </a>
            <a
              href={"https://www.inventuslaw.com/"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={
                  "m-3 w-11/12 md:w-auto transform hover:scale-105 duration-500"
                }
                src="/img/aboutus2.svg"
                alt="Windrose Captical"
              ></img>
            </a>
          </div>
        </div>
        <p className="w-full text-center py-3 text-lg">Our Team</p>
        <div className="lg:flex justify-center mb-3 w-full">
          <div className="lg:flex lg:space-x-12 justify-between">
            <a href="https://www.linkedin.com/in/bharrao/">
              <div
                className={
                  "flex justify-center flex-col items-center transform hover:scale-105 duration-500"
                }
              >
                <img
                  width={180}
                  height={180}
                  src="/img/bharath.svg"
                  alt="Windrose Captical"
                />
                <p className="my-2 w-full text-center font-bold">
                  Bharath Rao <br />
                  <div className="text-gray-400">Founder / CEO</div>
                </p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sheetaldarekar/">
              <div
                className={
                  "flex justify-center flex-col items-center transform hover:scale-105 duration-500"
                }
              >
                <img
                  className={"rounded-full"}
                  width={180}
                  height={180}
                  src="/img/sheetal.jpg"
                  alt="Sheetal Darekar"
                />
                <p className="my-2 w-full text-center font-bold">
                  Sheetal Darekar
                  <br />
                  <div className="text-gray-400">Cofounder</div>
                </p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/rohit-adlakha/">
              <div
                className={
                  "flex justify-center flex-col items-center transform hover:scale-105 duration-500"
                }
              >
                <img
                  width={180}
                  height={180}
                  src="/img/rohit_adhlaka.svg"
                  alt="Windrose Captical"
                ></img>
                <p className="my-2 w-full text-center font-bold">
                  Rohit Adlakha <br />
                  <div className="text-gray-400">Executive Advisor</div>
                </p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/anadvani/">
              <div
                className={
                  "flex justify-center flex-col items-center transform hover:scale-105 duration-500"
                }
              >
                <img
                  width={180}
                  height={180}
                  src="/img/anil_advani.svg"
                  alt="Windrose Captical"
                ></img>
                <p className="my-2 w-full text-center font-bold">
                  Anil Advani
                  <br />
                  <div className="text-gray-400">Investor / Legal Counsel</div>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-6 p-3 md:p-4 lg:p-6">
        <p className="my-3" style={{ color: "#7a7a7a", fontSize: 25 }}>
          Join DataNeuron
        </p>
        <p className="mb-5" style={{ fontSize: 25 }}>
          At DataNeuron, we are always looking for intelligent and smart-working
          folks so feel free to take a look at our open positions on LinkedIn.
        </p>
        <Link
          href={
            "https://in.linkedin.com/jobs/precily-inc.-jobs?f_C=7797080&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0"
          }
        >
          <a>
            <div>
              <div className={"flex my-5"}>
                <a
                  without
                  rel="noreferrer"
                  target={"_blank"}
                  href={
                    "https://in.linkedin.com/jobs/precily-inc.-jobs?f_C=7797080&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0"
                  }
                  className={
                    "border flex space-x-6 duration-500 border-blue-600 px-8 py-2 my-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
                  }
                >
                  View Job Openings
                </a>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default About;
