
import styles from '../../styles/Home.module.css'
import Manager from "../manager/index"
export default function Thuchanh() {


    return (
        <>
            <main className={styles.main}>
                <div style={{ textAlign: "center" }}>
                    <h1 className={styles.title}>
                        Chọn bài thực hành
                    </h1>
                    <br />
                    <h4> Nền tảng thực hành tiếng anh giao tiếp!</h4>

                    <i >Ứng dụng công nghệ nhận diện giọng nói mang đến trải nghiệm thực hành tiếng anh thực sự thú vị và hiệu quả.</i>

                </div>


            </main>
            <div style={{ height: "800px" }}>
                <Manager />
            </div>
        </>

    )
}