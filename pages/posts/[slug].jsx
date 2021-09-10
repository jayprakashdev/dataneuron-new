import { useRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../../components/layout"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/graphcms"

const PostDetails = ({ post, morePosts, preview }) => {
	let router = useRouter()

	return (
		<Layout>
			{router.isFallback ? (
				<div className="text-xl">Loading ...</div>
			) : (
				<div className={"flex justify-center"}>
					<main className={"md:w-4/6 flex flex-col space-y-6"}>
						<div className="text-4xl">{post.title}</div>
						<div className={"text-gray-500"}>
							Written by{" "}
							<span className="text-blue-500">
								{post.author.name}
							</span>
						</div>
						<br />
						<hr />

						<div className="flex justify-center">
							<div
								className={`text-xl mt-6 space-y-6`}
								dangerouslySetInnerHTML={{
									__html: post.content?.html,
								}}
							/>
						</div>

						{/* <div className="flex">
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
					</div> */}
					</main>
				</div>
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
