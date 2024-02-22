import { data } from "@/data/learning-paths";

// export interface Data {
//   header:   Header;
//   sections: Section[];
// }

// export interface Header {
//   id:          number;
//   title:       string;
//   description: string;
//   createdBy:   string;
//   time:        number;
//   progress:    number;
// }

// export interface Section {
//   id:     number;
//   title:  string;
//   time:   number;
//   videos: Video[];
// }

// export interface Video {
//   id:        number;
//   title:     string;
//   teacher:   string;
//   completed: boolean;
//   progress:  number;
// }

export async function GET(req, res) {
  if (req.method !== "GET") {
    return Response.json({ message: "Method not allowed" });
  }
  return Response.json(data);
}
