import Link from "next/link"

export default function Navbar(){

    return(
        <nav className="bg-gradient-to-b from-transparent to-neutral-500 p-4 shadow">
            <div>
                <h1 className="text-xl font-bold">
                    <Link href={"/"} title="Homepage">
                        🎥 The Movie-app
                    </Link>
                </h1>
            </div>
        </nav>
    )
}