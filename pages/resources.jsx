import React from "react"
import ButtonComponent from "../components/buttonComponent"
import ImageCard from "../components/imageCard"
import Layout from "../components/layout"
import { getAllPosts } from "../lib/graphcms"
import Link from "next/link"

const ResourcePage = ({ posts }) => {
	return (
		<div
			className="w-full"
			style={{ background: "#ffffff", minHeight: "100vh" }}
		>
			<Layout>
				<div className="w-full">
					<h1 className="flex justify-center w-full mb-5 text-3xl">
						Resource Centre
					</h1>
					<p className="mb-14 w-full flex justify-center text-gray-500 text-xl">
						Find Resources for DataNeuron - Case Studies,
						Whitepapers and Feature Catalog
					</p>
					<div className="w-full flex justify-center">
						<div
							className="flex justify-between space-x-3"
							style={{ width: "50%" }}
						>
							<div style={{ minWidth: "180px" }}>
								<ButtonComponent text="Show All" icon={false} />
							</div>
							<div style={{ minWidth: "180px" }}>
								<ButtonComponent
									text="Case Study"
									icon={true}
									src="/img/case_study.svg"
								/>
							</div>
							<div style={{ minWidth: "180px" }}>
								<ButtonComponent
									text="Whitepapers"
									icon={true}
									src="/img/whitepapers.svg"
								/>
							</div>
							<div style={{ minWidth: "180px" }}>
								<ButtonComponent
									text="Feature Catalog"
									icon={true}
									src="/img/feature_catalog.svg"
									filled={true}
								/>
							</div>
						</div>
					</div>
					<div className="mt-14 w-full flex justify-between flex-wrap">
						{posts.map((post) => {
							return (
								<Link key={post.id} href={`/posts/${post.slug}`}>
									<a>
										<div
											style={{ width: 400, margin: 10 }}
										>
											<div
												className="border-t-2 border-b-2 py-2"
												style={{
													borderTop:
														"2px solid #E0E0E0",
													borderBottom:
														"2px solid #E0E0E0",
												}}
											>
												<p className="mb-4 text-xs">
													CASE STUDY
												</p>
												<ImageCard
													title={post.title}
													imageUrl={
														post.coverImage.url
													}
												/>
											</div>
										</div>
									</a>
								</Link>
							)
						})}
					</div>
				</div>
			</Layout>
		</div>
	)
}

export async function getStaticProps({ params, preview = false }) {
	let appPosts = await getAllPosts()

	return {
		props: {
			posts: appPosts.posts || [],
		},
	}
}

export default ResourcePage
