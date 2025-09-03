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
