"use client";
import React, { useState } from "react";
import { Card, Button, Col, Row, Nav } from "react-bootstrap";
import "./ProductList.css";

// Define your products array with categories
const products = [
  {
    id: 1,
    title: "Dark Brown Double Pleated Korean Pants",
    price: 1799,
    originalPrice: 2299,
    discount: "22% OFF",
    rating: 4.0,
    image:
      "https://freakins.com/cdn/shop/files/28junepart2_11003-Edit_0668f012-c2cb-4e89-adf0-3eff239d9d5e.jpg?v=1720442987&width=800",
    category: "Korean Pants",
  },
  {
    id: 2,
    title: "Black Pleated Straight Fit Korean Pant",
    price: 1799,
    originalPrice: 2299,
    discount: "22% OFF",
    rating: 4.82,
    image:
      "https://freakins.com/cdn/shop/files/PALI9Feb-1728-Edit.jpg?v=1708947872&width=800",
    category: "Korean Pants",
  },
  {
    id: 3,
    title: "Grey Pleated Straight Fit Curve Korean Pant",
    price: 1399,
    originalPrice: 2299,
    discount: "39% OFF",
    rating: 4.71,
    image:
      "https://freakins.com/cdn/shop/files/28june_9652-Edit_356b1273-a3db-4bdd-912d-96bf5c210280.jpg?v=1720438924&width=800",
    category: "Korean Pants",
  },
  {
    id: 4,
    title: "Powder Blue Elasticated Flared Korean Pants",
    price: 999,
    originalPrice: 1499,
    discount: "33% OFF",
    rating: 4.5,
    image:
      "https://freakins.com/cdn/shop/files/PALI9Feb-3196-Edit.jpg?v=1708670543&width=800",
    category: "Korean Pants",
  },
  {
    id: 5,
    title: "jean corset top curve",
    price: 1599,
    originalPrice: 2099,
    discount: "24% OFF",
    rating: 4.7,
    image:
      "https://freakins.com/cdn/shop/files/09JUNEPART2_8062-Edit.jpg?v=1718194545&width=800",
    category: "Jeans",
  },
  {
    id: 6,
    title: "curve gothic chained black denim top",
    price: 1399,
    originalPrice: 1899,
    discount: "23% OFF",
    rating: 4.9,
    image:
      "https://freakins.com/cdn/shop/files/09JUNEPART2_7789-Edit.jpg?v=1718348453&width=800",
    category: "Jeans",
  },
  {
    id: 7,
    title: "curve classic black leather jacket",
    price: 1999,
    originalPrice: 2599,
    discount: "20% OFF",
    rating: 4.6,
    image:
      "https://freakins.com/cdn/shop/files/09-JUNE-PART-2_7826.jpg?v=1718295073&width=800",
    category: "Jeans",
  },
  {
    id: 8,
    title: "denim sculpt curve corset top",
    price: 1899,
    originalPrice: 2499,
    discount: "24% OFF",
    rating: 4.8,
    image:
      "https://freakins.com/cdn/shop/files/11aug_30804-Edit.jpg?v=1724166235&width=800",
    category: "Jeans",
  },
  {
    id: 9,
    title: "side pocket cargo shorts",
    price: 1799,
    originalPrice: 2299,
    discount: "22% OFF",
    rating: 4.82,
    image:
      "https://freakins.com/cdn/shop/files/Curve00324-Edit.jpg?v=1686583610&width=800",
    category: "shorts",
  },
  {
    id: 10,
    title: "Wide Leg Blue Bestselling Pants",
    price: 1899,
    originalPrice: 2499,
    discount: "24% OFF",
    rating: 4.8,
    image:
      "https://freakins.com/cdn/shop/files/09-june-2024_7249.jpg?v=1718350367&width=800",
    category: "shorts",
  },
  {
    id: 11,
    title: "Straight Fit Denim Jeans",
    price: 1599,
    originalPrice: 2099,
    discount: "24% OFF",
    rating: 4.7,
    image:
      "https://freakins.com/cdn/shop/files/09june2024_6435-Edit_d50dff53-a5a9-47ee-b796-6503ae66e0e6.jpg?v=1719336495&width=800",
    category: "shorts",
  },
  {
    id: 12,
    title: "Skinny Fit Denim Jeans",
    price: 1499,
    originalPrice: 1999,
    discount: "25% OFF",
    rating: 4.9,
    image:
      "https://freakins.com/cdn/shop/files/09-JUNE-PART-2_8292.jpg?v=1718192061&width=800",
    category: "shorts",
  },
];

// Example hover images
const hoverImages = {
  1: "https://freakins.com/cdn/shop/files/28junepart2_10982-Edit_d9a82097-6b94-4fdf-a8b0-c6b60e317ddf.jpg?v=1720442987&width=800",
  2: "https://freakins.com/cdn/shop/files/PALI9Feb-1776-2.jpg?v=1708947872&width=800",
  3: "https://freakins.com/cdn/shop/files/28june_9629-Edit_3df80a79-01d4-4abd-bcfd-0843dea4c8aa.jpg?v=1720438855&width=800",
  4: "https://freakins.com/cdn/shop/files/PALI9Feb-3222-Edit.jpg?v=1708670543&width=800",
  // Add hover images for the new products
  5: "https://freakins.com/cdn/shop/files/09JUNEPART2_8073-Edit.jpg?v=1718194545&width=800",
  6: "https://freakins.com/cdn/shop/files/09JUNEPART2_7756-Edit.jpg?v=1718348453&width=800",
  7: "https://freakins.com/cdn/shop/files/09-JUNE-PART-2_7837.jpg?v=1718295073&width=800",
  8: "https://freakins.com/cdn/shop/files/11aug_30809-Edit.jpg?v=1724166234&width=800",
  9: "https://freakins.com/cdn/shop/files/Curve00285-Edit.jpg?v=1686583658&width=800",
  10: "https://freakins.com/cdn/shop/files/09-june-2024_7272.jpg?v=1718350367&width=800",
  11: "https://freakins.com/cdn/shop/files/09june2024_6450-Edit_89e9e3ee-e133-48de-954d-c936df7f988a.jpg?v=1719336495&width=800",
  12: "https://freakins.com/cdn/shop/files/09-JUNE-PART-2_8315.jpg?v=1718192061&width=800",
};

// Product card component
const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Col md={3} className="mb-4">
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="position-relative product-card"
        style={{ overflow: "hidden", height: "100%" }} // Ensure each card occupies full height
      >
        <div
          className="badge bg-danger position-absolute"
          style={{
            top: "10px",
            left: "10px",
            zIndex: 1,
          }}
        >
          {product.discount}
        </div>

        <div style={{ position: "relative", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={hovered ? hoverImages[product.id] : product.image}
            alt={product.title}
            style={{
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              width: "100%",
              objectFit: "cover",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              opacity: hovered ? 0.8 : 1,
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        </div>

        <Card.Body style={{ display: "flex", flexDirection: "column" }}>
          <Card.Title style={{ flex: "1 0 auto", fontSize: "14px" }}>
            {product.title}
          </Card.Title>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="text-danger fw-bold">₹{product.price}</span>
              <span className="text-muted text-decoration-line-through">
                ₹{product.originalPrice}
              </span>
            </div>
            <div className="d-flex align-items-center mt-2">
              <span className="me-1">{product.rating}⭐</span>
              <Button variant="outline-dark" size="sm">
                Add to Cart
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Main ProductList component
const ProductList = () => {
  const [activeTab, setActiveTab] = useState("Korean Pants"); // Manage the active tab
  const [transitionClass, setTransitionClass] = useState(""); // Manage the slider transition class

  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  const handleTabChange = (category) => {
    // Add sliding animation on tab switch
    setTransitionClass("slide-out"); // Slide out the current products
    setTimeout(() => {
      setActiveTab(category); // Change the active category after slide out
      setTransitionClass("slide-in"); // Slide in the new products
    }, 200); // Delay the tab change to sync with animation duration
  };

  return (
    <>
      {/* Tab Switcher */}
      <Nav className="justify-content-center mb-4" variant="pills">
        <Nav.Item>
          <Nav.Link
            className={activeTab === "Korean Pants" ? "active-tab" : ""}
            onClick={() => handleTabChange("Korean Pants")}
          >
            Korean Pants
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={activeTab === "Jeans" ? "active-tab" : ""}
            onClick={() => handleTabChange("Jeans")}
          >
            Jeans
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={activeTab === "shorts" ? "active-tab" : ""}
            onClick={() => handleTabChange("shorts")}
          >
            Shorts
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Product Grid with slider effect */}
      <Row className={`product-grid ${transitionClass}`}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </>
  );
};

export default ProductList;
