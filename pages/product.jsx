import { useState } from "react"
import ButtonComponent from "../components/buttonComponent"
import Layout from "../components/layout"
import style from '../styles/product.module.css'

const Product = () => {
	let pipeline = [
		"/img/pipeline/pipe1.svg",
		"/img/pipeline/pipe2.svg",
		"/img/pipeline/pipe3.svg",
		"/img/pipeline/pipe4.svg",
		"/img/pipeline/pipe5.svg",
		"/img/pipeline/pipe6.svg",
		"/img/pipeline/pipe7.svg",
	]

	let [tabs, setTabs] = useState([
		{ text: "Ingest", active: true },
		{ text: "Structure", active: false },
		{ text: "Validate", active: false },
		{ text: "Train", active: false },
		{ text: "Deploy/Predict", active: false },
		{ text: "Iterate", active: false },
		{ text: "Interface", active: false },
	])

	let [active, setActive] = useState(0)

	let how_it_works = [
		{
			id: 3525,
			title: "Data Ingestion",
			imageUrl: "/img/howitworks/work1.gif",
			para: (
				<>
					<p>Users can upload the data without any pre-processing.</p>
					<br />
					<p>
						ALP has an in-built feature that can handle out-of-
						scope paragraphs and separate them from the
						classification data. This functionality is optional and
						can be toggled on/off anytime during the process.
					</p>
				</>
			),
		},
		{
			id: 3777,
			title: "Dynamic Masterlist",
			imageUrl: "/img/howitworks/work2.gif",
			para: (
				<>
					<p>
						On the masterlist, attributes can be defined and
						structured in a multi-level (hierarchical) structure so
						that the data can be grouped into domains and
						subdomains.
					</p>
					<br />

					<p>
						Masterlist Suggestions to prepare better training data.
						Masterlist can be continuously managed and tweaked based
						on new attributes in the same dataset.
					</p>
				</>
			),
		},
		{
			id: 2757,
			title: "Explainable Data Validation",
			imageUrl: "/img/howitworks/work3.gif",
			para: (
				<>
					<p>
						The ALP performs guided and automated annotation. The
						platform then provides the users with a list of
						annotated/labelled paragraphs that are most likely to
						belong to the same class by using context-based
						filtering and analysing the masterlist.
					</p>
					<br />

					<p>
						Strategic Annotation - to achieve the target with higher
						accuracy while capturing multiple data points in every
						attribute with lesser annotation.
					</p>
				</>
			),
		},
		{
			id: 2757,
			title: "AutoML",
			imageUrl: "/img/howitworks/work4.gif",
			para: (
				<>
					<p>
						DataNeuron automates pre-processing, model creation,
						validation of the accuracy check and confidence level.
					</p>
					<br />

					<p>
						Additionally, the platform efficiently generates a
						Summary Report on the training accuracy for every single
						attribute on the master-list.
					</p>
				</>
			),
		},
		{
			id: 1743,
			title: "Export, Deploy & Predict.",
			imageUrl: "/img/howitworks/predict.svg",
			para: (
				<>
					<p>
						DataNeuron’s prediction service provides highly accurate
						context-based predictions on the ingested data in near
						real time without writing any code.
					</p>
					<br />

					<p>
						Use Masterlist Suggestions to prepare better training
						data. Masterlist can be continuously managed and tweaked
						based on new attributes in the same dataset.
					</p>
					<br />

					<p>
						Prediction Service can be integrated with various
						applications through the supporting APIs.
					</p>
				</>
			),
		},
		{
			id: 8146,
			title: "Iterate the Process",
			imageUrl: "/img/howitworks/process.svg",
			para: (
				<>
					<p>
						Continue to the deployment stage if the trained model is
						able to match his expectations
					</p>
					<br />

					<p>
						If the model does not achieve the desired results, the
						user can choose to go back and provide more training
						paragraphs (by validating more paragraphs or uploading
						seed paragraphs) or alter the project structure to
						remove some classes and then retrain the model to
						achieve better results.
					</p>
				</>
			),
		},
		{
			id: 1747,
			title: "DataNeuron’s Intuitive Interface",
			imageUrl: "/img/howitworks/interface.svg",
			para: (
				<>
					<p>
						Intuitive Interface for SME collaboration for AI/ ML
						model deployment. DataNeuron is also a secured platform
						for data exchange/model creation.
					</p>
					<br />

					<p>
						The interface features a low learning curve that even
						allows teams without data scientists or ML Engineers to
						be able to use the platform to its maximum potential
						without effort!
					</p>
				</>
			),
		},
	]

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
	]

	let use_cases = [
		{
			title: "Automated Data Labelling",
			imageUrl: "",
		},
		{
			title: "Document Classification",
			imageUrl: "",
		},
		{
			title: "Sentiment Analysis",
			imageUrl: "",
		},
		{
			title: "Intent Classification",
			imageUrl: "",
		},
		{
			title: "Contextual Search",
			imageUrl: "",
		},
		{
			title: "Hierarchial Text Classification",
			imageUrl: "",
		},
		{
			title: "Knowledge Management",
			imageUrl: "",
		},
		{
			title: "Topic Detection",
			imageUrl: "",
		},
	]

	return (
		<Layout>
			<div className="text-center" style={{fontSize:"40px"}}>
				Use the Time Machine for AI to accelerate your model deployment.
			</div>
			<div className="flex justify-center my-3">
				<div className="text-gray-500 text-center md:w-1/2 w-full text-xl">
					Efficiently build machine learning models and use them to
					make highly accurate context-based predictions in minutes
					without writing any code!
				</div>
			</div>
			<br />
			<div className="md:flex justify-center md:space-x-6">
				<ButtonComponent filled={true} text={"Get started"} />
				<br />
				<ButtonComponent fill={false} text={"View demo"} />
			</div>
			<div
				className={"p-5 my-14 shadow-md"}
				style={{ border: "1px solid #E0E0E0", boxSizing: "border-box" }}
			>
				<div className="text-xl">The DataNeuron Pipeline</div>
				<div className="text-lg my-2" style={{ color: "#0000FF" }}>
					90%+ first-pass machine accuracy.
				</div>
				<div
					className={
						"flex md:space-x-3 flex-wrap md:justify-between justify-center space-y-6"
					}
				>
					{pipeline.map((imgUrl, i) => {
						return <img key={i * Math.random()} className={"w-5/6 md:w-40"} src={imgUrl} />
					})}
				</div>
			</div>
			<div className="text-gray-500 text-xl">How it Works ?</div>
			<div className="flex justify-end">
				<div className={`flex space-x-10 p-3 my-5 overflow-scroll hide-scroll ${style.hide_scroll}`}>
					{tabs.map((tab, i) => {
						return (
							<div
								key={i * Math.random()}
								onClick={() => setActive(i)}
								style={{
									color: active === i ? "blue" : "black",
									textDecoration:
										active === i ? "underline" : "none",
								}}
								className={`text-xl cursor-pointer`}
							>
								{tab.text}
							</div>
						)
					})}
				</div>
			</div>

			<div
				style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
				className="md:flex justify-center md:px-24 py-12 border border-gray-400"
			>
				<div className="md:w-1/2">
					<img
						src={how_it_works[active].imageUrl}
						alt={how_it_works[active].para}
					/>
				</div>
				<div
					className={
						"md:w-1/2 p-3 flex flex-col justify-center items-center"
					}
				>
					<div className="font-bold text-2xl w-full">
						{how_it_works[active].title}
					</div>
					<div className="text-lg m-2">{how_it_works[active].para}</div>
				</div>
			</div>
			<div className="text-gray-500 text-xl my-6">
				Why choose DataNeuron?
			</div>
			<div className="flex justify-between flex-wrap">
				{why_schoose.map((data, i) => {
					return (
						<div
							key={i * Math.random()}
							className={"p-3 m-3 md:w-80 w-full border-2 border-gray-300 py-6"}
						>
							<img
								width={35}
								height={35}
								src={data.imageUrl}
								alt={data.title}
							/>
							<div className="text-2xl my-1">{data.title}</div>
							<div className="text-lg my-1 text-gray-500">
								{data.para}
							</div>
						</div>
					)
				})}
			</div>
		</Layout>
	)
}

export default Product
