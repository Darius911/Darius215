import { NavLink } from "react-router"
export default function Header(){
    return (
        <header className="container mt-5 mb-5">
    <nav className="row bg-danger">
      <ul className="list-unstyled d-inline-flex gap-5 justify-content-center p-2">
        <li><NavLink className="text-decoration-none text-white" to={"/books"}>Books list</NavLink></li>
        <li><NavLink className="text-decoration-none text-white" to={"/register"}>register Books</NavLink></li>
        
      </ul>
    </nav>
  </header>
    )
}