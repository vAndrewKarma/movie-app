import Image from "next/image"

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`)
const res = await data.json()
  
    return res.results.map((movie) => ({
      movie: toString(movie.id),
    }))
  }

export default async function MovieDetail({params}){

    const {movie} = params

    const imagePath="https://image.tmdb.org/t/p/original"
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=YOUR_API_KEY`)
const res = await data.json()

    return(<div>
        <div>
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-2xl">{res.release_date}</h2>
      {res.runtime>120&&<h2 className="bg-red-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">The movie it's over 120 minutes, I do not recommend watching it !</h2> 
      || <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">The movie is under 120 minutes !</h2>}
        <Image alt={res.title} className="my-12 w-full" src={imagePath+res.backdrop_path} width={1000} height={1000} priority/>
        <p>{res.overview}</p>
        </div>
        </div>
)}