import CartItems from "./CartItems";

type CartProps = {
    onClose: ()=> void
}


function Cart({onClose}:CartProps){
   return (
    <>
      <div className="cart-backdrop"/>
      <h2>سبد خرید</h2>
      <CartItems/>
      <p className="cart-actions">
        <button onClick={onClose}>بستن</button>
      </p>
    </>
   )
}

export default Cart;