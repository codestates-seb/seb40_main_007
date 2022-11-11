function Post() {
  return (
    <div className="group">
      <div className="max-h-40 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        <img
          src="/images/oyster.png"
          alt="alt"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mt-1 flex justify-between">
        <div>
          <h3 className="text-sm font-bold">
            <span aria-hidden="true" className="absolute inset-0" />
            제목
          </h3>
          <p className="mt-1 text-sm text-gray-500">한줄 설명</p>
        </div>
        <p className="text-sm text-gray-700">5분 거리</p>
      </div>
    </div>
  );
}

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
    <div className="mx-auto max-w-xl max-h-screen overflow-scroll px-2">
      <div className="mt-2 grid grid-cols-3 gap-y-4 gap-x-2">
        {posts.map((post) => (
          <Post key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
