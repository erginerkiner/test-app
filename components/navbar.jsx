import Link from "next/link"

export default function Navbar(){

    return(
        <nav className="bg-slate-50 p-4 shadow-xl flex justify-center">
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