import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
const PostExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{`${post.body.substring(0, 40)}...`}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo date={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpt;
