import { Link } from "react-router";

export default function Home () {
    return (
        <>
        <h1>Welcome to home page</h1>
        <Link to="/About">go to about</Link>
        </>
    )
}