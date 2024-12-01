import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function UpdateForm() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/donors/${id}`);
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
      const response = await fetch(`http://localhost:3001/donors/${id}`, {
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
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            {...register("name", {
              required: true,
              pattern: /^[A-Z][a-z]+(\s[A-Za-z][a-z]+)*$/,
              minLength: 2,
              maxLength: 80,
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">Name field cannot be empty</p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="text-danger">
              Name must start with an uppercase letter
            </p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">field shoud be min 2 symbol </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-danger">field shoud be max 80 symbol </p>
          )}
        </div>

        <div>
          <label htmlFor="lastname" className="form-label">
            LastName
          </label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            {...register("lastname", {
              required: true,
              pattern: /^[A-Z][a-z]+(\s[A-Za-z][a-z]+)*$/,
              minLength: 2,
              maxLength: 80,
            })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">Name field cannot be empty</p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="text-danger">
              Name must start with an uppercase letter
            </p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">field shoud be min 2 symbol </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-danger">field shoud be max 80 symbol </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            {...register("age", { min: 18, max: 100 })}
          />
          {errors.age?.type === "min" && (
            <p className="text-danger">min age can be 18 </p>
          )}
          {errors.age?.type === "max" && (
            <p className="text-danger">max age can be 100 </p>
          )}
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              {...register("gender", { required: true })}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              {...register("gender", { required: true })}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-danger">Gender field is required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="bloodGroup" className="form-label">
            Blood Group
          </label>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="bloodGroup"
            {...register("bloodGroup", { required: true })}
          >
            <option value="">Pasirinkite kraujo grupe</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {errors.bloodGroup && (
            <p className="text-danger">Blood group is required</p>
          )}
        </div>


        
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      
    </form>
  );
}
