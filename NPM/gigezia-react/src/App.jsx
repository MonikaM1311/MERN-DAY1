/* import { useState } from 'react'; */
/* import React from "react";

function App() {

  const products = [
    {
      id: 1,
      name: "Mobile",
      price: "₹15000",
      desc: "Latest Android smartphone",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsfj00_jxjB0Wt7iY-X2EwVeEFC7eFl-wHQ&s",
      link: "https://www.oppo.com/in/smartphones/"
    },
    {
      id: 2,
      name: "Laptop",
      price: "₹55000",
      desc: "High performance laptop",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAeo-venJIrrE5Y_kMBEu3Wc3-B8CyfsfcA&s",
      link: "https://www.dellstore.com/deals/laptop-deals.html"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "₹7000",
      desc: "Fitness tracking & notifications",
      img: "https://images.samsung.com/is/image/samsung/assets/in/f2507/pcd/watches/PCD_KV_Galaxy-Watch8_1440x640_pc.jpg?imwidth=1366",
      link: "https://www.titan.co.in/"
    },
    {
      id: 4,
      name: "Headphones",
      price: "₹3000",
      desc: "Noise cancellation audio",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmWVJlifjxuIzfBel0KE6MsYYfmSKfSR9oA&s",
      link: "https://shopatsc.com/products/wh-ch520-bz-in"
    },
    {
      id: 5,
      name: "Keyboard",
      price: "₹1200",
      desc: "Wireless soft keys",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7ihOFDQHxU8uS4H11q7YI_QHaKR306RUYw&s",
      link: "https://encrypted-tbn2.gstatic.com/"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product Details</h1>

      {products.map((p) => (
        <div key={p.id}
          style={{
            border: "2px solid black",
            width: "380px",
            margin: "15px auto",
            padding: "15px",
            borderRadius: "10px",
            backgroundColor: "#060505bb",
            textAlign: "left",
            color: "white"
          }}
        >
          <img
            src={p.img}
            alt={p.name}
            style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
          />

          <p><strong>Product Name:</strong> {p.name}</p>
          <p><strong>Price:</strong> {p.price}</p>
          <p><strong>Description:</strong> {p.desc}</p>

          <a href={p.link} target="_blank"
            style={{
              color: "yellow",
              textDecoration: "underline",
              fontWeight: "bold"
            }}>
            View Product 🔍
          </a>
        </div>
      ))}

    </div>
  );
}

export default App; */

/* import { useState } from 'react';

export default function App() {

  const[name,setName]=useState("");
  const[aname,setAname]=useState("");
  const handleName=(e)=>{setName(e.target.value)}
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setAname(name);
  }

  return (
    <form onSubmit={handleSubmit}>

  <input type="text" placeholder="Enter you name" 
  value={name} onChange={handleName} />

  <button type="submit">Submit</button>
  <p>Your name is: {aname}  </p>
    </form>
  )
  }; */

/* import { useState } from 'react';
import { useRef } from 'react';

export default function App() {
  const [name,setName]=useState("");
  const inref=useRef();
  const handleClick=()=>{
    setName(inref.current.value); //console.log(inref.current.value); //displays value in console
  }
  return (
    <>
    <input type="text" placeholder="Enter your name" ref={inref} />
    <button onClick={handleClick}>Submit</button>
    <p>{name}</p>
    </>
  )
  }; */

/* import { useState, useRef } from 'react';

export default function App() {
  
  // State to hold submitted values
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    marks: ""
  });

  // Refs for each input
  const nameRef = useRef();
  const ageRef = useRef();
  const marksRef = useRef();

  const handleSubmit = () => {
    setFormData({
      name: nameRef.current.value,
      age: ageRef.current.value,
      marks: marksRef.current.value
    });
  };

  return (
    <>
      <input type="text" placeholder="Enter your name" ref={nameRef} />
      <input type="number" placeholder="Enter your age" ref={ageRef} />
      <input type="number" placeholder="Enter your marks" ref={marksRef} />
      
      <button onClick={handleSubmit}>Submit</button>

      <p>Name: {formData.name}</p>
      <p>Age: {formData.age}</p>
      <p>Marks: {formData.marks}</p>
    </>
  );
} */


/*   import { useEffect, useState } from 'react';

export default function App() {
  const [type, setType] = useState("photos");
  console.log("Rendering");
  useEffect(() => {
    console.log("Fetching:", type);

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => console.log(json));

  },[type]); // runs ONLY when type changes

  return (
    <>
      <button onClick={() => setType("photos")}>Photo</button>
      <button onClick={() => setType("albums")}>Album</button>
      

      
    </>
  );
} */



/* import React, { useState, useEffect } from 'react'

export default function App() {
  const [type, setType] = useState("photos");
  const [data, setData] = useState([]);

  console.log("Rendering");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json)); // Save data to state
  }, [type]);

  return (
    <> 
      <button onClick={() => setType("photos")}>Photo</button>
      <button onClick={() => setType("albums")}>Album</button>
      
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
} */

/* import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const handleSave = () => {
    localStorage.setItem("username", name);
    console.log("Saved:", name);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </>
  );
} */

/* import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Product from './components/Product';

export default function App() {

  return (
    <BrowserRouter>
      <nav>
      <Link to="/">Home</Link> |{""}
      <Link to="/about">About</Link> |{""}
      <Link to="/contact">Contact</Link> |{""}
      <Link to="/product/10">Go to 10</Link> |{""}
      <Link to="/product/20">Go to 20</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
};  */


