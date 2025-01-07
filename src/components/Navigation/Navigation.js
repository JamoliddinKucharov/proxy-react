import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = React.memo(() => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link className="page-link" href="#">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8334 6.99999H1.16669M1.16669 6.99999L7.00002 12.8333M1.16669 6.99999L7.00002 1.16666"
                stroke="white"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Previous</p>
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link active" href="#">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            ...
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            8
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            9
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            10
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            <p>Next</p>{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16669 6.99999H12.8334M12.8334 6.99999L7.00002 1.16666M12.8334 6.99999L7.00002 12.8333"
                stroke="white"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
});

export default Navigation;