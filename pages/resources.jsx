import React from "react"
import ButtonComponent from "../components/buttonComponent"
import ImageCard from "../components/imageCard"
import Layout from "../components/layout"
import { getAllPosts } from "../lib/graphcms"
import {useRouter} from "next/router"

const ResourcePage = ({ posts }) => {
	const router=useRouter();
	return (
		<div
			className="w-full"
			style={{ background: "#E5E5E5", minHeight: "100vh" }}
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
							className="flex flex-wrap justify-between space-y-3 md:space-y-0"
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
								<div key={post.id} className="cursor-pointer" onClick={()=>router.push(`/posts/${post.slug}`)} style={{width:"30%"}}>
									<a>
										<div
											style={{ width: "100%%", margin: 10 }}
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
												<p className="mb-4 text-lg text-gray-400">
													CASE STUDY
												</p>
												<div className="flex flex-col justify-between" style={{height:"550px"}}>
													<ImageCard
													title={post.title}
													imageUrl={post.coverImage.url}
													/>
													<div className="flex justify-between">
														<div className="text-sm text-gray-400">
															2021
														</div>
														<div className="text-sm text-gray-400">
															FINANCE
														</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								</div>
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
