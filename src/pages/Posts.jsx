import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import PostForm from "../components/PostForm";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (data) => {
    setLoading(true);
    try {
      // await api.post("/posts", data);
      fetchPosts();
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/posts/${id}`);
      fetchPosts();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {loading && <Loader />}
      <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/30">
        <h2 className="text-xl font-bold">My Posts</h2>
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
    </Layout>
  );
}
