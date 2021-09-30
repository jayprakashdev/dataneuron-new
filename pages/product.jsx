import { useState } from "react";
import ImageSequence from "../components/ImageSequence";
import Layout from "../components/layout";
import style from "../styles/product.module.css";
import Link from "next/link";
import Carousel from "react-simply-carousel";

const Product = () => {
  let [activeSlide, setActiveSlide] = useState(0);
  let [whyActiveSlide, setWhyActiveSlide] = useState(0);

  let pipeline = [
    "/img/pipeline/pipe1.svg",
    "/img/pipeline/pipe2.svg",
    "/img/pipeline/pipe3.svg",
    "/img/pipeline/pipe4.svg",
    "/img/pipeline/pipe5.svg",
    "/img/pipeline/pipe6.svg",
    "/img/pipeline/pipe7.svg",
  ];

  let [tabs, setTabs] = useState([
    { text: "Ingest", active: true },
    { text: "Structure", active: false },
    { text: "Validate", active: false },
    { text: "Train", active: false },
    { text: "Deploy/Predict", active: false },
    { text: "Iterate", active: false },
    { text: "Interface", active: false },
  ]);

  let [active, setActive] = useState(0);

  let how_it_works = [
    {
      id: 3525,
      title: "Data Ingestion",
      imageUrl: [
        "/img/animation/upload/upload1.svg",
        "/img/animation/upload/upload2.svg",
        "/img/animation/upload/upload3.svg",
      ],
      para: (
        <>
          <p>Users can upload the data without any pre-processing.</p>
          <br />
          <p>
            ALP has an in-built feature that can handle out-of- scope paragraphs
            and separate them from the classification data. This functionality
            is optional and can be toggled on/off anytime during the process.
          </p>
        </>
      ),
    },
    {
      id: 3777,
      title: "Dynamic Masterlist",
      imageUrl: [
        "img/animation/masterlist/master1.png",
        "img/animation/masterlist/master2.png",
        "img/animation/masterlist/master3.png",
      ],
      para: (
        <>
          <p>
            On the masterlist, attributes can be defined and structured in a
            multi-level (hierarchical) structure so that the data can be grouped
            into domains and subdomains.
          </p>
          <br />

          <p>
            Masterlist Suggestions to prepare better training data. Masterlist
            can be continuously managed and tweaked based on new attributes in
            the same dataset.
          </p>
        </>
      ),
    },
    {
      id: 2757,
      title: "Explainable Data Validation",
      imageUrl: [
        "img/animation/validate/validate1.png",
        "img/animation/validate/validate3.png",
        "img/animation/validate/validate2.png",
        "img/animation/validate/validate4.png",
      ],
      para: (
        <>
          <p>
            The ALP performs guided and automated annotation. The platform then
            provides the users with a list of annotated/labelled paragraphs that
            are most likely to belong to the same class by using context-based
            filtering and analysing the masterlist.
          </p>
          <br />

          <p>
            Strategic Annotation - to achieve the target with higher accuracy
            while capturing multiple data points in every attribute with lesser
            annotation.
          </p>
        </>
      ),
    },
    {
      id: 2757,
      title: "AutoML",
      imageUrl: [
        "/img/animation/train/train1.svg",
        "/img/animation/train/train2.svg",
        "/img/animation/train/train3.svg",
      ],
      para: (
        <>
          <p>
            DataNeuron automates pre-processing, model creation, validation of
            the accuracy check and confidence level.
          </p>
          <br />

          <p>
            Additionally, the platform efficiently generates a Summary Report on
            the training accuracy for every single attribute on the masterlist.
          </p>
        </>
      ),
    },
    {
      id: 1743,
      title: "Export, Deploy & Predict.",
      imageUrl: ["/img/howitworks/predict.svg"],
      para: (
        <>
          <p>
            DataNeuron’s prediction service provides highly accurate
            context-based predictions on the ingested data in near real time
            without writing any code.
          </p>

          <br />

          <p>
            Prediction Service can be integrated with various applications
            through the supporting APIs.
          </p>
        </>
      ),
    },
    {
      id: 8146,
      title: "Iterate the Process",
      imageUrl: ["/img/howitworks/process.svg"],
      para: (
        <>
          <p>
            Continue to the deployment stage if the trained model is able to
            match the expectations
          </p>
          <br />

          <p>
            If the model does not achieve the desired results, the user can
            choose to go back and provide more training paragraphs (by
            validating more paragraphs or uploading seed paragraphs) or alter
            the project structure to remove some classes and then retrain the
            model to achieve better results.
          </p>
        </>
      ),
    },
    {
      id: 1747,
      title: "DataNeuron’s Intuitive Interface",
      imageUrl: ["/img/interface.svg"],
      para: (
        <>
          <p>
            Intuitive Interface for SME collaboration for AI/ ML model
            deployment. DataNeuron is also a secured platform for data
            exchange/model creation.
          </p>
          <br />

          <p>
            The interface features a low learning curve that even allows teams
            without data scientists or ML Engineers to be able to use the
            platform to its maximum potential without effort!
          </p>
        </>
      ),
    },
  ];

  let why_schoose = [
    {
      imageUrl: "/img/why/why1.svg",
      title: "Saves Time",
      para: "Up to 95% Reduction in time spent performing data labelling.",
    },
    {
      imageUrl: "/img/why/why2.svg",
      title: "Saves Money",
      para: "Up to 85% cost reduction in time saving. ",
    },
    {
      imageUrl: "/img/why/why3.svg",
      title: "Reduces Effort",
      para: "Up to 96% reduction in data labelled by a workforce.",
    },
    {
      imageUrl: "/img/why/why4.svg",
      title: "Increases Revenue",
      para: "Experience an increase in ROI, up to 500%.",
    },
  ];

  let use_cases = [
    {
      title: "Automated Data Labelling",
      imageUrl: "img/uses/use1.svg",
    },
    {
      title: "Document Classification",
      imageUrl: "img/uses/use2.svg",
    },
    {
      title: "Sentiment Analysis",
      imageUrl: "img/uses/use3.svg",
    },
    {
      title: "Intent Classification",
      imageUrl: "img/uses/use4.svg",
    },
    {
      title: "Contextual Search",
      imageUrl: "img/uses/use5.svg",
    },
    {
      title: "Hierarchial Text Classification",
      imageUrl: "img/uses/use6.svg",
    },
    {
      title: "Knowledge Management",
      imageUrl: "img/uses/use7.svg",
    },
    {
      title: "Topic Detection",
      imageUrl: "img/uses/use8.svg",
    },
  ];

  return (
    <Layout
      url={"/product"}
      description={
        "Use the Time Machine for AI to accelerate your model deployment."
      }
      title={"Product | Dataneuron"}
    >
      <div className={"px-3 md:px-5 lg:px-10 lg:pt-20"}>
        <div className="text-center text-3xl px-3 md:text-4xl">
          Use the Time Machine for AI to accelerate your model deployment.
        </div>
        <div className="flex justify-center my-3">
          <div
            className="text-center text-xl w-full"
            style={{
              maxWidth: 849,
              color: "#7a7a7a",
            }}
          >
            Efficiently build machine learning models and use them to make
            highly accurate context-based predictions in minutes without writing
            any code!
          </div>
        </div>

        <div className={"hidden md:block"}>
          <div className="flex flex-col md:flex-row p-5 justify-center md:space-x-6">
            <a
              href="https://alpclientofficial.azurewebsites.net/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-blue-600 duration-300 text-white  border border-blue-600 hover:bg-white hover:text-blue-600 py-2 px-7 rounded-full text-lg">
                Get Started
              </button>
            </a>
            <br />
            <Link href={"/contact"}>
              <a>
                <button className="bg-white duration-300 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white py-2 px-7 rounded-full text-lg">
                  View Demo
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div
          className={"p-2 md:p-3 lg:p-6 border-2 border-gray-200"}
          style={{
            boxSizing: "border-box",
            margin: "60px 30px",
          }}
        >
          <div className="text-xl mb-6 text-center md:text-left">
            The DataNeuron Pipeline
          </div>

          <div className={"block md:hidden"}>
            <div className={"flex justify-center"}>
              <img
                src="/img/back.svg"
                className={"pr-3"}
                alt="back"
                onClick={() => setActiveSlide(activeSlide - 1)}
              />
              <Carousel
                itemsToShow={1}
                itemsToScroll={1}
                activeSlideIndex={activeSlide}
                onRequestChange={setActiveSlide}
                backwardBtnProps={true}
                forwardBtnProps={true}
              >
                {pipeline.map((imgUrl, i) => {
                  return (
                    <div
                      key={i * Math.random()}
                      style={{ width: 200, height: 300 }}
                    >
                      <img src={imgUrl} alt={i} />
                    </div>
                  );
                })}
              </Carousel>
              <img
                src="/img/forward.svg"
                alt="forward"
                onClick={() => setActiveSlide(activeSlide + 1)}
              />
            </div>
          </div>

          <div className={"hidden md:block"}>
            <div
              className={`scroll_custom flex overflow-x-auto xl:justify-center`}
            >
              {pipeline.map((imgUrl, i) => {
                return (
                  <img
                    key={i * Math.random()}
                    style={{ margin: 10 }}
                    src={imgUrl}
                    className={"w-full md:w-36 lg:w-40"}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={"m-3 lg:m-14 "}>
          <div className="text-gray-500 text-xl md:text-2xl">
            How it Works ?
          </div>
          <div className={" p-3"}>
            <div className={"flex justify-center items-center mt-6 md:hidden"}>
              <img
                src="/img/back.svg"
                onClick={() => setWhyActiveSlide(whyActiveSlide - 1)}
                className={"pr-3"}
                alt="back"
              />
              <Carousel
                onRequestChange={setWhyActiveSlide}
                activeSlideIndex={whyActiveSlide}
                itemsToScroll={1}
                itemsToShow={1}
              >
                {how_it_works.map((data, i) => {
                  return (
                    <div
                      key={Math.random() * i}
                      style={{ width: 340 }}
                      className={"border-2 border-gray-200 p-3"}
                    >
                      <ImageSequence width={320} images={data.imageUrl} />

                      <div
                        className="font-bold w-full text-center"
                        style={{ fontSize: 25 }}
                      >
                        {data.title}
                      </div>
                      <div className="text-lg m-2" style={{ fontSize: 22 }}>
                        {data.para}
                      </div>
                    </div>
                  );
                })}
              </Carousel>
              <img
                src="/img/forward.svg"
                onClick={() => setWhyActiveSlide(whyActiveSlide + 1)}
                alt="forward"
              />
            </div>
            <div className={"hidden md:block"}>
              <div className="flex justify-end">
                <div
                  className={`flex py-5 overflow-scroll hide-scroll ${style.hide_scroll}`}
                >
                  {tabs.map((tab, i) => {
                    return (
                      <div
                        key={i * Math.random()}
                        onClick={() => setActive(i)}
                        style={{
                          fontSize: 24,
                          color: active === i ? "blue" : "#7a7a7a",
                          textDecoration: active === i ? "underline" : "none",
                        }}
                        className={`cursor-pointer hover:bg-gray-100 px-3`}
                      >
                        {tab.text}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-2 border-gray-300 lg:flex justify-between lg:px-24 py-12">
                <div className="lg:w-1/2 flex justify-center mr-12">
                  <ImageSequence
                    style={{ width: "100%" }}
                    images={how_it_works[active].imageUrl}
                  />
                </div>
                <div
                  className={
                    "lg:w-1/2 p-3 flex flex-col justify-center items-center"
                  }
                >
                  <div className="font-bold w-full" style={{ fontSize: 25 }}>
                    {how_it_works[active].title}
                  </div>
                  <div className="text-lg m-2" style={{ fontSize: 22 }}>
                    {how_it_works[active].para}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"p-3 lg:px-20"}>
          <div className="my-6 text-center text-xl md:text-2xl md:text-left text-gray-600">
            Why choose DataNeuron?
          </div>
          <div className="md:flex md:space-x-6 pb-3 xl:justify-center scroll_custom md:overflow-x-auto">
            {why_schoose.map((data, i) => {
              return (
                <div
                  key={i * Math.random()}
                  className={
                    "p-3 w-full md:w-3/12 mt-3 border-2 border-gray-200"
                  }
                  style={{ minWidth: 234 }}
                >
                  <img
                    width={35}
                    height={35}
                    src={data.imageUrl}
                    alt={data.title}
                  />
                  <div className="text-2xl my-1">{data.title}</div>
                  <div className="text-lg my-1 text-gray-500">{data.para}</div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="my-6" style={{ fontSize: 25, color: "#7a7a7a" }}>
              Use Cases
            </div>
            <div className="flex md:items-stretch flex-col md:flex-row items-center justify-center xl:justify-start">
              {use_cases.slice(0, 4).map((use, i) => {
                return (
                  <div
                    key={Math.random() * i}
                    className="w-full rounded-md flex border-2 border-blue-600 p-3 items-center justify-center md:space-x-3 m-3"
                  >
                    <img
                      src={use.imageUrl}
                      alt={use.imageUrl}
                      className={"mr-3"}
                    />
                    <div className={"text-blue-800"}>{use.title}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col md:items-stretch md:flex-row items-center justify-center xl:justify-start">
              {use_cases.slice(4, 8).map((use, i) => {
                return (
                  <div
                    key={Math.random() * i}
                    className="w-full rounded-md flex border-2 border-blue-600 p-3 items-center justify-center md:space-x-3 m-3"
                  >
                    <img
                      src={use.imageUrl}
                      alt={use.imageUrl}
                      className={"mr-3"}
                    />
                    <div className={"text-blue-800"}>{use.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
