import ButtonComponent from "../components/buttonComponent"
import Layout from "../components/layout"

const About = () => {
	return (
		<Layout>
			<dir className={"md:hidden"}>
				<br />
				<br />
				<br />
			</dir>
			<div className={"p-3 md:px-3"}>
				<div style={{ margin: "30px 0 20px 20px" }}>
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
							We strive to be that platform.
						</span>
					</p>
					<div className="my-10">
						<p
							className="my-3 text-gray-500"
							style={{ fontSize: 25 }}
						>
							Our Goals
						</p>
						<div className="flex w-full items-center md:justify-between justify-center flex-wrap md:space-x-3">
							<div
								className={
									"shadow-md p-3 flex flex-col items-center justify-center h-64 min-w-72 w-3/12"
								}
								style={{ minWidth: 400 }}
							>
								<div className="flex space-x-3">
									<img
										src="/img/circle.gif"
										alt="circle"
										width={60}
										height={60}
									/>
									<img
										src="/img/circle.svg"
										alt="circle"
										width={60}
										height={60}
									/>
									<img
										src="/img/circle.gif"
										alt="circle"
										width={60}
										height={60}
									/>
									<img
										src="/img/circle.svg"
										alt="circle"
										width={60}
										height={60}
									/>
									<img
										src="/img/circle.gif"
										alt="circle"
										width={60}
										height={60}
									/>
								</div>
								<br />
								<div className="text-center text-lg">
									Reduce Project Staffing by 70-90%.
								</div>
							</div>
							<div
								className={
									"shadow-md p-3 flex flex-col items-center justify-center h-64 min-w-72 w-3/12"
								}
								style={{ minWidth: 400 }}
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
									"shadow-md p-3 flex flex-col items-center justify-center h-64 min-w-72 w-3/12"
								}
								style={{ minWidth: 400 }}
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
					<div className="flex flex-wrap p-6 justify-between md:space-x-24 space-y-6 md:space-y-0">
						<img
							src="/img/aboutus1.svg"
							alt="Windrose Captical"
						></img>
						<img
							src="/img/aboutus2.svg"
							alt="Windrose Captical"
						></img>
					</div>
				</div>
				<p className="w-full text-center py-3 text-lg">
					Our Company Leadership
				</p>
				<div className="md:flex justify-center mb-3 w-full">
					<div className="md:flex md:space-x-12 justify-between">
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
			<div className="w-full my-14" style={{ padding: "0 72px" }}>
				<p className="my-3" style={{ color: "#7a7a7a", fontSize: 25 }}>
					Join DataNeuron
				</p>
				<p className="mb-5" style={{ fontSize: 25 }}>
					At DataNeuron, we are always looking for intelligent and
					smart-working folks so feel free to take a look at our open
					positions on LinkedIn.
				</p>
				<div style={{ width: "220px" }}>
					<ButtonComponent
						icon={true}
						src={"/img/job_opening.svg"}
						text="View Job Opening"
					/>
				</div>
			</div>
		</Layout>
	)
}

export default About
