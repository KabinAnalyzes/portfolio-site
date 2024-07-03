import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import student from '@/public/student.png'
import LinearWithValueLabel from '@/components/skills';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const scrolledPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollPercentage(scrolledPercentage);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const startColor = [0, 0, 0];  // Black: rgb(0, 0, 0)
  const endColor = [120, 120, 215]; // Custom color: rgb(120, 120, 215)

  // Calculate the current color based on the scroll percentage
  const currentColor = startColor.map((startValue, index) =>
    Math.round(startValue + (endColor[index] - startValue) * (scrollPercentage / 22))
  );

  const textColor = `rgb(${currentColor.join(', ')})`;

  const textStyle = {
    color: textColor,
  };

  return (
    <div className={styles.page_container}>
    <div className={styles.title}>
      <title>Home</title>
      <p> Hi my name is </p>
      <h1>Kevin Loun</h1>
      <div class="wrapper">
        <div 
        class="static-txt">I'm a
        </div>
          <ul class="dynamic-txts">
            <li><span>Statatician</span></li>
            <li><span>Mathematician</span></li>
            <li><span>Life Long Learner</span></li>
          </ul>
        </div>
        <div className={styles.image}>
          <Image src={student} alt="Picture of the author" />
        </div>
        <div className={styles.skills}>
          <h2>Skills</h2>
          <h3>
          Python
            <LinearWithValueLabel value={80}/>
          SQL           
            <LinearWithValueLabel value={60}/>
          R
          <LinearWithValueLabel value={50}/>
          </h3>
        </div>
        <div className={styles.education}>
          <h2>Education</h2>
          <h3>Pomona College</h3>
          <h4>Bachelors of Arts in Mathematics and <br></br>Statistics</h4>
        </div>
    </div>
    </div>
  )
}
