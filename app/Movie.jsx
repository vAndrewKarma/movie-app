import Link from "next/link"
import Image from "next/image"
export default function Movie({id,poster_path,title,release_date}){
    const imagePath="https://image.tmdb.org/t/p/original"
    console.log(poster_path)
    return(<div><h1>{title}</h1> <h1>{release_date}</h1>
    <Link href={"/"+id}>
        {/* <img src={imagePath+poster_path}alt=""></img> */}
        <Image src={imagePath+poster_path} width={800} height={800} alt = {title}/>
    </Link>
    </div>)
}