"use client"
import React from 'react'
import styles from "./Tolly.module.css"
import useSound from 'use-sound'
import Link from 'next/link'


function Tolly() {

  let Avdio = new Audio("./sounds/pootis.mp3");
    

  return (
    <div>
        <button className={styles.buttoneer}
        
        onClick={() => Avdio.play()}>

            <b>Dashboard</b>
        
        </button>
    </div>
  )
}

export default Tolly