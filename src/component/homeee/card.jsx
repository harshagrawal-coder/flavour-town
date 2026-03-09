import React, { useState } from "react";

const Card = () => {
  const [hovered, setHovered] = useState(null);

  const items = [
    { text: "starter", fontSize: "50px" },
    { text: "Main course", fontSize: "40px" },
    { text: "Fast food", fontSize: "40px" },
    { text: "Beverages", fontSize: "40px" },
    { text: "Desert", fontSize: "40px" },
  ];

  return (
    <div style={{ marginLeft: "40px" }}>
      <h1 style={{ color: "#FF6B35", fontSize: "60px" }}>Recipes</h1>
      <ul style={{ padding:0, listStyle: "none" }}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                margin: "15px",
                fontSize: item.fontSize,  
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform: hovered === index ? "scale(1.1)" : "scale(1)",
                color: hovered === index ? "#FF6B35" : "#000",
              }}
            >
              {item.text}
            </li>
            <hr
              style={{
                width: "220px",
                transition: "all 0.3s ease",
                backgroundColor: hovered === index ? "#FF6B35" : "#000",
                height: "2px",
                border: "none",
              }}
            />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Card;
