import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function AllDonors() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteTrigger, setDeleteTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/donors");
        const data = await response.json();

        data.sort((a, b) => a.lastname.localeCompare(b.lastname));

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [deleteTrigger]);

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/donors/${id}`, {
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
      <table className="table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Gender</th>
          <th>BloodGruop</th>
        </tr>
        </thead>
        <tbody>
          {data.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.lastname}</td>
                <td>{task.age}</td>
                <td>{task.gender}</td>
                <td>{task.bloodGroup}</td>
                <td>
                  <Link to={`/donors/${task.id}`}>Edit</Link>
                </td>
                <td>
                  <button className="btn btn-danger"  onClick={() => deleteTask(task.id)}>Delete</button>
                </td>
                <td><p>
            <Link className="btn btn-secondary" to={`/donor/${task.id}`}>view details</Link>
            </p></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
