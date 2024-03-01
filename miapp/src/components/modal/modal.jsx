import React, { useEffect, useState } from "react";
import axios from "axios";
import './modal.css'

export const Modal = ({product}) => {
  
    const  [name, setName] = useState(product.name)
    const  [description, setDescription] = useState(product.description)
    const  [publish, setPublish] = useState(product.publish)
    const  [expire, setExpire] = useState(product.expire)
    const  [price, setPrice] = useState(product.price)

    const update = async () => {
        try {
          const productData = {
            name: name,
            description: description,
            price: parseFloat(price),
            expire: expire,
            publish: publish
          };   

          console.log(productData)       
    
          const response = await axios.put('http://127.0.0.1:8000/api/products/'+product.id, productData);
          console.log(response)
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const handleChange1=(e)=>{
        setName(e.target.value)
    };

    const handleChange2=(e)=>{
        setDescription(e.target.value)
    };

    const handleChange3=(e)=>{
        setExpire(e.target.value)
    };

    const handleChange4=(e)=>{
        setPublish(e.target.value)
    };

    const handleChange5=(e)=>{
        setPrice(e.target.value)
    };


  return (
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
  )
}

export default Modal