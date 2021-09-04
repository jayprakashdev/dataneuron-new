import React from 'react'
import ButtonComponent from '../components/buttonComponent';
import ImageCard from '../components/imageCard';
import Layout from '../components/layout'
import PostThumbnail from '../components/postThumbnail';
const ResourcePage=()=>{
    return(
        <div className="w-full" style={{background:"#E5E5E5", minHeight:'100vh'}}>
            <Layout>
                <div className="w-full">
                    <h1 className="flex justify-center w-full mb-10">Resource Centre</h1>
                    <p className="mb-14 w-full flex justify-center">Find Resources for DataNeuron - Case Studies, Whitepapers and Feature Catalog</p>
                    <div className="w-full flex justify-center">
                        <div className="flex justify-between" style={{width:'50%'}}>
                            <div style={{minWidth:"180px"}}><ButtonComponent text="Show All" icon={false}/></div>
                            <div style={{minWidth:"180px"}}><ButtonComponent text="Case Study" icon={true} src="/img/case_study.svg"/></div>
                            <div style={{minWidth:"180px"}}><ButtonComponent text="Whitepapers" icon={true} src="/img/whitepapers.svg"/></div>
                            <div style={{minWidth:"180px"}}><ButtonComponent text="Feature Catalog" icon={true} src="/img/feature_catalog.svg" filled={true}/></div>
                        </div>
                    </div>
                    <div className="mt-14 w-full flex justify-between">
                        <div style={{width:'30%'}}>
                            <div className="border-2 py-2" style={{borderTop:"2px solid #E0E0E0",borderBottom:"2px solid #E0E0E0"}}>
                                <p className="mb-4">CASE STUDY</p>
                                <ImageCard/>
                            </div>
                        </div>
                        <div style={{width:'30%'}}>
                            <div className="border-2 py-2" style={{borderTop:"2px solid #E0E0E0",borderBottom:"2px solid #E0E0E0"}}>
                                <p className="mb-4">CASE STUDY</p>
                                <ImageCard/>
                            </div>
                        </div>
                        <div style={{width:'30%'}}>
                            <div className="border-2 py-2" style={{borderTop:"2px solid #E0E0E0",borderBottom:"2px solid #E0E0E0"}}>
                                <p className="mb-4">CASE STUDY</p>
                                <ImageCard/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-14 w-full flex justify-between">
                        <div style={{width:'30%'}}>
                            <div className="border-2 py-2" style={{borderTop:"2px solid #E0E0E0",borderBottom:"2px solid #E0E0E0"}}>
                                <p className="mb-4">CASE STUDY</p>
                                <ImageCard/>
                            </div>
                        </div>
                        <div style={{width:'30%'}}>
                            <div className="border-2 py-2" style={{borderTop:"2px solid #E0E0E0",borderBottom:"2px solid #E0E0E0"}}>
                                <p className="mb-4">CASE STUDY</p>
                                <ImageCard/>
                            </div>
                        </div>
                        <div style={{width:'30%'}}>
                            <div className="border-2 py-2" style={{borderTop:"2px solid #E0E0E0",borderBottom:"2px solid #E0E0E0"}}>
                                <p className="mb-4">CASE STUDY</p>
                                <ImageCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default ResourcePage;