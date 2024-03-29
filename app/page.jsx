"use client"
import React from "react"
import { useState, useEffect } from "react"
import Movie from "../components/movie"

export default function Home() {


  const [toprated, setToprated] = useState([]);

  useEffect(() => {
    fetchToprated();
},[]);

  const fetchToprated = async() => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    const movies = await data.json()
    setToprated(movies.results);

}


  return (
    <main className="mx-32 my-12">      
      <div className="grid gap-16 grid-cols-fluid">
          {toprated !== undefined && toprated.map((movie) => (
            <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}/>  
          ))}
      </div>
    </main>
  )
}
