import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span> | </span>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <span> | </span>
      <Link href="/blog/posts/first-post">
        <a>Posts</a>
      </Link>
      <span> | </span>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
