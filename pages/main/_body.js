
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Manager from "../manager/index"
export default function body() {


    return (
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="#">ESL GAME!</a>
                </h1>

                <p className={styles.description}>

                    <br />
                    <h4> Nền tảng trò chơi thực hành tiếng anh giao tiếp!</h4>

                    <i>Ứng dụng công nghệ nhận diện giọng nói mang đến trải nghiệm thực hành tiếng anh thực sự thú vị và hiệu quả.</i>

                </p>



            </main>
            <div style={{ height: "800px" }}>
                <Manager />
            </div>
        </>

    )
}