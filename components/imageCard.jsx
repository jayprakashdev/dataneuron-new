import React from 'react'

const ImageCard=({title , imageUrl})=>{
    return(
        <div className={"w-full py-5"}>
			<img
				src={imageUrl}
				alt="placeholder"
				className="w-full"
				style={{height:"420px"}}
			/>
			<div className="my-3" style={{fontSize:"23px", lineHeight:"27px"}}>
                {title}
			</div>
            
		</div>
    )
}
export default ImageCard