
import Link from "next/link";
import {db} from "@/db";
import {deleteSnippet} from "@/actions";

interface IProps {
  params:{
    id:string;
  }
}

export default async function Page(props:IProps){
  const id = props.params.id;
  const snippet = await db.snippet.findFirst({
    where:{id:parseInt(id)}
  })
  if (!snippet){
    return <div>Not Found...</div>
  }

  const deleteSnippetWithId = deleteSnippet.bind(null,+id)
  return (
    <div>
      <div className='flex items-center justify-between mt-10'>
        <h1 className='font-bold text-lg'>{snippet.title}</h1>
        <div className='flex gap-4'>
          <Link className='p-2 border border-teal-500 rounded' href={`/snippets/${id}/edit`}>Edit</Link>
          {/*<SnippetDelButton id={parseInt(id)}></SnippetDelButton>*/}
          <form action={deleteSnippetWithId}>
            <button className='p-2 border border-teal-500 rounded'>Delete</button>
          </form>
        </div>
      </div>
      <pre className="mt-5 p-3 border border-teal-500 rounded bg-gray-200">
        <code>
          {snippet.code}
        </code>
      </pre>
    </div>
  )
}

export async function generateStaticParams(){
  const snipptes = await db.snippet.findMany();
  return snipptes.map((snippet)=>(
    {id:snippet.id.toString()}
  ))
}