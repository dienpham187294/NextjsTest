import axios from "axios"
import jsdom from "jsdom"
export default async (req, res) => {
    let arr = ["none"]


    try {
        let ArrHoldRes = []
        await axios.get('https://www.google.com/search?q=h%E1%BB%8Dc+ti%E1%BA%BFng+anh+online&rlz=1C1CHBD_viVN951VN951&sxsrf=ALeKk02DdE-TSfH5pusOle99dBqVV-5uZw%3A1625125666502&ei=InPdYN7_He6J4-EP5I2EgAQ&oq=h%E1%BB%8Dc+ti%E1%BA%BFng+anh+online&gs_lcp=Cgdnd3Mtd2l6EAMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgsILhCxAxCDARCTAjoFCAAQsQM6CAgAELEDEIMBOgsILhCxAxDHARCjAjoICC4QsQMQgwE6BwgjEOoCECc6BggjECcQEzoECCMQJzoCCC46BAgAEEM6CggAELEDEIMBEEM6BAguEEM6BwgAELEDEEM6DgguELEDEIMBEMcBEK8BOggILhDHARCvAToECAAQCjoHCAAQsQMQCkoECEEYAFDn8Z0BWJqIngFg4YmeAWgHcAF4AYABdYgB3hOSAQQyMi42mAEAoAEBqgEHZ3dzLXdperABCsABAQ&sclient=gws-wiz&ved=0ahUKEwjemMTwsMHxAhXuxDgGHeQGAUAQ4dUDCA4&uact=5')
            .then((response) => {
                let data = response.data.split('\\').join("").split('\"').join("").split('\n').join("");
                const dom = new jsdom.JSDOM(data);
                let ARRTemp = dom.window.document.querySelectorAll(".kCrYT")
                ARRTemp.forEach(e => {
                    ArrHoldRes.push(
                        {
                            "html": e.innerHTML.split('\\').join("").split('\"').join("").split('\n').join(""),
                        }
                    )
                })
                arr.push(ArrHoldRes)
            });

        res.status(200).json({ success: true, data: arr[arr.length - 1] })


        // console.log(response.data);
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

