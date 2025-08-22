import { Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "React Router Deep Dive" },
  { id: 2, title: "Understanding Nested Routes" },
  { id: 3, title: "Protecting Your Routes" },
];

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
