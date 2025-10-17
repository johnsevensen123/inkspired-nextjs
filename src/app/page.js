// import Link from "next/link";


// const page=()=>{
//   const contactLink = "/contact";
//   return(
//     <div className="bg-teal-800 w-full h-screen flex flex-col justify-center items-center text-white">
//       <h1>hello world!</h1>
//       <Link href={contactLink} className="bg-white text-black px-5 py-2 rounded-2xl mt-2">contact me</Link>
    
//  ); 
// }
 
// //   export default page;
//  'use client'
// import Link from "next/link";
// import { useState } from "react"
//     const Page = ()=>{
//  const [count,SetCount]=useState(0)
//  return(
//   <div className="bg-teal-800 w-full h-screen flex flex-col justify-center items-center">
//     <h1 className="text-9xl font-">{count}</h1>
//     <div className="flex gap-5 mt-5">
//       <button  onClick={()=> SetCount(count+1)}className="bg-white text-black items-center">incrementer</button>
//       <button  onClick={()=> SetCounboldt(count-1)}className="bg-white text-black items-center">decrementer</button>
//     </div>
//     </div>
// {isVisible && <Image src={''}}
//    ); 
//    }
//    export  Page;
  //     'use client'
  //     import Image from "next/image";
  //     import Link from "next/link"
  //     import './globals.css' */}
  

      'use client'
      import Image from "next/image";
      import Link from "next/link"
    //  { import './globals.css' */}
   const Page = () => {
     return(
     <main className="bg-white text-gray-900  overflow-x-hidden">
      <section className="flex flex-col md:flex-row h-screen items-center justify-between px-10 md:px-20  bg-gradient-to-b from-emerald-900 to-emerald-700 text-white relative overflow-hidden ">
        <div className="md:w-1/2 z-10">
               <Image
                 src="/images/logowhite[1].png" alt="website logo"
                width={350}
               height= {350}
               className="mb-6 mt-10"
                />
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">welcome to Inkspire</h1>
                <p className="text-lg mb-8 text-gray-100 leading-relaxed">  Unleash your creativity with Inkspire and create your next blog article</p>

            <div className="flex gap-4">
               <Link href="/create" className="bg-white text-emerald-800 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-all ">Start Writing</Link>
               <Link href="/explore" className="border-white text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-white hover:text-emerald-800 transition-all">
               Explore stage
               </Link>
            </div>
         </div>
          <div  className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          <div className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
             <Image
              src="/images/WhatsApp Image 2025-10-10 à 16.11.55_be8b881c.jpg" alt="Inkspire showcase" width={340} height={850} className="object-cover"
             />
          </div>
          </div>
      </section>
    </main>
  
   );
 
  }
      export default Page;

