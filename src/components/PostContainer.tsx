import { postAPI } from "../services/PostService";
import { IPost } from "../types/IPost";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <div>
      <button onClick={handleCreate}>add new post</button>
      {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>произашла ошибка</h1>}
      {posts?.map((post) => {
        return (
          <PostItem
            remove={handleRemove}
            update={handleUpdate}
            key={post.id}
            post={post}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;
