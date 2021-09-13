import { useRouter } from "next/dist/client/router"
import React from "react"
import Layout from "../../components/layout"
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/graphcms"
import { RichText } from '@graphcms/rich-text-react-renderer'


const PostDetails = ({ post, morePosts, preview }) => {
	let router = useRouter()

	return (
		<Layout>
			{router.isFallback ? (
				<div className="text-xl">Loading ...</div>
			) : (
				<div className={"md:flex justify-center p-6"}>
				
					<main className={"lg:w-4/6 pt-20 flex flex-col md:space-y-6"}>
						<div className="text-4xl">{post.title}</div>
						<div className={"text-gray-500"}>
							Written by{" "}
							<span className="text-blue-500">
								{post.author.name}
							</span>
						</div>
						<br />
						<hr />

						<div className="">
							<RichText
								content={post.content.raw.children}
								renderers={{
									img : (props) => <div style={{display : 'flex', width : "100%" , justifyContent : "center"}}><img src={props.src} /></div>,
									p : (props) => <div> <p style={{fontSize : 18}}>{props.children}</p><br/> </div>,
									h3 : (props) => <div style={{fontWeight : "bold" , fontSize : 26}}>{props.children}</div>,
									table : (props) => <table style={{border : "1px solid #000"}}>{props.children}</table>,
									table_row : (props) => <tr style={{border : "1px solid #000"}}>{props.children}</tr>,
									table_cell : (props) => <td style={{border : "1px solid #000"}}>{props.children}</td>,
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
