import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
export default function RegisterBooks(){
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/books');
      };
    

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
     
      
    
      const onSubmit = async (data) => {
        try {
          const response = await fetch("http://localhost:3001/books", {
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
              <label htmlFor="title" className="form-label">
              title
              </label>
              <input
                type="text"
                id="title"
                className="form-control"
                {...register("title", {
                  required: true,
                  minLength: 3,
                  maxLength: 100,
                })}
              />
              {errors.title?.type === "required" && (
                <p className="text-danger">Name field cannot be empty</p>
              )}
              
              {errors.title?.type === "minLength" && (
                <p className="text-danger">field shoud be min 3 symbol </p>
              )}
              {errors.title?.type === "maxLength" && (
                <p className="text-danger">field shoud be max 100 symbol </p>
              )}
            </div>
    
            <div>
              <label htmlFor="author" className="form-label">
              author
              </label>
              <input
                type="text"
                id="author"
                className="form-control"
                {...register("author", {
                  required: true,
                  pattern: /^[a-zA-Z\s]*$/,
                  
                })}
              />
              {errors.author?.type === "required" && (
                <p className="text-danger">Name field cannot be empty</p>
              )}
              
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
              category
              </label>
              <select
                className="form-select form-select-lg mb-3"
                aria-label="Large select example"
                id="category"
                {...register("category", { required: true })}
              >
                <option value="">Choose category</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Proza">Proza</option>
              </select>
              {errors.category && (
                <p className="text-danger">category is required</p>
              )}
            </div>
    
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
              price
              </label>
              <input
                type="number"
                id="price"
                step="0.01"
                className="form-control"
                {...register("price", { min: 0.01})}
              />
              {errors.price?.type === "min" && (
                <p className="text-danger">min price can be 0.01 </p>
              )}
              
            </div>

            <div>
              <label htmlFor="cover" className="form-label">
              cover
              </label>
              <input
                type="text"
                id="cover"
                className="form-control"
                {...register("cover", {
                  required: true,
                  
                  
                  
                })}
              />
              {errors.cover?.type === "required" && (
                <p className="text-danger">Name field cannot be empty</p>
              )}
              
            </div>
    
            
    
            
    
    
            
          </div>
    
          <button onClick={goToHome} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      );
    }
    
    