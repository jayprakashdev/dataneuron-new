import Navbar from "./navbar"
import Head from 'next/head'

const Layout = ({children}) => {
    return ( 
        <div>
            <Head>
                <title>DataNeuron</title>
            </Head>
            <Navbar />
            <div style={{padding : 50}}>
            {children}
            </div>
        </div>
     );
}
 
export default Layout;