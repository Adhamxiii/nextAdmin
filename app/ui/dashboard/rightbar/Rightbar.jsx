import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  const cards = [
    {
      notification: "🔥 Available Now",
      title: "How to use the new version of the admin dashboard?",
      subtitle: "Takes 4 minutes to learn",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugiat corrupti veritatis provident, nisi quam enim vitae. Corporis, rem! Culpa.",
      IconBtn: <MdPlayCircleFilled />,
      button: "Watch",
      withImage: true,
    },
    {
      notification: "🚀 Coming Soon",
      title:
        "New server actions are available, partial pre-rendering is coming up!",
      subtitle: "Boost your productivity",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fugiat corrupti veritatis provident, nisi quam enim vitae. Corporis, rem! Culpa.",

      IconBtn: <MdReadMore />,
      button: "Learn",
      withImage: false,
    },
  ];
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <div className={styles.item} key={index}>
          {card.withImage && (
            <div className={styles.bgContainer}>
              <Image
                src="/astronaut.png"
                alt="alt"
                fill
                className={styles.bg}
              />
            </div>
          )}
          <div className={styles.texts}>
            <span className={styles.notification}>{card.notification}</span>
            <h3 className={styles.title}>{card.title}</h3>
            <span className={styles.subtitle}>{card.subtitle}</span>
            <p className={styles.description}>{card.description}</p>
            <button className={styles.button}>
              {card.IconBtn} {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rightbar;
