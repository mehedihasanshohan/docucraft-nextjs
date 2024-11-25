import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "docs");


export function getDocuments(){
  console.log(postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);

  const allDocuments = fileNames.map(fileName => {
    const id = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fullPath);

    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents);

    console.log(matterResult);


  })
}