import { useState, useEffect } from "react";

import { useParams } from "react-router";

export default function BookCard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/books/${id}`
        );
        const data = await response.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    <div className="container">
      <div className="row border w-25 mx-auto mt-5 text-center">
        <h2>Books Card</h2>
        <img src={data.cover} alt="" />
        <p>title : {data.title}</p>
        <p>author : {data.author}</p>
        <p>category : {data.category}</p>
        <p>price : {data.price}eurai</p>
        
      </div>
    </div>
   
    
  </>
  );
}