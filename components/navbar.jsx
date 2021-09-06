import Link from "next/link"
import ButtonComponent from "./buttonComponent"

const Navbar = () => {
	return (
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
	)
}

export default Navbar
