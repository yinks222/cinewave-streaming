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
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Afterglow",
    year: 2025,
    genre: "Drama",
    rating: "8.4",
    time: "2h 02m",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "The Last Atlas",
    year: 2023,
    genre: "Adventure",
    rating: "8.8",
    time: "2h 21m",
    img: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Velvet City",
    year: 2024,
    genre: "Crime",
    rating: "7.9",
    time: "1h 47m",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Static Hearts",
    year: 2025,
    genre: "Romance",
    rating: "8.2",
    time: "1h 42
