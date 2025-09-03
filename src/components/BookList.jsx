// Displays the list of books returned from the API
// Maps through book array and shows BookCard for each
import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (!books || books.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}
