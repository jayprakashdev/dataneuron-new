import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Scrollbar from "react-smooth-scrollbar"

function MyApp({ Component, pageProps }) {
	return (
		<Scrollbar damping={0.05} alwaysShowTracks={false}>
			<Component {...pageProps} />
		</Scrollbar>
	)
}

export default MyApp
