import React, { useEffect, useState } from "react";
import axios from "axios";
import NavComponent from "./Nav";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const FullBlog = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      )
      .then((res) => {
        setTitle(res.data.title);
        setBody(res.data.body);
      })
      .catch((error) => console.log(error));
  }, [props]);
  return (
    <div>
      <NavComponent />
      <div className="card m-4 bg-light">
        <div style={{ margin: "60px" }}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
        <div>
        <Link to='/blogs'>
          <button className='btn btn-success ml-5 mb-5'>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
