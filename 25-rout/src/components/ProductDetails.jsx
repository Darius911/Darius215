import { useParams } from "react-router";
import { Link } from "react-router";
export default function ProductDetails () {
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
        ];
    const {id} = useParams();
    return (
        <>
        <h1>{id}</h1>
        <Link to="/"><p>return to ProductList</p></Link>
        </>
    )
}