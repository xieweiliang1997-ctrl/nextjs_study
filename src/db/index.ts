import { PrismaClient } from '@/generated/prisma/client'

export const db = new PrismaClient()

// db.snippet.create({
//   data:{
//     title: "React",
//     code:"const React = ()=><div>React</div>",
//   }
// }).then(console.log)