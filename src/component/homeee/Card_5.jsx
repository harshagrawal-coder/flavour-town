import React from "react";

const Card_5 = () => {
  return (
    <>
      <h2 style={{textAlign:"center" ,color:"#FF6B35", margin:"50px" ,fontSize:"40px"}}> Our Gallery </h2>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <img
          style={{ width: "300px", height: "520px",  marginLeft:"20px"}}
          src="https://images.unsplash.com/photo-1502998070258-dc1338445ac2?q=80&w=379&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        gap:"20px"
        }}>
        <img style={{width:"300px",height:"250px"}} src="https://plus.unsplash.com/premium_photo-1712678280695-7525b7bf50d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img style={{width:"300px",height:"250px"}} src="https://images.unsplash.com/photo-1657196118354-f25f29fe636d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c291dGglMjBpbmRpYW4lMjBmb29kfGVufDB8fDB8fHww" alt="" />

        <img  style={{width:"300px" ,height:"250px"}} src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fHww" alt="" />
        <img style={{width:"300px" ,height:"250px"}} src="https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VzaGl8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <img
          style={{
            width: "300px",
            height: "520px",
          

          }}
          src="https://images.unsplash.com/photo-1650977399594-504c2aa27b3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </>
  );
};

export default Card_5;
