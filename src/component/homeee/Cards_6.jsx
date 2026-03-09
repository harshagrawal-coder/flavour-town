import React, { useEffect, useState } from "react";

const Cards_6 = () => {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop",
      name: "Aman Sharma",
      review:
        "Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 5,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60",
      name: " Verma",
      review:
        "Nice ambience and polite staff.Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      name: "Rahul Mehta",
      review:
        "Food was good but service was slow.Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop",
      name: "Priya Singh",
      review:
        "Loved the food and presentation!Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop",
      name: "Karan Malhotra",
      review:
        "Very comfortable and clean place.Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 4,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop",
      name: "Aman Sharma",
      review:
        "Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 5,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60",
      name: "siddarth Verma",
      review:
        "Nice ambience and polite staff.Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60",
      name: "Rahul Mehta",
      review:
        "Food was good but service was slow.Food was good but service was slow.Food was good but service was slow.",
      rating: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop",
      name: "Priya Singh",
      review:
        "Loved the food and presentation!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1398&auto=format&fit=crop",
      name: "Karan Malhotra",
      review:
        "Very comfortable and clean place.Amazing service and very tasty food!Amazing service and very tasty food!Amazing service and very tasty food!",
      rating: 4,
    },
  ];

  const visibleCards = 1;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + visibleCards >= data.length ? 0 : prev + visibleCards
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px", color: "#A63A1B", fontSize: "30px" }}>
        What Our Customers Say
      </h2>

      <div
        style={{
          marginLeft: "130px",
          overflow: "hidden",
        }}
      >
        {data.slice(index, index + visibleCards).map((item, i) => (
          <div
            key={i}
            style={{
              width: "1000px",
              padding: "20px",
              borderRadius: "0px",
              display: "flex",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  marginTop: "30px",
                  fontSize: "30px",
                }}
              >
                {item.review}
              </p>

              <h4 style={{ marginTop: "20px", fontSize: "20px" }}>
                {item.name}
              </h4>

              {/* ⭐ Stars */}
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    style={{
                      fontSize: "18px",
                      color: star <= item.rating ? "#f5b301" : "#ccc",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            {/* Circle Image */}
            <div
              style={{
                width: "300px",
                height: "200px",
                borderRadius: "10%",
                overflow: "hidden",
                marginLeft: "",
                backgroundColor: "#eee",
              }}
            >
              <img
                src={item.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards_6;
