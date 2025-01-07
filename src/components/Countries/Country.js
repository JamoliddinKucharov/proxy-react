import React from "react";
import styles from "./Country.module.css";

const Country = React.memo(() => {
  const countries = [
    {
      name: "IPV4",
      flag: "GP.svg",
      country: "France",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "UM.svg",
      country: "USA",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "NL.svg",
      country: "Netherlands",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "CA.svg",
      country: "Canada",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "PL.svg",
      country: "Poland",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "SE.svg",
      country: "Sweden",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "GP.svg",
      country: "France",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "UM.svg",
      country: "USA",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "NL.svg",
      country: "Netherlands",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "CA.svg",
      country: "Canada",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "PL.svg",
      country: "Poland",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "SE.svg",
      country: "Sweden",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "GP.svg",
      country: "France",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "UM.svg",
      country: "USA",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "NL.svg",
      country: "Netherlands",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "CA.svg",
      country: "Canada",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "PL.svg",
      country: "Poland",
      money: "$1.13",
    },
    {
      name: "IPV4",
      flag: "SE.svg",
      country: "Sweden",
      money: "$1.13",
    },
  ];

  return (
    <div className={`${styles.countries} d-flex`}>
      {countries?.map((item, index) => (
        <div className={styles.country} key={index}>
          <div className={styles.leftCountry}>
            <h4>{item.name}</h4>
            <div className={styles.flag}>
              <img src={`/images/${item.flag}`} alt="" />
              <p>{item.country}</p>
            </div>
          </div>
          <div className={styles.rightCountry}>
            <p>from</p>
            <h4>{item.money}</h4>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Country;
