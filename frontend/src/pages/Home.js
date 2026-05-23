import React, { useState } from "react";

function Home() {

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const products = [
    {
      _id: 1,
      name: "Nike Air Max",
      category: "Shoes",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      _id: 2,
      name: "Oversized T-Shirt",
      category: "Fashion",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      _id: 3,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      _id: 4,
      name: "Smart Watch",
      category: "Electronics",
      price: 5999,
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
    },
    {
      _id: 5,
      name: "Gaming Mouse",
      category: "Electronics",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },
    {
      _id: 6,
      name: "Backpack",
      category: "Accessories",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa"
    },
    {
      _id: 7,
      name: "Sneakers",
      category: "Shoes",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    },
    {
      _id: 8,
      name: "Sunglasses",
      category: "Accessories",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + " added to cart ✅");
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div
      style={{
        background: "#f1f5f9",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >

      {/* Navbar */}

      <div
        style={{
          background: "#0f172a",
          color: "white",
          padding: "18px 50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: "0",
          zIndex: "1000"
        }}
      >

        <h1>🛒 ShopEasy</h1>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center"
          }}
        >

          <span style={{ cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>Products</span>
          <span style={{ cursor: "pointer" }}>Categories</span>

          <div
            style={{
              background: "#2563eb",
              padding: "10px 18px",
              borderRadius: "8px",
              fontWeight: "bold"
            }}
          >
            Cart ({cart.length})
          </div>

        </div>

      </div>

      {/* Hero Section */}

      <div
        style={{
          background:
            "linear-gradient(to right,#0f172a,#1e293b)",
          color: "white",
          textAlign: "center",
          padding: "90px 30px"
        }}
      >

        <h1
          style={{
            fontSize: "65px",
            marginBottom: "20px"
          }}
        >
          Big Summer Sale 🔥
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            maxWidth: "700px",
            margin: "auto"
          }}
        >
          Explore premium fashion, electronics &
          accessories at amazing prices.
        </p>

        <button
          style={{
            marginTop: "35px",
            padding: "15px 35px",
            background: "#2563eb",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Shop Now
        </button>

      </div>

      {/* Search Bar */}

      <div
        style={{
          textAlign: "center",
          marginTop: "40px"
        }}
      >

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "60%",
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "18px"
          }}
        />

      </div>

      {/* Categories */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
          flexWrap: "wrap"
        }}
      >

        {["Fashion", "Shoes", "Electronics", "Accessories"].map(
          (cat, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "15px 25px",
                borderRadius: "12px",
                fontWeight: "bold",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.1)",
                cursor: "pointer"
              }}
            >
              {cat}
            </div>
          )
        )}

      </div>

      {/* Product Section */}

      <div
        style={{
          padding: "50px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            marginBottom: "50px"
          }}
        >
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(270px,1fr))",
            gap: "35px"
          }}
        >

          {filteredProducts.map((p) => (

            <div
              key={p._id}
              style={{
                background: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow:
                  "0 6px 16px rgba(0,0,0,0.15)",
                transition: "0.3s"
              }}
            >

              <img
                src={p.image}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "20px"
                }}
              >

                <p
                  style={{
                    color: "#2563eb",
                    fontWeight: "bold"
                  }}
                >
                  {p.category}
                </p>

                <h2>{p.name}</h2>

                <p
                  style={{
                    color: "#16a34a",
                    fontWeight: "bold",
                    fontSize: "22px"
                  }}
                >
                  ₹{p.price}
                </p>

                <button
                  onClick={() => addToCart(p)}
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginTop: "15px",
                    background: "#111827",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold"
                  }}
                >
                  Add To Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Cart Section */}

      <div
        style={{
          margin: "40px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >

        <h2>🛒 Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #ddd"
              }}
            >
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))
        )}

        <h3
          style={{
            marginTop: "20px",
            color: "#2563eb"
          }}
        >
          Total: ₹{totalPrice}
        </h3>

      </div>

      {/* Footer */}

      <div
        style={{
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "30px",
          marginTop: "50px"
        }}
      >

        <h2>🛒 ShopEasy</h2>

        <p style={{ color: "#cbd5e1" }}>
          MERN Stack E-Commerce Project
        </p>

        <p style={{ marginTop: "10px", color: "#94a3b8" }}>
          © 2026 All Rights Reserved
        </p>

      </div>

    </div>
  );
}

export default Home;