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

      <div className={styles.foto}>
      <Image src={"/infotroll.gif"} width={700} height={400}/>
      </div>

      <div className={styles.blogpost} >
        The world is a veri vast and a happy place where people say stuff and do not get mad, living in peace and quiet and harmony, so it has become our duty to undo this order and piss off as many people as possible
      </div>

      <div className={styles.foto}>
        <Image src={"/troll-meme-troll-dance.gif"} width={300} height={400}/>
      </div>
      
    </div>
  )
}

export default page