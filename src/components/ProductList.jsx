import ProductCard from "./ProductCard";

function ProductList({
  products,
  addToCart
}) {

  return (

    <div className="grid">

      {products.map((item) => (

        <ProductCard
          key={item.id}
          product={item}
          addToCart={addToCart}
        />

      ))}

    </div>

  );
}

export default ProductList;