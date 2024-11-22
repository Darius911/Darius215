
export default function Card(infoProps){
  
  return (
    <section className="container">
      <div className="row border border-secondary">
        <div className="d-flex gap-3 m-3 ">
          <div>
            <img src={"src" + infoProps.logo.slice(1)} />
          </div>
          <div>
            <p>{infoProps.company}</p>
            <p>{infoProps.position}</p>
            <div className="d-flex gap-3">
              <p>{infoProps.postedAt}</p>
              <p>{infoProps.contract}</p>
              <p>{infoProps.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}