import Link from 'next/link'

let Footer = () => {
	return (
		<div className={"w-full flex border-t-2 border-b-2 border-gray-500"}>
			<div
				style={{ width: 312, fontSize: 32 }}
				className={"flex text-xl justify-center items-center"}
			>
				DataNeuron
			</div>
			<div style={{ width: 680 }}>
				<div className="flex">
					<div
						className={
							"w-1/2 p-6 text-gray-500 flex justify-center items-center border-l-2 border-b-2 border-r-2  border-black"
						}
						style={{ fontSize: 20 }}
					>
						Product
					</div>
					<div
						className={
							"w-1/2 p-6 text-gray-500 flex justify-center items-center border-r-2 border-black"
						}
						style={{ fontSize: 20 }}
					>
						About
					</div>
				</div>
				<div className="flex">
					<div
						className={
							"w-1/2 p-6 text-gray-500 flex justify-center items-center border-l-2 border-black"
						}
						style={{ fontSize: 20 }}
					>
						Resouces
					</div>
					<div
						className={
							"w-1/2 p-6 text-gray-500 flex justify-center items-center border-2 border-black"
						}
						style={{ fontSize: 20 }}
					>
						Pricing
					</div>
				</div>
				<div className="flex">
					<div
						className={
							"w-1/2 p-6 text-gray-500 flex justify-center items-center border-2 border-black"
						}
						style={{ fontSize: 20 }}
					>
						Contact
					</div>
					<div
						className={
							"w-1/2 p-6 text-gray-500 flex justify-center items-center border-b-2 border-r-2 border-black"
						}
						style={{ fontSize: 20 }}
					>
						Careers
					</div>
				</div>
			</div>
			<div className="flex-grow flex flex-col justify-end">
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
	)
}

export default Footer
