import Link from "next/link"
import ButtonComponent from "./buttonComponent"
import Hamburger from "hamburger-react"
import { useEffect, useState } from "react"

let MobileNavbar = () => {
	let [expanded, setExpanded] = useState(false)
	let [onTop, setOnTop] = useState(true)

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 5) {
				setOnTop(false)
			} else {
				setOnTop(true)
			}
		}
		return () => {
			window.onscroll = null
		}
	}, [])

	return (
		<div
			className={`w-full top-0 fixed bg-white z-50 xl:hidden duration-300 ${
				onTop === false || expanded && "shadow-md"
			}`}
		>
			<div
				className={`flex justify-between items-center duration-300 ${
					onTop ? "p-6" : "p-3"
				}`}
			>
				<Link href={"/"}>
					<a className={"flex items-center"}>
						<div className="text-2xl font-bold">DataNeuron</div>
					</a>
				</Link>
				<div>
					<Hamburger
						toggled={expanded}
						onToggle={() => setExpanded(!expanded)}
					/>
				</div>
			</div>

			<div
				className={`duration-300 overflow-hidden ${
					expanded ? "h-auto" : "h-0"
				}`}
			>
				<div className={"w-full p-3 text-center"}>
					<Link href={"/product"}>
						<a>Product</a>
					</Link>
				</div>
				<div className={"w-full p-3 text-center"}>
					<Link href="/about">
						<a>About</a>
					</Link>
				</div>
				<div className={"w-full p-3 text-center"}>
					<Link href="/pricing">
						<a>Pricing</a>
					</Link>
				</div>
				<div className={"w-full p-3 text-center"}>
					<Link href="/resources">
						<a>Resources</a>
					</Link>
				</div>
				<div className={"w-full p-3 text-center"}>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</div>
				<div className="flex justify-center p-3">
					<a
						href={"https://alpclientofficial.azurewebsites.net/"}
						className={
							"bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white py-2 px-7 rounded-full text-lg"
						}
						target="_blank"
						rel="noreferrer"
					>
						Get Started
					</a>
				</div>
			</div>
		</div>
	)
}

const Navbar = () => {

	let [onTop, setOnTop] = useState(true)

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 5) {
				setOnTop(false)
			} else {
				setOnTop(true)
			}
		}
		return () => {
			window.onscroll = null
		}
	}, [])

	return (
		<div className={`${onTop === false && "shadow-md"} fixed top-0 left-0 right-0 bg-white z-50`}>
			<div className={"hidden xl:block"}>
				<div
					style={{ padding: `24px 70px` }}
					className={"w-full flex justify-between"}
				>
					<Link href={"/"}>
						<a className={"flex items-center"}>
							<img src="/img/logo.svg" alt="logo" />
							<svg width={10} height={50}>
								<path
									d={"M 5 0 L 5 50"}
									fill={"transparent"}
									stroke={"black"}
									strokeWidth={2}
								/>
							</svg>
							<div className="text-2xl font-bold">DataNeuron</div>
						</a>
					</Link>
					<div className="flex items-center">
						<Link href={"/product"}>
							<a
								className="font-thin hover:text-blue-700 duration-300 px-4 py-2"
								style={{ marginLeft: 60, fontSize: 22 }}
							>
								Product
							</a>
						</Link>
						<Link href={"/about"}>
							<a
								className="font-thin hover:text-blue-700 duration-300 px-4 py-2"
								style={{ fontSize: 22 }}
							>
								About
							</a>
						</Link>
						<Link href={"/pricing"}>
							<a
								className="font-thin hover:text-blue-700 duration-300 px-4 py-2"
								style={{ fontSize: 22 }}
							>
								Pricing
							</a>
						</Link>
						<Link href={"/resources"}>
							<a
								className="font-thin hover:text-blue-700 duration-300 px-4 py-2"
								style={{ fontSize: 22 }}
							>
								Resources
							</a>
						</Link>
						<Link href={"/contact"}>
							<a
								className="font-thin hover:text-blue-700 duration-300 px-4 py-2"
								style={{
									marginRight: 60,
									fontSize: 22,
								}}
							>
								Contact
							</a>
						</Link>
						<a
							href={
								"https://alpclientofficial.azurewebsites.net/"
							}
							className={
								"bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 duration-500 hover:text-white py-2 px-7 rounded-full text-lg"
							}
							target="_blank"
							rel="noreferrer"
						>
							Get Started
						</a>
					</div>
				</div>
			</div>
			<MobileNavbar />
		</div>
	)
}

export default Navbar
