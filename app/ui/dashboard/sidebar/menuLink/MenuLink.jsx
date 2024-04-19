"use client";

import React from "react";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const path = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${path === item.path && styles.active} ${
        item.disabled && styles.disabled
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
