import { useState, useEffect } from "react";

import { useParams } from "react-router";

export default function Card() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${id}`
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
    <div>
      <h2><img className="bd-placeholder-img rounded-circle" width="140" height="140" role="img" src={data.avatar_url} alt="" /></h2>
      <p>log name : {data.login}</p>
      <p>user_view_type : {data.user_view_type}</p>
    </div>
    
  </>
  );
}