import All_href_link from "../../util/APP_BODY_NAVIGATION/All_href_link"
import Link from 'next/link'
import Show_Menu_Inbody from "../../util/APP_BODY_NAVIGATION/Show_Menu_Inbody"
import { useEffect, useState } from "react"
export default function body() {
    const [Status, SET_Status] = useState(0);

    useEffect(() => {
        try {
            document.querySelector("body").style.overflowX = "hidden";
            document.querySelector("body").style.overflowY = "auto";
        } catch (error) {
            console.log("e")
        }
    }, [Status])

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 md-6 sm-12">
                        <main >
                            <div style={{ textAlign: "center" }}>
                                <h1
                                    className="text-light bg-dark "
                                    style={{ letterSpacing: "4px", padding: "25px" }}
                                >
                                    <i>
                                        ENGLISH  <span style={{ color: "yellow" }}>TOOL</span>
                                    </i>
                                </h1>
                                <br />
                                <h5>Nền tảng công cụ thực hành tiếng anh với </h5>
                                <h3
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        padding: "15px"
                                    }}
                                > Công nghệ Nhận diện giọng nói!</h3>
                                <div style={{ textAlign: "left" }}>

                                    <p> <i>Ứng dụng công nghệ 4.0:<br /> <span style={{ backgroundColor: "black", color: "yellow", padding: "0 3px" }}> Nhận diện giọng nói - Từ điển hình ảnh sinh động - Đọc khi bôi đen từ.</span></i></p>
                                    <p><b><i>Xu hướng học tập với công nghệ cao mọi lúc mợi nơi.</i></b></p>
                                    <p><b><i>Đơn giản, thú vị, hiệu quả và tiết kiệm chi phí.</i></b></p>

                                </div>
                                <i >Ứng dụng công nghệ nhận diện giọng nói mang đến trải nghiệm thực hành tiếng anh thực sự thú vị và hiệu quả.</i>
                            </div>
                        </main>
                    </div>
                    <div className="col-lg-6 md-6 sm-12 p-5">
                        <div className="respondiframe">
                            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/GCrLhtA6Kxk    "></iframe>
                        </div>
                    </div>
                </div>
                <hr id="ReadingPage" />
                {Show_Menu_Inbody(All_href_link["reading_mobile"], "Dùng tiếng anh mỗi ngày: Đọc thông tin hữu ích.")}
                < hr />
                <hr id="VocabularyPage" />
                {Show_Menu_Inbody(All_href_link["vocabulary"], "Học tiếng anh: Từ vựng")}
                < hr id="Trochoi" />
                {Show_Menu_Inbody(All_href_link["game"], "Dùng tiếng anh mỗi ngày: Chơi game")}
                < hr id="CustomPage" />
                {Show_Menu_Inbody(All_href_link["customfile"], "Tự tạo Customfile theo ý muốn")}

                < hr />
                <div className="container text-justify mt-4 p-4">
                    <h1>Công nghệ 4.0 - Trí thông minh nhân tạo!</h1>
                    <br />
                    <i >AI (Artificial Intelligence) hay Trí tuệ nhân tạo là một ngành của khoa học máy tính liên quan đến việc tự động hóa các hành vi thông minh đã không còn quá xa lạ với chúng ta ở thời đại Công nghệ thông tin 4.0.</i>
                    <br /> <br />
                    <p>
                        Ứng dụng AI phổ biến hiện nay đó là Nhận dạng giọng nói.
                        Công nghệ này không còn là một khái niệm mới mẻ,
                        tất cả những ông lớn ngành công nghệ đều đã đang lấn sân vào “cuộc chơi” này.
                        Đó là trợ lý ảo Siri của Apple, Cortana của Microsoft, Alexa của Amazon,
                        đến cả Samsung cũng chập chững cho thai nghén trợ lý Bixby của riêng mình hay không thể không kể đến Google Assistant của Google.
                    </p>
                    <p>Ứng dụng trong thực hành tiếng anh!</p>
                    <p>
                        Về ứng dụng <b> Công nghệ nhận diện giọng nói</b> vào thực hành tiếng anh hiện nay nổi tiếng nhất có thể kể đến là <b>ELSA Speak</b> -
                        Phần mềm ứng dụng công nghệ vào việc cải thiện phát âm.
                        <br />

                        <b><i>Việc sử dụng công nghệ nhận diện giọng nói vào dạy và học tiếng anh có thể kể đến nhờ những ưu điểm như:</i></b>
                    </p>
                    <ul>
                        <li>Chuẩn hóa phát âm.</li>
                        <li>Có thể sử dụng mọi lúc mọi nơi.</li>
                    </ul>

                    <h3
                        style={{ backgroundColor: "black", color: "yellow", padding: "15px" }}
                    >Cung cấp ứng dụng 4.0 dành cho công tác giảng dạy.</h3>
                    <hr />
                    <p>
                        Công nghệ thông tin (CNTT) sẽ làm thay đổi nền giáo dục một cách cơ bản và toàn diện.
                        Nhu cầu ứng dụng công nghệ để nâng cao hiệu quả, hiệu suất công việc là một trong những nhu cầu cấp thiết.
                    </p>
                    <hr />
                    <h5 style={{ backgroundColor: "black", color: "white", padding: "15px" }}> <b>Nền tảng thực hành của Ericpham</b> là để đáp ứng nhu cầu ứng dụng công nghệ mới nhất vào công tác giảng dạy</h5> .
                    <br />
                    <br />

                    <hr />
                    <ul>
                        <li>Đơn giản, dễ sử dụng, không yêu cầu hiểu biết về công nghệ thông tin.</li>
                        <li>Có khả năng tùy biến dễ dàng theo nhu cầu, phương pháp dạy cụ thể của từng giáo viên, trung tâm.</li>
                        <li>Chi phí sử dụng dịch vụ hợp lý.</li>
                        <li>Dễ dàng, hiệu quả, tiết kiệm thời gian và công sức hơn so với công tác giảng dạy truyền thống.</li>
                    </ul>
                    <hr />
                    <b>
                        <i>
                            Chúng tôi luôn nỗ lực tạo ra những ứng dụng đơn giản, dễ sử dụng và giá rẻ để mỗi giáo viên, mỗi trung tâm đều có thể thoải mái
                            ứng dụng công nghệ vào công việc giảng dạy.
                        </i>
                    </b>

                </div>
            </div>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat">
            </div>
        </>

    )
}