import Link from "next/link"
import { useRouter } from "next/router"
import Marquee from "react-fast-marquee"

let Footer = () => {
	let router = useRouter()

	return (
		<div>
			<div
				className={
					"w-full hidden md:flex border-t-2 border-b-2 border-gray-500"
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
						<div
							onClick={() => {
								router.push("/product")
							}}
							className={
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-l-2 border-b-2 border-r-2  border-black"
							}
							style={{ fontSize: 20 }}
						>
							Product
						</div>
						<div
							onClick={() => {
								router.push("/about")
							}}
							className={
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-r-2 border-black border-b-2"
							}
							style={{ fontSize: 20 }}
						>
							About
						</div>
					</div>
					<div className="flex">
						<div
							onClick={() => {
								router.push("/resources")
							}}
							className={
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-l-2 border-black border-r-2"
							}
							style={{ fontSize: 20 }}
						>
							Resouces
						</div>
						<div
							onClick={() => {
								router.push("/pricing")
							}}
							className={
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-r-2 border-black"
							}
							style={{ fontSize: 20 }}
						>
							Pricing
						</div>
					</div>
					<div className="flex">
						<div
							onClick={() => {
								router.push("/contact")
							}}
							className={
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-2 border-black"
							}
							style={{ fontSize: 20 }}
						>
							Contact
						</div>
						<div
							className={
								"w-1/2 p-6 cursor-pointer text-gray-500 flex border-t-2 justify-center items-center border-b-2 border-r-2 border-black"
							}
							style={{ fontSize: 20 }}
						>
							Careers
						</div>
					</div>
				</div>
				<div className="flex-grow flex flex-col justify-end">
					<div>
						<Marquee style={{ width: 500 }} direction={
"left"}>
							<img src="/img/flow.svg" alt="flow image" />
						</Marquee>
					</div>
					<div className="border-r-2 border-t-2 border-b-2 border-black p-4 text-center">
						mail@dataneuron.ai
					</div>
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
			<div className="md:hidden w-full">
				<div className="w-full font-bold text-center text-2xl p-3 border-2 border-black">
					DataNeuron
				</div>
				<div className="flex">
					<div className={"w-1/2 text-center p-3 border-l-2 border-r-2 border-black"} style={{color : "#7a7a7a" , fontSize : 18 , }}>Product</div>
					<div className={"w-1/2 text-center p-3 border-r-2 border-black"} style={{color : "#7a7a7a" , fontSize : 18 , }}>About</div>
				</div>
				<div className="flex border-b-2 border-2 border-black">
					<div className={"w-1/2 text-center p-3 border-r-2 border-black "} style={{color : "#7a7a7a" , fontSize : 18 , }}>Resources</div>
					<div className={"w-1/2 text-center p-3"} style={{color : "#7a7a7a" , fontSize : 18 , }}>Pricing</div>
				</div>
				<div className="flex border-b-2 border-black">
					<div className={"w-1/2 text-center p-3 border-r-2 border-black"} style={{color : "#7a7a7a" , fontSize : 18 , }}>Contact</div>
					<div className={"w-1/2 text-center p-3 border-r-2 border-black"} style={{color : "#7a7a7a" , fontSize : 18 , }}>Careers</div>
				</div>
				<div className={"p-3 text-center font-bold border-b-2 border-r-2 border-black"} style={{fontSize : 18}}>mail@dataneuron.ai</div>
				<div className="flex border-l-2 border-r-2 border-b-2 border-black">
					<div className={"w-1/2 text-center p-3 border-r-2 border-black"} style={{color : "#7a7a7a" , fontSize : 18 , }}>Privacy Policy</div>
					<div className={"w-1/2 text-center p-3"} style={{color : "#7a7a7a" , fontSize : 18}}>
						Copyright © 2021 Precily, Inc.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
