// import Head from 'next/head'
// import { connectToDatabase } from '../util/mongodb'

// import { useEffect } from "react"
// import { checkCookie } from "../util/functionCookies"
import Body from "./main/_body"
// import { GetServerSideProps } from 'next'

export default function Home({ cookies }) {


  return (
    <div className="container-fluid">
      <Body />
    </div>
  )
}

// export const getServerSideProps = async (context) => {
//   const cookies = context.req.cookies
//   console.log(cookies);
//   return { props: { cookies: cookies } }
// }