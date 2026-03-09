import React from "react";
import precision from "../../assets/precision.jpg";
import balance from "../../assets/balance.jpg";
import service from "../../assets/services.jpg";
import Wholeness from "../../assets/wholnwss.jpg";
// import bghome from "../../assets/bghome.jpg";

const Cards_4 = () => {
  const data = [
    {
      text: "Precision",
      para: "Masterfully prepared to your exact taste",
      image: precision,
    },
    {
      text: "Balance",
      para: "Healthy choices that never sacrifice flavor",
      image: balance,
    },
    {
      text: "Service",
      para: "A seamless experience from start to finish",
      image: service,
    },
    {
      text: "Wholeness",
      para: "Nutrient-rich, minimally processed",
      image: Wholeness,
    },
  ];

  return (
    <>
      <div style={{
        backgroundColor:"",
        margin:"80px"

      }}>
        <h1 style={{textAlign:"center" ,color:"#A63A1B" ,fontFamily:"aerial ,sans-serif"}}>Why We Are the Perfect Place to Dine?</h1>
        <p  style={{textAlign:"center" ,color:"" , marginTop:"30px",fontFamily:"aerial ,sans-serif" ,fontSize:"20px" ,width:"800px", marginLeft:"200px"} }>
          Delicious food, comfortable seating, and warm hospitality make us the
          perfect place to dine. We focus on quality and customer happiness.
        </p>

   <div style={{ display: "flex", gap: "40px", margin: "40px" }}>
  {data.map((item, id) => (
    <div
      key={id}
      style={{
        flex: "1",
        backgroundColor: "#7b1e1e",
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
      }}
    >
    
      <img
        src={item.image}
        alt={item.text}
        style={{
          width: "50px",
          border: "2px solid white",
          borderRadius: "50%",
          marginBottom: "15px",
        }}
      />

      {/* Text with cream background */}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#efe2d8",
          padding: "10px 15px",
          borderRadius: "8px",
          lineHeight: "1.4",
        }}
      >
        <h2 style={{ margin: 0,}}>{item.text}</h2>
        <p style={{ margin: 0, color: "#2b1d0e" }}>{item.para}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </>
  );
};

export default Cards_4;
