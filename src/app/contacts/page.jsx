import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

function Kotakt() {
  return (
    <div>

      <h3 className={styles.title}>
        Die Contakte Dipartamente Unoso
      </h3>

      <div className={styles.graff}>

      <div className={styles.foto}>
        <Image width={550} height={400} src={"/puter.gif"}/>
        </div>

        <div className={styles.contblog}>
          Wish to contact us? perhaps for a partnership? wish to join? wish to complain about us causing severe amout of trounble or wish to send us funni mail or pizza? feel free to navigate to the bottom of the page and contact us by giving us your valuable information
        </div>


      </div>

      <br></br>

      <div className={styles.link}>
        <Link href={"/contacts/entergmail"}><b>Contact Form</b></Link>
      </div>

    </div>
  )
}

export default Kotakt