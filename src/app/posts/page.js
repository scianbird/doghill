//I have to import my database connection that I created in utils and then create an async function to define "posts" (in this case, locations) before mapping a list of the locations, making sure to use the post id (blurb id) as the key
//I'm not sure what sorting I can use - I would like to add one that shows the most recently commented on post (location), but failing that I will just add an alphabetical sorter to check the box
//also I know Manny shared with me information to get the param-friendly formatting of location_name to read better for users but I'm sorry .. I'm lazy .. :( so I just made another column that isn't used as a param at all .. SORRY
//also also I could NOT get the images to work via an outside source URL so I did the most hack-y thing I could think of and just assigned them their internal URLs in the table. insane? yes. works? apparently so

import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Image from "next/image";
import "@/app/posts/townmap.css";
import butcher from "@/../public/images/butcher.png";
import claraDIY from "@/../public/images/claraDIY.png";
import riverside from "@/../public/images/riverside.png";
import townhall from "@/../public/images/townhall.png";

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
      <div className="introPassage">
        {" "}
        It may seem silly, but even a town as small as DOGHILL has 2 ways of
        looking at it. You could{" "}
        <Link className="theButtons" href="/posts?sort=asc">
          look from the riverbank
        </Link>
        . Or you could{" "}
        <Link className="theButtons" href="/posts?sort=desc">
          look from the forest.
        </Link>
        <p>There are a few places to visit in town.</p>
      </div>

      <div className="locationBox">
        {name.map((post) => {
          return (
            <div className="locationList" key={post.blurb_id}>
              {/*  <Image
                className="imageBox"
                src={post.location_img}
                alt="picture"
                width={300}
                height={300} //I tried to add a blur placeholder, but it asked instead for a "blurDataURL" property . ALSO NEVER MIND .. it was working locally with only the file path in the database but once pushed obviously that didn't work .. every time I tried to fix it it broke something else so I left it alone.. below are the images just because I made them and didn't want them to go to waste (￢_￢;)	 me .. defeated my image hosting .. who saw that coming (everyone)
              /> */}
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
/*    <div className="imageDiv">
          {" "}
          <Image
            key={0o1}
            src={townhall}
            alt="A clip-art image of a town hall. There is a clock on top of the hall."
            placeholder="blur"
            className="imageClass"
          />
          <Image
            key={0o2}
            src={claraDIY}
            alt="A clip-art image of a DIY hardware shop. There is a poster on the front wall advertising help for hunters."
            placeholder="blur"
            className="imageClass"
          />{" "}
          <Image
            key={0o3}
            src={butcher}
            alt="A clip-art image of a butcher shop. There is a striped awning above the door."
            s
            placeholder="blur"
            className="imageClass"
          />
          <Image
            key={0o4}
            src={riverside}
            alt="A clip-art image of a riverside. There are bull rushes growing around the water."
            placeholder="blur"
            className="imageClass"
          />
        </div> TO BE HONEST even this was not working ... I was getting this error 
If you want to write it to the DOM, pass a string instead: s="true" or s={value.toString()} and I know it is literally telling me what to do but .. I can't make it work */
