import React, { useEffect, useState } from "react";
// import axios from "axios";
import Card from "./Card";
// import serverUrl from "../config";

function Menu({ products }) {
    // const [menuData, setMenuData] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get(`${serverUrl}/api/v1/menu/getAll`);
    //       setMenuData(response.data);
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   fetchData();
    // }, []);

    return (
        <div className="w-full mt-5 pl-12 sm:p-10 h-full flex flex-wrap">
            {products.map((product, index) => {
                return (
                    <Card
                        key={index}
                        id={product._id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        images={product.images}
                    />
                )
            }
            )}
        </div>
    );
}

export default Menu;
