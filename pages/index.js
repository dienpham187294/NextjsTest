import Body from "./main/_body"
// import cookies from 'next-cookies'
// import { useEffect, useState } from "react"

function Home() {
  // const [Status, SET_Status] = useState(true)
  // useEffect(() => {
  //   if (Status) {
  //     try {
  //       document.getElementById("Text_Cookies").value = cookies["ericpham"]
  //       document.getElementById("Btn_Cookies").click()
  //     } catch (error) { }
  //     SET_Status(false)
  //   }
  // })
  return (
    <div className="container-fluid">
      <div className="row bg-dark">
        <div className="col-6">   <b>  <i style={{ color: "white", fontSize: "20px", letterSpacing: "-1px" }}>EngPraticeCenter</i></b></div>
        <div className="col-6">        <b>  <i style={{ color: "white", letterSpacing: "2px", float: "right" }}>Faster way to make your skill!</i></b></div>
      </div>
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
