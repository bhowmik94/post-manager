import { useState } from "react";

export default function PostForm({ onSubmit, initialData }) {
  const [post, setPost] = useState(
    initialData || { title: "", content: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!post.title || !post.content) return;
    onSubmit(post);
    setPost({ title: "", content: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mb-4"
    >
      <input
        placeholder="Title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        placeholder="Content"
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
        className="border p-2 rounded"
      />
      <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
        {initialData ? "Update Post" : "Add Post"}
      </button>
    </form>
  );
}
