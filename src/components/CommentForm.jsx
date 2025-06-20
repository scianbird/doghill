//to make the comments work they will have to 1) be contextually relevant (ie only show the comments related to that post/place) and 2) revalidate the path from the cache once submitted, so that users can see their own comment appear on the page

//I want to make a form so that users can comment on a post
// I want the comments to have a "delete" button
//I want the comments to have a "reply" button

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export function CommentForm({ paramId }) {
  async function handleSubmit(formData) {
    "use server";
    console.log("submit handled, check the database");

    const username = formData.get("username");
    const avatar = formData.get("profile_image");
    const comment = formData.get("comment");

    await db.query(
      `INSERT INTO doghill_comments (username, profile_image, comment, location_name) VALUES ($1, $2, $3, $4)`,
      [username, avatar, comment, paramId]
    );
    console.log("submitted");
    revalidatePath(`/posts/${paramId}`); //i need to make sure that people can see their comments added rather than redirect to another page
  }

  //build the form in return - include some placeholders to give people an idea

  return (
    <form action={handleSubmit}>
      <label htmlFor="username">Character Name:</label>
      <input
        type="text"
        name="username"
        placeholder="write your character name!"
      />
      <label htmlFor="profile_image">Profile image:</label>
      <input type="text" name="comment" placeholder="url please" />
      <label htmlFor="comment">Comment:</label>
      <input
        type="text"
        name="comment"
        placeholder="react in-character to the storybeat!"
      />

      <button type="submit">Post</button>
    </form>
  );
}

//this component can be re-used in all the dynamic pages - the paramid should identify which page the user was viewing when they submitted (and therefore which storybeat they are reacting to)
//i now need to create a component to hold the comments
