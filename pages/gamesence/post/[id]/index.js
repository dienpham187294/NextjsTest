import styles from '../../../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

function Post({ note }) {


    const [Data_show, Set_Data_show] = useState(null)
    const [Mesage_Data_show, SET_Mesage_Data_show] = useState("Đang tìm bài giảng!")
    const router = useRouter()

    useEffect(() => {
        console.log(note)
        try {

            if (note === null) {
                SET_Mesage_Data_show("Bài học không tồn tại")
            } else {

                if (note.length > 0) {
                    Set_Data_show(note);
                } else {
                    SET_Mesage_Data_show("Chưa có bài học nào!")
                }
            }

        } catch (error) {
            SET_Mesage_Data_show("Bài học không tồn tại")

        }


    })
    return (
        <div className="container"> {
            Data_show !== null ? Data_show.map((e, index) =>
                <Link href={"/gamesence/post/" + router.query.id + "/" + e.nameoflession}
                    key={index + "link"}>
                    <a className="gamesence_allcource_card"
                        key={index + "a"}>
                        <h3> Lession {index + 1}: {e.nameoflession} & rarr; </h3> <p> {e.description}! </p> </a> </Link>
            ) : Mesage_Data_show
        } </div>
    )
}


Post.getInitialProps = async ({ query: { id } }) => {

    try {
        const res = await fetch(`http://localhost:3000/api/gamesence/${id}`, {
            method: "GET"
        });
        // const res = await fetch(`https://app-testdienpham.herokuapp.com/api/gamesence/${id}`, {
        //     method: "GET"
        // });
        const { data } = await res.json();

        return { note: data[0].all_lession }
    } catch (error) {
        return { note: null }
    }



}
export default Post