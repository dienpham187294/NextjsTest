import { useRouter } from 'next/router'
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';

function Lession({ note }) {

    const [Data_show, Set_Data_show] = useState(null)
    const router = useRouter()

    useEffect(() => {
        try {
            if (note.lession !== null || note.lession !== "underfined") {

                let res = "<div>";
                res += note.lession;
                res += "</div>"

                Set_Data_show(res)
            }
        } catch (error) { }
    })
    return (
        <>
            <div className="container">
                {Data_show !== null ? parse(Data_show) : "Lession is not found!"}
                To Practice: <button onClick={() => {
                    router.push(`/gamesence/play/${router.query.id}/${router.query.lession}`)
                }}>Practice</button>

                To Back: <button onClick={() => {
                    router.push(`/gamesence/post/${router.query.id}`)
                }}>Practice</button>
            </div>

        </>

    )
}
Lession.getInitialProps = async ({ query: { id, lession } }) => {

    try {
        // const res = await fetch(`http://localhost:3000/api/gamesence/${id}`, {
        //     method: "GET"
        // });
        const res = await fetch(`https://app-testdienpham.herokuapp.com/api/gamesence/${id}`, {
            method: "GET"
        });
        const { data } = await res.json();
        let obj_lession;
        data[0].all_lession.forEach(e => {
            if (e.nameoflession === lession) {
                obj_lession = e
            }
        });
        return { note: obj_lession }
    } catch (error) {
        return { note: null }
    }


}
export default Lession