import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function AllBooks() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteTrigger, setDeleteTrigger] = useState(0);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        const data = await response.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [deleteTrigger]);

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/books/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      setDeleteTrigger((deleteTrigger) => deleteTrigger + 1);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((book) => {
            return (
               
              <div className="card w-25" key={book.id}>
                <img
                  className="card-img-top"
                  src={book.cover}
                  alt="Card image cap"
                />
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.category}</p>
                <p className="card-text">{book.price} eurai</p>

                
                <Link className="btn btn-warning" to={`/books/${book.id}`}>
                  Edit
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </button>

                <Link className="btn btn-secondary" to={`/book/${book.id}`}>
                  view details
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
