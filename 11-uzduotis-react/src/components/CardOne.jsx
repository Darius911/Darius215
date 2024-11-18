import "./CardOne.css";

export default function CardOne() {
  return (
    <article className="container">
      <div className="row m-3">
        <h3>The fastes Word press Theme</h3>
        <p>September 8, 2018</p>
        <img className="bg-success" src="src\assets\speed-meter-svgrepo-com.svg" alt="img" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorem asperiores maiores dolor impedit nostrum odit fugiat maxime, qui hic reprehenderit laboriosam quis commodi dolore ducimus? Consequatur deleniti </p>
        <button type="button" className="btn btn-dark w-25">Read more</button>
      </div>
    </article>
  );
}
