import Game from "../components/game"
import Layout from "../components/layout"
import { Typewriter } from "react-simple-typewriter"
import { getAllPosts } from "../lib/graphcms"
import style from "../styles/homepage.module.css"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ImageCard from "../components/imageCard"
import { Fade } from "react-reveal"
import { PostTypes } from "./resources"
import Link from 'next/link'

function Home({ posts }) {
	const router = useRouter()
	let annotation_accuracy = 0.5
	let prediction_api_usage_estimate = 10000
	let time_taken_for_thousand_paras_manual_validation = 15
	let annotation_cost_for_every_correct_validation = 0.1
	let prediction_cost_per_para = 0.05
	let Masterlist_cost = 150
	let Cost_of_manual_annotation_per_hour = 10
	let data_science_team_size = 5
	let avg_salary_of_each_data_scientist = 13494
	let [paras, setParas] = useState(10000)
	let [classes, setClasses] = useState(2)
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
	const updateValue = () => {
		let number_of_classes = classes
		let para_per_class_for_training = 50
		let total_number_of_paras_in_database = paras

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
			((total_in_house_team_cost - Total_Dataneuron_ALP_cost) * 100) /
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
			<div className={"px-5 lg:px-14 pt-24 lg:pt-0"}>
				<div className="flex justify-center w-full lg:pt-0">
					<div
						style={{ fontSize: 40 }}
						className={"lg:w-4/5 text-center lg:text-4xl w-full"}
					>
						An advanced platform for complex data annotations, model
						training, prediction & lifecycle management.
					</div>
				</div>
				<br />
				<br />
				<Game />
				<Fade>
					<div className={"text-gray-500 mt-14 mb-2 text-lg"}>
						What is DataNeuron?
					</div>
					<p style={{ fontSize: "35px", lineHeight: "40px" }}>
						DataNeuron helps you accelerate and automate
						human-in-loop labeling for developing AI solutions.
						Powered by a data-centric platform, we automate data
						labeling, the creation of models, and end-to-end
						lifecycle management of ML.
					</p>
				</Fade>
				<Fade>
					<div
						className={"text-gray-500 mt-14 mb-2"}
						style={{ fontSize: 25 }}
					>
						Our Mission
					</div>
					<div className="lg:flex justify-between">
						<div>
							<div
								style={{ fontSize: "40px", lineHeight: "48px" }}
							>
								Our Aim is to accelerate the development of AI{" "}
								<br /> models and provide explainability of AI.
							</div>
							<div className={"flex my-5"}>
								<div
									className={
										"border border-blue-600 px-8 py-1 my-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
									}
									onClick={()=>router.push("/about")}
								>
									Learn More
								</div>
							</div>
						</div>
						<div>
							<img src="/img/cir_ani.gif" alt="goals" />
						</div>
					</div>
				</Fade>

				<Fade>
					<div className="mt-6 text-gray-500 text-lg">
						Infinite Applications
					</div>
					{/* <div className="my-3">
				Legal/Tax, Finance, Healthcare, Insurance, News, Data Science,
				ITeS, Chatbot, Job Portals, CRM Providers
			</div> */}
					<div className="flex flex-wrap my-3 justify-center">
						<div
							className={
								"flex w-full m-3 rounded-lg text-blue-600 lg:w-72 justify-center py-6 border-2 border-blue-600"
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
								"flex w-full  m-3 rounded-lg text-blue-600 lg:w-72 justify-center py-6 border-2 border-blue-600"
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
								"flex m-3 rounded-lg text-blue-600 w-full lg:w-72 justify-center py-6 border-2 border-blue-600"
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
								"flex m-3 rounded-lg text-blue-600 w-full lg:w-72 justify-center py-6 border-2 border-blue-600"
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
								"flex m-3 rounded-lg text-blue-600 w-full lg:w-72 justify-center py-6 border-2 border-blue-600"
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
								"flex m-3 rounded-lg text-blue-600 w-full lg:w-72 justify-center py-6 border-2 border-blue-600"
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
								"flex m-3 rounded-lg text-blue-600 w-full lg:w-72 justify-center py-6 border-2 border-blue-600"
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
								"flex m-3 rounded-lg text-blue-600 w-full lg:w-72 justify-center py-6 border-2 border-blue-600"
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
				</Fade>
				<Fade>
					<div className={"mt-14 text-gray-500 text-xl"}>
						Our Build vs Buy Calculator
					</div>
					<div className={"my-3 lg:flex lg:space-x-2 lg:space-y-6"}>
						<div
							className="lg:w-1/2 h-56 w-full border border-gray-300 p-6"
							style={{
								boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							<div className="text-blue-500">
								IF YOU USE DATANEURON
							</div>
							<div className="flex space-x-3">
								<div className="w-2/5">NUMBER OF CLASSES</div>
								<div className={"w-3/6"}>
									<input
										type="range"
										className={style.slider}
										min={2}
										max={100}
										name="classes"
										onChange={(e) => handleChange(e)}
										value={classes}
									/>
									<div className="flex w-full justify-between">
										<p>2</p>
										<p>100</p>
									</div>
								</div>
								<div
									className={
										"border-2 border-gray-300 px-2 py-2"
									}
									style={{ width: "85px" }}
								>
									<div>{classes}</div>
								</div>
							</div>
							<br />
							<div className="flex space-x-3">
								<div className="w-2/5">
									TOTAL PARAGRAPHS
								</div>
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
										<p style={{ marginLeft: "-18px" }}>
											10000
										</p>
										<p style={{ marginLeft: "18px" }}>
											1000000
										</p>
									</div>
								</div>
								<div
									className={
										"border-2 border-gray-300 px-2 py-2"
									}
									style={{ width: "85px" }}
								>
									<div>{paras}</div>
								</div>
							</div>
						</div>
						<div
							className="lg:w-1/2 relative lg:-top-6 h-56 w-full border border-gray-300 p-6"
							style={{
								boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
							}}
						>
							<div className="flex h-full">
								<div className="w-1/2 border-r-2 border-dotted border-gray-500 px-2 h-full">
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
				</Fade>
				<div className="mt-14 text-gray-500 text-xl">Our Articles</div>
				<div className="flex space-x-6 flex-wrap w-full p-3 justify-center lg:justify-start">
					{posts.map((post) => {
						return (
							<div
								key={post.id}
								onClick={() =>
									router.push(`/posts/${post.slug}`)
								}
								style={{ width: 330 }}
								className="cursor-pointer border-t border-b border-gray-300"
							>
								<p className="text-gray-400">
									{post.postType === PostTypes.CASE_STUDY
										? "CASE STUDY"
										: post.postType ===
										  PostTypes.WHITEPAPERS
										? "WHITEPAPER"
										: "FEATURE CATUALOG"}
								</p>
								<div className="flex flex-col justify-between">
									<ImageCard
										title={post.title}
										imageUrl={post.coverImage.url}
									/>
									<div className="flex justify-between">
										<div className="text-sm text-gray-400">
											2021
										</div>
										<div className="text-sm text-gray-400">
											FINANCE
										</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				<div className="flex m-6 w-full justify-center lg:justify-start">
					<Link href={'/resources'}>
						<a
							style={{ width: "177px" }}
							className={
								"flex w-full justify-center border-2 border-blue-600 rounded-full cursor-pointer text-blue-600 py-3 hover:bg-blue-600 hover:text-white"
							}
						>
							<div >View all</div>
						</a>
					</Link>
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
