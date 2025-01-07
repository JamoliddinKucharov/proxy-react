import React, { useState } from "react";
import styles from "./Documents.module.css";

const Documents = React.memo(() => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedSorting, setSelectedSorting] = useState("By name(A-Z)");

  const docs = [
    {
      type: "passport",
      location: "United States",
      amount: 1,
      price: 13.13,
    },
    {
      type: "Credit Card",
      location: "Canada",
      amount: 1,
      price: 5.0,
    },
    {
      type: "passport",
      location: "UK",
      amount: 1,
      price: 15.0,
    },
    {
      type: "Credit Card",
      location: "United States",
      amount: 1,
      price: 11.13,
    },
    {
      type: "Driver License",
      location: "Canada",
      amount: 1,
      price: 12.0,
    },
    {
      type: "Credit Card",
      location: "UK",
      amount: 1,
      price: 21.0,
    },
    {
      type: "passport",
      location: "UK",
      amount: 1,
      price: 15.0,
    },
    {
      type: "Driver License",
      location: "United States",
      amount: 1,
      price: 11.13,
    },
    {
      type: "Driver License",
      location: "Canada",
      amount: 1,
      price: 12.0,
    },
    {
      type: "passport",
      location: "UK",
      amount: 1,
      price: 21.0,
    },
  ];

  const filteredDocs = docs.filter((doc) => {
    return (
      (selectedLocation === "All" || doc.location === selectedLocation) &&
      (selectedType === "All" || doc.type === selectedType)
    );
  });

  const sortedDocs = [...filteredDocs].sort((a, b) => {
    if (selectedSorting === "By name(A-Z)") {
      return a.type.localeCompare(b.type);
    } else if (selectedSorting === "By price(Low-High)") {
      return a.price - b.price;
    } else if (selectedSorting === "By price(High-Low)") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className={styles.documents}>
      <h1>Document’s</h1>

      <div
        className={`mb-3 d-flex justify-content-between document-item ${styles.documentItem}`}
      >
        <div className={styles.sortLeft}>
          {/* Location Section */}
          <div className="location">
            <p className={styles.labelP}>
              <svg
                width="9"
                height="13"
                viewBox="0 0 9 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.49999 0.764709C2.38832 0.764709 0.676453 2.56642 0.676453 4.78893C0.676453 7.01146 3.35594 12.2353 4.49999 12.2353C5.70426 12.2353 8.32351 7.01146 8.32351 4.78893C8.32351 2.56642 6.61168 0.764709 4.49999 0.764709ZM4.49999 7.30221C3.18109 7.30221 2.11195 6.17693 2.11195 4.78893C2.11195 3.40092 3.18109 2.27567 4.49999 2.27567C5.8189 2.27567 6.88806 3.40092 6.88806 4.78895C6.88806 6.17697 5.8189 7.30221 4.49999 7.30221Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
              Location
            </p>
            <select
              className="form-select form-control"
              aria-label="Location"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="All">All</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </div>

          <div className={styles.type}>
            <p className={styles.labelP}>Type</p>
            <div
              className={styles.btnGroup}
              role="group"
              aria-label="Document type"
            >
              <button
                type="button"
                className={`btn btn-outline-light ${
                  selectedType === "All" ? styles.active : ""
                }`}
                onClick={() => setSelectedType("All")}
              >
                All
              </button>
              <button
                type="button"
                className={`btn btn-outline-light ${
                  selectedType === "passport" ? styles.active : ""
                }`}
                onClick={() => setSelectedType("passport")}
              >
                <img src="/images/passport.svg" alt="" /> Passport
              </button>
              <button
                type="button"
                className={`btn btn-outline-light ${
                  selectedType === "Driver License" ? styles.active : ""
                }`}
                onClick={() => setSelectedType("Driver License")}
              >
                <img src="/images/file.svg" alt="" /> Driver License
              </button>
              <button
                type="button"
                className={`btn btn-outline-light ${
                  selectedType === "Credit Card" ? styles.active : ""
                }`}
                onClick={() => setSelectedType("Credit Card")}
              >
                <img src="/images/card.svg" alt="" />
                Credit Card
              </button>
            </div>
          </div>
          {/* Form Section */}
          <div className="sort-form">
            <p className={styles.labelP}>Form</p>
            <div
              className={styles.btnGroup}
              role="group"
              aria-label="Document type"
            >
              <button type="button" className="btn btn-outline-light">
                <svg
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.5V7M1.5 7V12.5M1.5 7H8.88887M8.88887 7L5.72221 3.7M8.88887 7L5.72221 10.3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5 1.5V7M20.5 7V12.5M20.5 7H13.1111M13.1111 7L16.2778 3.7M13.1111 7L16.2778 10.3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={`btn btn-outline-light ${styles.active}`}
              >
                <svg
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.5V7M1.5 7V12.5M1.5 7H8.88887M8.88887 7L5.72221 3.7M8.88887 7L5.72221 10.3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5 1.5V7M20.5 7V12.5M20.5 7H13.1111M13.1111 7L16.2778 3.7M13.1111 7L16.2778 10.3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="sort-right">
          <p className={styles.labelP}>Sorting</p>
          <select
            className="form-select form-control"
            aria-label="Sorting"
            value={selectedSorting}
            onChange={(e) => setSelectedSorting(e.target.value)}
          >
            <option value="By name(A-Z)">By name(A-Z)</option>
            <option value="By price(Low-High)">By price(Low-High)</option>
            <option value="By price(High-Low)">By price(High-Low)</option>
          </select>
        </div>
      </div>

      <div className={styles.tableItem}>
        <table className={`table-dark table-bordered text-center table`}>
          <thead>
            <tr>
              <th>Type</th>
              <th>
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.49999 0.764709C2.38832 0.764709 0.676453 2.56642 0.676453 4.78893C0.676453 7.01146 3.35594 12.2353 4.49999 12.2353C5.70426 12.2353 8.32351 7.01146 8.32351 4.78893C8.32351 2.56642 6.61168 0.764709 4.49999 0.764709ZM4.49999 7.30221C3.18109 7.30221 2.11195 6.17693 2.11195 4.78893C2.11195 3.40092 3.18109 2.27567 4.49999 2.27567C5.8189 2.27567 6.88806 3.40092 6.88806 4.78895C6.88806 6.17697 5.8189 7.30221 4.49999 7.30221Z"
                    fill="white"
                    fillOpacity="0.5"
                  ></path>
                </svg>{" "}
                Location
              </th>
              <th>Amount</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedDocs.map((item, index) => (
              <tr key={index}>
                <td className="col-2">
                  <div className={styles.flexItems}>
                    {item.type === "Driver License" && (
                      <img src="/images/file.svg" alt="" />
                    )}
                    {item.type === "passport" && (
                      <img src="/images/passport.svg" alt="" />
                    )}
                    {item.type === "Credit Card" && (
                      <img src="/images/card.svg" alt="" />
                    )}
                    {item.type}
                  </div>
                </td>
                <td className="col-5">
                  <div className={styles.flexItems}>
                    {item.location === "United States" && (
                      <img src="/images/UM.svg" alt="" />
                    )}
                    {item.location === "Canada" && (
                      <img src="/images/CA.svg" alt="" />
                    )}
                    {item.location === "UK" && (
                      <img
                        src="/images/UK.svg"
                        alt=""
                        style={{ width: "20px" }}
                      />
                    )}
                    {item.location}
                  </div>
                </td>
                <td className="col-2">
                  <div className={`d-flex align-items-center ${styles.amount}`}>
                    <button className="btn btn-sm btn-outline-light">-</button>
                    <span className="mx-2">{item.amount}</span>
                    <button className="btn btn-sm btn-outline-light">+</button>
                  </div>
                </td>
                <td className="col">
                  <div className={styles.flexItems}>${item.price}/mo</div>
                </td>
                <td className={`col ${styles.orderBtn}`}>
                  <button className={`${styles.order} btn btn-sm btn-custom`}>
                    Order now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Documents;
