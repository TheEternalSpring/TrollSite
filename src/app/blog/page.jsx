import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

function page() {
  return (
    <div>

      <h4 className={styles.title}>
        List of goals we wish to fullfill every year:
      </h4>

      <br></br>

      <div className={styles.primarycontainer}>

      <div className={styles.goalist}>
        <ol>
          Tings to do:
          <li>1- Make as many people as mad as possible</li>
          <li>2- Cause worldwide chaos</li>
          <li>3- Be funni</li>
          <li>4- Have as much of fun as possible</li>
          <li>5- Michael pleas add more detail here</li>
          <li>6- APUERAA!!!</li>
        </ol>
      </div>

      <div className={styles.foto}>
        <Image  width={500} height={400} src={"/mousetroll.gif"}/>
      </div>

      </div>

      <div className={styles.text}>
        This is what we wish to do, what we will and what we are proud of
      </div>


    </div>
  )
}

export default page