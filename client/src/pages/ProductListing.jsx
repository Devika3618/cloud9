import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 65000,
    image: "https://via.placeholder.com/250?text=Laptop",
  },
  {
    id: 2,
    name: "Smart Phone",
    price: 25000,
    image: "https://via.placeholder.com/250?text=Phone",
  },
  {
    id: 3,
    name: "Headphones",
    price: 2999,
    image: "https://via.placeholder.com/250?text=Headphones",
  },
  {
    id: 4,
    name: "Watch",
    price: 4999,
    image: "https://via.placeholder.com/250?text=Watch",
  },
  {
    id: 5,
    name: "Camera",
    price: 35000,
    image: "https://via.placeholder.com/250?text=Camera",
  },
  {
    id: 6,
    name: "Keyboard",
    price: 1999,
    image: "https://via.placeholder.com/250?text=Keyboard",
  },
];

const ProductListing = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Products
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;