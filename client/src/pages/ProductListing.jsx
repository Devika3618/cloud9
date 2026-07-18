import ProductCard from "../components/ProductCard";

const ProductListing = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Our Products</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          marginTop: "30px",
        }}
      >
        <ProductCard name="Laptop" price="65000" />
        <ProductCard name="Smart Phone" price="25000" />
        <ProductCard name="Headphones" price="2999" />
        <ProductCard name="Watch" price="4999" />
        <ProductCard name="Camera" price="35000" />
        <ProductCard name="Keyboard" price="1999" />
      </div>
    </div>
  );
};

export default ProductListing;