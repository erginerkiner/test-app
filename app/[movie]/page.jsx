"use client"
import { useState, useEffect } from "react"
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function MovieDetail({ params }){


    const [detail, setDetail] = useState({});

    useEffect(() => {
      fetchDetail();
  },[]);

    const { movie }  = params
    const imagePath = `https://image.tmdb.org/t/p/original`

    
    const fetchDetail = async () => {
            
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            const details = await res.json();            
            setDetail(details);
            console.log(details)
        
    }

/*     const fetchDetail = async () => {
        try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        const details = await res.json();            
        setDetail(details);
    } catch(error) { console.log(error)}
} */
    

/*    useEffect(() =>{
    console.log(detail)
   },[detail]);  */


    return(

    <>
        
        <div className="flex justify-center p-4 text-white text-center">
            <div className="grid justify-center">
                <h1 className="text-2xl font-semibold mb-2">🎥{detail.title}</h1>
                <h3><q>{detail.tagline}</q></h3>
                <h2><Link href={"/"}>Official web page</Link></h2>
                <h2>Popularity⭐ :  {detail.vote_average}</h2>
                <h2 className="text-sm">Release date📅 : {detail.release_date}</h2>
                <h2 className="text-sm mb-4">Runtime⏲️ : {detail.runtime} mins</h2>
                <h2 className="text-xs inline-block  bg-green-600 rounded py-1 px-3 w-fit mx-auto">{detail.status}</h2>
                <Image
                    className="rounded bg-gradient-to-t from-gray-200 to-transparent p-1 my-12 w-full"
                    src={imagePath + detail.backdrop_path}
                    alt={"Movie Pic"}
                    width={1000}
                    height={720} />
            </div>
        </div>
            <div className="grid justify-center text-white p-8">
                <h2 className="font-semibold text-xl mb-2">Movie Plot ℹ️</h2>
                <p className=" ">{detail.overview}</p>
            </div>
    </>
        
    )
}