import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://assessment.api.vweb.app/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("ERROR", err);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      {products[0] ? (
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Name</th>
              <th>Selling Price</th>
              <th>Items in Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product.product_id}>
                  <td>{product.product_id}</td>
                  <td>{product.name}</td>
                  <td>{product.selling_price}</td>
                  <td>{product.stock}</td>
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

export default HomeScreen;
