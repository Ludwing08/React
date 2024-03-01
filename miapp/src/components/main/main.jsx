import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../form";
rac

export const Main = () => {
  const [products, setProducts] = useState([]);
  const [sum, setSum] = useState(0.0);
  const [product, setProduct] = useState({});

  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [publish, setPublish] = useState(product.publish);
  const [expire, setExpire] = useState(product.expire);
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(response.data.data);
      suma(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const suma = (p) => {
    let sumaTotal = 0;
    p.map((e) => {
      sumaTotal += e.price;
    });
    setSum(sumaTotal);
  };

  function editar(p) {
    setProduct(p);
    setName(p.name);
    setDescription(p.description);
    setPublish(p.publish);
    setPrice(p.price);
    setExpire(p.expire);
    let modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  const update = async () => {
    try {
      const productData = {
        name: name,
        description: description,
        price: parseFloat(price),
        expire: expire,
        publish: publish,
      };

      console.log(productData);

      const response = await axios.put(
        "http://127.0.0.1:8000/api/products/" + product.id,
        productData
      );
      console.log(product.id);
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange1 = (e) => {
    setName(e.target.value);
  };

  const handleChange2 = (e) => {
    setDescription(e.target.value);
  };

  const handleChange3 = (e) => {
    setExpire(e.target.value);
  };

  const handleChange4 = (e) => {
    setPublish(e.target.value);
  };

  const handleChange5 = (e) => {
    setPrice(e.target.value);
  };

  const destroy = (e) => {
    if (alert("Do you want to delete this object")) {
      axios.delete("http://127.0.0.1:8000/api/products/" + e.id);
    }
  };

  return (
    <div>
      <table>
        <tbody>
          {products.map((e) => (
            <tr key={e.id}>
              <td> {e.name} </td>
              <td>
                <button onClick={() => editar(e)}>Editar</button>
                <button onClick={() => destroy(e)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>{sum}</tr>
        </tfoot>
      </table>

      <div>
        <Form />
      </div>

      <div id="modal">
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange1} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleChange2} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={handleChange5} />
        </label>
        <label>
          Publish:
          <input type="text" value={publish} onChange={handleChange4} />
        </label>
        <label>
          Expire:
          <input type="text" value={expire} onChange={handleChange3} />
        </label>
        <button onClick={update}>Update</button>
      </div>
    </div>
  );
};

export default Main;
