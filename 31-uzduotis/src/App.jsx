import { NavLink, Routes, Route } from "react-router";
import "./App.css";
import TasksForm from "./components/TasksForm";
import AllTasks from "./components/AllTasks";
import EditTasks from "./components/EditTasks";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/registerTasks"}>Tasks form</NavLink>
            </li>
            <li>
              <NavLink to={"/tasks"}>View all tasks</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        
      <Routes>
        

        <Route
        path="/registerTasks"
        element={<TasksForm/>}
        />

      <Route
        path="/tasks"
        element={<AllTasks/>}
        />
      <Route
        path="/tasks:id"
        element={<EditTasks/>}
        />


      </Routes>

      </main>
    </>
  );
}

export default App;
