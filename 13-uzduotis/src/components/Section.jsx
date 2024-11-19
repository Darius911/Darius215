
import "./Section.css";
import { useState } from "react";

export default function Section() {
  const [lightTheme, setLightTheme] = useState(false);
  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <section>
    <div className="card w-25">
      <div className="card-body">
        <h5 className>
          Task is {lightTheme ? "not done" : "done"}
        </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </p>
        <button onClick={changeTheme} type="button" className={lightTheme ? "bg-danger" : "bg-success"}>
          <p className="text-white">{lightTheme ? "Mark as done" : "done"}</p>
        </button>
      </div>
    </div>
  </section>
  )
}


