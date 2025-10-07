import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import PostForm from "../components/PostForm";
import Layout from "../components/Layout";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (data) => {
    await api.post("/posts", data);
    fetchPosts();
  };

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">My Posts</h2>
          </div>
          <PostForm onSubmit={createPost} />
          <ul className="space-y-2">
            {posts.map((p) => (
              <li
                key={p._id}
                className="border p-2 rounded flex justify-between items-center"
              >
                <div>
                  <strong>{p.title}</strong> - {p.content}
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/posts/${p._id}/edit`}
                    className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deletePost(p._id)}
                    className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
