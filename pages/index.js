// import Head from 'next/head'
import { connectToDatabase } from '../util/mongodb'
import styles from '../styles/Home.module.css'
import Body from "./components/main/_body"
import Footer from "./components/main/_footer"
import Header from "./components/main/_header"
export default function Home({ isConnected }) {
  return (
    <div className="container">

      <Header />

      <Body />

      <Footer />
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
