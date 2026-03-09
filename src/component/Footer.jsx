import React from "react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#b5302c",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            //   padding: "0px 0px",
            marginTop: "50px",
          }}
        >
          <div style={{ color: "wheat", width: "300px" }}>
            <h1
              style={{
                color: "#fff",
                fontFamily: "aerial ,sans-serif",
                fontSize: "",
              }}
            >
              Flavor Fusion
            </h1>
            <p style={{ marginTop: "20px", fontSize: "20px" }}>
              Experience the perfect blend of taste and tradition. Subscribe to
              our newsletter for updates on new dishes, seasonal specials, and
              exclusive offers from our kitchen.
            </p>
          </div>
          <div style={{ color: "wheat", display: "grid" }}>
            <li style={{ fontSize: "30px", fontWeight: "600" }}>Quick Links</li>
            <li style={{ fontSize: "18px", fontWeight: "400" }}>Home</li>
            <li style={{ fontSize: "18px", fontWeight: "400" }}>Menu</li>
            <li style={{ fontSize: "18px", fontWeight: "400" }}>About us</li>
            <li style={{ fontSize: "18px", fontWeight: "400" }}>
              reservation/order online
            </li>
            {/* <li>Gallery/video</li> */}
          </div>

          <div style={{ color: "wheat" }}>
            <h2 style={{ fontSize: "30px", fontWeight: "600" }}>Contact us</h2>
            <address style={{ marginTop: "30px", fontSize: "20px" }}>
              123 Main Street, Anytown, CA 90210, USA
            </address>
            <pre style={{ fontSize: "20px", marginTop: "20px" }}>
              call us 
              <a
                style={{ color: "wheat", textDecoration: "none" }}
                href="tel:+1234567890"
              >
                  +1234567890
              </a>
            </pre>
          </div>
          <div style={{ color: "wheat" }}>
            <h2 style={{}}>Follow us</h2>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#b5302c",
            padding: "20px 60px",
            
          }}
        >
          <h1
            style={{
              fontSize: "200px",
              fontWeight: "800",
              color: "#f6d6d4",
              margin: "0",
            textAlign:"center"
            //   lineHeight: "",
            }}
          >
            Foodly
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
