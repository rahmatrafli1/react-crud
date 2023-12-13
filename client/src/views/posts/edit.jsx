import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../api";

const PostEdit = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchDetailPost = async () => {
    await Api.get(`/api/posts/${id}`).then((res) => {
      setTitle(res.data.data.title);
      setContent(res.data.data.content);
    });
  };

  useEffect(() => {
    fetchDetailPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const updatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("_method", "PUT");

    await Api.post(`/api/posts/${id}`, formData)
      .then(() => {
        navigate("/posts");
      })
      .catch((err) => {
        setErrors(err.response.data);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow">
            <div className="card-body">
              <form onSubmit={updatePost}>
                <div className="mb-3">
                  <label className="form-label fw-bold" htmlFor="image">
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                  {errors.image && (
                    <div className="alert alert-danger mt-2">
                      {errors.image[0]}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title Post"
                  />
                  {errors.title && (
                    <div className="alert alert-danger mt-2">
                      {errors.title[0]}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold" htmlFor="content">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="5"
                    placeholder="Content Post"
                  ></textarea>
                  {errors.content && (
                    <div className="alert alert-danger mt-2">
                      {errors.content[0]}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-md btn-primary rounded-sm shadow border-0"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
