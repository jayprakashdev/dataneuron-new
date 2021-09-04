import React from 'react'

const ImageCard=()=>{
    return(
        <div className={"w-full"}>
			<img
				src="/img/placeholder.jpg"
				alt="placeholder"
				className="w-full"
				// height={auto}
			/>
			<div className="my-3">
				How well does the DataNeuron ALP handle the Finance Use Case?
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