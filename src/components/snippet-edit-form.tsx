"use client"
import Editor from "@monaco-editor/react"
import {Snippet} from "@/generated/prisma";
import React from "react";
import {editSnippet} from "@/actions";
import {id} from "effect/Fiber";


interface IProps {
  snippet:Snippet
}

export default function  SnippetEditForm(props:IProps){
  const [code,setCode]=React.useState(props.snippet.code);
  const handleChange = (code:string='')=>{
  setCode(code)
  }
  const editSnippetWithId = editSnippet.bind(null,props.snippet.id,code)
  return (
    <div>
      <Editor onChange={handleChange} defaultValue={props.snippet.code} height='40vh' theme="vs-dark" language="javascript" options={{minimap:{enabled:false}}}/>
      <form action={editSnippetWithId}>
        <button className='p-2 border border-teal-500 rounded'>save</button>
      </form>
    </div>
  )
}