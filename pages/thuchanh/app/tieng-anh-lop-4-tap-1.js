import Dulieu_tieng_anh_lop_4 from "../../../util/filedulieu/Dulieu_tieng_anh_lop_4_1";
import Head from "next/head";
import Show_Demo_Sentence_Basic from "../../../util/App/LEARN_SENTENC_Basic/Show_tieng_anh_lop_1";
export default function Show_tieng_anh_lop_4_tap_1() {
    return (
        <div>
            <Head>
                <title>Học tiếng anh lớp 4 tập 1 theo giáo trình của bộ giáo dục</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Một sản phẩm của Ericpham" />
            </Head>
            <div className="container text-center">
                {Show_Demo_Sentence_Basic(Dulieu_tieng_anh_lop_4, "giao-khoa-lop-2")}
            </div>
        </div>

    )
}

