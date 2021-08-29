import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div style={{ padding : "52px 70px"}} className={"w-full flex justify-between"}>
            <div className="text-2xl font-bold">
                DataNeuron
            </div>
            <div className="flex">
                <Link href={"/product"}>
                    <a className={"p-3"}>Product</a>
                </Link>
                <Link href={"/about"}>
                    <a className={"p-3"}>About</a>
                </Link>
                <Link href={"/pricing"}>
                    <a className={"p-3"}>Pricing</a>
                </Link>
                <Link href={"/resources"}>
                    <a className={"p-3"}>Resources</a>
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;