import Game from "../components/game"
import Layout from "../components/layout"
import PostThumbnail from "../components/postThumbnail"
import { getAllPosts } from "../lib/graphcms"
import style from "../styles/homepage.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"

function Home({ posts }) {
	let annotation_accuracy = 0.5
	let prediction_api_usage_estimate = 10000
	let time_taken_for_thousand_paras_manual_validation = 15
	let annotation_cost_for_every_correct_validation = 0.1
	let prediction_cost_per_para = 0.05
	let Masterlist_cost = 150
	let Cost_of_manual_annotation_per_hour = 10
	let data_science_team_size = 5
	let avg_salary_of_each_data_scientist = 13494
	let [paras, setParas] = useState(0)
	let [classes, setClasses] = useState(0)
	let [output, setOutput] = useState({
		roi: 0,
		time_reduction: 0,
		dataNeuron_time: 0,
		manual_time: 0,
	})

	const handleChange = (event) => {
		if (event.target.name === "paras") {
			if (isNaN(event.target.value)) {
				setParas(0)
			} else {
				setParas(parseInt(event.target.value))
			}
		} else {
			if (isNaN(event.target.value)) {
				setClasses(parseInt(0))
			} else {
				setClasses(parseInt(event.target.value))
			}
		}
	}
	const updateValue=()=>{
		let number_of_classes = classes
		let para_per_class_for_training = 50
		let total_number_of_paras_in_database = paras;

		let paras_to_be_validated_per_class_by_user =
			para_per_class_for_training / annotation_accuracy
		let Annotation_cost =
			number_of_classes *
			para_per_class_for_training *
			annotation_cost_for_every_correct_validation
		let Prediction_cost =
			prediction_api_usage_estimate * prediction_cost_per_para
		let Annotator_SME_cost =
			(paras_to_be_validated_per_class_by_user *
				number_of_classes *
				time_taken_for_thousand_paras_manual_validation *
				Cost_of_manual_annotation_per_hour) /
			1000
		let Total_Dataneuron_ALP_cost =
			Masterlist_cost +
			Annotation_cost +
			Prediction_cost +
			Annotator_SME_cost

		let Annotator_SME_house_cost =
			(total_number_of_paras_in_database *
				time_taken_for_thousand_paras_manual_validation *
				Cost_of_manual_annotation_per_hour) /
			1000

		let single_DS_cost_per_week = avg_salary_of_each_data_scientist / 12 / 4
		let team_cost_per_week =
			single_DS_cost_per_week * data_science_team_size
		let total_in_house_team_cost =
			team_cost_per_week + Annotator_SME_house_cost

		let ROI =
			(total_in_house_team_cost - Total_Dataneuron_ALP_cost)*100 /
			Total_Dataneuron_ALP_cost
		let total_paras =
			number_of_classes * paras_to_be_validated_per_class_by_user
		let total_time_data_neuron_tool =
			(time_taken_for_thousand_paras_manual_validation / 1000) *
			total_paras
		let total_time_in_house =
			(total_number_of_paras_in_database *
				time_taken_for_thousand_paras_manual_validation) /
			1000

		let time_reduction =
			((total_time_in_house - total_time_data_neuron_tool) /
				total_time_in_house) *
			100

		setOutput({
			roi: ROI.toFixed(2),
			time_reduction: time_reduction.toFixed(2),
			dataNeuron_time: Math.round(Total_Dataneuron_ALP_cost),
			manual_time: Math.round(total_in_house_team_cost),
		})
	}
	useEffect(() => {
		updateValue()
	}, [classes, paras])
	return (
		<Layout>
			<div className="flex justify-center w-full pt-14 md:pt-0">
				<div className={"md:w-4/5 text-center md:text-3xl text-2xl w-full"}>
					An advanced platform for complex data annotations, model
					training, prediction & lifecycle management.
				</div>
			</div>
			<Game />
			<div className={"text-gray-500 my-3"}>
				Our Product (Placeholder)
			</div>
			<p>
				DataNeuron’s highly differentiated Automated Learning Platform
				(ALP) enables ML/ AI teams to collect and prepare datasets for
				faster deployment of supervised AI models on any domain by
				defining attributes (parameters/master list) and ingesting
				relevant data. DataNeuron’s ALP performs guided and automated
				annotation on the data with respect to the parameters. <br />
				<br />
				DataNeuron’s prediction service provides highly accurate
				context-based predictions on the ingested data or database in
				near real time without writing any code.
			</p>
			<div className={"text-gray-500 my-3"}>
				Our Mission (Placeholder)
			</div>
			<div className="flex justify-between items-center">
				<div>
					<div className="text-3xl">
						Our Aim is to accelerate the development of AI <br />{" "}
						models and provide explainability of AI.
					</div>
					<div className={"flex"}>
						<div
							className={
								"border-2 border-blue-600 px-3 py-1 my-3 rounded-full text-blue-600"
							}
						>
							Learn More
						</div>
					</div>
				</div>
				<div>
					<img src="/img/cir_ani.gif" alt="goals" />
				</div>
			</div>

			<div className="mt-6 text-gray-500">Infinite Solutions</div>
			<div className="my-3">
				Legal/Tax, Finance, Healthcare, Insurance, News, Data Science,
				ITeS, Chatbot, Job Portals, CRM Providers
			</div>
			<div className="flex flex-wrap justify-center">
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card1.svg"
						alt="sol card 1"
					/>
					Finance
				</div>
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card2.svg"
						alt="sol card 2"
					/>
					Science & Technology
				</div>
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card3.svg"
						alt="sol card 3"
					/>
					Emotion
				</div>
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card4.svg"
						alt="sol card 4"
					/>
					Media
				</div>
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card5.svg"
						alt="sol card 5"
					/>
					Healthcare
				</div>
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card6.svg"
						alt="sol card 6"
					/>
					Legal & Tax
				</div>
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card7.svg"
						alt="sol card 7"
					/>
					Philosophy
				</div>
				<div
					className={
						"flex m-3 rounded-lg text-blue-600 w-72 justify-center py-3 border-2 border-blue-600"
					}
				>
					<img
						width={20}
						className={"mr-2"}
						src="/img/sol_card8.svg"
						alt="sol card 8"
					/>
					ITes
				</div>
			</div>
			<div className={"my-3 text-gray-500"}>
				Our Build vs Buy Calculator
			</div>
			<div className={"my-3  md:flex space-x-2"}>
				<div className="md:w-1/2 w-full border-2 border-gray-300 p-6">
					<div className="text-blue-500">IF YOU USE DATANEURON</div>
					<div className="flex space-x-3">
						<div className="w-2/5">NUMBER OF CLASSES</div>
						<div className={"w-3/6"}>
							<input
								type="range"
								className={style.slider}
								min={1}
								max={100}
								name="classes"
								onChange={(e) => handleChange(e)}
								value={classes}
							/>
							<div className="flex w-full justify-between">
								<p>0</p>
								<p>100</p>
							</div>
						</div>
						<div className={"border-2 border-black px-2 py-2"} style={{width:"85px"}}>
							<div>{classes}</div>
						</div>
					</div>
					<br />
					<div className="flex space-x-3">
						<div className="w-2/5">NUMBER OF PARAGRAPHS</div>
						<div className={"w-3/6"}>
							<input
								type="range"
								className={style.slider}
								min={10000}
								max={1000000}
								name="paras"
								onChange={(e) => handleChange(e)}
								value={paras}
							/>
							<div className="flex w-full justify-between mr-3">
								<p style={{marginLeft:"-18px"}}>10000</p>
								<p style={{marginLeft:"18px"}}>1000000</p>
							</div>
						</div>
						<div className={"border-2 border-black px-2 py-2"} style={{width:'85px'}}>
							<div>{paras}</div>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 w-full border-2 border-gray-300 p-6">
					<div className="flex h-full">
						<div className="w-1/2 border-r-2 border-dashed border-gray-500 px-2 h-full">
							<div className="py-3 px-3 flex w-full justify-between text-blue-600">
								<p>Time taken to build an Solution</p>
								<p>{output.manual_time} hrs</p>
							</div>
							<div className="py-3 px-3 flex w-full justify-between text-blue-600">
								<p>Using DataNeuron</p>
								<p>{output.dataNeuron_time} hrs</p>
							</div>
						</div>
						<div className="w-1/2 px-2 h-full">
							<div className="py-3 px-3 flex w-full justify-between text-blue-600">
								<p>% Time Reduction</p>
								<p>{output.time_reduction}</p>
							</div>
							<div className="py-3 px-3 flex w-full justify-between text-blue-600">
								<p>ROI</p>
								<p>{output.roi}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-3 text-gray-400">Our Articles</div>
			<div className="flex w-full overflow-x-scroll space-x-6 p-3">
				{posts.map((post) => {
					return (
						<Link key={post.id} href={`/posts/${post.slug}`}>
							<a>
								<PostThumbnail
									title={post.title}
									imageUrl={post.coverImage.url}
								/>
							</a>
						</Link>
					)
				})}
			</div>
			<div className="flex">
				<div
					className={
						"border-2 border-blue-600 rounded-full px-6 text-blue-600 py-2"
					}
				>
					View all
				</div>
			</div>
		</Layout>
	)
}

export async function getStaticProps({ params, preview = false }) {
	let appPosts = await getAllPosts()

	return {
		props: {
			posts: appPosts.posts || [],
		},
	}
}

export default Home
