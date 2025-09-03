// Single card component to show book details
// - Shows book cover, title, author, year


export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={coverUrl} alt={book.title} className="w-full h-60 object-cover mb-2" />
      <h2 className="font-bold text-lg">{book.title}</h2>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
      <p className="text-sm">First published: {book.first_publish_year || "N/A"}</p>
    </div>
  );
}
