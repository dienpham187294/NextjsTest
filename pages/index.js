import Body from "./main/_body"
// import cookies from 'next-cookies'
// import { useEffect, useState } from "react"

function Home() {
  return (
    <div>
      <Body />
    </div>
  )
}






// Home.getInitialProps = async (context) => {
//   try {
//     const allCookies = cookies(context);
//     // return { cookies: context.req.cookies }
//     return { cookies: allCookies }
//   } catch (error) {
//     return { cookies: "null" }
//   }
// }
export default Home
