import React from 'react'

const ImageCard=({title , imageUrl})=>{
    return(
        <div className={"w-full"}>
			<img
				src={imageUrl}
				alt="placeholder"
				className="w-full"
				// height={auto}
			/>
			<div className="my-3">
                    {title}
			</div>
            <div className="flex justify-between">
                <div className="text-sm text-gray-300">
                    2021
                </div>
                <div className="text-sm text-gray-300">
                    FINANCE
                </div>
            </div>
            
		</div>
    )
}
export default ImageCard