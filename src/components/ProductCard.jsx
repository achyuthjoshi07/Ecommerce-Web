function ProductCard({
  product,
  addToCart
}) {

return (

<div className="card">

<img
src={product.image}
alt={product.title}
/>

<h3>
{product.title}
</h3>

<p>
₹{Math.round(
product.price * 85
)}
</p>

<button
onClick={() =>
addToCart(product)
}
>
Add To Cart
</button>

</div>

);
}

export default ProductCard;