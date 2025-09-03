// "use client"
// import {useEffect, useState} from "react";
// import "@/db"

// export const revalidate = 0;
// export const dynamic = "force-dynamic"
// export const revalidate = 5;



import Link from "next/link";
import {db} from "@/db";

export default async function Page(){
  const snippets = await db.snippet.findMany()
  return (
    <div>
      <div className='flex items-center justify-between mt-5'>
        <h1 className='font-bold text-lg'>Snippets</h1>
        <Link className='rounded p-2 border border-teal-500' href={'/snippets/new'}>new </Link>
      </div>
      <div className='flex flex-col gap-4 mt-5'>
        {
          snippets.map((snippet)=>(
            <Link href={`/snippets/${snippet.id}`} className='rounded p-2 flex items-center border border-teal-500 justify-between'>
              <span>{snippet.title}</span>
              <span>View</span>
            </Link>
          ))
        }


      </div>
    </div>
  )
}