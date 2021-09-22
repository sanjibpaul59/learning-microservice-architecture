import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    console.log(res.data);
    setComments(res.data);
  };
  console.log(comments);
  // eslint-disable-next-line 
  useEffect(() => {
    // eslint-disable-next-line 
    fetchData();
    // eslint-disable-next-line 
  }, []);

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}> {comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentsList;
