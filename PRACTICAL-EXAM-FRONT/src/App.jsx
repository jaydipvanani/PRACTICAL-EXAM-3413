// import { useEffect, useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Forms from "./components/Forms";
// import ProductList from "./components/ProductList";
// import MyProducts from "./components/MyProducts";
// import Categories from "./components/Categories";
// import Getvategories from "./components/Getvategories";
// import axios from "axios";

// function App() {
//   let getRole = JSON.parse(localStorage.getItem("userData"));
//   let role = getRole;
//   if (role === "" || role === null) {
//     return (
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//     );
//   }
//   return (
//     <>
//       <Navbar />
//       <div
//         className="container"
//         style={{
//           maxWidth: "1300px",
//           margin: "0 auto",
//           padding: "30px"
//         }}
//       >
//         <Routes>
//           <Route path="/addproduct" element={<Forms />} />
//           <Route path="/allproduct" element={<ProductList />} />
//           <Route path="/myproduct" element={<MyProducts />} />
//           <Route path="/addcategories" element={<Categories />} />
//           <Route path="/getcategories" element={<Getvategories />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import ProductList from "./components/Productlist";
import MyProducts from "./components/MyProducts";
import Categories from "./components/Categories";
import Getvategories from "./components/Getvategories";
import axios from "axios";
import Cookies from "js-cookie";

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
   // const userData = JSON.parse(localStorage.getItem("userData"));
    const token = Cookies.get("token");
    
    if (token) {
      setRole(token);
    }
   
  }, []);

  if (role === null) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "30px"
        }}
      >
        <Routes>
          <Route path="/addproduct" element={<Forms />} />
          <Route path="/allproduct" element={<ProductList />} />
          <Route path="/" element={<MyProducts />} />
          <Route path="/addcategories" element={<Categories />} />
          <Route path="/getcategories" element={<Getvategories />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;

