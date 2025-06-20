//I have to import my database connection that I created in utils and then create an async function to define "posts" (in this case, locations) before mapping a list of the locations, making sure to use the post id (blurb id) as the key
//I'm not sure what sorting I can use - I would like to add one that shows the most recently commented on post (location), but failing that I will just add an asc sorter to check the box

import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function LocationPage() {
  const name = (await db.query(`SELECT * FROM location_blurbs`)).rows;
  return (
    <>
      <h1>
        This page is the posts page which should render a list of posts. I will
        be rendering posts as buildings in the town you can speak to NPCs{" "}
      </h1>
      <Link href={`/`}>home</Link>
      <div className="locationBox">
        {name.map((post) => {
          return (
            <div className="locationList" key={post.blurb_id}>
              <p>{post.location_name}</p>
              <Link href={`/posts/${post.location_name}`}>link?</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
