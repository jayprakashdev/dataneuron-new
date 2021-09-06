import Game from "../components/game"
import Layout from "../components/layout"
import PostThumbnail from "../components/postThumbnail"
import { getAllPosts } from "../lib/graphcms"
import style from "../styles/homepage.module.css"
import Link from 'next/link'

function Home({ posts }) {
	return (
		<Layout>
			<div className="flex justify-center w-full">
				<div className={"w-4/5 text-center text-3xl"}>
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
			<div className="text-3xl">
				Our Aim is to accelerate the development of AI <br /> models and
				provide explainability of AI.
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
							/>
						</div>
						<div className={"w-14"}>
							<input
								className={"w-14 p-1 border-2 border-gray-400"}
								type="text"
							/>
						</div>
					</div>
					<br />
					<div className="flex space-x-3">
						<div className="w-2/5">NUMBER OF PARAGRAPHS</div>
						<div className={"w-3/6"}>
							<input
								type="range"
								className={style.slider}
								min={1}
								max={100}
							/>
						</div>
						<div className={"w-14"}>
							<input
								className={"p-1 w-14 border-2 border-gray-400"}
								type="text"
							/>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 w-full border-2 border-gray-300 p-6">
					<div className="flex">
						<div className="w-1/2 border-r-2 border-dashed border-gray-500">
							<div className="text-gray-400">
								Time taken to build an Solution
							</div>
							<div className="text-gray-400">
								Using DataNeuron
							</div>

							<div className="text-gray-400">
								% Time Reduction
							</div>
							<div className="text-gray-400">ROI</div>
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
