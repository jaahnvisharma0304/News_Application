const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-items-center" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">News Mania <ion-icon name="newspaper"></ion-icon></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex justify-content-between align-items-center fs-5 gap-3">
        <li className="nav-item">
            <button className="nav-link" onClick={()=>setCategory("general")}>General</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("technology")}>Technology</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("business")}>Business</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("health")}>Health</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("science")}>Science</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCategory("sports")}>Sports</button>
        </li>
      </ul>
    </div>
    <h2 className="text-center text-white align-center">Latest <span className="badge bg-danger">News</span></h2>
  </div>
</nav>
  )
}

export default Navbar
