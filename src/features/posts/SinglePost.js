import { useSelector } from "react-redux";
import { getSinglePost } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const SinglePost = () => {
  const post = useSelector(state => getSinglePost(state, postId));

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
    </article>
  );
};

export default SinglePost;
