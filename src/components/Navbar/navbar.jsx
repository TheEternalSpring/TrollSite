import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link';

function Navbar() {
  const peijes = [
    {
      id: 1,
      title: "Front Page",
      url: "/"
    },

    {
      id: 2,
      title: "Information",
      url: "/about"
    },

    {
      id: 3,
      title: "Our Goals",
      url: "/blog"
    },

    {
      id: 4,
      title: "Contacts",
      url: "/contacts"
    },

    {
      id: 5,
      title: "Khachapuri",
      url: "/redundant"
    },

    {
      id: 6,
      title: "Works",
      url: "/portfolio"
    },

  ];

  return (
    <div className={styles.container}>
      <div className={styles.pages}>
        {peijes.map((link) => 
        (
          <b>
          <Link href={link.url}>{link.title}</Link>
          </b>
        ))}
      </div>
    </div>
  )
}

export default Navbar