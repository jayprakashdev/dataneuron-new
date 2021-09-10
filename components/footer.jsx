import Link from "next/link"
import { useRouter } from "next/router"
import Marquee from "react-fast-marquee"

let Footer = () => {
	let router = useRouter()

	return (
		<div>
			<div
				className={"w-full flex border-t-2 border-b-2 border-gray-500"}
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
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-r-2 border-black"
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
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-l-2 border-black"
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
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-2 border-black"
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
								"w-1/2 p-6 cursor-pointer text-gray-500 flex justify-center items-center border-b-2 border-r-2 border-black"
							}
							style={{ fontSize: 20 }}
						>
							Careers
						</div>
					</div>
				</div>
				<div className="flex-grow flex flex-col justify-end">
					<div>
						<Marquee style={{width : 500}} direction={"right"}>
							<img src="/img/flow.svg" alt="flow image" />
						</Marquee>
					</div>
					<div className="border-r-2 border-t-2 border-b-2 border-black p-4 text-center">
						mail@dataneuron.ai
					</div>
					<div className="flex">
						<Link href={"/privacy"}>
							<a>
								<div className="w-1/2 p-3 text-center text-gray-500">
									Privary Policy
								</div>
							</a>
						</Link>
						<div className="w-1/2 p-3 text-center border-l-2 border-black text-gray-500">
							Copyright © 2021 Precily, Inc.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
