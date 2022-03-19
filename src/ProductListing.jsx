import { useCart } from "./cart-context";

function ProductListing() {
  const { addToCart, removeFromCart } = useCart();
  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2 key={item}>Product {item}</h2>
      <div className="card">
        <div className="card-content">
          <h6 className="card-badge">NEW</h6>
          <div className="wishlist">
            <i className="far fa-heart"></i>
          </div>
          <img src="./shoes.jpg" alt="cap" className="card-img" />
          <h3 className="card-title">Card title</h3>
          <p className="card-subtitle">Sub title</p>
          <div className="card-pricing">
            <p>Rs 500</p>
            <strike>Rs 1000</strike>
            <p className="small-font">(50% OFF)</p>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={addToCart}>
            <i className="fas fa-cart-plus"></i>Add to cart
          </button>
        </div>
      </div>

      {/* <button>Add to cart</button> */}
      <button onClick={removeFromCart}>Move to wishlist</button>
    </div>
  ));
}

export default ProductListing;
