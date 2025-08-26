import {db} from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";
import {Snippet} from "@/generated/prisma";
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
  return (<SnippetEditForm snippet={snippet as Snippet}></SnippetEditForm>)
}