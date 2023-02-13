import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
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
          </article>
        );
      })}
    </section>
  );
};
export default PostsList;
