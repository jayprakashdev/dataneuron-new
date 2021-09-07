import Link from "next/link"
import {useRouter} from "next/router"
import ButtonComponent from "./buttonComponent"

const Navbar = () => {
	const router =useRouter();
	return (
		<div
			style={{ padding: "52px 70px" }}
			className={"w-full flex justify-between"}
		>
			<Link href={"/"}>
				<a>
					{" "}
					<div className="font-bold" style={{fontSize:"40px"}}>DataNeuron</div>
				</a>
			</Link>
			<div className="flex">
				<div onClick={()=>router.push("/product")} className="mx-8 my-2 cursor-pointer">
					<a className={"py-2 px-5 text-xl"}>Product</a>
				</div>
				<div onClick={()=>router.push("/about")} className="mx-8 my-2 cursor-pointer">
					<a className={"py-2 px-5 text-xl"}>About</a>
				</div>
				<div onClick={()=>router.push("/pricing")} className="mx-8 my-2 cursor-pointer">
					<a className={"py-2 px-5 text-xl"}>Pricing</a>
				</div>
				<div onClick={()=>router.push("/resources")} className="mx-8 my-2 cursor-pointer">
					<a className={"py-2 px-5 text-xl"}>Resources</a>
				</div>
				<div onClick={()=>router.push("/contact")} className="mx-8 my-2 cursor-pointer">
					<a className={"py-2 px-5 text-xl"}>Contact</a>
				</div>
				<div  className="ml-5 px-14  py-3 rounded-full border border-blue-600 text-xl text-blue-600">
					Get Started
				</div>
			</div>
		</div>
	)
}

export default Navbar
