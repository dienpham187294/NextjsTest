
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
export default function body() {


    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <a href="#">ESL GAME!</a>
            </h1>

            <p className={styles.description}>
                {/* Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> */}
          Learning - Playing - Practicing!
        </p>

            <div className={styles.grid}>
                <Link href="/gamesence" >
                    <a className={styles.card}>
                        <h2>Game by sence &rarr;</h2>
                        <p>Game!</p>
                    </a>
                </Link>


                <a href="#" className={styles.card}>
                    <h2>Boardgame &rarr;</h2>
                    <p>Boardgame!</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>Blog &rarr;</h2>
                    <p>Share about English!</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>Account &rarr;</h2>
                    <p>Login - Sign up!</p>
                </a>

                <Link href="/manager" >
                    <a className={styles.card}>
                        <h2>Manager &rarr;</h2>
                        <p>Manager Setting.</p>
                    </a>
                </Link>
                <Link href="/admin" >
                    <a className={styles.card}>
                        <h2>Admin &rarr;</h2>
                        <p>Admin Setting.</p>
                    </a>
                </Link>

            </div>
        </main>

    )
}