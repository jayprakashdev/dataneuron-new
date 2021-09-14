import Link from "next/link"
import { useRouter } from "next/router"
import Marquee from "react-fast-marquee"

let Footer = () => {
	let router = useRouter()

	return (
		<div>
			<div
				className={
					"w-full hidden lg:flex border-t-2 border-b-2 border-gray-500"
				}
			>
				<div
					onClick={() => {
						router.push("/")
					}}
					style={{ width: 312, fontSize: 32 }}
					className={
						"flex text-xl justify-center cursor-pointer items-center"
					}
				>
					DataNeuron
				</div>
				<div style={{ width: 680 }}>
					<div className="flex">
						<Link href={"/product"}>
							<a
								className={
									"w-1/2 p-6 hover:bg-gray-100 cursor-pointer text-gray-500 flex justify-center items-center border-l-2 border-b-2 border-r-2  border-black"
								}
							>
								<div
									onClick={() => {
										router.push("/product")
									}}
									className={""}
									style={{ fontSize: 20 }}
								>
									Product
								</div>
							</a>
						</Link>
						<Link href={"/about"}>
							<a
								className={
									"w-1/2 p-6 hover:bg-gray-100 cursor-pointer text-gray-500 flex justify-center items-center border-r-2 border-black border-b-2"
								}
							>
								<div
									onClick={() => {
										router.push("/about")
									}}
									style={{ fontSize: 20 }}
								>
									About
								</div>
							</a>
						</Link>
					</div>
					<div className="flex">
						<Link href={"/resources"}>
							<a
								className={
									"w-1/2 p-6 hover:bg-gray-100 cursor-pointer text-gray-500 flex justify-center items-center border-l-2 border-black border-r-2"
								}
							>
								<div
									onClick={() => {
										router.push("/resources")
									}}
									style={{ fontSize: 20 }}
								>
									Resouces
								</div>
							</a>
						</Link>
						<Link href={"/pricing"}>
							<a
								className={
									"w-1/2 p-6 hover:bg-gray-100 cursor-pointer text-gray-500 flex justify-center items-center border-r-2 border-black"
								}
							>
								<div style={{ fontSize: 20 }}>Pricing</div>
							</a>
						</Link>
					</div>
					<div className="flex">
						<Link href={"/contact"}>
							<a
								className={
									"w-1/2 p-6 hover:bg-gray-100 cursor-pointer text-gray-500 flex justify-center items-center border-2 border-black"
								}
							>
								<div style={{ fontSize: 20 }}>Contact</div>
							</a>
						</Link>
						<Link href={"https://in.linkedin.com/jobs/precily-inc.-jobs?f_C=7797080&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0"}>
							<a
								className={
									"w-1/2 hover:bg-gray-100 p-6 cursor-pointer text-gray-500 flex border-t-2 justify-center items-center border-b-2 border-r-2 border-black"
								}
							>
								<div style={{ fontSize: 20 }}>Careers</div>
							</a>
						</Link>
					</div>
				</div>
				<div className="flex-grow hover:bg-gray-100 flex flex-col justify-end">
					<div>
						<Marquee style={{ width: 500 }} direction={"left"}>
							<img src="/img/flow.svg" alt="flow image" />
						</Marquee>
					</div>
					<Link href={"mailto:mail@dataneuron.ai"}>
						<a className="hover:bg-gray-100 border-r-2 border-t-2 border-b-2 border-black p-4 text-center">
							<div>mail@dataneuron.ai</div>
						</a>
					</Link>

					<div className="flex">
						<Link href={"/privacy"}>
							<a className={"w-1/2"}>
								<div className="p-3 text-center text-gray-500">
									Privary Policy
								</div>
							</a>
						</Link>
						<div className="w-1/2 p-3 flex justify-center items-center text-center border-l-2 border-black text-gray-500">
							Copyright © 2021 Precily, Inc.
						</div>
					</div>
				</div>
			</div>
			<div className="lg:hidden w-full">
				<Link href={"/"}>
					<a>
						<div className="w-full font-bold text-center text-2xl p-3 border-2 border-black">
							DataNeuron
						</div>
					</a>
				</Link>
				<div className="flex">
					<Link href={"/product"}>
						<a
							className={
								"w-1/2 text-center p-3 border-l-2 border-r-2 border-black"
							}
						>
							<div style={{ color: "#7a7a7a", fontSize: 18 }}>
								Product
							</div>
						</a>
					</Link>
					<Link href={"/about"}>
						<a
							className={
								"w-1/2 text-center p-3 border-r-2 border-black"
							}
						>
							<div style={{ color: "#7a7a7a", fontSize: 18 }}>
								About
							</div>
						</a>
					</Link>
				</div>
				<div className="flex border-b-2 border-2 border-black">
					<Link href={"/resources"}>
						<a
							className={
								"w-1/2 text-center p-3 border-r-2 border-black "
							}
						>
							<div style={{ color: "#7a7a7a", fontSize: 18 }}>
								Resources
							</div>
						</a>
					</Link>
					<Link href={"/pricing"}>
						<a className={"w-1/2 text-center p-3"}>
							<div style={{ color: "#7a7a7a", fontSize: 18 }}>
								Pricing
							</div>
						</a>
					</Link>
				</div>
				<div className="flex border-b-2 border-black">
					<Link href={"/contact"}>
						<a
							className={
								"w-1/2 text-center p-3 border-r-2 border-l-2 border-black"
							}
						>
							<div style={{ color: "#7a7a7a", fontSize: 18 }}>
								Contact
							</div>
						</a>
					</Link>
					<Link href={"https://in.linkedin.com/jobs/precily-inc.-jobs?f_C=7797080&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0"}>
						<a
							className={
								"w-1/2 text-center p-3 border-r-2 border-black"
							}
						>
							<div style={{ color: "#7a7a7a", fontSize: 18 }}>
								Careers
							</div>
						</a>
					</Link>
				</div>
				<Link href={"mailto:mail@dataneuron.ai"}>
					<a
						className={"p-3 flex justify-center font-bold border-l-2 border-black border-b-2 border-r-2"}
					>
						<div style={{ fontSize: 18 }}>mail@dataneuron.ai</div>
					</a>
				</Link>

				<div className="flex border-l-2 border-r-2 border-b-2 border-black">
					<Link href={"/privary"}>
						<a
							className={
								"w-1/2 text-center p-3 border-r-2 border-black"
							}
						>
							<div style={{ color: "#7a7a7a", fontSize: 18 }}>
								Privacy Policy
							</div>
						</a>
					</Link>

					<div
						className={"w-1/2 text-center p-3"}
						style={{ color: "#7a7a7a", fontSize: 18 }}
					>
						Copyright © 2021 Precily, Inc.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
