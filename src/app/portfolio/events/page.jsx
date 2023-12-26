import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

function evento() {
  return (
    <div>

      <div className={styles.content}>
        <h4>Some funny thing done by our spanish colleagues</h4>
        <Image src={"/espano.jpeg"} width={500} height={500}/>
      </div>

      <div className={styles.content}>
        <h4>a full blown war against normies</h4>
        <Image width={500} height={500} src={"/krieg.jpg"}/>
      </div>

      <div className={styles.content}>
        <h4>let's go troll the public workers hehehe</h4>
        <Image width={500} height={500} src={"/olivetroll.jpg"}/>
      </div>

      <div className={styles.content}>
        <h4>waitwhothefuckputthishereohshit</h4>
        <Image width={500} height={500} src={"/whyisthishere.jpg"}/>
      </div>

    </div>
  )
}

export default evento