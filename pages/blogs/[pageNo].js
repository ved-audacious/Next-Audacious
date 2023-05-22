import { useRouter } from "next/router"

const pageNo = () => {

    const router=useRouter()
    const pageNumber=router.query.pageNo
  return (
    <div>
      <h1>this is my blog no {pageNumber}</h1>
    </div>
  )
}

export default pageNo


//dynamic routing k liy router use kiye hai