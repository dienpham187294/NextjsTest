
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
                    <h4> Nền tảng công cụ thực hành tiếng anh hỗ trợ công tác giảng dạy!</h4>
                    <div style={{ textAlign: "left" }}>
                        <b><i>Giúp việc dạy học:</i></b>
                        <ul>
                            <li>Ứng dụng công nghệ hóa 4.0 - Nhận diện giọng nói một cách đơn giản.</li>
                            <li>Phù hợp với xu hướng học tập và thực hành của giới trẻ.</li>
                            <li>Đơn giản, hiệu quả và tiết kiệm chi phí hơn so với cách dạy học truyền thống.</li>
                        </ul>
                    </div>


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