import Jsonfile_input from "../../../util/App/App_hoctienganhcaptoc/Data_hoctienganhcaptoc"
import HTML_hoctienganhcaptoc from "../../../util/App/App_hoctienganhcaptoc/Html_hoctienganhcaptoc"
import Head from "next/head";
export default function Index_10cauthongdungnhat() {
    return (
        <div>
            <Head>
                <title>Học giao tiếp cực kì cơ bản - dễ học - Dành cho người cần học nhiều</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Một sản phẩm của Ericpham" />
            </Head>
            {HTML_hoctienganhcaptoc(Jsonfile_input)}
        </div>

    )
}

