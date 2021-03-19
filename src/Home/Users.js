import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import NavComponent from "./Nav";

function Users() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter(
      (row) =>
        row.name.toLowerCase().indexOf(q) > -1 ||
        row.username.toLowerCase().indexOf(q) > -1
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
          placeholder="Search By Name or Username"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div>
        <Datatable data={search(data)} />
      </div>
    </div>
  );
}

export default Users;

const Datatable = ({ data }) => {
  return (
    <div>
      {data.map((header) => (
        <div>
          <ListGroup className="m-4">
            <ListGroup.Item variant="secondary">
              <div style={{ cursor: "pointer" }}>
                <h5 style={{ color: "black" }}>Name:{header.name}</h5>
                <h6>UserName:{header.username}</h6>
                <h6>Email:{header.email}</h6>
                <h6 >
                  Address:{header.address.street}
                </h6>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </div>
  );
};
