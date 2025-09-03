// Main entry point of the application
// Holds the main state (search query, results, loading)
// Passes data and functions to child components (SearchBar, BookList)

import { useState } from "react";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch books from Open Library API
  const searchBooks = async (title) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      const data = await res.json();
      if (data.docs.length === 0) {
        setError("No books found.");
      }
      setBooks(data.docs);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <BookList books={books} />
    </div>
  );
}
