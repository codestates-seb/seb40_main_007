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
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
  ];
  return (
    <div className="mx-auto overflow-y-scroll mt-5 h-[600px]">
      <div className="grid grid-cols-3 gap-y-4 gap-x-2">
        {posts.map((post) => (
          <Post key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
