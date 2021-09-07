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
			className={`w-full fixed bg-white z-50 md:hidden duration-500 ${
				onTop === false && "shadow-md"
			}`}
		>
			<div
				className={`flex justify-between items-center duration-500 ${
					onTop ? "p-6" : "p-3"
				}`}
			>
				<div className="text-2xl font-bold">DataNeuron</div>
				<div>
					<Hamburger
						toggled={expanded}
						onToggle={() => setExpanded(!expanded)}
					/>
				</div>
			</div>

			<div
				className={`duration-500 overflow-hidden ${
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
			</div>
		</div>
	)
}

const Navbar = () => {
	return (
		<div>
			<div className={"hidden md:block"}>
				<div
					style={{ padding: "52px 70px" }}
					className={"w-full flex justify-between"}
				>
					<Link href={"/"}>
						<a>
							{" "}
							<div className="text-2xl font-bold">DataNeuron</div>
						</a>
					</Link>
					<div className="flex">
						<Link href={"/product"}>
							<a className={"p-3"}>Product</a>
						</Link>
						<Link href={"/about"}>
							<a className={"p-3"}>About</a>
						</Link>
						<Link href={"/pricing"}>
							<a className={"p-3"}>Pricing</a>
						</Link>
						<Link href={"/resources"}>
							<a className={"p-3"}>Resources</a>
						</Link>
						<Link href={"/contact"}>
							<a className={"p-3"}>Contact</a>
						</Link>
						<ButtonComponent filled={false} text={"Get started"}>
							Get Started
						</ButtonComponent>
					</div>
				</div>
			</div>
			<MobileNavbar />
		</div>
	)
}

export default Navbar
