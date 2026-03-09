import React from "react";

const Card_2 = () => {
  const aa = [
    "https://i.pinimg.com/1200x/9c/e8/1f/9ce81ff34b0386b595ba97417d81a283.jpg",
    "https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2024-07/Barista.jpg",
    "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-01/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg",
  ];

  return (
    <div
      style={{
        display: "flex",    
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {aa.map((img, id) => (
        <img
          key={id}
          src={img}
          alt="card"
          style={{
            marginTop:"10px",
            width: "200px",
            height: "200px",
            cursor: "pointer",
            borderRadius: "12px",
            transition:
              "transform 0.35s ease, box-shadow 0.35s ease, margin 0.35s ease",
            boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            margin: "10px",
            objectFit: "cover",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform =
              "translateY(-12px) scale(1.05)";
            e.currentTarget.style.margin = "5px";
            e.currentTarget.style.boxShadow =
              "0 20px 40px rgba(255,107,53,0.55)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "translateY(0) scale(1)";
            e.currentTarget.style.margin = "10px";
            e.currentTarget.style.boxShadow =
              "0 6px 15px rgba(0,0,0,0.15)";
          }}
        />
      ))}
    </div>
  );
};

export default Card_2;
