import { useRouter } from "next/dist/client/router"
import React from "react"
import ImageCard from "../../components/imageCard"
import Layout from "../../components/layout"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/graphcms"
import Link from "next/link"

const PostDetails = ({ post, morePosts, preview }) => {
	let router = useRouter()

	return (
		<Layout>
			{router.isFallback ? (
				<div className="text-xl">Loading ...</div>
			) : (
				<main>
					<div className="text-4xl">{post.title}</div>
					<div className={"text-gray-500"}>
						Uploaded by{" "}
						<span className="text-blue-500">
							{post.author.name}
						</span>
					</div>
					<br />
					<hr />
					<img
						src={post.coverImage.url}
						style={{
							height: 600,
							width: "100%",
							backgroundSize: "cover",
							backgroundAttachment: "fixed",
							backgroundPosition: "center",
						}}
						alt={post.coverImage.fileName}
					/>

					<div
						className={`text-xl mt-6`}
						dangerouslySetInnerHTML={{ __html: post.content?.html }}
					/>

					<div className="flex">
						{morePosts.map((_post) => {
							return (
								<Link key={_post.key} href={`/posts/${_post.slug}`}>
									<a style={{ width: 400 }} className={"m-3"}>
										<ImageCard
											imageUrl={_post.coverImage.url}
											title={_post.title}
										/>
									</a>
								</Link>
							)
						})}
					</div>
				</main>
			)}
		</Layout>
	)
}

export async function getStaticProps({ params, preview = false }) {
	const data = await getPostAndMorePosts(params.slug, preview)
	return {
		props: {
			preview,
			post: data.post,
			morePosts: data.morePosts || [],
		},
	}
}

export async function getStaticPaths() {
	const posts = await getAllPostsWithSlug()
	return {
		paths: posts.map(({ slug }) => ({
			params: { slug },
		})),
		fallback: true,
	}
}

export default PostDetails
