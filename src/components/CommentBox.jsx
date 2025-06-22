import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import "./components.css";

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
          <div className="groupUp">
            <div className="fakeIcon"></div>
            <h1 className="usernameH1">{commentData.username}</h1>
          </div>
          <h2 class="commentH2">{commentData.comment}</h2>
        </div>
      ))}
    </>
  );
}
