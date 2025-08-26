"use client"
import Editor from "@monaco-editor/react"

import * as monaco from 'monaco-editor';
import { loader } from '@monaco-editor/react';
import type {Snippet} from "@/generated/prisma"
loader.config({ monaco });

interface IProps {
  snippet:Snippet
}

export default function  SnippetEditForm(props:IProps){
  return (
    <Editor defaultValue={props.snippet.code} height='40vh' theme="vs-dark" language="javascript" options={{minimap:{enabled:false}}}></Editor>
  )
}