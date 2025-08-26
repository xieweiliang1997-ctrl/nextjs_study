import {db} from "@/db";
import {redirect} from "next/navigation";

export default function Page(){
  async function createSnippet(formData:FormData){
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const data = await db.snippet.create({data:{title, code}})
    console.log(data)
    redirect('/')
  }
  return (

    
)
}