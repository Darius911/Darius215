import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/donors", {
        method: "POST",
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
            {...register("name")}
          />
        </div>

        <div>
          <label htmlFor="lastname" className="form-label">
            LastName
          </label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            {...register("lastname")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="form-control"
            {...register("age")}
          />
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              {...register("gender")}
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
              {...register("gender")}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="bloodGroup" className="form-label">
            Blood Group
          </label>
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Large select example"
            id="bloodGroup"
            {...register("bloodGroup")}
          >
            <option value="">Pasirinkite kraujo grupe</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="Comment" className="form-label">
            Kodel tapau donoru?
          </label>
          <textarea
            className="form-control"
            id="comment"
            rows="3"
            {...register("comment")}
          ></textarea>
          
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
