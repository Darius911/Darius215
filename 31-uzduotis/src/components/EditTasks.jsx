import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function EditTasks() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/tasks/${id}`);
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

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
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
    <form onSubmit={handleSubmit(onSubmit)} className="col-8 mx-auto">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          {...register("name")}
        />

        <label htmlFor="name" className="form-label">
          Due date
        </label>
        <input
          type="date"
          id="date"
          className="form-control"
          {...register("date")}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
