//this is a dynamic page (shown by the [] around the folder name which means I will have to set up logic to make sure the data rendered matches the expectations of the user when they click one of the post location names (id == id?))
//also i'm doing my best not to look at any of my week workshops or the demos unless I am 100% stuck which means a lot more breaking down step by step than usual..
//import the database
//import the comment form

import { db } from "@/utils/dbConnection";
import { CommentForm } from "@/components/CommentForm";

export default async function postId({ params }) {
  const param = await params;
  console.log(param);
  const paramId = param.postId;
  console.log(paramId, "HELLO");
  const storybeat = await db.query(
    `SELECT * FROM location_blurbs WHERE location_name = '${paramId}';` //this syntax took forever which was so confusing because I consider myself kind of confident in SQL? anyway turns out using a string vs an integer (eg the id number) can really mess you up. I have no idea why I did it like this but I got it working so that's good. For testing I ended up taking the query to the SQL snippet editor in supabase - the amount of feedback the terminal was giving me was so overwhelming for what I knew was a query syntax issue (it was the ' around the paramId)
  );

  const storybeatData = storybeat.rows;
  console.log(storybeatData, "DATA");

  return (
    <>
      {storybeatData.map((lore) => (
        <div key={lore.blurb_id}>
          <h1>{lore.blurb}</h1>
        </div>
      ))}
      <CommentForm paramId={paramId} />
    </>
  );
}
