import logo from "../../../assets/logo.png";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white border border-bottom-1">
      <div className="container-fluid mt-2 mb-1">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="35" height="47" />
          <span className="align-middle ms-2">
            <b>TripTips</b>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <div className="rounded-pill px-2 shadow-sm border border-2">
              <form className="d-flex w-100 me-2 m-1" role="search">
                <input
                  className="form-control me-1 rounded-pill input-lg border-0"
                  type="search"
                  placeholder="Pesquisar lugares"
                  aria-label="Search"
                />
                <button className="btn rounded-circle px-2 text-light border-0 search-button" type="submit">
                <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </ul>

          <span className="nav-item me-2">
            <div>TripTips your home</div>
          </span>

          <span className="nav-item me-2 dropdown">
            <button
              className="btn btn-white dropdown-toggle rounded-pill p-1 border border-1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle m-2 fs-5"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </span>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
