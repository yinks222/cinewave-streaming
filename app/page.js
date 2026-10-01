"use client";

import { useMemo, useState } from "react";
import {
  Play,
  Plus,
  Search,
  X,
  Star,
  CalendarDays,
  Clock3,
  ExternalLink
} from "lucide-react";

const DEMO_VIDEO =
  "https://archive.org/download/HouseOnHauntedHill1959/House-On-Haunted-Hill.mp4";

/*
  Commercial movie pages are for discovery/trailers.
  They are NOT full-movie streaming links.
*/

const movies = [
  {
    id: 1,
    title: "Resident Evil",
    year: 2026,
    release: "September 18, 2026",
    genre: "Horror",
    rating: "96%",
    badge: "TRENDING",
    time: "1h 34m",
    type: "trailer",
    trailer:
      "https://residentevil.movie/",
    desc:
      "A terrifying new chapter brings the Resident Evil universe back to the big screen."
  },

  {
    id: 2,
    title: "Heart of the Beast",
    year: 2026,
    release: "September 25, 2026",
    genre: "Action",
    rating: "85%",
    badge: "NEW",
    time: "1h 58m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Heart+of+the+Beast+2026+official+trailer",
    desc:
      "After a plane crash in Alaska, a retired veteran and his combat dog fight to survive."
  },

  {
    id: 3,
    title: "Primetime",
    year: 2026,
    release: "September 25, 2026",
    genre: "Crime",
    rating: "88%",
    badge: "TRENDING",
    time: "1h 45m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Primetime+2026+movie+official+trailer",
    desc:
      "A tense crime drama follows a controversial television host caught in a dangerous investigation."
  },

  {
    id: 4,
    title: "Forgotten Island",
    year: 2026,
    release: "September 25, 2026",
    genre: "Adventure",
    rating: "95%",
    badge: "NEW",
    time: "1h 39m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Forgotten+Island+2026+movie+trailer",
    desc:
      "Two friends become stranded in a mysterious world filled with danger and discovery."
  },

  {
    id: 5,
    title: "The Weight",
    year: 2026,
    release: "September 18, 2026",
    genre: "Thriller",
    rating: "93%",
    badge: "HOT",
    time: "1h 52m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=The+Weight+2026+movie+trailer",
    desc:
      "A gripping thriller where survival comes with an unexpected price."
  },

  {
    id: 6,
    title: "Coyote vs. Acme",
    year: 2026,
    release: "August 28, 2026",
    genre: "Comedy",
    rating: "96%",
    badge: "POPULAR",
    time: "1h 42m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Coyote+vs+Acme+official+trailer",
    desc:
      "A chaotic comedy brings the legendary Coyote and Acme together."
  },

  {
    id: 7,
    title: "The Odyssey",
    year: 2026,
    release: "July 17, 2026",
    genre: "Adventure",
    rating: "94%",
    badge: "BLOCKBUSTER",
    time: "2h 59m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=The+Odyssey+2026+official+trailer",
    desc:
      "Odysseus begins an epic journey home after the Trojan War."
  },

  {
    id: 8,
    title: "Spider-Man: Brand New Day",
    year: 2026,
    release: "July 31, 2026",
    genre: "Action",
    rating: "90%",
    badge: "TRENDING",
    time: "2h 25m",
    type: "trailer",
    trailer:
      "https://spidermanbrandnewday.movie/",
    desc:
      "Peter Parker faces a powerful new threat while living as Spider-Man."
  },

  {
    id: 9,
    title: "Toy Story 5",
    year: 2026,
    release: "June 19, 2026",
    genre: "Animation",
    rating: "92%",
    badge: "FAMILY",
    time: "1h 42m",
    type: "trailer",
    trailer:
      "https://www.pixar.com/toy-story-5",
    desc:
      "Woody, Buzz and the gang face a new generation of technology."
  },

  {
    id: 10,
    title: "The Devil Wears Prada 2",
    year: 2026,
    release: "May 1, 2026",
    genre: "Comedy",
    rating: "78%",
    badge: "POPULAR",
    time: "1h 58m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Devil+Wears+Prada+2+official+trailer",
    desc:
      "Miranda Priestly and Andy Sachs return for another fashion-world showdown."
  },

  {
    id: 11,
    title: "Supergirl",
    year: 2026,
    release: "June 26, 2026",
    genre: "Action",
    rating: "—",
    badge: "NEW",
    time: "2h 02m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Supergirl+2026+official+trailer",
    desc:
      "Supergirl travels across the galaxy with Krypto while helping a young woman seek revenge."
  },

  {
    id: 12,
    title: "Masters of the Universe",
    year: 2026,
    release: "June 5, 2026",
    genre: "Fantasy",
    rating: "—",
    badge: "NEW",
    time: "2h 01m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Masters+of+the+Universe+2026+official+trailer",
    desc:
      "Prince Adam discovers his destiny as He-Man and battles to protect Eternia."
  },

  {
    id: 13,
    title: "Scary Movie",
    year: 2026,
    release: "June 5, 2026",
    genre: "Comedy",
    rating: "—",
    badge: "COMEDY",
    time: "1h 35m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Scary+Movie+2026+official+trailer",
    desc:
      "The legendary comedy franchise returns with another round of movie parodies."
  },

  {
    id: 14,
    title: "Minions & Monsters",
    year: 2026,
    release: "July 1, 2026",
    genre: "Animation",
    rating: "—",
    badge: "FAMILY",
    time: "1h 31m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Minions+Monsters+2026+trailer",
    desc:
      "Gru and the Minions return for a new animated adventure."
  },

  {
    id: 15,
    title: "Moana",
    year: 2026,
    release: "July 10, 2026",
    genre: "Adventure",
    rating: "—",
    badge: "NEW",
    time: "1h 48m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Moana+live+action+2026+official+trailer",
    desc:
      "The beloved ocean adventure returns in a new live-action adaptation."
  },

  {
    id: 16,
    title: "Backrooms",
    year: 2026,
    release: "May 29, 2026",
    genre: "Horror",
    rating: "87%",
    badge: "HORROR",
    time: "1h 38m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Backrooms+2026+movie+trailer",
    desc:
      "A terrifying journey into an endless maze of mysterious spaces."
  },

  {
    id: 17,
    title: "Project Hail Mary",
    year: 2026,
    release: "March 20, 2026",
    genre: "Sci-Fi",
    rating: "—",
    badge: "SCI-FI",
    time: "2h 16m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Project+Hail+Mary+official+trailer",
    desc:
      "An astronaut awakens alone in space with humanity's survival in his hands."
  },

  {
    id: 18,
    title: "The Mummy",
    year: 2026,
    release: "April 17, 2026",
    genre: "Horror",
    rating: "—",
    badge: "HORROR",
    time: "1h 45m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=The+Mummy+2026+official+trailer",
    desc:
      "A family encounters an ancient evil that unleashes a supernatural threat."
  },

  {
    id: 19,
    title: "Apex",
    year: 2026,
    release: "April 24, 2026",
    genre: "Action",
    rating: "—",
    badge: "ACTION",
    time: "1h 40m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Apex+2026+movie+trailer",
    desc:
      "A woman fighting for survival becomes the target of a ruthless killer."
  },

  {
    id: 20,
    title: "Michael",
    year: 2026,
    release: "April 24, 2026",
    genre: "Biography",
    rating: "—",
    badge: "BIOPIC",
    time: "2h 20m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Michael+2026+Michael+Jackson+official+trailer",
    desc:
      "A cinematic look at the life and career of music legend Michael Jackson."
  },

  {
    id: 21,
    title: "The Bride!",
    year: 2026,
    release: "March 6, 2026",
    genre: "Fantasy",
    rating: "—",
    badge: "DARK",
    time: "2h 00m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=The+Bride+2026+official+trailer",
    desc:
      "A dark reimagining of Frankenstein's Bride."
  },

  {
    id: 22,
    title: "Scream 7",
    year: 2026,
    release: "February 27, 2026",
    genre: "Horror",
    rating: "—",
    badge: "HORROR",
    time: "1h 54m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Scream+7+official+trailer",
    desc:
      "Ghostface returns for another terrifying chapter."
  },

  {
    id: 23,
    title: "28 Years Later: The Bone Temple",
    year: 2026,
    release: "January 16, 2026",
    genre: "Horror",
    rating: "—",
    badge: "HORROR",
    time: "1h 49m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=28+Years+Later+The+Bone+Temple+official+trailer",
    desc:
      "The post-apocalyptic horror saga continues."
  },

  {
    id: 24,
    title: "The Rip",
    year: 2026,
    release: "January 16, 2026",
    genre: "Crime",
    rating: "—",
    badge: "CRIME",
    time: "1h 44m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=The+Rip+2026+Netflix+official+trailer",
    desc:
      "Miami cops discover millions in cash and quickly realize they cannot trust one another."
  },

  {
    id: 25,
    title: "Crime 101",
    year: 2026,
    release: "February 13, 2026",
    genre: "Crime",
    rating: "—",
    badge: "CRIME",
    time: "2h 00m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Crime+101+2026+official+trailer",
    desc:
      "A professional thief attempts one final score while a detective closes in."
  },

  {
    id: 26,
    title: "GOAT",
    year: 2026,
    release: "February 13, 2026",
    genre: "Animation",
    rating: "—",
    badge: "SPORTS",
    time: "1h 32m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=GOAT+2026+animated+movie+official+trailer",
    desc:
      "An animated underdog story follows a young goat chasing a huge sporting dream."
  },

  {
    id: 27,
    title: "Wuthering Heights",
    year: 2026,
    release: "February 13, 2026",
    genre: "Romance",
    rating: "—",
    badge: "ROMANCE",
    time: "2h 10m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Wuthering+Heights+2026+official+trailer",
    desc:
      "A dramatic new adaptation of the classic story of Catherine and Heathcliff."
  },

  {
    id: 28,
    title: "Send Help",
    year: 2026,
    release: "January 30, 2026",
    genre: "Thriller",
    rating: "—",
    badge: "THRILLER",
    time: "1h 43m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Send+Help+2026+official+trailer",
    desc:
      "Two coworkers become stranded after a plane crash and must work together to survive."
  },

  {
    id: 29,
    title: "People We Meet on Vacation",
    year: 2026,
    release: "January 9, 2026",
    genre: "Romance",
    rating: "—",
    badge: "ROMANCE",
    time: "1h 38m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=People+We+Meet+on+Vacation+2026+official+trailer",
    desc:
      "Two longtime friends begin to wonder whether their relationship could become something more."
  },

  {
    id: 30,
    title: "Greenland 2: Migration",
    year: 2026,
    release: "January 9, 2026",
    genre: "Sci-Fi",
    rating: "—",
    badge: "SCI-FI",
    time: "1h 58m",
    type: "trailer",
    trailer:
      "https://www.google.com/search?q=Greenland+2+Migration+2026+official+trailer",
    desc:
      "A family searches for a new home in a devastated world."
  }
];

/* Authorized/public-domain test movie */
const playableMovie = {
  id: 999,
  title: "House on Haunted Hill",
  year: 1959,
  release: "1959",
  genre: "Horror",
  rating: "Classic",
  badge: "PLAYABLE",
  time: "1h 15m",
  type: "video",
  video: DEMO_VIDEO,
  desc:
    "A classic horror film currently being used as CineWave's legal streaming test."
};

const chineseMovies = [
  {
    id: 101,
    title: "Crouching Tiger, Hidden Dragon",
    year: 2000,
    release: "2000",
    genre: "Wuxia",
    rating: "8.0",
    badge: "CLASSIC",
    time: "2h 00m"
  },
  {
    id: 102,
    title: "Hero",
    year: 2002,
    release: "2002",
    genre: "Wuxia",
    rating: "7.9",
    badge: "CLASSIC",
    time: "1h 39m"
  },
  {
    id: 103,
    title: "House of Flying Daggers",
    year: 2004,
    release: "2004",
    genre: "Action",
    rating: "7.5",
    badge: "WUXIA",
    time: "1h 59m"
  },
  {
    id: 104,
    title: "Infernal Affairs",
    year: 2002,
    release: "2002",
    genre: "Crime",
    rating: "8.0",
    badge: "CRIME",
    time: "1h 41m"
  },
  {
    id: 105,
    title: "The Road Home",
    year: 1999,
    release: "1999",
    genre: "Romance",
    rating: "7.8",
    badge: "CLASSIC",
    time: "1h 29m"
  },
  {
    id: 106,
    title: "A Chinese Ghost Story",
    year: 1987,
    release: "1987",
    genre: "Fantasy",
    rating: "7.4",
    badge: "CLASSIC",
    time: "1h 38m"
  }
];

const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Fantasy",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Thriller"
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const searchable =
        `${movie.title} ${movie.genre} ${movie.year}`.toLowerCase();

      const matchesSearch = searchable.includes(
        search.toLowerCase()
      );

      const matchesGenre =
        genre === "All" || movie.genre === genre;

      return matchesSearch && matchesGenre;
    });
  }, [search, genre]);

  const trendingMovies = movies.filter((movie) =>
    ["TRENDING", "BLOCKBUSTER", "HOT", "POPULAR"].includes(
      movie.badge
    )
  );

  const newMovies = movies.filter((movie) =>
    ["NEW", "HOT", "BLOCKBUSTER"].includes(movie.badge)
  );

  const filteredChineseMovies = chineseMovies.filter(
    (movie) =>
      `${movie.title} ${movie.genre}`
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const featured = movies[0];

  const openMovie = (movie) => {
    setSelected(movie);
  };

  const openPlayableMovie = () => {
    setSelected(playableMovie);
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
            "linear-gradient(90deg, rgba(5,7,12,.98), rgba(5,7,12,.18)), url(https://placehold.co/1600x900/10141d/e7ff49?text=" +
            encodeURIComponent(featured.title) +
            ")"
        }}
      >
        <div className="heroCopy">
          <div className="eyebrow">
            CINEWAVE FEATURED
          </div>

          <h1>{featured.title}</h1>

          <div className="meta">
            <span>{featured.year}</span>
            <span>{featured.genre}</span>
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
              Watch trailer
            </button>

            <button
              className="secondary"
              onClick={openPlayableMovie}
            >
              <Play size={17} />
              Watch free classic
            </button>
          </div>
        </div>
      </section>

      <section className="content">
        <p className="kicker">WHAT'S HOT</p>
        <h2>🔥 Trending Now</h2>

        <div className="grid">
          {trendingMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={openMovie}
            />
          ))}
        </div>
      </section>

      <section className="content">
        <p className="kicker">JUST ADDED</p>
        <h2>🆕 New Releases</h2>

        <div className="grid">
          {newMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={openMovie}
            />
          ))}
        </div>
      </section>

      <section className="content">
        <p className="kicker">FREE TO WATCH</p>
        <h2>🎬 Public-Domain Classic</h2>

        <div className="grid">
          <MovieCard
            movie={playableMovie}
            onClick={openPlayableMovie}
          />
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
              onClick={() =>
                openMovie({
                  ...movie,
                  type: "trailer",
                  trailer:
                    "https://www.google.com/search?q=" +
                    encodeURIComponent(
                      movie.title + " official trailer"
                    )
                })
              }
            />
          ))}
        </div>
      </section>

      <section className="content">
        <p className="kicker">EXPLORE</p>
        <h2>🎬 Browse Movies</h2>

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

        {filteredMovies.length === 0 && (
          <div className="empty">
            <Search size={28} />
            <h3>No movies found</h3>
            <p>
              Try another movie title or choose a
              different genre.
            </p>
          </div>
        )}
      </section>

      <footer>
        <div className="logo">
          <span className="logoMark">C</span>
          CINE<span>WAVE</span>
        </div>

        <span>
          © 2026 CineWave. Movie discovery & streaming
          interface.
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
              aria-label="Close"
            >
              <X />
            </button>

            {selected.type === "video" ? (
              <div className="videoPlayer">
                <video
                  key={selected.id}
                  controls
                  autoPlay
                  playsInline
                  poster={
                    "https://placehold.co/900x500/10141d/e7ff49?text=" +
                    encodeURIComponent(selected.title)
                  }
                >
                  <source
                    src={selected.video}
                    type="video/mp4"
                  />

                  Your browser does not support video
                  playback.
                </video>
              </div>
            ) : (
              <div className="trailerPanel">
                <div className="trailerIcon">
                  <Play
                    size={42}
                    fill="currentColor"
                  />
                </div>

                <div>
                  <span className="modalBadge">
                    OFFICIAL TRAILER
                  </span>

                  <h2>
                    {selected.title}
                  </h2>

                  <p>
                    Watch the official trailer or
                    movie information from the
                    authorized source.
                  </p>

                  <a
                    className="primary trailerButton"
                    href={selected.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play
                      size={17}
                      fill="currentColor"
                    />
                    Watch trailer
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            )}

            <div className="modalCopy">
              <div>
                <div className="modalBadge">
                  {selected.badge}
                </div>

                <h2>{selected.title}</h2>

                <p className="movieMeta">
                  <CalendarDays size={13} />
                  {selected.release}

                  <span>·</span>

                  <Clock3 size={13} />
                  {selected.time}

                  <span>·</span>

                  {selected.genre}

                  {selected.rating !== "—" && (
                    <>
                      <span>·</span>
                      <Star
                        size={13}
                        fill="currentColor"
                      />
                      {selected.rating}
                    </>
                  )}
                </p>
              </div>

              {selected.type === "video" && (
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
              )}
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
          src={
            "https://placehold.co/600x900/10141d/e7ff49?text=" +
            encodeURIComponent(movie.title)
          }
          alt={movie.title}
          loading="lazy"
        />

        <span className="badge">
          {movie.badge}
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

        <div className="releaseLine">
          <span>{movie.year}</span>
          <span>·</span>
          <span>{movie.genre}</span>

          <span className="miniRating">
            <Star
              size={11}
              fill="currentColor"
            />
            {movie.rating}
          </span>
        </div>

        <small className="releaseDate">
          {movie.release}
        </small>
      </div>
    </article>
  );
}