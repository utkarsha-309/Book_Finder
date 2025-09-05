# Book Finder Application  

A simple and responsive web application that allows users to search for books using the Open Library API.  
This project was built as part of a Take-Home Challenge to demonstrate skills in React, API integration, and clean UI design.  

## Features  
- Search for books by title  
- Displays book details including title, author, first publish year, and cover image  
- Responsive design for both desktop and mobile  
- Error handling with messages for no results or network errors  
- Clean and user-friendly interface styled with Tailwind CSS  

## Tech Stack  
- Frontend Framework: React (Vite)  
- Styling: Tailwind CSS  
- State Management: React useState and useEffect  
- API: [Open Library Search API](https://openlibrary.org/dev/docs/api/search)  

## Project Structure  
book-finder/
├── src/
│ ├── App.jsx # Main application logic
│ ├── components/
│ │ ├── BookCard.jsx # Component to display individual book details
│ │ ├── SearchBar.jsx # Component for search input
│ ├── index.css # Global styles
│ ├── main.jsx # Entry point
├── public/ # Static assets
├── package.json # Dependencies
└── README.md # Project documentation


## Installation and Setup  

1. Clone the repository:  
   ```bash
   git clone https://github.com/utkarsha-309/Book_Finder.git
   cd Book_Finder
2.Install dependencies:
  npm install
3.Run the development server:
  npm run dev
4.Open in browser:
  http://localhost:5173/
  
  Future Enhancements
1.Add filters for author, year, or subject
2.Add a favorites list
3.Include dark mode


##Notes Of Book-Finder
Project Goal
This project aims to develop a simple web application that allows users to search for books by title. The application utilizes the Open Library Search API to display relevant book details in a clean and responsive interface.

Key Components

1. App.jsx
- The main component that manages application state.
- Holds the search query and list of books.
- Uses useEffect to fetch data from the API whenever a search is performed.
- Passes data to child components (SearchBar and BookCard).

2. SearchBar.jsx
- Handles user input for book titles.
- On form submission, it updates the parent (App.jsx) with the query.
- Provides a clean and simple input + search button UI.

3. BookCard.jsx
- Displays individual book details such as title, author, publication year, and cover image.
- Handles cases where certain details (e.g., cover image) may be missing by showing a fallback placeholder.

4. Styling (Tailwind CSS)
- Used for rapid styling with a mobile-first approach.
- Ensures responsiveness and a consistent modern UI.

Error Handling
- If the API returns no results, the user is shown a friendly message instead of an empty screen.
- Network or fetch errors are caught and displayed gracefully.

Why Vite + React?
- Vite provides a fast development environment with minimal setup.
- React’s component-based architecture makes the app modular and maintainable.
- State management with hooks (useState, useEffect) avoids unnecessary complexity.

Deployment
- Netlify was used for deployment due to its simplicity and free hosting options.
- CodeSandbox was used for code demonstration and live preview.

Future Improvements
- Add filters (e.g., search by author, subject, or year).
- Add a favorites list with local storage.
- Introduce dark mode.
- Add unit tests for components.

