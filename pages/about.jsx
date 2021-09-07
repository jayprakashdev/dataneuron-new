import ButtonComponent from "../components/buttonComponent"
import Layout from "../components/layout"

const About = () => {
	return (
		<div style={{ width: "100%" }}>
			<Layout>
				<div style={{ margin: "-50px 0 20px 20px" }}>
					<p className="mb-2 text-gray-500">About DataNeuron</p>
					<p className="my-2 text-4xl">
						At DataNeuron, our aim is to accelerate the development
						and provide explainability for AI.
					</p>
					<br />
					<p className="my-2">
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
						<p className="my-3 text-gray-500 text-lg">Our Goals</p>
						<div className="flex justify-center flex-wrap space-x-3">
						<div className={"shadow-md p-3 flex flex-col items-center justify-center"} style={{width : 420}}>
								<div className="flex space-x-3">
									<img src="/img/circle.gif" alt="circle" width={60} height={60} />
									<img src="/img/circle.svg" alt="circle" width={60} height={60} />
									<img src="/img/circle.gif" alt="circle" width={60} height={60} />
									<img src="/img/circle.svg" alt="circle" width={60} height={60} />
									<img src="/img/circle.gif" alt="circle" width={60} height={60} />
								</div>
								<br />
								<div className="text-center text-lg">
									200%-400% customers’ ROI from DataNeuron’s
									solution(s).
								</div>
							</div>
							<div className={"shadow-md p-3 flex flex-col items-center justify-center"} style={{width :420}}>
								<img src="/img/meter.gif" width={240} alt="meter" />
								<br />
								<div className="text-center text-lg">
									200%-400% customers’ ROI from DataNeuron’s
									solution(s).
								</div>
							</div>
							<div className={"shadow-md p-3 flex flex-col items-center justify-center"} style={{width : 420}}>
								<img src="/img/doc_ani.gif" alt="meter" />
								<br />
								<div className="text-center text-lg">
									200%-400% customers’ ROI from DataNeuron’s
									solution(s).
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="text-white w-full border-2"
					style={{
						background: "#2C2C2C",
						transform: "translateX(-50px)",
						width: "98.93vw",
					}}
				>
					<p className="w-full text-center py-10 text-lg">
						Backed By The Best
					</p>
					<div className="flex justify-center mb-5 w-full">
						<div
							className="flex justify-between space-x-6"
							style={{ width: "50%" }}
						>
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
					<p className="w-full text-center py-5 text-lg">
						Our Company Leadership
					</p>
					<div className="flex justify-center mb-5 w-full">
						<div
							className="flex justify-between"
							style={{ width: "50%" }}
						>
							<div>
								<img
									src="/img/bharath.svg"
									alt="Windrose Captical"
								></img>
								<p className="my-2 w-full text-center">
									Bharath Rao
								</p>
							</div>
							<div>
								<img
									src="/img/rohit_goyal.svg"
									alt="Windrose Captical"
								></img>
								<p className="my-2 w-full text-center">
									Rohit Goyal
								</p>
							</div>
							<div>
								<img
									src="/img/anil_advani.svg"
									alt="Windrose Captical"
								></img>
								<p className="my-2 w-full text-center">
									Anil Advani
								</p>
							</div>
							<div>
								<img
									src="/img/rohit_adhlaka.svg"
									alt="Windrose Captical"
								></img>
								<p className="my-2 w-full text-center">
									Rohit Adlakha
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full my-14" style={{ padding: "0 72px" }}>
					<p className="my-3">Join DataNeuron</p>
					<p className="mb-5">
						At DataNeuron, we are always looking for intelligent and
						smart-working folks so feel free to take a look at our
						open positions on LinkedIn.
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
		</div>
	)
}

export default About
