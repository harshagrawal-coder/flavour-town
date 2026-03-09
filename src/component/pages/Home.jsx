import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import Card from "../homeee/card";
import Card_2 from "../homeee/Card_2";
import Cards_3 from "../homeee/Cards_3";
import Cards_4 from "../homeee/Cards_4";
import Card_5 from "../homeee/Card_5";
import Cards_6 from "../homeee/Cards_6";
import vid from "../../assets/cook.mp4";
import hotel from "../../assets/hotel.mp4";

const Home = () => {
  return (
    <Layout>
      <>
      <div style={{
        // margin:"10px"
      }}>
        <div
          style={{
            display: "flex",
            margin: "40px",
            justifyContent: "space-around",
          }}
        >
          <h1 style={{ fontSize: "20px", width: "380px" }}>
            EVERY RECIPE IS THOUGHTFULLY PREPARED TO HIGHLIGHT THE PREPARED TO
            HIGHLIGHT THE NATURAL FLAVORS,HONORING THE RICH CULINARY
          </h1>
          <p
            style={{
              fontSize: "15px",
              width: "200px",
              fontFamily: "ui-monospace",
            }}
          >
            our menu celebrate the authentic flavors and culinary traditions
            that bring people together ,making every meal a memorable experience
          </p>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70vh",
            marginTop: "40px",
            overflow: "hidden",
            // borderRadius: "20px",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              // zIndex: -1,
            }}
          >
            <source src={vid} type="video/mp4" />
          </video>
        </div>

        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gap: "60px",
            marginTop: "80px",
          }}
        >
          <Card />
          <div>
            <img
              src="https://i.pinimg.com/736x/ad/ab/32/adab326f74365f0b38d30d164a05e610.jpg"
              alt=""
              style={{
                margin: "20px",
                width: "460px",
                height: "460px",
                objectFit: "cover",
                overflow: "hidden",
                border: "2px solid white",
                borderRadius: "50px",
                cursor: "pointer",
                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, margin 0.35s ease",
                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-12px) scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0, 0, 0, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.15)";
              }}
            />
          </div>
          <Card_2 />
        </div>
        <Cards_3 />

        <Card_5 />
        <p
          style={{
            width: "800px",
            fontSize: "20px",
            fontWeight: "1000px",
            margin: "80px 0px 10px 40px",
            fontFamily: "Geometric ,Sans-Serif"
            ,color:"#FF6B35"
          }}
        >
          "Experience the art of dining through flavors that tell a story —
          watch how every dish is crafted with passion, freshness, and love for
          food" .
        </p>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70vh",
            // marginTop: "",
            overflow: "hidden",
            // borderRadius: "5px",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source src={hotel} type="video/mp4" />
          </video>
        </div>

        <Cards_4 />
        <Cards_6 />
        </div>
      </>
    </Layout>
  );
};

export default Home;
