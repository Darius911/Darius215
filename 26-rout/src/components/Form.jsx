import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function Form() {
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    navigate("/success");
    
    
    console.log(JSON.stringify(data));

    try {
      const response = await fetch("http://localhost:8080/animals", {
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
    <form onSubmit={handleSubmit(onSubmit)} className="col-4 mx-auto">
      <div className="mb-3">
        <label
          htmlFor="name"
          className="form-label"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          {...register("name", { required: true, pattern: /^[A-Z][a-z]+$/ })}
         
        
        />
         {errors.name?.type === "required" && <p className="text-danger">Name field cannot be empty</p>}
         {errors.name?.type === "pattern" && (
          <p className="text-danger">Name must start with an uppercase letter</p>
        )}
      </div>

      <div className="mb-3">
        <label
          htmlFor="type"
          className="form-label"
        >
          Type
        </label>
        <input
          type="text"
          id="type"
          className="form-control"
          {...register("type", { required: true, minLength: 2, maxLength: 50 })}
        />
        {errors.type?.type === "minLength" && <p className="text-danger">field shoud be min 2 symbol </p>}
        {errors.type?.type === "maxLength" && <p className="text-danger">field shoud be max 50 symbol </p>}
      </div>

      <div className="mb-3">
        <label
          htmlFor="breed"
          className="form-label"
        >
          Breed
        </label>
        <input
          type="text"
          id="breed"
          className="form-control"
          {...register("breed", { required: true, pattern: /^[A-Z][a-z]+$/, minLength: 5, maxLength: 100 })}
        />
         {errors.breed?.type === "required" && <p className="text-danger">Name field cannot be empty</p>}
         {errors.breed?.type === "pattern" && (
          <p className="text-danger">Name must start with an uppercase letter</p>
        )}
         {errors.breed?.type === "minLength" && <p className="text-danger">field shoud be min 5 symbol </p>}
         {errors.breed?.type === "maxLength" && <p className="text-danger">field shoud be max 100 symbol </p>}
         
      </div>

      <div className="mb-3">
        <label
          htmlFor="age"
          className="form-label"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          className="form-control"
          {...register("age", { min: 1, max: 100 })}
        />
        {errors.age?.type === "min" && <p className="text-danger">min age can be 1 </p>}
        {errors.age?.type === "max" && <p className="text-danger">max age can be 100 </p>}
      </div>

      <div className="mb-3">
        <label
          htmlFor="weight"
          className="form-label"
        >
          Weight
        </label>
        <input
          type="number"
          id="weight"
          step="0.01"
          className="form-control"
          {...register("weight", { min: 0.05})}
        />
         {errors.weight?.type === "min" && <p className="text-danger">min weight can be 0.05 </p>}
      </div>

      <div className="mb-3">
        <label
          htmlFor="gender"
          className="form-label"
        >
          Gender
        </label>
        <input
          type="text"
          id="gender"
          className="form-control"
          {...register("gender", {required: true})}
        />
        {errors.gender?.type === "required" && <p className="text-danger">Gender field cannot be empty</p>}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
