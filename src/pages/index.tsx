import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className = "bg-[rgb(241,208,176)] text-black h-screen snap-mandatory overflow-scroll z-0"> {/* z-0 means base layer */} 

      <Head>
        <title> Params Portfolio</title>
      </Head>
      
      {/* <Header />  */}
      <Navbar/>
      
      {/* Hero */}
      <section id= "Hero" className='snap-center'>

        <Hero/>
        

      </section>



      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      


    </div>
  )
}


