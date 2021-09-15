import React from "react"
const ButtonComponent = ({ icon, src, text, filled, style , onClick }) => {
	return (
		<div
			onClick={onClick}
			style={{
				border: "1px solid #0000FF",
				background: `${filled ? "#0000FF" : "#FFF"}`,
				color: `${filled ? "#FFF" : "#0000FF"}`,
				maxWidth : 200,
				display :"flex",
				justifyContent : "center",
				...style
			}}
			className="rounded-full duration-300 my-3 px-3 py-2 cursor-pointer transform hover:scale-105 z-40"
		>
			<div className="flex">
				{icon && <img src={src} alt="icon" className="mr-3" />}
				<p>{text}</p>
			</div>
		</div>
	)
}

export default ButtonComponent
