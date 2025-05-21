import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  const API_URL = `https://seeding-northcoders-news-1.onrender.com/api/articles/${article_id}/comments`;

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setComments(response.data.comments);
    });
  }, [article_id]);

  return (
    <div>
      <h2 className="text-sky-800">Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

  export default Comments