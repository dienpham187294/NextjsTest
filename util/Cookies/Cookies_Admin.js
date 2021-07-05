
import List_IDs from '../List_IDs/List_IDs';
export default function Cookies_Admin() {
    setTimeout(() => {
        try {
            let text = document.getElementById(List_IDs["GET_Cookies"]).value;
            console.log(text)
            if (text.indexOf("dienpham187294@") === -1) {
                return false
            }
            return true
        } catch (error) {
            return false
        }
    }, 1000)

}