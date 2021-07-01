import Body from "./main/_body"


function Home({ cookies }) {

  console.log(cookies)
  return (
    <div className="container-fluid">
      <Body />
    </div>
  )
}

Home.getInitialProps = async (context) => {
  try {
    return { cookies: context.req.cookies }
  } catch (error) {
    return { cookies: null }
  }
}
export default Home
