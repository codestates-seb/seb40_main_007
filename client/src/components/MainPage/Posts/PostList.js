import Post from "./Post";

function PostList() {
  const posts = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  return (
    <div>
      <div className="mx-auto max-w-xl px-2 max-h-[450px] overflow-y-scroll">
        <div className="mt-2 grid grid-cols-3 gap-y-4 gap-x-2">
          {posts.map((post) => (
            <Post key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;
