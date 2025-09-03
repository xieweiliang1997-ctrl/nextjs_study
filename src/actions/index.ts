"use server"

import {db} from "@/db";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function deleteSnippet(id:number){
  await db.snippet.delete({
    where:{id}
  })
  revalidatePath('/')
  redirect('/')
}

export async function editSnippet(id:number,code:string){

  await db.snippet.update({
    where:{id},
    data:{code}
  })
  revalidatePath('/snippets/'+id)
  redirect('/snippets/'+id)
}