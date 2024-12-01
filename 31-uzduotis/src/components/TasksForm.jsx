import { useForm } from "react-hook-form";

export default function TasksForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 
  

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/tasks", {
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
            {...register("name",{ required: true, pattern: /^[A-Z][a-z]+(\s[A-Za-z][a-z]+)*$/ , minLength: 2, maxLength: 80})}
            
          />
            {errors.name?.type === "required" && <p className="text-danger">Name field cannot be empty</p>}
          {errors.name?.type === "pattern" && (
            <p className="text-danger">Name must start with an uppercase letter</p>
          )}
          {errors.name?.type === "minLength" && <p className="text-danger">field shoud be min 2 symbol </p>}
          {errors.name?.type === "maxLength" && <p className="text-danger">field shoud be max 80 symbol </p>}
        </div>
        
          <div>
            <label htmlFor="name" className="form-label">
              Due date
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              {...register("date", {required: true })}
             
              
            />
            {errors.date?.type === "required" && <p className="text-danger">Name field cannot be empty</p>}
          </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
