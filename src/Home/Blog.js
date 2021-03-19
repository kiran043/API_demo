import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import NavComponent from "./Nav";
const Blog = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter(
      (row) =>
        row.title.toLowerCase().indexOf(q) > -1 ||
        row.body.toLowerCase().indexOf(q) > -1
    );
  }
  return (
    <div>
      <div>
        <NavComponent />
      </div>
      <div className="text-center mt-5">
        <input
          type="text"
          className="w-50"
          placeholder="Search By Title"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
};

export default Blog;

const Datatable = ({ data }) => {
  const history =useHistory()
  return (
    <div>
      {data.map((header) => (
        <div>
          <ListGroup className="m-4">
            <ListGroup.Item variant="secondary">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  history.push(`${header.id}`);
                }}
              >
                <h5 style={{ color: "black" }}>{header.title}</h5>
                <p style={{ color: "grey" }}>{header.body}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </div>
  );
};
