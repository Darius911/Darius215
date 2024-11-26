import { useParams } from "react-router";
import { Link } from "react-router";
export default function ProductDetails () {
    
    const {id} = useParams();
    
    return (
        <>
        <h1>{id}</h1>
        <Link to="/"><p>return to ProductList</p></Link>
        </>
    )
}