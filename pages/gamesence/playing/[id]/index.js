import styles from '../../../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

function Playing({ note }) {


    const [Data_show, Set_Data_show] = useState(null)
    const router = useRouter()

    useEffect(() => {
        try {
            if (note !== null || note !== "underfined") {
                Set_Data_show(note)
            }
        } catch (error) { }
    })
    return (

        <div className="container">
            {Data_show !== null ? Data_show.map((e, index) =>
                <Link href={"/gamesence/playing/" + router.query.id + "/" + e.nameoflession} key={index + "link"} >
                    <a className="gamesence_allcource_card" key={index + "a"}>
                        <h3>Lession {index + 1}: {e.nameoflession} &rarr;</h3>
                        <p>{e.description}!</p>
                    </a>
                </Link>
            ) : "Subject not found!"}
        </div>
    )
}


Playing.getInitialProps = async ({ query: { id } }) => {

    try {
        const res = await fetch(`http://localhost:3000/api/gamesence/${id}`, {
            method: "GET"
        });
        const { data } = await res.json();

        return { note: data[0].all_lession }
    } catch (error) {
        return { note: null }
    }

}
export default Playing