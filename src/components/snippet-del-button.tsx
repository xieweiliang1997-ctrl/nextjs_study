"use client"

import {deleteSnippet} from "@/actions";
import {startTransition} from "react";

export default function SnippetDelButton({id}:{id:number}) {
  const handleDelete = ()=>{
    startTransition(async ()=>{
     await deleteSnippet(id)
    })
  }
  return <button onClick={handleDelete} className='p-2 border border-teal-500 rounded'>Delete</button>
}