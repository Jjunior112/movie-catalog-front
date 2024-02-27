import Card from "./Card"

import { useEffect, useState } from "react"



const Main = () => {

    const [movie, setMovie] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1 &sort_by=popularity.desc',
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzE4M2VlMDlhMDRhZjVlYWFmNTAzMmNmNmI0NjNlMyIsInN1YiI6IjY1NjNkNTc5MzY3OWExMDk3NTI5N2ExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VXV7YejAImrlYYFkZqyNDDjgeY4IU0lqRlki7TLH-PM`
                }
            })
            .then((res) => res.json())
            .then((data) => {
                setMovie(data.results)
                console.log(data.results)
            })

    }, [])

    return (
        <main>

            {
                movie.map((item) => (
                    <div key={item.id}>
                        <Card id={item.id} image={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.backdrop_path}`} name={item.title} description={item.overview} />
                    </div>
                ))
            }

        </main>
    )
}

export default Main