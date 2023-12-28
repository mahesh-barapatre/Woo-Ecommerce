import React from "react";
import Carousel from "./Carousel";

function Specials() {

  const images = [
    'https://plus.unsplash.com/premium_photo-1673984259285-ac2152a63f1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVybHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVybHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1617854818583-09e7f077a156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fHww',
  
  ];

  return (
    <div className="w-1/2 m-auto">
       <Carousel images={images}/>
    </div>
    );
}

export default Specials
