import ButtonComponent from "../components/buttonComponent"
import Layout from "../components/layout"
import Link from "next/link"

const Pricing = () => {
	return (
		<div className="w-full" style={{ background: "#fafafa" }}>
			<Layout
				url={"/pricing"}
				description={
					"Ready to Start with DataNeuron? Use The Time Machine for AI to accelerate your model development!"
				}
				title={"Pricing | Dataneuron"}
			>
				<div
					className="text-center text-3xl md:text-4xl"
					style={{ marginBottom: 25 }}
				>
					Ready to Start with DataNeuron?
				</div>
				<div
					className="text-gray-500 text-center mt-5 px-3"
					style={{ fontSize: 20 }}
				>
					Use The Time Machine for AI to accelerate your model
					development!
				</div>
				<br />
				<br />
				<div
					className="p-3 space-y-3 flex flex-col lg:flex-row lg:space-x-3 lg:space-y-0 justify-center items-center"
					style={{ fontSize: 18 }}
				>
					<div
						style={{ height: 625, maxWidth: 400 }}
						className={
							" w-full md:w-70 border-2 rounded-lg border-gray-300 p-4"
						}
					>
						<div
							className="text-xl"
							style={{ color: "#0BA360", fontSize: 24 }}
						>
							On-Demand
						</div>
						<br />
						<div className="text-gray-500">
							Best suited for smaller projects with the
							flexibility to pay as you go.
						</div>
						<br />
						<div className="flex justify-center ">
							<Link
								href={
									"https://alpclientofficial.azurewebsites.net/"
								}
							>
								<a style={{ padding: "10px 20px" }}>
									<ButtonComponent
										text={"Get started"}
										filled={false}
									/>
								</a>
							</Link>
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
									$0.1 Per Annotation for every correct
									validation
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
						style={{ height: 625, maxWidth: 400 }}
						className={
							" w-full border-2 rounded-lg border-gray-300 p-4"
						}
					>
						<div
							className="text-xl"
							style={{ color: "#EE0979", fontSize: 24 }}
						>
							Enterprise
						</div>
						<br />
						<div className="text-gray-500">
							Best suited for enterprise level projects with
							scalability and performance in mind.
						</div>
						<br />
						<div className="flex justify-center">
							<Link href={"/contact"}>
								<a style={{ padding: "10px 20px" }}>
									<ButtonComponent
										text={"Contact sales"}
										filled={false}
									/>
								</a>
							</Link>
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
										Export Datasets, Model Block through API
										and Masterlist.
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
						style={{ height: 625, maxWidth: 400 }}
						className={
							" w-full md:w-70 border-2 rounded-lg border-gray-300 p-4"
						}
					>
						<div
							className="text-xl"
							style={{ color: "#2575FC", fontSize: 24 }}
						>
							Natural Language Prediction
						</div>
						<br />
						<div className="text-gray-500">
							Best suited for large projects with NLP as a major
							service to users.
						</div>
						<br />
						<div className="flex justify-center">
							<Link href={"/contact"}>
								<a style={{ padding: "10px 20px" }}>
									<ButtonComponent
										text={"Contact sales"}
										filled={false}
									/>
								</a>
							</Link>
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
				<div style={{ padding: 70 }}>
					<div className="text-xl md:text-3xl text-center md:text-left text-gray-500">
						Why DataNeuron?
					</div>

					<div className="flex flex-wrap justify-center space-x-3">
						<div
							className="p-3 lg:border-r-2 lg:border-b-0 border-gray-300 flex md:block items-center flex-col"
							style={{ width: 240 }}
						>
							<img
								width={50}
								height={50}
								src="/img/why2/why1.svg"
								alt="why2 image"
							/>

							<div
								className={
									"my-1 flex md:block justify-center items-center"
								}
							>
								<div className="text-2xl text-gray-400 pr-2">
									01
								</div>
								<div className="font-bold">
									No Code Prediction
								</div>
							</div>
							<div className={"text-center md:text-left"}>
								Natural Language Prediction without writing a
								single line of code!
							</div>
						</div>
						<div
							className="p-3 lg:border-r-2 lg:border-b-0 border-gray-300 flex md:block items-center flex-col"
							style={{ width: 240 }}
						>
							<img
								width={50}
								height={50}
								src="/img/why2/why2.svg"
								alt="why2 image"
							/>
							<div
								className={
									"my-1 flex md:block justify-center items-center"
								}
							>
								<div className="text-2xl text-gray-400 pr-2">
									02
								</div>
								<div className="font-bold">
									Guided Annotation
								</div>
							</div>

							<div className={"text-center md:text-left"}>
								DataNeuron performs guided and automated
								annotation on the data.
							</div>
						</div>
						<div
							className="p-3 lg:border-r-2 lg:border-b-0 border-gray-300 flex md:block items-center flex-col"
							style={{ width: 240 }}
						>
							<img
								width={50}
								height={50}
								src="/img/why2/why3.svg"
								alt="why2 image"
							/>
							<div
								className={
									"my-1 flex md:block justify-center items-center"
								}
							>
								<div className="text-2xl text-gray-400 pr-2">
									03
								</div>
								<div className="font-bold">Secure Platform</div>
							</div>
							<div className={"text-center md:text-left"}>
								Secure Data Platform for data exchange and model
								creation.
							</div>
						</div>
						<div
							className="p-3 lg:border-r-2 lg:border-b-0 border-gray-300 flex md:block items-center flex-col"
							style={{ width: 240 }}
						>
							<img
								width={50}
								height={50}
								src="/img/why2/why4.svg"
								alt="why2 image"
							/>
							<div
								className={
									"my-1 flex md:block justify-center items-center"
								}
							>
								<div className="text-2xl text-gray-400 pr-2">
									04
								</div>
								<div className="font-bold">Scalable</div>
							</div>
							<div className={"text-center md:text-left"}>
								Highly Scalable and High Performance Platform.
							</div>
						</div>
						<div
							className="p-3 flex md:block flex-col items-center"
							style={{ width: 240 }}
						>
							<img
								width={50}
								height={50}
								src="/img/why2/why5.svg"
								alt="why2 image"
							/>
							<div
								className={
									"my-1 flex md:block justify-center items-center"
								}
							>
								<div className="text-2xl text-gray-400 pr-2">
									05
								</div>
								<div className="font-bold">Evolving Model</div>
							</div>

							<div className={"text-center md:text-left"}>
								Incremental & Evolving Model in Real Time.
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	)
}

export default Pricing
