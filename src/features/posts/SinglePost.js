import { useSelector } from "react-redux";
import { getSinglePost } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const { postId } = useParams();
  const post = useSelector(state => getSinglePost(state, +postId));
  const navigate = useNavigate();

  console.log(post);

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo date={post.date} />
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </article>
  );
};

export default SinglePost;
