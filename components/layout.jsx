import Navbar from "./navbar"
import Head from 'next/head'
import Footer from "./footer";

const Layout = ({children}) => {
    return ( 
        <div>
            <Head>
                <title>DataNeuron</title>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <Navbar />
            <div style={{paddingBottom : 100}}>
                {children}
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;