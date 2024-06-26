import React, { MouseEvent } from "react";
import { IPost } from "../types/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: MouseEvent<HTMLDivElement>) => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  return (
    <div className="post" onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>delete</button>
    </div>
  );
};

export default PostItem;
