import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";

export async function CommentBox({ paramId }) {
  const comments = await db.query(
    `SELECT * FROM doghill_comments WHERE location_name = '${paramId}'`
  );
  console.log(comments.rows);
  const commentData = comments.rows;

  return (
    <>
      {commentData.map((commentData) => (
        <div key={commentData.comment_id}>
          <h1>{commentData.username}</h1>
          <h2>{commentData.comment}</h2>
        </div>
      ))}
    </>
  );
}
