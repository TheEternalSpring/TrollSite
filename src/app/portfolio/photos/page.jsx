import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

function fotrie() {
  return (
    <div>

      <div className={styles.smex}>
        <Image width={398} height={398} src={"/lmao.webp"}/>
        <Image width={398} height={398} src={"/teehee.png"}/>
        <Image width={398} height={398} src={"/puter.gif"}/>
      </div>

      <div className={styles.smex}>
        <Image width={398} height={398} src={"/agritroll.png"}/>
        <Image width={398} height={398} src={"/krieg.jpg"}/>
        <Image width={398} height={398} src={"/mousetroll.gif"}/>
      </div>

      <div className={styles.smex}>
        <Image width={398} height={398} src={"/dementia.png"}/>
        <Image width={398} height={398} src={"/trollman.gif"}/>
        <Image width={398} height={398} src={"/troller.png"}/>
      </div>

      <div className={styles.smex}>
        <Image width={398} height={398} src={"/fotoreal.jpg"}/>
        <Image width={398} height={398} src={"/mario.png"}/>
        <Image width={398} height={398} src={"/OHGODHELPFUCK.jpeg"}/>
      </div>

    </div>
  )
}

export default fotrie