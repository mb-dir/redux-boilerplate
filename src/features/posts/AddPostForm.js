import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [ title, setTitle ] = useState("");
  const [ content, setContent ] = useState("");
  const [ userId, setUserId ] = useState("");
  const [ addRequestStatus, setAddRequestStatus ] = useState("idle");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = e => setTitle(e.target.value);
  const onContentChanged = e => setContent(e.target.value);
  const onAuthorChanged = e => setUserId(e.target.value);

  const canSave =
    !!content && !!title && !!userId && addRequestStatus === "idle";

  const onPostSave = e => {
    e.preventDefault();
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        //unwrap returns promise, so we can use try...catch
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onPostSave}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="postAuthor">Author</label>
        <select id="postAuthor" onChange={onAuthorChanged}>
          <option value="" />
          {(users || []).map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button disabled={!canSave}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
