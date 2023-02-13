import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find(user => user.id === userId)?.name || "unknown";
  return <span>by {author}</span>;
};

export default PostAuthor;
