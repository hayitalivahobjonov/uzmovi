import { useState } from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import MovieCard from "../components/MovieCard"
import { movies } from "../data/movies"

export default function Home() {
  const [search, setSearch] = useState("")

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <Sidebar />

      <div className="content">
        <Header onSearch={setSearch} />

        <h2>
          {search
            ? `Search results for "${search}"`
            : "Trending"}
        </h2>

        <div className="grid">
          {(search ? filteredMovies : movies.slice(0, 3)).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {!search && (
          <>
            <h2>Recommended for you</h2>
            <div className="grid">
              {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
