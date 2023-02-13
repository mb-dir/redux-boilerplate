import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <section>
      <h2>Posts</h2>
      {(posts || []).map(post => {
        return (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{`${post.content.substring(0, 40)}...`}</p>
            <p className="postCredit">
              <PostAuthor userId={post.userId} />
              <TimeAgo date={post.date} />
            </p>
            <ReactionButtons post={post} />
          </article>
        );
      })}
    </section>
  );
};
export default PostsList;
