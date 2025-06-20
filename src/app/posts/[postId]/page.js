//this is a dynamic page (shown by the [] around the folder name which means I will have to set up logic to make sure the data rendered matches the expectations of the user when they click one of the post location names (id == id?))
//also i'm doing my best not to look at any of my week workshops or the demos unless I am 100% stuck which means a lot more breaking down step by step than usual..
//import the database

import { db } from "@/utils/dbConnection";

export default async function postId({ params }) {
  const param = await params;
  console.log(param);
  const paramId = param.postId;
  console.log(paramId, "HELLO");
  const storybeat = await db.query(
    `SELECT * FROM location_blurbs WHERE location_name = '${paramId}';`
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
    </>
  );
}
