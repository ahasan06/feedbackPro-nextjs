import React from 'react'
import NewProjBtn from '@/components/NewProjBtn'
import { db } from '@/db'
import { eq } from "drizzle-orm";
import { projects } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import ProjectList from './projectList';
export default async function Page() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }
  console.log(userId)

  const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));
  console.log(userProjects);
  

  return (
    <div>
      <NewProjBtn/>
      <ProjectList projects ={userProjects}/>
    </div>
  )
}


