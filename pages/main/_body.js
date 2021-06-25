
import styles from '../../styles/Home.module.css'

export default function body() {


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
                                    <ul>
                                        <li> <b><i>Ứng dụng công nghệ 4.0 - Nhận diện giọng nói - Trí thông minh nhân tạo AI.</i></b></li>
                                        <li><b><i>Xu hướng học tập với công nghệ cao mọi lúc mợi nơi.</i></b></li>
                                        <li><b><i>Đơn giản, thú vị, hiệu quả và tiết kiệm chi phí.</i></b></li>
                                    </ul>
                                </div>
                                <i >Ứng dụng công nghệ nhận diện giọng nói mang đến trải nghiệm thực hành tiếng anh thực sự thú vị và hiệu quả.</i>
                            </div>
                        </main>
                    </div>
                    <div className="col-lg-6 md-6 sm-12 p-5">
                        <div className="respondiframe">
                            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/VHV8ap4cLXw"></iframe>
                        </div>
                    </div>
                </div>
                <hr />
                {/* <div>
                    <h1 className="text-center text-primary">Hỗ trợ dùng thử 3 tháng không mất phí bản quyền</h1>
                    <div className="row">
                        <div className="col-12 hotrotragop">
                            <h3>  Hỗ trợ máy tính bàn trả góp</h3>
                            <h1 className="text-primary">Lãi suất 0% - 3 tháng</h1>
                            <h4> Cam kết thu hồi <i className="text-primary">100% giá máy</i>  nếu không hài lòng về dịch vụ sau 3 tháng dùng thử.</h4>
                        </div>
                        <div className="text-center p-2" style={{ width: "100%" }}>
                            <a href="https://forms.gle/yKX6AvwbRoF8VcA59" target="_blank">
                                <button className="btn btn-outline-primary">Đăng ký ngay</button>
                            </a>

                        </div>
                    </div>

                </div>
                <hr /> */}
                {/* <div>
                    <div className="text-center text-primary">
                        <h2>Bảng giá dịch vụ</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box_featured">
                                <h3>Dùng thử</h3>
                                <p>Miễn Phí<sup></sup><span>/ 90 ngày</span></p>
                                <ul>
                                    <li><i className="fas fa-check"></i> Công cụ thực hành cơ bản (Từ mới, đọc, nghe, lặp lại, bài tập)</li>
                                    <li><i className="fas fa-check"></i> Video hướng dẫn sử dụng các công cụ</li>
                                    <li><i className="fas fa-times-circle"></i>Hỗ trợ tận nơi hàng tháng về sử dụng các công cụ</li>
                                    <li><i className="fas fa-times-circle"></i>Mỗi tháng hỗ trợ làm 10 file bài thực hành nâng cao theo yêu cầu hoặc cung cấp miễn phí 5 bài thực hành.</li>
                                    <li><i className="fas fa-times-circle"></i> Công cụ trò chơi thực hành nâng cao</li>
                                    <li><i className="fas fa-times-circle"></i>Cập nhật các công cụ mới nhất</li>
                                    <li><i className="fas fa-times-circle"></i> Được cung cấp các công cụ thực hành đặc quyền duy nhất hoặc Thiết kế công cụ thực hành độc quyền theo yêu cầu của khách hàng</li>
                                </ul>
                                <a href="https://forms.gle/yKX6AvwbRoF8VcA59" target="_blank">
                                    <button className="btn btn-outline-primary">Đăng ký ngay</button>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box_featured">
                                <h3>Gold</h3>
                                <p>1.200.000 <sup>VNĐ</sup><span> /1 năm</span></p>
                                <ul>
                                    <li><i className="fas fa-check"></i> Công cụ thực hành cơ bản (Từ mới, đọc, nghe, lặp lại, bài tập)</li>
                                    <li><i className="fas fa-check"></i> Video hướng dẫn sử dụng các công cụ</li>
                                    <li><i className="fas fa-times-circle"></i>Hỗ trợ tận nơi hàng tháng về sử dụng các công cụ</li>
                                    <li><i className="fas fa-times-circle"></i>Mỗi tháng hỗ trợ làm 10 file bài thực hành nâng cao theo yêu cầu hoặc cung cấp miễn phí 5 bài thực hành.</li>
                                    <li><i className="fas fa-times-circle"></i> Công cụ trò chơi thực hành nâng cao</li>
                                    <li><i className="fas fa-times-circle"></i>Cập nhật các công cụ mới nhất</li>
                                    <li><i className="fas fa-times-circle"></i> Được cung cấp các công cụ thực hành đặc quyền duy nhất hoặc Thiết kế công cụ thực hành độc quyền theo yêu cầu của khách hàng</li>
                                </ul>
                                <a href="https://forms.gle/yKX6AvwbRoF8VcA59" target="_blank">
                                    <button className="btn btn-outline-primary">Đăng ký ngay</button>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="box_featured">
                                <h3>Primium</h3>
                                <p>3.600.000 <sup>VNĐ</sup><span> /1 năm</span></p>
                                <ul>
                                    <li><i className="fas fa-check"></i> Công cụ thực hành cơ bản (Từ mới, đọc, nghe, lặp lại, bài tập)</li>
                                    <li><i className="fas fa-check"></i> Video hướng dẫn sử dụng các công cụ</li>
                                    <li><i className="fas fa-check"></i>Hỗ trợ tận nơi hàng tháng về sử dụng các công cụ</li>
                                    <li><i className="fas fa-check"></i>Mỗi tháng hỗ trợ làm 20 file bài thực hành nâng cao hoặc cung cấp miễn phí 15 bài thực hành.</li>
                                    <li><i className="fas fa-check"></i> Công cụ trò chơi thực hành nâng cao</li>
                                    <li><i className="fas fa-check"></i>Cập nhật các công cụ mới nhất</li>
                                    <li><i className="fas fa-check"></i> Được cung cấp các công cụ thực hành đặc quyền duy nhất hoặc Thiết kế công cụ thực hành độc quyền theo yêu cầu của khách hàng</li>
                                </ul>
                                <br />
                                <a href="https://forms.gle/yKX6AvwbRoF8VcA59" target="_blank">
                                    <button className="btn btn-outline-primary">Đăng ký ngay</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="text-center ">
                        <h2 className="text-primary">Nâng cấp tên website giá siêu rẻ - ưu đãi cực lớn</h2>

                        <div className="lydosohuuwebsiterieng">
                            <h4>4 lý do tại sao bạn nên sở hữu website riêng ngay hôm nay:</h4>
                            <ul>
                                <li>Là kênh giới thiệu sản phẩm của bạn</li>
                                <li>Làm cho doanh nghiệp của bạn “tin cậy và chuyên nghiệp” hơn</li>
                                <li>Là kênh truyền thông chính thức đến khách hàng</li>
                                <li>Là kênh bán hàng tự động 24/7 của bạn</li>
                            </ul>
                        </div>
                        <div className="text-left">
                            <h1>Chỉ với <b className="text-primary">4tr900 VNĐ</b> bạn đã sở hữu một <b className="text-primary">tên website riêng</b> của bạn.</h1>
                            <br />


                            Hỗ trợ đầy đủ các chức năng:
                            <ul>
                                <li>Hình ảnh quảng cáo và giới thiệu dịch vụ</li>
                                <li>Đăng bài học và các video thực hành</li>
                                <li>Hỗ trợ và cập nhật hằng tuần các ứng dụng công nghệ nhận diện giọng nói mới nhất</li>
                                <li>Quản lí trang thông tin chi tiết và nhanh chóng</li>
                            </ul>
                            <h5 className="text-primary">
                                Ngoài ra bạn sẽ được tặng ngay một năm sử dụng dịch vụ GOLD và 1 năm miễn phí hỗ trợ quản lí website (Đăng bài, edit và đăng tải video).
                            </h5>

                            <div className="text-center p-2" style={{ width: "100%" }}>
                                <a href="https://forms.gle/yKX6AvwbRoF8VcA59" target="_blank">
                                    <button className="btn btn-outline-primary">Đăng ký ngay</button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div>
                    <div className="text-center ">
                        <h2 className="text-primary">Hỗ trợ edit video - Quản lý website</h2>
                    </div>
                    <div>
                        Chúng tôi cung cấp các dịch vụ về edit video và hỗ trợ quản lí website (Đăng bài, edit và đăng tải video) với giá rẻ cho các anh chị sử dụng dịch vụ tại Ericpham.
                    </div>
                </div> */}
                <hr />
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
                        <hr />
                        <h5 style={{ backgroundColor: "black", color: "white", padding: "15px" }}> <b>Nền tảng thực hành của Ericpham</b> là để đáp ứng nhu cầu ứng dụng công nghệ mới nhất vào công tác giảng dạy</h5> .
                        <br />
                        <br />
                    </p>
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

        </>

    )
}