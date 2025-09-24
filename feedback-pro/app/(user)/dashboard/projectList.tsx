import React from 'react';
import { projects } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle ,CardFooter, CardDescription} from "@/components/ui/card";
import { InferSelectModel } from "drizzle-orm";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import Link from 'next/link';

type Project = InferSelectModel<typeof projects>;
type Props = {
    projects: Project[];
}

const ProjectsList = (props: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px]">
            {props.projects.map((project) => (
                <Card key={project.id} className="bg-white text-black shadow-md hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  
                    <CardFooter>
                        <Link href={`/projects/${project.id}`} >
                           <Button className='cursor-pointer'>
                            View Project
                        </Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

export default ProjectsList;
