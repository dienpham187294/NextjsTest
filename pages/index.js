// import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import styles from '../styles/Home.module.css'
import Body from "./main/_body"


export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Body />
    </div>
  )
}

export async function getStaticProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
