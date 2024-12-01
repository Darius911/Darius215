import { NavLink } from "react-router"

export default function Header(){
  return (
    <header className="container mt-5 mb-5">
    <nav className="row bg-danger">
      <ul className="list-unstyled d-inline-flex gap-5 justify-content-center p-2">
        <li><NavLink className="text-decoration-none text-white" to={"/"}>Home</NavLink></li>
        <li><NavLink className="text-decoration-none text-white" to={"/registerDonors"}>Registracija</NavLink></li>
        <li><NavLink className="text-decoration-none text-white" to={"/donors"}>Donorai</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}