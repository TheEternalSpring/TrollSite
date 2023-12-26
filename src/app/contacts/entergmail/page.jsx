import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <div className={styles.jonson}>
      <h2 className={styles.jonson}>Contact Us!</h2>

      <br></br>

      <div className={styles.jonson}>
        <form>
          <input type={"text"} placeholder={"Thy Name"}/>
          <div/>
          <br/>
          <input type={"text"} placeholder={"Reason for contact"}/>
          <div/>
          <br/>
          <input type={"radio"}/>
          i iz not a robot
          <div/>
          <br/>
          <input type={"submit"}/>
        </form>
      </div>
    </div>
  )
}

export default page