"use client";

import { useMemo, useState } from "react";
import { Play, Plus, Search, X, Star } from "lucide-react";

const DEMO_VIDEO =
  "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

const movies = [
  {
    id: 1,
    title: "Midnight Signal",
    year: 2025,
    genre: "Sci-Fi",
    rating: "8.7",
    time: "2h 08m",
    img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
    desc: "A radio astronomer intercepts a signal that seems to know the future.",
    video: DEMO_VIDEO
  },
  {
    id: 2,
    title: "Neon Horizon",
    year: 2024,
    genre: "Action",
    rating: "8.1",
    time: "1h 54m",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    desc: "A dangerous mission begins in a city powered by neon technology.",
    video: DEMO_VIDEO
  },
  {
    id: 3,
    title: "Afterglow",
    year: 2025,
    genre: "Drama",
    rating: "8.4",
    time: "2h 02m",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
    desc: "Two strangers discover that their lives are connected.",
    video: DEMO_VIDEO
  },
  {
    id: 4,
    title: "The Last Atlas",
    year: 2023,
    genre: "Adventure",
    rating: "8.8",
    time: "2h 21m",
    img: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=600&q=80",
    desc: "A legendary explorer searches for the last map of a forgotten world.",
    video: DEMO_VIDEO
  },
  {
    id: 5,
    title: "Velvet City",
    year: 2024,
    genre: "Crime",
    rating: "7.9",
    time: "1h 47m",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    desc: "A detective enters the dangerous underground world of Velvet City.",
    video: DEMO_VIDEO
  },
  {
    id: 6,
    title: "Static Hearts",
    year: 2025,
    genre: "Romance",
    rating: "8.2",
    time: "1h 42m",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=600&q=80",
    desc: "Two musicians find love while chasing their biggest dreams.",
    video: DEMO_VIDEO
  },
  {
    id: 7,
    title: "Dark Protocol",
    year: 2026,
    genre: "Action",
    rating: "9.1",
    time: "2h 16m",
    img: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=600&q=80",
    desc: "A rogue intelligence agent races against time to stop a global cyber attack.",
    video: DEMO_VIDEO
  },
  {
    id: 8,
    title: "Beyond Earth",
    year: 2026,
    genre: "Sci-Fi",
    rating: "9.0",
    time: "2h 11m",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
    desc: "A team of astronauts discovers something impossible beyond the edge of the solar system.",
    video: DEMO_VIDEO
  },
  {
    id: 9,
    title: "Golden Streets",
    year: 2025,
    genre: "Drama",
    rating: "8.9",
    time: "1h 58m",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80",
    desc: "An ambitious young filmmaker fights to make her dream a reality.",
    video: DEMO_VIDEO
  },
  {
    id: 10,
    title: "Shadow District",
    year: 2026,
    genre: "Crime",
    rating: "8.8",
    time: "2h 04m",
    img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80",
    desc: "A detective uncovers a secret network controlling the city's criminal underworld.",
    video: DEMO_VIDEO
  },
  {
    id: 11,
    title: "Ocean's Edge",
    year: 2025,
    genre: "Adventure",
    rating: "8.6",
    time: "2h 19m",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    desc: "A group of explorers venture into an unexplored ocean frontier.",
    video: DEMO_VIDEO
  },
  {
    id: 12,
    title: "Electric Hearts",
    year: 2026,
    genre: "Romance",
    rating: "8.5",
    time: "1h 51m",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    desc: "Two strangers meet at a concert and discover an unexpected connection.",
    video: DEMO_VIDEO
  }
];

const chineseMovies = [
  {
    id: 101,
    title: "Crouching Tiger, Hidden Dragon",
    year: 2000,
    genre: "Wuxia",
    rating: "8.0",
    time: "2h 00m",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
    desc: "A legendary martial-arts adventure involving a stolen sword and forbidden love.",
    video: DEMO_VIDEO
  },
  {
    id: 102,
    title: "Hero",
    year: 2002,
    genre: "Wuxia",
    rating: "7.9",
    time: "1h 39m",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80",
    desc: "A warrior tells a mysterious story of assassins and a powerful ruler.",
    video: DEMO_VIDEO
  },
  {
    id: 103,
    title: "House of Flying Daggers",
    year: 2004,
    genre: "Action",
    rating: "7.5",
    time: "1h 59m",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80",
    desc: "A beautiful wuxia romance filled with secret identities and spectacular swordplay.",
    video: DEMO_VIDEO
  },
  {
    id: 104,
    title: "Infernal Affairs",
    year: 2002,
    genre: "Crime",
    rating: "8.0",
    time: "1h 41m",
    img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80",
    desc: "An undercover police officer and a criminal informant live dangerously inside each other's worlds.",
    video: DEMO_VIDEO
  },
  {
    id: 105,
    title: "The Road Home",
    year: 1999,
    genre: "Romance",
    rating: "7.8",
    time: "1h 29m",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    desc: "A moving love story connecting generations in rural China.",
    video: DEMO_VIDEO
  },
  {
    id: 106,
    title: "A Chinese Ghost Story",
    year: 1987,
    genre: "Fantasy",
    rating: "7.4",
    time: "1h 38m",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80",
    desc: "A supernatural romance blends ghosts, martial arts and fantasy.",
    video: DEMO_VIDEO
  },
  {
    id: 107,
    title: "The Blade",
    year: 1995,
    genre: "Wuxia",
    rating: "7.1",
    time: "1h 41m",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80",
    desc: "A visually intense martial-arts story about revenge and survival.",
    video: DEMO_VIDEO
  },
  {
    id: 108,
    title: "In the Mood for Love",
    year: 2000,
    genre: "Drama",
    rating: "8.1",
    time: "1h 38m",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=700&q=80",
    desc: "Two neighbours form a restrained emotional bond after discovering a painful secret.",
    video: DEMO_VIDEO
  },
  {
    id: 109,
    title: "The Grandmaster",
    year: 2013,
    genre: "Martial Arts",
    rating: "7.6",
    time: "2h 10m",
    img: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=700&q=80",
    desc: "A martial-arts master reflects on rivalry, discipline and a changing era.",
    video: DEMO_VIDEO
  },
  {
    id: 110,
    title: "The Banquet",
    year: 2006,
    genre: "Wuxia",
    rating: "6.4",
    time: "2h 11m",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=700&q=80",
    desc: "A lavish historical drama filled with palace intrigue and martial-arts spectacle.",
    video: DEMO_VIDEO
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
    "Romance",
    "Wuxia",
    "Fantasy",
    "Martial Arts"
  ];

  const featured = movies[0];

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesGenre =
        genre === "All" || movie.genre === genre;

      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesGenre && matchesSearch;
    });
  }, [genre, search]);

  const filteredChineseMovies = useMemo(() => {
    return chineseMovies.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesSearch;
    });
  }, [search]);

  const openMovie = (movie) => {
    setSelected(movie);
  };

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
              onClick={() => openMovie(featured)}
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
        <p className="kicker">TRENDING</p>
        <h2>🔥 Trending Now</h2>

        <div className="grid">
          {movies.slice(0, 6).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={openMovie}
            />
          ))}
        </div>
      </section>

      <section className="content">
        <p className="kicker">CHINESE CINEMA</p>
        <h2>🇨🇳 Chinese Movies</h2>

        <div className="grid">
          {filteredChineseMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={openMovie}
            />
          ))}
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
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={openMovie}
            />
          ))}
        </div>
      </section>

      <footer>
        <div className="logo">
          <span className="logoMark">C</span>
          CINE<span>WAVE</span>
        </div>

        <span>
          © 2026 CineWave. Streaming interface.
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
              aria-label="Close player"
            >
              <X />
            </button>

            <div className="videoPlayer">
              <video
                key={selected.id}
                controls
                autoPlay
                playsInline
                poster={selected.img}
              >
                <source
                  src={selected.video}
                  type="video/mp4"
                />

                Your browser does not support video
                playback.
              </video>
            </div>

            <div className="modalCopy">
              <div>
                <h2>{selected.title}</h2>

                <p>
                  {selected.year} · {selected.genre} ·{" "}
                  {selected.time}
                </p>
              </div>

              <button
                className="primary"
                onClick={() => {
                  const video =
                    document.querySelector(
                      ".videoPlayer video"
                    );

                  if (video) {
                    video.play();
                  }
                }}
              >
                <Play
                  size={17}
                  fill="currentColor"
                />
                Play
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function MovieCard({ movie, onClick }) {
  return (
    <article
      className="card"
      onClick={() => onClick(movie)}
    >
      <div className="poster">
        <img
          src={movie.img}
          alt={movie.title}
        />

        <span className="badge">
          {movie.genre}
        </span>

        <div className="posterPlay">
          <Play
            size={24}
            fill="currentColor"
          />
        </div>
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
  );
}