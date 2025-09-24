import React from 'react'
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects } from "@/db/schema";

const page = async ({ params }: { params: { projectId: string } }) => {
    if (!params.projectId) return (<div>Invalid Project ID</div>);

    const projectList = await db.query.projects.findMany({
        where: (eq(projects.id, parseInt(params.projectId))),
        with: {
            feedbacks: true,   // 👈 this includes related feedbacks
        },
    });
    const project = projectList[0];
    if (!project) return (<div>Project not found</div>);
    console.log(project);

    return (
        <div>Project page {params.projectId}</div>
    )
}

export default page
