import ButtonComponent from "../components/buttonComponent"
import Layout from "../components/layout"

const Pricing = () => {
	return (
		<div className="w-full" style={{background:"#E5E5E5"}}>
		<Layout>
			<div className="text-center text-4xl">
				Ready to Start with DataNeuron?
			</div>
			<div className="text-gray-500 text-center mt-5 text-lg">
				Use The Time Machine for AI to accelerate your model
				development!
			</div>
			<br />
			<br />
			<div
				className="flex flex-wrap space-x-6 justify-center"
				style={{ fontSize: 18 }}
			>
				<div
					style={{ width: 400, height: 625}}
					className={"border-2 rounded-lg border-gray-500 p-4"}
				>
					<div className="text-green-500 text-xl">On-Demand</div>
					<br />
					<div className="text-gray-500">
						Best suited for smaller projects with the flexibility to
						pay as you go.
					</div>
					<br />
					<div className="flex justify-center">
						<div 
						className="cursor-pointer py-3 rounded-full flex justify-center items-center border border-blue-600"
						style={{width:"260px"}}
						>
							<p className="text-xl text-blue-600">Get Started</p>
						</div>
					</div>
					<br />
					<div>
						<div className="flex">
							<img
								src="/img/per.svg"
								className={"px-3"}
								alt="per price"
							/>
							<div>
								$0.1 Per Annotation for every correct validation
							</div>
						</div>
						<br />
						<div className="flex">
							<img
								src="/img/per_para.svg"
								className={"px-3"}
								alt="per price"
							/>
							<div>$0.05 Per Paragraph Prediction</div>
						</div>
						<br />
						<div className="flex">
							<img
								src="/img/masterlist.svg"
								className={"px-3"}
								alt="per price"
							/>
							<div>$150 Per Month, Per Master List</div>
						</div>
					</div>
				</div>
				<div
					style={{ width: 400, height: 625 }}
					className={"border-2 rounded-lg border-gray-500 p-4"}
				>
					<div className="text-pink-500 text-xl">Enterprise</div>
					<br />
					<div className="text-gray-500">
						Best suited for enterprise level projects with
						scalability and performance in mind.
					</div>
					<br />
					<div className="flex justify-center">
						<div 
						className="cursor-pointer py-3 rounded-full flex justify-center items-center border border-blue-600"
						style={{width:"260px"}}
						>
							<p className="text-xl text-blue-600">Contact Sales</p>
						</div>
					</div>
					<br />
					<div>
						<div>
							<div className="flex">
								<img
									className={"px-3"}
									src="/img/masterlist.svg"
									alt="per price"
								/>
								<div>10 Masterlist Preparation</div>
							</div>
							<br />
							<div className="flex">
								<img
									className={"px-3"}
									src="/img/data.svg"
									alt="per price"
								/>
								<div>1 GB Data Assert Upload</div>
							</div>
							<br />
							<div className="flex">
								<img
									className={"px-3"}
									src="/img/export.svg"
									alt="per price"
								/>
								<div>
									Export Datasets, Model Block through API and
									Masterlist.
								</div>
							</div>
							<br />
							<div className="flex">
								<img
									className={"px-3"}
									src="/img/batch.svg"
									alt="per price"
								/>
								<div>Batch and Single Data PointAPI</div>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{ width: 400, height: 625 }}
					className={"border-2 rounded-lg border-gray-500 p-4"}
				>
					<div className="text-green-500 text-xl">
						Natural Language Prediction
					</div>
					<br />
					<div className="text-gray-500">
						Best suited for large projects with NLP as a major
						service to users.
					</div>
					<br />
					<div className="flex justify-center">
						<div 
						className="cursor-pointer py-3 rounded-full flex justify-center items-center border border-blue-600"
						style={{width:"260px"}}
						>
							<p className="text-xl text-blue-600">Contact Sales</p>
						</div>
					</div>
					<br />
					<div>
						<div className="flex">
							<img
								className={"px-3"}
								src="/img/masterlist.svg"
								alt="per price"
							/>
							<div>10 Masterlist Preparation</div>
						</div>
						<br />
						<div className="flex">
							<img
								className={"px-3"}
								src="/img/predict.svg"
								alt="per price"
							/>
							<div>Unlimited Prediction Service</div>
						</div>
						<br />
						<div className="ml-6">
							<div>Prediction Service via:</div>
							<div className="flex">
								<img
									className={"px-3"}
									src="/img/api.svg"
									alt="api"
								/>
								<div>Batch API</div>
							</div>
							<div className="flex">
								<img
									className={"px-3"}
									src="/img/batch.svg"
									alt="per price"
								/>
								<div>Single Data Point API</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="text-3xl text-gray-500">Why DataNeuron?</div>
			<br />
			<div className="flex flex-wrap justify-center space-x-3">
				<div
					className="p-3 border-r-2 border-gray-300"
					style={{ width: 240 }}
				>
					<img src="/img/why2/why1.svg" alt="why2 image" />
					<br />
					<div className="text-2xl text-gray-400">01</div>
					<div className="font-bold">No Code Prediction</div>
					<div>
						Natural Language Prediction without writing a single
						line of code!
					</div>
				</div>
				<div
					className="p-3 border-r-2 border-gray-300"
					style={{ width: 240 }}
				>
					<img src="/img/why2/why2.svg" alt="why2 image" />
					<br />
					<div className="text-2xl text-gray-400">02</div>
					<div className="font-bold">Secure Platform</div>
					<div>
						Secure Data Platform for data exchange and model
						creation.
					</div>
				</div>
				<div
					className="p-3 border-r-2 border-gray-300"
					style={{ width: 240 }}
				>
					<img src="/img/why2/why3.svg" alt="why2 image" />
					<br />
					<div className="text-2xl text-gray-400">03</div>
					<div className="font-bold">Secure Platform</div>
					<div>
						Secure Data Platform for data exchange and model
						creation.
					</div>
				</div>
				<div
					className="p-3 border-r-2 border-gray-300"
					style={{ width: 240 }}
				>
					<img src="/img/why2/why4.svg" alt="why2 image" />
					<br />
					<div className="text-2xl text-gray-400">04</div>
					<div className="font-bold">Scalable</div>
					<div>Highly Scalable and High Performance Platform.</div>
				</div>
				<div className="p-3 " style={{ width: 240 }}>
					<img src="/img/why2/why5.svg" alt="why2 image" />
					<br />
					<div className="text-2xl text-gray-400">05</div>
					<div className="font-bold">Evolving Model</div>
					<div>Incremental & Evolving Model in Real Time.</div>
				</div>
			</div>
		</Layout>
		</div>
	)
}

export default Pricing
