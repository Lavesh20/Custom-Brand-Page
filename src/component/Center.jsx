import React from "react";

const Center = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
        <button>Shop Now</button>
        <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
            <p>Also Available on</p>
        </div>
        <div className="brand-icons">
           <img src="public\images\amazon.png" alt="Amazon" />
           <img src="public\images\flipkart.png" alt="Flipcart" />
        </div>
      </div>
      <div className="hero-image">
        <img src="public\images\9c643336b7971d71e959bfa21333828c.jpg" alt="Shoes" style={{borderRadius:50,}} />
      </div>
    </main>
  );
};

export default Center;
