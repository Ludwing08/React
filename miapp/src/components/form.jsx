import React, { useEffect, useState } from "react";
import axios from "axios";

export const Form = () => {
    const  [name, setName] = useState('')
    const  [description, setDescription] = useState('')
    const  [publish, setPublish] = useState('')
    const  [expire, setExpire] = useState('')
    const  [price, setPrice] = useState(0.0)
    const  [pdf, setPDF] = useState('')

    const save = async () => {
        try {
          const productData = {
            name: name,
            description: description,
            price: parseFloat(price),
            expire: expire,
            publish: publish,
            path_pdf: pdf
          };   

          console.log(productData)       
    
          const response = await axios.post('http://127.0.0.1:8000/api/products', productData);
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

    const handleChange6=(e)=>{
        setPDF(e.target.value)
    };

  return (
    <div>
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
        <label>
          PDF
          <input type="file" name="pdf" onChange={handleChange6} />
        </label>        
        <button onClick={save}>Save</button>        
      </div>
  )
}

export default Form
