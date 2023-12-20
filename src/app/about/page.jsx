import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

function page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What do we do?</h1>
      <div className={styles.blogpost}>
        we are an elite troll organisation dedicated to trolling all the people all around the world for the sake of being funny and malding people
      </div>
      <Image className={styles.foto} src={"/infotroll.gif"} width={700} height={400}/>
    </div>
  )
}

export default page