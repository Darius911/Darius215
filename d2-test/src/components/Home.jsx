import {  Link } from "react-router"
export default function Home(){
  return (
    <>
   
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="src\assets\2.jpg" alt="img" />
        </div>
        <div className="col-md-6">
          <h1>Kodel verta tampti kraujo donoru?</h1>
          <p>1. Sveikatos patikrinimas</p>
          <p>2. Kraujo donorystė sumažina širdies ir kraujagyslių ligų riziką</p>
          <p>3.Kraujo donorystė sumažina kepenų ligų riziką</p>
          <button type="button" className="btn btn-dark"><Link className="text-white text-decoration-none" to={"/registerDonors"}>Registruokis</Link></button>
        </div>

      </div>
    </div>
    </>
  )
    
  
}