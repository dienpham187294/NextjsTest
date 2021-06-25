import Body from "./main/_body"
function Home() {

  // console.log("note", note)
  return (
    <div className="container-fluid">
      <Body />
    </div>
  )
}

// export async function getServerSideProps(context) {
//   return {
//     props: { note: { "note": 1 } }, // will be passed to the page component as props
//   }
// }

export default Home