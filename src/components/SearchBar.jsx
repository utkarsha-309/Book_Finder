// Component for the search input and button
// Takes user input (query)
// Calls fetchBooks() when user clicks search
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by book title..."
        className="w-1/2 p-2 border rounded-l-lg"
      />
      <button className="bg-blue-500 text-white px-4 rounded-r-lg">
        Search
      </button>
    </form>
  );
}
