import ButtonComponent from "../components/buttonComponent"
import Layout from "../components/layout"
import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"

const About = () => {
	return (
		<Layout>
			<dir className={"lg:hidden"}>
				<br />
				<br />
				<br />
			</dir>
			<div className={"p-3 lg:px-3"}>
				<div className={"p-0 md:p-3 lg:p-6"}>
					<p className="mb-2 text-gray-500" style={{ fontSize: 25 }}>
						About DataNeuron
					</p>
					<p className="my-2" style={{ fontSize: 50 }}>
						At DataNeuron, our aim is to accelerate the development
						and provide explainability for AI.
					</p>
					<br />
					<p className="my-2 font-thin" style={{ fontSize: 24 }}>
						The supervised learning approach is predominant in AI,
						the need for labelled data has dramatically increased in
						order to remove the constraints when developing AI
						solutions. Companies moreover do not have a secure
						platform for data exchange and model creation.
						<span className={"text-blue-700"}>
							<Typewriter
								words={["We strive to be that platform."]}
							/>
						</span>
					</p>
					<div className="my-10">
						<p
							className="my-3 text-gray-500"
							style={{ fontSize: 25 }}
						>
							Our Goals
						</p>
						<div className="flex w-full items-center lg:justify-between justify-center flex-wrap lg:space-x-3">
							<div
								className={
									"shadow-md w-full p-3 md:w-3/12 flex flex-col items-center justify-center h-64"
								}
							>
								<div className="flex justify-center space-x-1">
									<img
										src="/img/circle.gif"
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
										src="/img/circle.gif"
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
										src="/img/circle.gif"
										alt="circle"
										height={60}
										className={"w-2/12"}
									/>
								</div>
								<br />
								<div className="text-center text-lg">
									Reduce Project Staffing by 70-90%.
								</div>
							</div>
							<div
								className={
									"shadow-md w-full p-3 md:w-3/12 flex flex-col items-center justify-center h-64"
								}
							>
								<img
									src="/img/meter.gif"
									width={240}
									alt="meter"
								/>
								<br />
								<div className="text-center text-lg">
									200%-400% customers’ ROI from DataNeuron’s
									solution(s).
								</div>
							</div>
							<div
								className={
									"shadow-md w-full p-3 md:w-3/12 flex flex-col items-center justify-center h-64"
								}
							>
								<img
									src="/img/doc_ani.gif"
									alt="meter"
									className={"relative top-6"}
								/>
								<br />
								<div className="text-center text-lg">
									200%-400% customers’ ROI from DataNeuron’s
									solution(s).
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
				<p className="w-full text-center py-3 text-lg">
					Backed By The Best
				</p>
				<div className="flex justify-center w-full">
					<div className="md:flex">
						<img
							className={"m-3 w-11/12 md:w-auto"}
							src="/img/aboutus1.svg"
							alt="Windrose Captical"
						></img>
						<img
							className={"m-3 w-11/12 md:w-auto"}
							src="/img/aboutus2.svg"
							alt="Windrose Captical"
						></img>
					</div>
				</div>
				<p className="w-full text-center py-3 text-lg">
					Our Company Leadership
				</p>
				<div className="lg:flex justify-center mb-3 w-full">
					<div className="lg:flex lg:space-x-12 justify-between">
						<a href="https://www.linkedin.com/in/bharrao/">
							<div
								className={
									"flex justify-center flex-col items-center"
								}
							>
								<img
									width={200}
									height={200}
									src="/img/bharath.svg"
									alt="Windrose Captical"
								/>
								<p className="my-2 w-full text-center font-bold">
									Bharath Rao
								</p>
							</div>
						</a>
						<a href="ps://www.linkedin.com/in/rohit-goyal/">
							<div
								className={
									"flex justify-center flex-col items-center"
								}
							>
								<img
									width={200}
									height={200}
									src="/img/rohit_goyal.svg"
									alt="Windrose Captical"
								></img>
								<p className="my-2 w-full text-center font-bold">
									Rohit Goyal
								</p>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/anadvani/">
							<div
								className={
									"flex justify-center flex-col items-center"
								}
							>
								<img
									width={200}
									height={200}
									src="/img/anil_advani.svg"
									alt="Windrose Captical"
								></img>
								<p className="my-2 w-full text-center font-bold">
									Anil Advani
								</p>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/rohit-adlakha/">
							<div
								className={
									"flex justify-center flex-col items-center"
								}
							>
								<img
									width={200}
									height={200}
									src="/img/rohit_adhlaka.svg"
									alt="Windrose Captical"
								></img>
								<p className="my-2 w-full text-center font-bold">
									Rohit Adlakha
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
					At DataNeuron, we are always looking for intelligent and
					smart-working folks so feel free to take a look at our open
					positions on LinkedIn.
				</p>
				<Link
					href={
						"https://in.linkedin.com/jobs/precily-inc.-jobs?f_C=7797080&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0"
					}
				>
					<a>
						<div style={{ width: "220px" }}>
							<ButtonComponent
								icon={true}
								src={"/img/job_opening.svg"}
								text="View Job Opening"
							/>
						</div>
					</a>
				</Link>
			</div>
		</Layout>
	)
}

export default About
