import "./styles.css";
import { useState } from "react";
// import Spinner from '../Spinner/Spinner'

const books = {
  Astronomy: [
    {
      name: "A Brief History of time",
      author: "Stephen Hawking",
      rating: "10/10"
    },
    {
      name: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      rating: "9/10"
    }
  ],
  Autobiography: [
    {
      name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
      author: "Ashlee Vance",
      rating: "9/10"
    },
    {
      name: "Wings of Fire",
      author: "Arun Tiwari",
      rating: "10/10"
    }
  ],
  Finance: [
    {
      name: "The Psychology of money",
      author: "Morgan Housel",
      rating: "9.5/10"
    },
    {
      name: "The Intelligent Investor",
      author: "Benjamin Graham",
      rating: "9/10"
    }
  ],

  Programming: [
    { name: "Clean Code", author: "Robert C. Martin", rating: "10/10" },
    {
      name: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      rating: "8.5/10"
    }
  ]
};

export default function App() {
  const [activeGenre, setGenre] = useState("Astronomy");
  const [loading, setLoading] = useState(false);

  function genreClickHandler(genre) {
    setTimeout(function () {
      setGenre(genre);
      setLoading(false);
    }, 2000);
    setLoading(true);
  }

  if (loading)
    return (
      <div className="App" style={{ margin: "auto" }}>
        <h1>Books</h1>
        <p>My Favourite Books</p>

        <div>
          {Object.keys(books).map((genre) => (
            <button
              className="genre-btn"
              onClick={() => genreClickHandler(genre)}
              style={{
                padding: "0.5rem 1rem",
                margin: "0 0.2rem",
                border: "1px solid black",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {genre}
            </button>
          ))}
        </div>
        <div className="loader"></div>
      </div>
    );
  return (
    <div className="App" style={{ margin: "auto" }}>
      <h1>Books</h1>
      <p>My Favourite Books</p>

      <div>
        {Object.keys(books).map((genre) => (
          <button
            className="genre-btn"
            onClick={() => genreClickHandler(genre)}
            style={{
              padding: "0.5rem 1rem",
              margin: "0 0.2rem",
              border: "1px solid black",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {books[activeGenre].map((bookDetails) => (
            <li
              style={{
                listStyle: "none",
                border: "1px solid black",
                borderRadius: "10px",
                maxWidth: "500px",
                margin: "10px auto",
                padding: "10px"
              }}
            >
              <div style={{ fontSize: "2rem" }}>{bookDetails.name}</div>
              <div style={{ fontSize: "1rem" }}>by {bookDetails.author}</div>
              <div style={{ fontSize: "0.8rem" }}>{bookDetails.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
