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
            <div style={{padding : "0 80px 50px 80px" }}>
            {children}
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;