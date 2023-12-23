import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.foot}>This is a simple Footer</div>
        <div className={styles.foot}>You have wasted your time, LMAO</div>
        <div className={styles.foot}>
          <Link href={"https://www.youtube.com/watch?v=xsveiPJcxlE"}>
          <Image src={"/4.png"} width={25} height={25}/>
          </Link>
        </div>
    </div>
  )
}

export default Footer