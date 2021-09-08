import Navbar from "./navbar"
import Head from 'next/head'
import Footer from "./footer";

const Layout = ({children}) => {
    return ( 
        <div>
            <Head>
                <title>DataNeuron</title>
            </Head>
            <Navbar />
            <div className={"mt-20 md:mt-0 p-6"}>
            {children}
            </div>
            {/* <Footer /> */}
        </div>
     );
}
 
export default Layout;