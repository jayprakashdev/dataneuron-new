import { useEffect, useState } from "react"

let ImageSequence = ({ images, ...rest }) => {
	const time = 1500 // in mili seconds
	let [currentImagePos, setCurrentImagePos] = useState(0)

	useEffect(() => {
		let interval = null
		if (images.length !== 1) {
			interval = setInterval(() => {
				if (currentImagePos < images.length - 1) {
					setCurrentImagePos(currentImagePos + 1)
				} else {
					setCurrentImagePos(0)
				}
			}, time)
		}

		return () => {
			if (interval !== null) {
				clearInterval(interval)
			}
		}
	}, [images , currentImagePos])

	if(images.length === 1){
		return (
			<img
			src={images[0]}
			alt={images[0]}
			{...rest}
		/>
		)
	}

	return (
		<img
			src={images[currentImagePos]}
			alt={images[currentImagePos]}
			{...rest}
		/>
	)
}

export default ImageSequence
