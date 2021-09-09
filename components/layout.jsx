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
            <div>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
     );
}
 
export default Layout;