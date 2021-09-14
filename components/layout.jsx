import Navbar from "./navbar"
import Head from "next/head"
import Footer from "./footer"

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>DataNeuron</title>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<div className={"min-h-screen flex flex-col justify-between"}>
				<div>
					<Navbar />
					<div
						style={{
							paddingTop : 150,
							paddingBottom : 100,
							overflowX: "hidden",
							width: "100%",
						}}
					>
						{children}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
