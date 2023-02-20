import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Blog header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">New post</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
