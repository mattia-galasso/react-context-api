import { Link, NavLink } from "react-router-dom";
import { useBudgetMode } from "../contexts/BudgetContext";

export default function Header() {
  const { budgetMode, setBudgetMode } = useBudgetMode();

  return (
    <>
      {/* HEADER */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid g-5">
          <Link className="navbar-brand" to="#">
            Store
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Homepage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about-us">
                  About Us
                </NavLink>
              </li>
            </ul>

            {/*             <button className="btn btn-outline-info" onClick={(e) => {
              if (budgetMode === true)
            }} >
              Attiva Modalità Budget
            </button>
 */}

            {budgetMode ? (
              <button
                className="btn btn-outline-danger"
                onClick={(e) => setBudgetMode(false)}
              >
                Disattiva Modalità Budget
              </button>
            ) : (
              <button
                className="btn btn-outline-info"
                onClick={(e) => setBudgetMode(true)}
              >
                Attiva Modalità Budget
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
