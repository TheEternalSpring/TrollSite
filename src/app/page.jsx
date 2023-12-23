import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to our site</h1>
        <div className={styles.imag}>
        <Image width={500} height={400} src={"/troller.png"} align-items={"center"}/>
        </div>
        <div className={styles.intro1}>We are happi that you have chosen to visit our site out of all the other better sites you could have chosen, we promise we will 100% disappoint you with our content</div>
        <div className={styles.intro2}>Make sure to check out the Navigation bar to experience a full very funny bizzare amazing things we would like to OFFER!</div>
        <div className={styles.intro3}>plz i need to feed my family</div>
        <div className={styles.intro4}>For your information we have placed the Navigation Bar at the bottom, lmao</div>
      </div>
    </main>
  )
}
