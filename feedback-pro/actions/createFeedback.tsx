'use server';
import { db } from "@/db";
import { feedbacks } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createFeedback(formData: FormData) {
    // Extract values from formData
  const projectId = Number(formData.get("projectId"));
  const userName = formData.get("userName") as string;
  const userEmail = formData.get("userEmail") as string;
  const message = formData.get("message") as string;
  const rating = Number(formData.get("rating"));

   // Simple validation
  if (!projectId || !userName || !userEmail || !message || !rating) {
    throw new Error("All fields are required");
  }
   // Insert feedback into the database
    const [newFeedback] = await db
    .insert(feedbacks)
    .values({
      projectId,
      userName,
      userEmail,
      message,
      rating,
    }).returning({ insertedId: feedbacks.id });
      redirect(`/projects/${projectId}`);

}