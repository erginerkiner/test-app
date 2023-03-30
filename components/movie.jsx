import Link from "next/link"
import Image from "next/image"

export default function Movie({title, id, poster_path, release_date, vote_average}){
    const imagePath = 'https://image.tmdb.org/t/p/original'
   
    return(
        <div className=" h-auto text-center bg-gradient-to-t from-gray-100 to-transparent rounded shadow">            
            <Link href={`/${id}`}>
                <Image className="rounded shadow p-1" src={imagePath + poster_path} width={800} height={400} alt={title} title={title} />
            </Link>
            <h1 className="p-4 text-lg font-bold">{title}</h1>
            <h1 className="p-4 text-md font-semibold">⭐ Vote Average: {vote_average}</h1>
            <h3 className="py-2 font-light text-sm">📅 Release date: {release_date}</h3>
        </div>
    )
}