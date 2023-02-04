import Movie from "./Movie"
import Image from "next/image"
export default async function Home() {
const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`)
const res = await data.json()
console.log(res)
  return (
    <main>
<div className="grid gap-16 grid-cols-fluid">
 { res.results.map((movie)=>(
<Movie
key={movie.id}
id={movie.id}
title={movie.title}
poster_path={movie.poster_path}
release_date={movie.release_date}

/>
  ))
 }
 </div>  
    </main>
  )
}
