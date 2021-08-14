import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            AMU Staff
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <button className="btn btn-outline-light me-2">
              Login
            </button>
            <button className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
