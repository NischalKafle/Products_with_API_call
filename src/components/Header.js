import React from "react";

function Header() {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1 style={{ textAlign: "Center", padding: "10px" }}>OUR SHOP</h1>
      <img
        style={{
          display: "block",
          margin: "auto",
          width: "70%",
          margin: "auto",
          padding: "10px",
        }}
        src="../img/shop.jpg"
        class="img-fluid"
        alt="Responsive image"
      />
    </div>
  );
}

export default Header;
