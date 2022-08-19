import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const OrderScreen = () => {
  const { state } = useLocation();
  const [order, setOrder] = useState([]);
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://assessment.api.vweb.app/orders`)
      .then((res) => {
        setOrder(res.data);
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    const filteredArr = order.filter((item) => item.user_id == id);
    for (let item of filteredArr) {
      for (let product of products) {
        if (item.product_id == product.product_id) {
          item.productName = product.name;
        }
      }
    }
    setData(filteredArr);
  }, [order]);

  return (
    <>
      <h3>Order Details for {state?.userId?.name}</h3>
      {data[0] ? (
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product </th>
              <th>Quantity ordered</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {data &&
              data.map((item) => {
                return (
                  <tr key={item.order_id}>
                    <td>{item.order_id}</td>
                    <td>{item.productName}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {new Date(parseInt(item.order_date)).toDateString()}
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

export default OrderScreen;
