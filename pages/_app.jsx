import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import SmoothScroll from "../components/SmoothScroll"


function MyApp({ Component, pageProps }) {
	
	return (
		<div>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
