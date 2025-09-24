import React from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function NewProjBtn() {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className ="cursor-pointer"> <Plus/> Create Project </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New project</DialogTitle>
                        <DialogDescription>
                            Create a new project to get started
                        </DialogDescription>
                        <form className='flex flex-col gap-4 py-4'>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Your full name"

                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="url">URL</Label>
                                <Input
                                    id="url"
                                    name="url"
                                    placeholder="http://helloworld.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Write a brief description..."
                                    className="min-h-32"

                                />
                            </div>
                            
                        </form>
                    </DialogHeader>
                    <DialogFooter className="flex flex-col items-end">
                        <Button type="submit" >Create Project</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default NewProjBtn
