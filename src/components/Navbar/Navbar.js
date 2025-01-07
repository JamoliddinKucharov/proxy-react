import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Header = React.memo(() => {
  return (
    <div>
      <header>
        <div className={`container-header`}>
          <nav className="navbar navbar-expand-lg p-0 justify-content-between d-flex">
            <Link className={styles.navbarBrand} to="/">
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
            <button
              className={`navbar-toggler ${styles.navbarToggler}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={`${styles.navbarTogglerIcon} navbar-toggler-icon`}
              ></span>
            </button>

            <div
              className={`collapse navbar-collapse`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/settings">
                    Settings
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docs
                  </Link>
                  <ul
                    className={`dropdown-menu  ${styles.collapse}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className={styles.dropdownItem} to="/action">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={styles.dropdownItem}
                        to="/another-action"
                      >
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className={styles.dropdownItem}
                        to="/something-else-here"
                      >
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/referral">
                    Referral
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/proxy">
                    Proxy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/history">
                    History
                  </Link>
                </li>
              </ul>
              <div className={`d-flex align-items-center ${styles.right}`}>
                <button className={`btn d-flex ${styles.user}`}>
                  <div className={styles.userIcon}>
                    <img src="/images/btn-user.svg" alt="User Icon" />
                  </div>
                  <div className={styles.userItems}>
                    <span>User1236</span>
                    <p>$ 0.00</p>
                  </div>
                </button>
                <button className={`btn ${styles.addBalance}`}>
                  <svg
                    width="8"
                    height="9"
                    viewBox="0 0 8 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 5.30001H0V3.70001H8V5.30001Z"
                      fill="#121212"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.80001 0.5V8.5H3.20001L3.20001 0.5H4.80001Z"
                      fill="#121212"
                    />
                  </svg>
                  Add balance
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
});

export default Header;
