import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h3>Blog Post {id}</h3>
      <p>This is the content of post #{id}.</p>
    </div>
  );
}

export default BlogPost;
