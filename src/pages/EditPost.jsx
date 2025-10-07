import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import PostForm from "../components/PostForm";
import Layout from "../components/Layout";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await api.get("/posts");
      const post = res.data.find((p) => p._id === id);
      if (!post) navigate("/posts");
      else setPostData(post);
    };
    fetchPost();
  }, [id, navigate]);

  const updatePost = async (data) => {
    await api.put(`/posts/${id}`, data);
    navigate("/posts");
  };

  if (!postData) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4">Edit Post</h2>
          <PostForm onSubmit={updatePost} initialData={postData} />
          <button
            onClick={() => navigate("/posts")}
            className="mt-2 text-blue-500 hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </Layout>
  );
}
