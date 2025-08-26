import {db} from "@/db";

interface IProps {
  params:{
    id:string;
  }
}

export default async function Page(props:IProps){
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where:{id}
  })
  return (
    <div>
      hello
    </div>
  )
}