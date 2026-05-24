function Cart({
cart,
removeItem
}) {

const total =
cart.reduce(
(sum,item)=>
sum+item.price,
0
);

return (

<div className="cart">

<h2>Cart</h2>

<p>
Items:
{cart.length}
</p>

<h3>
Total:
₹{
Math.round(
total * 85
)
}
</h3>

{
cart.map((item)=>(

<div
key={item.id}
>

{item.title}

<button
onClick={()=>
removeItem(
item.id
)
}
>
Remove
</button>

</div>

))
}

</div>

);
}

export default Cart;