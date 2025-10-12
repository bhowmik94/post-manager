import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import PostForm from "../components/PostForm";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await api.get("/posts");
        const post = res.data.find((p) => p._id === id);
        if (!post) navigate("/posts");
        else setPostData(post);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, navigate]);

  const updatePost = async (data) => {
    await api.put(`/posts/${id}`, data);
    navigate("/posts");
  };

  if (!postData) return <Layout>{loading && <Loader />}</Layout>;

  return (
    <Layout>
      {loading && <Loader />}
      <div className="min-h-screen flex items-center justify-center">
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
