
import { Inter } from 'next/font/google'

// import Header from '@/src/layout/header/index'
import Footer from '@/src/layout/footer'
import Homepage from './home'
import Header from '@/src/layout/header'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   

       <Header/>    
       <Homepage/>
       <Footer/>
      
  </>
  )
}
