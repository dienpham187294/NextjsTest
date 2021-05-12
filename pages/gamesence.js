import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Gamesence() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <Link href="/#" >
                        <a className={styles.card}>
                            <h2>Learning &rarr;</h2>
                            <p>Manager Setting.</p>
                        </a>
                    </Link>
                    <Link href="sub/gamesence/playing" >
                        <a className={styles.card}>
                            <h2>Playing &rarr;</h2>
                            <p>Admin Setting.</p>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}