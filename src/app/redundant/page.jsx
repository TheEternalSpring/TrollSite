import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

function Fud() {
  return (
    <div className={styles.food}>
      <Image width={800} height={500} src={"/khachapuri.jpg"}/>
    </div>
  )
}

export default Fud