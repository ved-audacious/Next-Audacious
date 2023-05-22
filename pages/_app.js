import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return  <>  
               <Head>
                 <title>Audacious Techiegent</title>
                 <link rel="shortcut icon" href="/favicon.ico" />
               </Head> 
               <Component {...pageProps} /> 
           </>
}
