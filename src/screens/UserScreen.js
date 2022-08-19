import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner, Table } from "react-bootstrap";

const UserScreen = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://assessment.api.vweb.app/users")
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Orders</h1>
      {userDetails[0] ? (
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user) => {
              return (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.name}</td>
                  <td>
                    <Link to={`/orders/${user.user_id}`} state={{ user }}>
                      <i
                        className="fa-solid fa-basket-shopping"
                        style={{ color: "white" }}
                      ></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default UserScreen;
