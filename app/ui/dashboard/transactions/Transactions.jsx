import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

const status = ["Pending", "Done", "Cancelled", "Pending", "Done"];

const Transactions = () => {
  const getStatusStyle = (item) => {
    switch (item) {
      case "Pending":
        return styles.pending;
      case "Done":
        return styles.done;
      case "Cancelled":
        return styles.cancelled;
      default:
        return "";
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {status.map((item, index) => (
            <tr key={index}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  Adham Nasser
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${getStatusStyle(item)}`}>
                  {item}
                </span>
              </td>
              <td>12/24/2053</td>
              <td>$3.200</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
