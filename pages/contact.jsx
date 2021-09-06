import Layout from "../components/layout"

let Contact = () => {
	return (
		<Layout>
			<div className="flex flex-wrap">
				<div className=" md:w-1/2 w-full">
					<div className="text-4xl">
						How can we <br />
						help you
						<span className="text-blue-500">Transform?</span>
					</div>
					<br />
					<form action="GET">
						<div className="w-11/12 flex">
							<div className={"w-1/2 m-3"}>
								<input
									style={{
										borderBottom: "3px solid #7a7a7a",
										padding: 10,
									}}
									type="text"
									className="w-full"
									placeholder={"Name"}
								/>
							</div>
							<div className={"w-1/2 m-3"}>
								<input
									style={{
										borderBottom: "3px solid #7a7a7a",
										padding: 10,
									}}
									type="text"
									className="w-full"
									placeholder={"Email"}
								/>
							</div>
						</div>
						<div className="w-full flex">
							<div className={"w-1/2 m-3"}>
								<input
									style={{
										borderBottom: "3px solid #7a7a7a",
										padding: 10,
									}}
									type="text"
									className="w-full"
									placeholder={"Organisation"}
								/>
							</div>
						</div>
						<div className="w-11/12">
							<div className={"m-3"}>
								<input
									style={{
										borderBottom: "3px solid #7a7a7a",
										padding: 10,
									}}
									type="text"
									className="w-full"
									placeholder={"Message"}
								/>
							</div>
						</div>
						<div className="w-11/12 m-3 mt-6">
							<input
								style={{
									borderBottom: "3px solid #7a7a7a",
									padding: 10,
                                    width : 30
								}}
								type="radio"
								className="w-full"
								placeholder={"Message"}
							/>
							I agree to the Terms & Conditions.
						</div>
                        <button className={"px-3 py-2 border-2 border-black w-40 m-3"}>
                            Send
                        </button>
					</form>
				</div>

				<div className="md:w-1/2 w-full">
					<div className={"w-4/5"}>
						<div className="text-3xl">Contact Information</div>
						<br />
						<div className="text-gray-500 text-xl">
							Fill out the form and our team will get back to you
							as soon as possible.
						</div>
						<br />
						<div className="flex">
							<img src="/img/india.svg" alt="india markder" />
							<div className={"text-xl ml-3"}>
								501, Incubation Centre - IIIT-D, Okhla
								Industrial Estate, Phase III, New Delhi - 110020
							</div>
						</div>
						<div className="flex">
							<img src="/img/america.svg" alt="america markder" />
							<div className={"text-xl ml-3"}>
								Stanford Research Park, 3260, Hillview Ave, Palo
								Alto, CA - 94304
							</div>
						</div>
						<br />
						<div className="flex space-x-6">
							<img src="/img/linkedin.svg" alt="linkedin" />
							<img src="/img/email.svg" alt="email" />
							<img src="/img/medium.svg" alt="medium" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Contact
