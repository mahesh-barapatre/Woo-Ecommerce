import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Filter from "../components/Filter";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setRole } from "../store/roleSlice"
import serverUrl from "../config";

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getRole = async () => {
      try {
        const response = await axios.post(
          `${serverUrl}/isAdmin`,
          {},
          {
            withCredentials: true,
          },
        );
        // console.log(response.data);
        dispatch(setRole(response.data));
      } catch (error) {
        console.log(error.message);
      }
    };
    getRole();
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get(`${serverUrl}/product/getAll`);
      // console.log(response.data)
      setProducts(response.data);
    };
    getAllProducts();
  }, []);

  const [category, setCategory] = useState("All Products");
  const [placeholder, setPlaceholder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    switch (category) {
      case "all":
        setPlaceholder("get all products! Hit search");
        break;
      case "price":
        setPlaceholder("Enter ascending or descending...");
        break;
      case "category":
        setPlaceholder("Enter a category...");
        break;
      case "max":
        setPlaceholder("Enter a max price...");
        break;
      case "shop":
        setPlaceholder("Enter a shop name...");
        break;
      case "name":
        setPlaceholder("Enter a product name...");
        break;
      default:
        setPlaceholder("Enter a filter option...");
        break;
    }
  }, [category]);

  const performSearch = async () => {
    switch (category) {
      case "all":
        {
          let response = await axios.get(
            `${serverUrl}/product/getAll`,
          );
          setProducts(response.data);
        }
        break;
      case "price":
        {
          if (searchTerm === "ascending") {
            let response = await axios.get(
              `${serverUrl}/product/getProductByAsc`,
            );
            setProducts(response.data);
          } else {
            let response = await axios.get(
              `${serverUrl}/product/getProductByDsc`,
            );
            setProducts(response.data);
          }
        }
        break;
      case "category":
        {
          let response = await axios.get(
            `${serverUrl}/product/getByCategory/${searchTerm}`,
          );
          setProducts(response.data);
        }
        break;
      case "max":
        {
          const response = await axios.get(
            `${serverUrl}/product/getProduct/${searchTerm}`,
          );
          setProducts(response.data);
          console.log(products);
        }
        break;
      case "shop":
        {
          const response = await axios.get(
            `${serverUrl}/product/getByShop/${searchTerm}`,
          );
          setProducts(response.data);
        }
        break;
      case "name":
        {
          const response = await axios.get(
            `${serverUrl}/product/getByName/${searchTerm}`,
          );
          setProducts(response.data);
        }
        break;
      default:
        alert("Input values correctly...");
        break;
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row w-full h-full">
        <div className="w-full sm:w-2/5 p-10 flex flex-col">
          <Filter />
        </div>
        <div className="flex flex-col w-full">
          {/* <MenuNav/> */}

          <div className="bg-white sticky flex justify-evenly top-28 sm:fixed sm:top-16 z-50 rounded shadow-md w-full sm:w-8/12 m-auto">
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-3/12 py-2 px-3 text-gray-500 bg-purple-100 border border-gray-300 rounded-l-sm mt-1  "
            >
              <option value="all">All Products</option>
              <option value="price">Price</option>
              <option value="category">Category</option>
              <option value="shop">Shop Name</option>
              <option value="name">Product Name</option>
              <option value="max">Max Cost</option>
              {/* Add more categories as needed */}
            </select>

            <input
              type="text"
              id="search"
              name="search"
              list="filter"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={placeholder}
              className="w-8/12 py-2 px-3 border text-gray-500 border-gray-300 mt-1 focus:outline-none focus:ring "
            />

            <div
              type="button"
              onClick={performSearch}
              className="w-1/12 mt-1 bg-purple-500 text-white pt-2 sm:py-2 sm:px-4 rounded-r-sm hover:bg-purple-600 focus:outline-none focus:ring "
            >
              <Icon icon="ic:round-search" width="30" />
            </div>
          </div>

          {{ products } && <Menu products={products} />}
        </div>
      </div>
    </>
  );
}

export default Home;
