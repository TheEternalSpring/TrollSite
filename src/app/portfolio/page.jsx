import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <div>
      <h2 className={styles.maintitle}>Our Works</h2>

      <div className={styles.space}></div>

      <div className={styles.collage}>

        <div className={styles.foto}>
          <Link href={"/"}>
          <h3 className={styles.title}>People</h3>
          <Image className={styles.foto1} src={"/trollman.gif"} width={300} height={500}/>
          </Link>
        </div>

        <div className={styles.foto}>
          <Link href={"/"}>
          <h3 className={styles.title}>Events</h3>
          <Image className={styles.foto1} src={"/gagnet.gif"} width={300} height={500}/>
          </Link>
        </div>

        <div className={styles.foto}>
          <Link href={"/"}>
          <h3 className={styles.title}>Photos</h3>
          <Image className={styles.foto1} width={300} height={500} src={"/makeup.jpg"}/>
          </Link>
        </div>

      </div>

    </div>
  )
}

export default page