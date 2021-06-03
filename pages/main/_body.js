
import styles from '../../styles/Home.module.css'
export default function body() {


    return (
        <>
            <main className={styles.main}>
                <div style={{ textAlign: "center" }}>
                    <h1 className={styles.title}>
                        Welcome to <a href="#">ESL PRACTICE!</a>
                    </h1>
                    <br />
                    <h4> Nền tảng thực hành tiếng anh giao tiếp!</h4>

                    <i >Ứng dụng công nghệ nhận diện giọng nói mang đến trải nghiệm thực hành tiếng anh thực sự thú vị và hiệu quả.</i>

                </div>


            </main>
            <div className="container">
                <div className="respondiframe">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/VHV8ap4cLXw"></iframe>
                </div>
            </div>

        </>

    )
}