// import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { connectToDatabase } from '../../../util/mongodb'
import Link from 'next/link'

let flag = true;

export default function Home({ data }) {
    const [data_ReactJSX, SET_data_ReactJSX] = useState(null)
    useEffect(() => {
        if (flag) {
            if (data[data.length - 1] !== "null") {
                SET_data_ReactJSX(data[data.length - 1]);
                flag = false
            } else {

            }
        }
    })

    function Show_AllLession() {
        return (

            <div className="container">
                {data_ReactJSX.map((e, index) =>
                    <Link href={"/gamesence/playing/" + e.subject} key={index + "link"} >
                        <a className="gamesence_allcource_card" key={index + "a"}>
                            <h3>Chủ đề: {e.subject} &rarr;</h3>
                            <p>Tác giả:  {e.author}!</p>
                            <p>{e.description}!</p>
                        </a>
                    </Link>
                )}
            </div>

        )


    }
    return (
        <div className="container">
            <div className="text-center">
                <h1>All courses to practice</h1>
            </div>

            {data_ReactJSX !== null
                ? Show_AllLession()
                : null}
        </div>
    )
}

export async function getStaticProps(context) {
    const { db } = await connectToDatabase()

    const isConnected = await db.collection("gamesencedata").find({}).toArray()
    let data = ["null"];
    data.push(JSON.parse(JSON.stringify(isConnected)))

    return {
        props: { data },
    }
}
