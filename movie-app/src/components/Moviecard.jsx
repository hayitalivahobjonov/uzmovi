export default function MovieCard({ movie }) {
    return (
      <div className="card">
        <img src={movie.image} alt={movie.title} />
        <p className="year">{movie.year} • {movie.type}</p>
        <h4>{movie.title}</h4>
      </div>
    )
  }
  