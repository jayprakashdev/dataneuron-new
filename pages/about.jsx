import ButtonComponent from '../components/buttonComponent';
import Layout from '../components/layout';

const About = () => {
    return ( 
        <div style={{width:'100%'}}>
            <Layout>
            <div style={{margin:"-50px 0 20px 20px"}}>
                <p className="mb-2">About DataNeuron</p>
                <p className="my-2">At DataNeuron, our aim is to accelerate the development  and provide explainability for AI.</p>
                <p className="my-2">
                The supervised learning approach is predominant in AI, the need for labelled data has dramatically increased in order to remove the constraints when developing AI solutions. Companies moreover do not have a secure platform for data exchange and model creation.
                <span>We strive to be that platform.</span>
                </p>
                <div className="my-10">
                    <p className="my-3">Our Goals</p>
                    <div className="flex justify-between" >
                        <divcl style={{background:'#fff', width:"30%", filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}>
                            <div className="w-full flex justify-between mx-5" style={{height:'100px', marginTop:"100px", marginBottom:'30px'}}>
                                <img src="/img/circle1.gif" alt="loading" width={60}></img>
                                <img src="/img/circle1.gif" alt="loading" width={60}></img>
                                <img src="/img/circle1.gif" alt="loading" width={60}></img>
                                <img src="/img/circle1.gif" alt="loading" width={60}></img>
                                <img src="/img/circle1.gif" alt="loading" width={60}></img>
                            </div>
                            <p className="">
                            Reduce Project Staffing by 70-90%.
                            </p>
                        </divcl>
                        <img src="/img/remove.svg"></img>
                        <img src="/img/remove.svg"></img>
                    </div>
                </div>
            </div>
            </Layout>
            <div className="bg-black text-white w-full border-2" style={{background:"#2C2C2C"}}>
                <p className="w-full text-center py-10">Backed By The Best</p>
                <div className="flex justify-center mb-5 w-full">
                    <div className="flex justify-between" style={{width:'50%'}}>
                        <img src="/img/aboutus1.svg" alt="Windrose Captical"></img>
                        <img src="/img/aboutus2.svg" alt="Windrose Captical"></img>
                    </div>
                </div>
                <p className="w-full text-center py-5">Our Company Leadership</p>
                <div className="flex justify-center mb-5 w-full">
                    <div className="flex justify-between" style={{width:'50%'}}>
                        <div>
                            <img src="/img/bharath.svg" alt="Windrose Captical"></img>
                            <p className="my-2 w-full text-center">Bharath Rao</p>
                        </div>
                        <div>
                            <img src="/img/rohit_goyal.svg" alt="Windrose Captical"></img>
                            <p className="my-2 w-full text-center">Rohit Goyal</p>
                        </div>
                        <div>
                            <img src="/img/anil_advani.svg" alt="Windrose Captical"></img>
                            <p className="my-2 w-full text-center">Anil Advani</p>
                        </div>
                        <div>
                            <img src="/img/rohit_adhlaka.svg" alt="Windrose Captical"></img>
                            <p className="my-2 w-full text-center">Rohit Adlakha</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full my-14" style={{padding:'0 72px'}}>
                <p className="my-3">Join DataNeuron</p>
                <p className="mb-5">
                At DataNeuron, we are always looking for intelligent and smart-working folks so feel free to take a look at our open positions on LinkedIn.
                </p>
                <div style={{width:'220px'}}>
                    <ButtonComponent icon={true} src={"/img/job_opening.svg"} text="View Job Opening"/>
                </div>
            </div>
        </div>
     );
}

export default About
