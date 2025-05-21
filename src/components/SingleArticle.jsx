import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./Comments";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://seeding-northcoders-news-1.onrender.com/api/articles/${article_id}`
      )
      .then((response) => {
        setArticle(response.data.article);
      })
  }, [article_id]);

if (!article) return null

  return (
    <div>
      <img
        src={article.article_img_url}
        alt={article.title}
      />
      <h1>{article.title}</h1>
      <p>
        By {article.author} • {article.topic}
      </p>
      <p>{article.body}</p>
      <Comments />
    </div>
  );
}

export default SingleArticle;
