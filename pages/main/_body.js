
import styles from '../../styles/Home.module.css'
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
                <br />
                <h4> Nền tảng trò chơi thực hành tiếng anh giao tiếp!</h4>

                <i>Ứng dụng công nghệ nhận diện giọng nói mang đến trải nghiệm thực hành tiếng anh thực sự thú vị và hiệu quả.</i>
                {/* <br />
          Ứng dụng công nghệ hiện đại vào giao tiếp hiệu quả. */}
            </p>

            Tất cả bài học vô đây;

            Tên bài học

            Mô tả:

            Độ khó: Sơ cấp: Trung cấp: Cao cấp:

            {/* <div className={styles.grid}>
                <Link href="/gamesence" >
                    <a className={styles.card}>
                        <h2>Giao tiếp theo ngữ cảnh &rarr;</h2>
                        <p>Thực hành giao tiếp theo ngữ cảnh!</p>
                    </a>
                </Link>


                <a href="#" className={styles.card}>
                    <h2>Boardgame &rarr;</h2>
                    <p>Trò chơi giúp thực hành tiếng anh giao tiếp!</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>Blog học tiếng anh &rarr;</h2>
                    <p>Phương pháp thực hành tiếng anh hiệu quả!</p>
                </a>

                <a href="#" className={styles.card}>
                    <h2>Forum &rarr;</h2>
                    <p>Nơi cùng trao đổi - nhận xét - góp ý kiến và chia sẻ về thực hành.</p>
                </a>

                {/* <Link href="/manager" >
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
                </Link> */}

            {/* </div> */}
        </main>

    )
}