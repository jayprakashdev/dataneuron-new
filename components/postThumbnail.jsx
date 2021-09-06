const PostThumbnail = () => {
	return (
		<div className={"w-80"}>
			<img
				src="/img/placeholder.jpg"
				alt="placeholder"
				className="w-full"
				height={100}
			/>
			<div className="my-3">
				How well does the DataNeuron ALP handle the Finance Use Case?
			</div>
            <div className="flex justify-between">
                <div className="text-sm text-gray-500">
                    2021
                </div>
                <div className="text-sm text-gray-500">
                    FINANCE
                </div>
            </div>
            
		</div>
	)
}

export default PostThumbnail
