import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
const errorPage = () => {

  const router=useRouter()

  useEffect(()=>{
    setTimeout(() => {
      router.push("/")
    }, 3000);
},[])
  return (
    <div className="gotohome">
      <h1>PAGE NOT FOUND</h1>
      <div >
       {/*<Link href="/">Click Here To Go Homepage</Link>*/}
        <button onClick={()=>{router.push("/")}}>Go to HomePage</button>
       </div>  
    </div>  
  )
}

export default errorPage
