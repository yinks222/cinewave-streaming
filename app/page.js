'use client';

import { useMemo, useState } from "react";
import { Play, Plus, Search, X, Star } from "lucide-react";

const movies = [
  {
    id: 1,
    title: "Midnight Signal",
    year: 2025,
    genre: "Sci-Fi",
    rating: "8.7",
    time: "2h 08m",
    img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    desc: "A radio astronomer intercepts a signal that seems to know the future."
  },
  {
    id: 2,
    title: "Neon Horizon",
    year: 2024,
    genre: "Action",
    rating: "8.1",
    time: "1h 54m",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    desc: "A dangerous mission begins in a city powered by neon technology."
  },
  {
    id: 3,
    title: "Afterglow",
    year: 2025,
    genre: "Drama",
    rating: "8.4",
    time: "2h 02m",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    desc: "Two strangers discover that their lives are connected."
  },
  {
    id: 4,
    title: "The Last Atlas",
    year: 2023,
    genre: "Adventure",
    rating: "8.8",
    time: "2h 21m",
    img: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=600&q=80",
    desc: "A legendary explorer searches for the last map of a forgotten world."
  },
  {
    id: 5,
    title: "Velvet City",
    year: 2024,
    genre: "Crime",
    rating: "7.9",
    time: "1h 47m",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    desc: "A detective enters the dangerous underground world of Velvet City."
  },
  {
    id: 6,
    title: "Static Hearts",
    year: 2025,
    genre: "Romance",
    rating: "8.2",
    time: "1h 42m",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    desc: "Two musicians find love while chasing their biggest dreams."
  }
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [selected, setSelected] = useState(null);

  const genres = [
    "All",
    "Action",
    "Drama",
    "Sci-Fi",
    "Adventure",
    "Crime",
    "Romance"
  ];

  const featured = movies[0];

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesGenre =
        genre === "All" || movie.genre === genre;

      const matchesSearch =
        movie.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesGenre && matchesSearch;
    });
  }, [genre, search]);

  return (
    <main>
      <header className="nav">
        <div className="logo">
          <span className="logoMark">C</span>
          CINE<span>WAVE</span>
        </div>

        <nav>
          <a className="active">Home</a>
          <a>Movies</a>
          <a>Series</a>
          <a>My List</a>
        </nav>

        <div className="actions">
          <div className="search">
            <Search size={17} />
            <input
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search movies..."
            />
          </div>

          <button className="avatar">YW</button>
        </div>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,7,12,.98), rgba(5,7,12,.15)), url(" +
            featured.img +
            ")"
        }}
      >
        <div className="heroCopy">
          <div className="eyebrow">
            CINEWAVE ORIGINAL
          </div>

          <h1>{featured.title}</h1>

          <div className="meta">
            <span>{featured.year}</span>
            <span>16+</span>
            <span>{featured.time}</span>

            <span className="rating">
              <Star size={14} fill="currentColor" />
              {featured.rating}
            </span>
          </div>

          <p>{featured.desc}</p>

          <div className="heroButtons">
            <button
              className="primary"
              onClick={() => setSelected(featured)}
            >
              <Play size={17} fill="currentColor" />
              Watch now
            </button>

            <button className="secondary">
              <Plus size={18} />
              My List
            </button>
          </div>
        </div>
      </section>

      <section className="content">
        <p className="kicker">CURATED FOR YOU</p>
        <h2>What's playing</h2>

        <div className="chips">
          {genres.map((item) => (
            <button
              key={item}
              className={
                genre === item
                  ? "chip on"
                  : "chip"
              }
              onClick={() => setGenre(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid">
          {filteredMovies.map((movie) => (
            <article
              className="card"
              key={movie.id}
              onClick={() => setSelected(movie)}
            >
              <div className="poster">
                <img
                  src={movie.img}
                  alt={movie.title}
                />
                <span className="badge">
                  {movie.genre}
                </span>
              </div>

              <div className="cardInfo">
                <h3>{movie.title}</h3>

                <div>
                  {movie.year} · {movie.time}

                  <span className="miniRating">
                    <Star
                      size={11}
                      fill="currentColor"
                    />
                    {movie.rating}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="logo">
          <span className="logoMark">C</span>
          CINE<span>WAVE</span>
        </div>

        <span>
          © 2026 CineWave. Demo streaming interface.
        </span>
      </footer>

      {selected && (
        <div
          className="modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="modalBox"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="close"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>

            <div
              className="player"
              style={{
                backgroundImage:
                  "url(" + selected.img + ")"
              }}
            >
              <button className="playBig">
                <Play
                  size={30}
                  fill="currentColor"
                />
              </button>
            </div>

            <div className="modalCopy">
              <h2>{selected.title}</h2>

              <button className="primary">
                <Play
                  size={17}
                  fill="currentColor"
                />
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
  {
    id: 7,
    title: "Dark Protocol",
    year: 2026,
    genre: "Action",
    rating: "9.1",
    time: "2h 16m",
    img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=600&q=80",
    desc: "A rogue intelligence agent races against time to stop a global cyber attack."
  },
  {
    id: 8,
    title: "Beyond Earth",
    year: 2026,
    genre: "Sci-Fi",
    rating: "9.0",
    time: "2h 11m",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    desc: "A team of astronauts discovers something impossible beyond the edge of the solar system."
  },
  {
    id: 9,
    title: "Golden Streets",
    year: 2025,
    genre: "Drama",
    rating: "8.9",
    time: "1h 58m",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80",
    desc: "An ambitious young filmmaker fights to make her dream a reality."
  },
  {
    id: 10,
    title: "Shadow District",
    year: 2026,
    genre: "Crime",
    rating: "8.8",
    time: "2h 04m",
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80",
    desc: "A detective uncovers a secret network controlling the city's criminal underworld."
  },
  {
    id: 11,
    title: "Ocean's Edge",
    year: 2025,
    genre: "Adventure",
    rating: "8.6",
    time: "2h 19m",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    desc: "A group of explorers venture into an unexplored ocean frontier."
  },
  {
    id: 12,
    title: "Electric Hearts",
    year: 2026,
    genre: "Romance",
    rating: "8.5",
    time: "1h 51m",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    desc: "Two strangers meet at a concert and discover an unexpected connection."
  },];