import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import student from '@/public/student.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.title}>
   <title>Home</title>
      <p> Hi my name is </p>
      <h1>Kevin Loun</h1>
      <div class="wrapper">
        <div class="static-txt">I'm a</div>
          <ul class="dynamic-txts">
            <li><span>Student</span></li>
            <li><span>Learner</span></li>
            <li><span>Developer</span></li>
          </ul>
        </div>
        <div className={styles.image}>
          <Image src={student} alt="Picture of the author" />
        </div>
        <div className={styles.description}>
          <p>I am a passionate Student who's focused on Machine Learning, Statistics, and Programming.
          As I approach my final year of undergraduate studies, I am excited to channel my enthusiasm into real-world applications.</p>
        </div>
    </div>
  )
}
