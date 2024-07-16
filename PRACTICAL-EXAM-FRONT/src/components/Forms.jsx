import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import config from "../../config";

const Forms = () => {
  let name = useRef();
  let price = useRef();

  const [selectcatogories, setselectcatogories] = useState()

  const [catogories, setcatogories] = useState()


  const handleselectcategories = (e) => {
    setselectcatogories(e.target.value);
  };

  let getUser = JSON.parse(localStorage.getItem("userData"));

  let getData = async () => {
    let res = await axios.get("http://localhost:3001/v1/categories/getallcategories", config)
    setcatogories(res.data.result)
    console.log("🚀 ~ getData ~ res:", res.data.result)
  }

  useEffect(() => {
    getData()
  }, [])


  let handleSubmit = async () => {
    let data = {
      name: name.current.value,
      price: price.current.value,
      category: selectcatogories,
      // createdBy: getUser._id,
    };

    let res = await axios.post(
      "http://localhost:3001/v1/product/addproduct",
      data, config
    );
    console.log(res.data);
  };
  return (
    <>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            name
          </label>
          <input
            type="title"
            id="name"
            ref={name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            price
          </label>
          <input
            type="price"
            ref={price}
            placeholder="Enter price"
            id="description"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            select categories
          </label>
          <select className="form-select" aria-label="Default select example" value={selectcatogories} onChange={handleselectcategories} >
            <option value="">Select categories</option>
            {catogories?.map((val, index) => (
              // console.log(val._id)
              <option key={index} value={val?._id}>{val?.name}</option>
            ))}

          </select>
        </div>




        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add product
        </button>
      </form>
    </>
  );
};

export default Forms;
