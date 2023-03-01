import Link from "next/link"

export default function Navbar(){

    return(
        <nav className="bg-gray-50 p-4 shadow">
            <div>
                <h1 className="text-xl font-bold"><Link href={"/"}>The Movie-app</Link></h1>
            </div>
        </nav>
    )
}