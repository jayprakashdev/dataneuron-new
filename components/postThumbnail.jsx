const PostThumbnail = ({title , imageUrl}) => {
	return (
		<div style={{width : 270}}>
			<img
				src={imageUrl}
				alt="placeholder"
				className="w-full"
				height={100}
			/>
			<div className="my-3">
				{title}
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
