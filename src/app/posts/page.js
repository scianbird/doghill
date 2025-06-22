//I have to import my database connection that I created in utils and then create an async function to define "posts" (in this case, locations) before mapping a list of the locations, making sure to use the post id (blurb id) as the key
//I'm not sure what sorting I can use - I would like to add one that shows the most recently commented on post (location), but failing that I will just add an alphabetical sorter to check the box
//also I know Manny shared with me information to get the param-friendly formatting of location_name to read better for users but I'm sorry .. I'm lazy .. :( so I just made another column that isn't used as a param at all .. SORRY
//also also I could NOT get the images to work via an outside source URL so I did the most hack-y thing I could think of and just assigned them their internal URLs in the table. insane? yes. works? apparently so

import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";
import "@/app/posts/townmap.css";

export default async function LocationPage({ searchParams }) {
  const name = (await db.query(`SELECT * FROM location_blurbs`)).rows;

  //to sort i will just write a function that will order based on the id of the place, as "newest to oldest"
  const query = await searchParams;
  const sort = query?.sort || "asc";

  if (sort === "asc") {
    name.sort((a, b) => a.blurb_id - b.blurb_id);
  } else if (sort === "desc") {
    name.sort((a, b) => b.blurb_id - a.blurb_id);
  }
  //time to make sure the images will display correctly with the location name

  return (
    <>
      <div className="theButtons">
        <Link href="/posts?sort=asc">Walking from the riverbank</Link>
        <Link href="/posts?sort=desc">Walking from the forest</Link>
      </div>
      <div className="locationBox">
        {name.map((post) => {
          return (
            <div className="locationList" key={post.blurb_id}>
              <Image
                className="imageBox"
                src={post.location_img}
                alt="picture"
                width={300}
                height={300} //I tried to add a blur placeholder, but it asked instead for a "blurDataURL" property - i understand this conceptually, but it's been moved to the bottom of my list as I am working on other issues right now and testing even on low-tier mobile the images take a bit but not forever .. so it will have to do . for now
              />
              <Link className="nameLink" href={`/posts/${post.location_name}`}>
                {post.location_name_format}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
