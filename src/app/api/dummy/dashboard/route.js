import { data } from "@/data/dashboard";

// export interface Data {
//     userName:         string;
//     enrolledCourses:  EnrolledCourse[];
//     suggestedCourses: SuggestedCourse[];
// }

// export interface EnrolledCourse {
//     id:          number;
//     title:       string;
//     description: string;
//     progress:    number;
// }

// export interface SuggestedCourse {
//     id:      number;
//     title:   string;
//     members: number;
// }

export async function GET(req, res) {
  if (req.method !== "GET") {
    return Response.json({ message: "Method not allowed" });
  }
  return Response.json(data);
}
