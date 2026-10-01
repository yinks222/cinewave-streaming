"use client";

import { useState } from "react";
import {
  Search,
  Play,
  Plus,
  ChevronRight,
  Menu,
  X,
  Star,
  Info,
} from "lucide-react";
import Player from "./Player";

const episodes = [
  {
    number: 1,
    title: "Episode 1",
    playbackId: "OllxuX02N3QrgVAHd6GOaQZ7022ZcX00sz02KQ1LGo8FMN4",
  },
];

const movies = [
  {
    title: "Rebirth",
    year: "2026",
    genre: "Chinese Drama",
    rating: "8.7",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    title: "Midnight Protocol",
    year: "2026",
    genre: "Action • Thriller",
    rating: "8.2",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Last Horizon",
    year: "2026",
    genre: "Sci-Fi",
    rating: "8.5",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Shadow City",
    year: "2026",
    genre: "Crime • Drama",
    rating: "8.1",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "After Tomorrow",
    year: "2026",
    genre: "Sci-Fi • Drama",
    rating: "8.4",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Lost Kingdom",
    year: "2026",
    genre: "Adventure • Drama",
    rating: "8.0",
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=900&q=85",
  },
];

const trending = [
  {
    title: "Rebirth",
    subtitle: "Chinese Series",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Midnight Protocol",
    subtitle: "Action",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Last Horizon",
    subtitle: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Shadow City",
    subtitle: "Crime Series",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "After Tomorrow",
    subtitle: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=85",
  },
];

const genres = [
  "All",
  "Action",
  "Drama",
  "Comedy",
  "Romance",
  "Thriller",
  "Sci-Fi",
  "Chinese",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const currentEpisode =
    episodes.find((episode) => episode.number === selectedEpisode) ||
    episodes[0];

  const watchEpisode = (episodeNumber) => {
    setSelectedEpisode(episodeNumber);

    setTimeout(() => {
      document
        .getElementById("rebirth-player")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <main className="cinewave">
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="logo">
          <span className="logoMark">C</span>
          <span className="logoText">CineWave</span>
        </div>

        <nav className={menuOpen ? "navLinks mobileOpen" : "navLinks"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#trending" onClick={() => setMenuOpen(false)}>
            Trending
          </a>

          <a href="#movies" onClick={() => setMenuOpen(false)}>
            Movies
          </a>

          <a href="#series" onClick={() => setMenuOpen(false)}>
            TV Series
          </a>
        </nav>

        <div className="navActions">
          {searchOpen && (
            <input
              className="searchInput"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search movies..."
              autoFocus
            />
          )}

          <button
            className="iconButton"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="heroBackground">
          <div className="heroGlow" />
        </div>

        <div className="heroContent">
          <div className="heroTag">
            <span className="liveDot" />
            FREE TO WATCH
          </div>

          <h1>REBIRTH</h1>

          <div className="heroMeta">
            <span>2026</span>
            <span>•</span>
            <span>Chinese Drama</span>
            <span>•</span>
            <span>Season 1</span>

            <span className="rating">
              <Star size={15} fill="currentColor" />
              8.7
            </span>
          </div>

          <p>
            Enter the world of Rebirth — a gripping Chinese drama filled with
            love, destiny, conflict and unexpected twists.
          </p>

          <div className="heroButtons">
            <button
              className="primaryButton"
              onClick={() => watchEpisode(1)}
            >
              <Play size={18} fill="currentColor" />
              Watch Episode 1
            </button>

            <button className="secondaryButton">
              <Plus size={18} />
              My List
            </button>

            <button className="infoButton">
              <Info size={18} />
              Details
            </button>
          </div>
        </div>

        <div className="heroFade" />
      </section>

      {/* TRENDING */}
      <section id="trending" className="contentSection">
        <div className="sectionHeader">
          <div>
            <span className="sectionLabel">WHAT'S HOT</span>
            <h2>Trending Now</h2>
          </div>

          <button className="seeAll">
            See All
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="trendingGrid">
          {trending.map((movie, index) => (
            <article className="trendingCard" key={movie.title}>
              <div className="trendNumber">
                {String(index + 1).padStart(2, "0")}
              </div>

              <img src={movie.image} alt={movie.title} />

              <div className="trendingOverlay">
                <span>{movie.subtitle}</span>
                <h3>{movie.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MOVIES */}
      <section id="movies" className="contentSection">
        <div className="sectionHeader">
          <div>
            <span className="sectionLabel">EXPLORE</span>
            <h2>Popular Movies</h2>
          </div>

          <button className="seeAll">
            See All
            <ChevronRight size={17} />
          </button>
        </div>

        <div className="genreBar">
          {genres.map((genre, index) => (
            <button
              key={genre}
              className={index === 0 ? "genreActive" : ""}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="movieGrid">
          {filteredMovies.map((movie) => (
            <article className="movieCard" key={movie.title}>
              <div className="poster">
                <img src={movie.image} alt={movie.title} />

                <div className="posterRating">
                  <Star size={13} fill="currentColor" />
                  {movie.rating}
                </div>

                <button
                  className="posterPlay"
                  aria-label={`Play ${movie.title}`}
                  onClick={() => {
                    if (movie.title === "Rebirth") {
                      watchEpisode(1);
                    }
                  }}
                >
                  <Play size={18} fill="currentColor" />
                </button>
              </div>

              <div className="movieInfo">
                <h3>{movie.title}</h3>

                <div className="movieMeta">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.genre}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="empty">
            <Search size={35} />
            <h3>No movies found</h3>
            <p>Try another search.</p>
          </div>
        )}
      </section>

      {/* REBIRTH SERIES */}
      <section id="series" className="seriesBanner">
        <div className="seriesContent">
          <span className="sectionLabel">FEATURED SERIES</span>

          <h2>Rebirth</h2>

          <div className="seriesMeta">
            <span>2026</span>
            <span>•</span>
            <span>Chinese Drama</span>
            <span>•</span>
            <span>Season 1</span>
          </div>

          <p>
            Watch Rebirth on CineWave. Choose an available episode below and
            start watching.
          </p>

          <button
            className="primaryButton"
            onClick={() => watchEpisode(1)}
          >
            <Play size={18} fill="currentColor" />
            Watch Series
          </button>
        </div>
      </section>

      {/* REBIRTH PLAYER */}
      <section id="rebirth-player" className="contentSection">
        <div className="sectionHeader">
          <div>
            <span className="sectionLabel">NOW PLAYING</span>
            <h2>Rebirth — Season 1</h2>
          </div>
        </div>

        <div className="rebirthWatchArea">
          <Player
            playbackId={currentEpisode?.playbackId}
            title={`Rebirth — Episode ${currentEpisode?.number}`}
          />

          <div className="episodeHeader">
            <div>
              <span className="sectionLabel">EPISODES</span>
              <h3>
                Season 1 · Episode {currentEpisode?.number}
              </h3>
            </div>
          </div>

          <div className="episodeGrid">
            {episodes.map((episode) => (
              <button
                key={episode.number}
                className={
                  selectedEpisode === episode.number
                    ? "episodeButton episodeActive"
                    : "episodeButton"
                }
                onClick={() => watchEpisode(episode.number)}
              >
                <span className="episodeNumber">
                  {episode.number}
                </span>

                <span className="episodeTitle">
                  {episode.title}
                </span>

                <Play size={15} />
              </button>
            ))}
          </div>

          <div className="episodeNotice">
            <p>
              More Rebirth episodes will appear here as their authorized
              streaming videos are added to CineWave.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footerLogo">
          <span className="logoMark">C</span>
          <span>CineWave</span>
        </div>

        <p>Stream your next story.</p>

        <div className="footerLinks">
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
          <span>Genres</span>
        </div>

        <small>© 2026 CineWave. All rights reserved.</small>
      </footer>
    </main>
  );
}