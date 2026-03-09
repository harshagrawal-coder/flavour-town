import React, { useRef, useEffect } from "react";
import candle from "../../assets/candle.jpg";
import chef from "../../assets/chef.jpg";
import family from "../../assets/family.jpg";
import privateDining from "../../assets/privateDining.jpg";
import sign from "../../assets/sign.jpg";

const Cards_3 = () => {
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);

  /* ---------- AUTO SCROLL ---------- */
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const { scrollLeft, clientWidth, scrollWidth } = slider;

      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  /* ---------- MANUAL ARROWS ---------- */
  const scroll = (direction) => {
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  const tableName = [
    { name: "Signature Dining", image: sign },
    { name: "Family & Group Dining", image: family },
    { name: "Private Dining", image: privateDining },
    { name: "Chef’s Experience", image: chef },
    { name: "Candlelight Dinner", image: candle },
  ];

  return (
    <div style={{ padding: "40px", position: "relative" }}>
      {/* TITLE */}
      <h2
        style={{
          color: "#FF6B35",
          fontFamily: "Playfair Display, serif",
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Reserve Your Dining Experience
      </h2>

      {/* LEFT ARROW */}
      <button onClick={() => scroll("left")} style={arrowStyle("left")}>
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button onClick={() => scroll("right")} style={arrowStyle("right")}>
        ›
      </button>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
        style={{
          display: "flex",
          gap: "30px",
          overflowX: "hidden",
          paddingLeft: "0px",
          boxSizing: "border-box",
        }}
      >
        {tableName.map((table, index) => (
          <div
            key={index}
            style={{
              minWidth: "calc(50% - 15px)",
              height: "280px",
              borderRadius: "18px",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <img
              src={table.image}
              alt={table.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* TEXT */}
            <h3
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "#fff",
                background: "transparent",
                fontFamily: "Playfair Display, serif",
                fontSize: "1.4rem",
                textShadow: "0 4px 10px rgba(0,0,0,0.8)",
              }}
            >
              {table.name}
            </h3>
          </div>
        ))}
      </div>

      {/* VIEW MORE */}
      <button
        style={{
          position: "absolute",
          right: "50px",
          bottom: "",
          // top:"20px",
          background: "#bfa06a",
          border: "1px solid #bfa06a",
          color: "#fff",
          padding: "10px 22px",
          borderRadius: "30px",
          cursor: "pointer",
          // marginTop:"20px"
         

          
            }}
      >
        View More →
      </button>
    </div>
  );
};

/* ---------- ARROW STYLE ---------- */
const arrowStyle = (side) => ({
  position: "absolute",
  [side]: "5px",
  top: "55%",
  transform: "translateY(-50%)",
  background: "#bfa06a",
  border: "none",
  borderRadius: "50%",
  width: "42px",
  height: "42px",
  cursor: "pointer",
  fontSize: "20px",
  zIndex: 2,
});

export default Cards_3;
  