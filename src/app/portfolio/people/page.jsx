import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

function pevople() {
  return (
    <div>
      <h1 className={styles.maintitle}>Important members of the Trollsite</h1>

      <br></br>

      <div className={styles.infos}>
        <h4 className={styles.maintitle}>Mussus Man The Troll</h4>

        <div className={styles.styliser}>
        <div className={styles.desc}>Current CEO and head of Trollsite</div>
        <Image width={450} height={450} src={"/dementia.png"}/>
        </div>

      </div>

      <div className={styles.infos}>
        <h4 className={styles.maintitle}>Jon Trull Hua</h4>

        <div className={styles.styliser}>
        <div className={styles.desc}>Head of Trollsite's asian branch and lead marketplace director</div>
        <Image width={450} height={450} src={"/jackietroll.jpg"}/>
        </div>

      </div>

      <div className={styles.infos}>
        <h4 className={styles.maintitle}>John Troll the 4th</h4>

        <div className={styles.styliser}>
        <div className={styles.desc}>the OG founder of Trollsite, de beast</div>
        <Image width={450} height={450} src={"/jontroll.jpg"}/>
        </div>

      </div>


      <div className={styles.infos}>
        <h4 className={styles.maintitle}>Maduiros Trolleibus</h4>

        <div className={styles.styliser}>
        <div className={styles.desc}>famous internet celebrity who has helped our cause greatly</div>
        <Image width={450} height={450} src={"/trollymaguire.jpg"}/>
        </div>

      </div>

      <div className={styles.infos}>
        <h4 className={styles.maintitle}>Petah</h4>

        <div className={styles.styliser}>
        <div className={styles.desc}>hello</div>
        <Image width={450} height={450} src={"/petah.webp"}/>
        </div>

      </div>

    </div>
  )
}

export default pevople