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
    playbackId: "TR5UuculQkUL6NQbUcBpg3W4qCN00v004so2HIRmEUY7I",
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
       