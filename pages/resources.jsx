import React from "react"
import ButtonComponent from "../components/buttonComponent"
import ImageCard from "../components/imageCard"
import Layout from "../components/layout"
import { getAllPosts } from "../lib/graphcms"
import { useRouter } from "next/router"
import { useState } from "react"
import style from "../styles/product.module.css"

export const PostTypes = {
	WHITEPAPERS: "whitepapers",
	FEATURE_CAT: "feature_cat",
	CASE_STUDY: "case_study",
}

const ResourcePage = ({ posts }) => {
	const router = useRouter()

	let [currentPostType, setCurrentPostType] = useState(null)

	return (
		<div
			style={{
				background: "#fafafa",
				minHeight: "100vh",
			}}
		>
			<Layout>
				<div className="w-full p-6 lg:px-20">
					<dir className={"lg:hidden"}>
						<br />
						<br />
						<br />
					</dir>
					<div className="w-full">
						<h1
							className="flex justify-center w-full mb-5"
							style={{ fontSize: 40 }}
						>
							Resource Centre
						</h1>
						<p
							className="mb-14 w-full flex justify-center text-gray-400"
							style={{ fontSize: 20 }}
						>
							Find Resources for DataNeuron - Case Studies,
							Whitepapers and Feature Catalog
						</p>
						<div className="w-full flex justify-center">
							<div
								className={`flex justify-between md:justify-center w-full overflow-x-scroll space-x-6 ${style.hide_scroll}`}
							>
								<div style={{ minWidth: "180px" }}>
									<ButtonComponent
										onClick={() => setCurrentPostType(null)}
										text="Show All"
										filled={currentPostType === null}
										icon={false}
									/>
								</div>
								<div style={{ minWidth: "180px" }}>
									<ButtonComponent
										onClick={() =>
											setCurrentPostType(
												PostTypes.CASE_STUDY
											)
										}
										text="Case Study"
										icon={true}
										filled={
											currentPostType ===
											PostTypes.CASE_STUDY
										}
										src="/img/case_study.svg"
									/>
								</div>
								<div style={{ minWidth: "180px" }}>
									<ButtonComponent
										text="Whitepapers"
										icon={true}
										onClick={() =>
											setCurrentPostType(
												PostTypes.WHITEPAPERS
											)
										}
										filled={
											currentPostType ===
											PostTypes.WHITEPAPERS
										}
										src="/img/whitepapers.svg"
									/>
								</div>
								<div style={{ minWidth: "180px" }}>
									<ButtonComponent
										text="Feature Catalog"
										onClick={() =>
											setCurrentPostType(
												PostTypes.FEATURE_CAT
											)
										}
										icon={true}
										filled={
											currentPostType ===
											PostTypes.FEATURE_CAT
										}
										src="/img/feature_catalog.svg"
									/>
								</div>
							</div>
						</div>
						<div className="mt-14 w-full flex justify-center lg:justify-start flex-wrap md:space-x-6">
							{currentPostType !== null
								? posts
										.filter(
											(details) =>
												details.postType ===
												currentPostType
										)
										.map((post) => {
											return (
												<div
													key={post.id}
													onClick={() =>
														router.push(
															`/posts/${post.slug}`
														)
													}
													style={{ width: 330 }}
													className="cursor-pointer border-t border-b border-gray-300"
												>
													<p className="text-gray-400">
														{post.postType ===
														PostTypes.CASE_STUDY
															? "CASE STUDY"
															: post.postType ===
															  PostTypes.WHITEPAPERS
															? "WHITEPAPER"
															: "FEATURE CATUALOG"}
													</p>
													<div className="flex flex-col justify-between">
														<ImageCard
															title={post.title}
															imageUrl={
																post.coverImage
																	.url
															}
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
											)
										})
								: posts.map((post) => {
										return (
											<div
												key={post.id}
												onClick={() =>
													router.push(
														`/posts/${post.slug}`
													)
												}
												style={{ width: 330 }}
												className="cursor-pointer border-t border-b border-gray-300"
											>
												<p className="text-gray-400">
													{post.postType ===
													PostTypes.CASE_STUDY
														? "CASE STUDY"
														: post.postType ===
														  PostTypes.WHITEPAPERS
														? "WHITEPAPER"
														: "FEATURE CATUALOG"}
												</p>
												<div className="flex flex-col justify-between">
													<ImageCard
														title={post.title}
														imageUrl={
															post.coverImage.url
														}
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
										)
								  })}
						</div>
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
