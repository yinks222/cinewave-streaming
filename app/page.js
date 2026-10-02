"use client";

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
import { useState } from "react";
import Player from "./Player";

const episodes = [
  {
    id: 1,
    title: "Episode 1",
    playbackId:
      "TR5UuculQkUL6NQbUcBpg3W4qCN00v004so2HIRmEUY7I",
  },
];

const movies = [
  {
    title: "Rebirth",
    year: "2026",
    rating: "8.9",
    genre: "Sci-Fi",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    title: "Midnight Protocol",
    year: "2026",
    rating: "8.4",
    genre: "Thriller",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "The Last Horizon",
    year: "2025",
    rating: "8.7",
    genre: "Adventure",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shadow City",
    year: "2026",
    rating: "8.2",
    genre: "Crime",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "After Tomorrow",
    year: "2025",
    rating: "8.1",
    genre: "Drama",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Lost Kingdom",
    year: "2026",
    rating: "8.6",
    genre: "Fantasy",
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1200&q=80",
  },
];

const trending = [
  "Rebirth",
  "Midnight Protocol",
  "The Last Horizon",
  "Shadow City",
  "After Tomorrow",
];

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Sci-Fi",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const watchEpisode = () => {
    document
      .getElementById("rebirth-player")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navContainer">
          <a href="#" className="logo">
            VIREON
          </a>

          <div className={`navLinks ${menuOpen ? "active" : ""}`}>
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
          </div>

          <div className="navActions">
            <button
              className="iconButton"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search size={21} />
            </button>

            <button
              className="menuButton"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="searchBox">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="heroBackground">
          <img
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=2000&q=90"
            alt="Rebirth"
          />
        </div>

        <div className="heroOverlay"></div>

        <div className="heroContent">
          <div className="heroBadge">VIREON ORIGINAL</div>

          <h1>REBIRTH</h1>

          <div className="heroMeta">
            <span>2026</span>
            <span className="dot">•</span>
            <span>8 Episodes</span>
            <span className="dot">•</span>
            <span className="rating">
              <Star size={15} fill="currentColor" />
              8.9
            </span>
          </div>

          <p>
            Humanity has reached the edge of existence. When an ancient force
            awakens beyond the stars, one unlikely hero must uncover the truth
            before Earth faces its final dawn.
          </p>

          <div className="heroButtons">
            <button className="primaryButton" onClick={watchEpisode}>
              <Play size={20} fill="currentColor" />
              Watch Now
            </button>

            <button className="secondaryButton">
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* MOVIES */}
      <section className="section" id="movies">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">DISCOVER</p>
            <h2>Movies</h2>
          </div>

          <button className="viewAll">
            View All
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="movieGrid">
          {filteredMovies.map((movie) => (
            <div
              className="movieCard"
              key={movie.title}
              onClick={movie.featured ? watchEpisode : undefined}
            >
              <div className="moviePoster">
                <img src={movie.image} alt={movie.title} />

                <div className="posterOverlay">
                  <button className="posterPlay">
                    <Play size={20} fill="currentColor" />
                  </button>
                </div>

                <div className="movieRating">
                  <Star size={13} fill="currentColor" />
                  {movie.rating}
                </div>
              </div>

              <div className="movieInfo">
                <h3>{movie.title}</h3>

                <div className="movieMeta">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="section trendingSection" id="trending">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">POPULAR NOW</p>
            <h2>Trending</h2>
          </div>

          <button className="viewAll">
            Explore
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="trendingList">
          {trending.map((title, index) => {
            const movie = movies.find((item) => item.title === title);

            return (
              <div className="trendingItem" key={title}>
                <span className="trendingNumber">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="trendingImage">
                  <img src={movie?.image} alt={title} />
                </div>

                <div className="trendingInfo">
                  <h3>{title}</h3>

                  <div>
                    <span>{movie?.year}</span>
                    <span> • </span>
                    <span>{movie?.genre}</span>
                  </div>
                </div>

                <div className="trendingRating">
                  <Star size={14} fill="currentColor" />
                  {movie?.rating}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GENRES */}
      <section className="section genresSection">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">EXPLORE</p>
            <h2>Browse by Genre</h2>
          </div>
        </div>

        <div className="genresGrid">
          {genres.map((genre) => (
            <button className="genreCard" key={genre}>
              <span>{genre}</span>
              <ChevronRight size={18} />
            </button>
          ))}
        </div>
      </section>

      {/* REBIRTH SERIES */}
      <section className="seriesBanner" id="series">
        <div className="seriesBackground">
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=2000&q=90"
            alt="Rebirth series"
          />
        </div>

        <div className="seriesOverlay"></div>

        <div className="seriesContent">
          <p className="sectionLabel">VIREON ORIGINAL SERIES</p>

          <h2>REBIRTH</h2>

          <p>
            A new beginning is coming. Follow the journey through worlds
            unknown as humanity discovers what lies beyond the stars.
          </p>

          <div className="seriesMeta">
            <span>2026</span>
            <span>•</span>
            <span>8 Episodes</span>
            <span>•</span>
            <span>SCI-FI</span>
          </div>
        </div>
      </section>

      {/* PLAYER */}
      <section className="playerSection" id="rebirth-player">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">WATCH NOW</p>
            <h2>Rebirth</h2>
          </div>
        </div>

        <div className="playerWrapper">
          <Player
            playbackId={episodes[0].playbackId}
            title="Rebirth — Episode 1"
          />
        </div>

        <div className="episodesSection">
          <div className="episodesHeader">
            <h3>Episodes</h3>
            <span>Season 1</span>
          </div>

          <div className="episodeList">
            {episodes.map((episode) => (
              <button
                className="episodeButton active"
                key={episode.id}
                onClick={() => {
                  document
                    .getElementById("rebirth-player")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="episodeNumber">
                  {String(episode.id).padStart(2, "0")}
                </span>

                <span className="episodeTitle">{episode.title}</span>

                <Play size={17} fill="currentColor" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaSection">
        <div className="ctaContent">
          <p className="sectionLabel">VIREON</p>
          <h2>Where Stories Come Alive.</h2>
          <p>
            Discover unforgettable movies and series in a cinematic streaming
            experience built for modern entertainment.
          </p>

          <button className="primaryButton" onClick={watchEpisode}>
            <Play size={20} fill="currentColor" />
            Start Watching
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerTop">
          <div className="footerBrand">
            <a href="#" className="logo">
              VIREON
            </a>

            <p>Where Stories Come Alive.</p>
          </div>

          <div className="footerLinks">
            <div>
              <h4>Explore</h4>
              <a href="#home">Home</a>
              <a href="#trending">Trending</a>
              <a href="#movies">Movies</a>
              <a href="#series">TV Series</a>
            </div>

            <div>
              <h4>Vireon</h4>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2026 Vireon. All rights reserved.</p>
          <p>Where Stories Come Alive.</p>
        </div>
      </footer>
    </main>
  );
}