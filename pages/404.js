import Link from "next/link";
import styles from '@/styles/Home.module.css'

const NotFound = () => {
    return ( 
        <div className={styles.NotFound}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Go back to the <Link href="/"> Homepage </Link> </p>
        </div>

     );
}


export default NotFound;