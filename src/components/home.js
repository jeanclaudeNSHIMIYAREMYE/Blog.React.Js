import "../styles/home.css";
import { useState } from "react";

const Home = () => {

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Apprendre Django Rest Framework",
      author: "Jean Claude",
      category: "Backend",
      date: "2025-01-15",
      published: true,
    },
    {
      id: 2,
      title: "Introduction à React JS",
      author: "Claude",
      category: "Frontend",
      date: "2025-01-20",
      published: true,
    },
    {
      id: 3,
      title: "Connexion React avec Django API",
      author: "Claude",
      category: "Fullstack",
      date: "2025-02-01",
      published: false,
    },
  ]);

  // Supprimer un blog
  const handleDelete = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="home">
      <div className="bloglist">

        <h2 className="section-title">Latest Articles</h2>

        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>

            <div className="blog-header">
              <h3 className="blog-title">{blog.title}</h3>
              <span className={`status ${blog.published ? "published" : "draft"}`}>
                {blog.published ? "Publié" : "Brouillon"}
              </span>
            </div>

            <p className="blog-meta">
              Par <strong>{blog.author}</strong> • {new Date(blog.date).toLocaleDateString()}
            </p>

            <p className="blog-category">{blog.category}</p>

            <button 
              className="delete-btn"
              onClick={() => handleDelete(blog.id)}
            >
              Supprimer
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;