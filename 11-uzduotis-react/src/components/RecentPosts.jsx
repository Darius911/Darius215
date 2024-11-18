import "./RecentPosts.css"

export default function RecentPosts(){
  return (
    <article className="container">
      <div className="row">
        <h3>Recent Posts</h3>
        <div className="d-flex gap-3">
          <img className="w-50 bg-success mb-3" src="src\assets\speed-meter-svgrepo-com.svg" alt="" />
          <h3 className="text-primary">The fastes Word press Theme</h3>
        </div>
        <div className="d-flex gap-3">
          <img className="w-50 bg-purple mb-3" src="src\assets\plain-2-svgrepo-com.svg" alt="" />
          <h3 className="text-primary">Top 10 contact form plugin</h3>
        </div>
        <div className="d-flex gap-3">
          <img className="w-50 bg-primary" src="src\assets\shield-ok-svgrepo-com.svg" alt="" />
          <h3 className="text-primary">3 Awesome Security Plugins
          for WordPress</h3>
        </div>
      </div>
    </article>
  )
}