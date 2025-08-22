import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Fetch function
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ['posts'],
    fetchPosts,
    {
      // Caching options
      cacheTime: 1000 * 60 * 10,           // Keep cache for 10 minutes
      staleTime: 1000 * 60 * 5,            // Data considered fresh for 5 minutes
      refetchOnWindowFocus: false,         // Do not refetch automatically on window focus
      keepPreviousData: true,              // Keep old data while fetching new data
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Refetch Posts
      </button>

      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
