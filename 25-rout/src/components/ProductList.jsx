import { Link } from "react-router";
export default function ProductList() {
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];

  return (
    <>
      <h1>Product list</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name}
              <Link to={`products/${product.name}`}  > View details</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
