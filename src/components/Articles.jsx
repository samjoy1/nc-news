import { useState, useEffect } from "react";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState([]);

  const API_URL =
    "https://seeding-northcoders-news-1.onrender.com/api/articles";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setArticles(response.data.articles);
      })
})


  return (
      <ul>
        {articles.map((article) => (
          <li
            key={article.article_id}
          >
            <img
              src={article.article_img_url}
              alt={article.title}
            />
            <h4>{article.title}</h4>
            <p>
              By {article.author} • {article.topic}
            </p>
            <p>
              Comments: {article.comment_count} Votes: {article.votes}
            </p>
          </li>
        ))}
      </ul>
  );
}

export default Articles;
