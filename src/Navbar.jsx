import { NavLink } from "react-router-dom";
import envatologo from "../src/images/tiger.png";
import "./App.css";
export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <div className="logo">
                    <img src={envatologo} className="img-fluid" width="50px" alt="EnvatoLogo" />
                    <span className = "horizontalSpace"></span>
                    <h2>INDIAN TOURISM</h2>
                  </div>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">Services</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/aboutUs">AboutUs</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>);
}