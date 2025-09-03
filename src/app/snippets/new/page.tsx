import {db} from "@/db";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export default function Page(){

  async function createSnippet(formData:FormData){
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // if (typeof title !== "string"||title.length<=3){
    //   return{
    //     message:`title is too short`,
    //   }
    // }
    //
    // if (typeof code !== "string"||code.length<=3){
    //   return{
    //     message:`code is too short`,
    //   }
    // }
    await db.snippet.create({data:{title, code}})
    revalidatePath('/')
    redirect('/')
  }
  return (
    <form action={createSnippet}>
      <h3 className='font-bold m-3 text-center'>Create a Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className="flex gap-4">
          <label className='w-12' htmlFor="title">Title</label>
          <input name={"title"} className='border w-full border-teal-500 p-2 rounded' type="text" id={'title'}/>
        </div>
        <div className="flex gap-4">
          <label className='w-12' htmlFor="code">code</label>
          <input name={"code"} className='border w-full border-teal-500 p-2 rounded' type="text" id={'code'}/>
        </div>
        <button className='rounded p-2 bg-blue-200' type={"submit"}>Create</button>
      </div>
    </form>
  )
}