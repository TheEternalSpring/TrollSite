"use client"

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

function page() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [bot, setBot] = useState("");

  const handleSubmit = () => {
    console.log("Name: ", name)
    console.log("Reason for contact: ", reason)
    console.log("Bot?: ", bot)
  };

  return (
    <div className={styles.jonson}>
      <h2 className={styles.jonson}>Contact Us!</h2>

      <br></br>

      <div className={styles.jonson}>

          <input type={"text"} placeholder={"Thy Name"}
          onChange={(e)=>setName(e.target.value)}/>

          <div/>
          <br/>

          <input type={"text"} placeholder={"Reason for contact"} className={styles.explain}
          onChange={(e)=>setReason(e.target.value)}/>

          <div/>
          <br/>

          <input type={"text"} placeholder={"are you a bot?"} className={styles.batam}
          onChange={(e)=>setBot(e.target.value)}/>

          <div/>
          <br/>

          <button className={styles.bawtan}
          onClick={handleSubmit}> Submit </button>

      </div>
    </div>
  )
}

export default page