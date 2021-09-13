import React, { useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import Layout from "../components/layout"
import { createContact } from "../lib/graphcms"

let Contact = () => {
	const [contactDetails, setContactDetails] = React.useState({
		name: "",
		email: "",
		organisation: "",
		message: "",
	})
	const [isAgree, setIsAgree] = useState(false)
	const [showMsg, setShowMsg] = useState(false)
	const handleChange = (e) => {
		setContactDetails({
			...contactDetails,
			[e.target.name]: e.target.value,
		})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!isAgree) {
			alert("You need to check agree")
		} else {
			try {
				let data = await fetch("/api/createContact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: contactDetails.name,
						organisation: contactDetails.organisation,
						emailId: contactDetails.email,
						messsage: contactDetails.message,
					}),
				})
				console.log(data)
				setShowMsg(true)
			} catch (err) {
				console.error(err)
			}
		}
	}
	return (
		<Layout>
			<dir className={"lg:hidden"}>
				<br />
				<br />
				<br />
				<br />
				<br />
			</dir>
			<div className="flex flex-wrap space-y-6 lg:space-y-0 py-5 px-5 lg:px-20">
				<div className=" lg:w-1/2 w-full">
					<div className="text-4xl">
						How can we <br />
						help you &nbsp;
						<span style={{ color: "#0047FF" }}>
							<Typewriter words={["Transform?"]} />
						</span>
					</div>
					<br />
					{showMsg && (
						<div
							className={
								"p-3text-md text-blue-800 shadow-md p-3 flex justify-between mr-6"
							}
						>
							<div>
								Thank you for contacting us. <br /> We will get
								back to you as soon as possible.
							</div>
							<div className={"flex items-center"}>
								<img
									onClick={() => setShowMsg(false)}
									src="/img/close.svg"
									className={"hover:bg-gray-300"}
									alt="close icon"
									width={30}
									height={30}
								/>
							</div>
						</div>
					)}
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
									name="name"
									onChange={(e) => handleChange(e)}
									value={contactDetails.name}
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
									name="email"
									onChange={(e) => handleChange(e)}
									value={contactDetails.email}
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
									name="organisation"
									onChange={(e) => handleChange(e)}
									value={contactDetails.organisation}
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
									name="message"
									onChange={(e) => handleChange(e)}
									value={contactDetails.message}
								/>
							</div>
						</div>
						<div className="w-11/12 m-3 mt-6">
							<input
								style={{
									borderBottom: "3px solid #7a7a7a",
									padding: 10,
									width: 30,
								}}
								type="radio"
								className="w-full"
								placeholder={"Message"}
								onChange={() => setIsAgree(!isAgree)}
							/>
							I agree to the Terms & Conditions.
						</div>
						<button
							className={
								"px-3 py-2 border-2 border-black w-40 m-3"
							}
							onClick={(e) => handleSubmit(e)}
						>
							Send
						</button>
					</form>
				</div>

				<div className="lg:w-1/2 w-full">
					<div className={"w-4/5"}>
						<div className="text-3xl">Contact Information</div>
						<br />
						<div className="text-gray-500 text-xl">
							Fill out the form and our team will get back to you
							as soon as possible.
						</div>
						<br />
						<div className="flex">
							<img src="/img/america.svg" alt="america markder" />
							<div className={"text-xl ml-3"}>
								HQ Stanford Research Park, 3260, Hillview Ave,
								Palo Alto, CA - 94304
							</div>
						</div>
						<br />
						<div className="flex">
							<img src="/img/india.svg" alt="india markder" />
							<div className={"text-xl ml-3"}>
								501, Incubation Centre - IIIT-D, Okhla
								Industrial Estate, Phase III, New Delhi - 110020
							</div>
						</div>

						<br />
						<div className="flex space-x-6">
							<a href="https://in.linkedin.com/company/precily">
								<img src="/img/linkedin.svg" alt="linkedin" />
							</a>

							<a
								href="mailto:mail@precily.com"
								rel="noopener noreferrer"
							>
								<img src="/img/email.svg" alt="email" />
							</a>
							
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Contact
