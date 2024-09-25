import { addToCart, removeFromCart, type CartItem } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

function CartItems() {

    const cartItems = useCartSelector((state) => state.cart.items)

    const totalPrice = cartItems.reduce((value, item) => value + item.price * item.quantity, 0)

    const dispatch = useCartDispatch()

    const handleAddToCart = (item: CartItem)=>{
         dispatch(addToCart(item))
    }
    const handleRemoveToCart = (id:string)=>{
         dispatch(removeFromCart(id))
    }

    return (
        <div>
            <p>محصولی در سبد خرید وجود ندارد</p>
            <ul className="cart-items">
                {cartItems.map(item => {
                    return (
                        <li key={item.id}>
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <div className="cart-item-actions">
                                <button onClick={()=>handleRemoveToCart(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={()=>handleAddToCart(item)}>+</button>
                            </div>
                        </li>
                    )
                })}
            </ul>

            <p className="cart-total-price">
                مجموع: <strong>{totalPrice}</strong> تومان
            </p>
        </div>
    )
}

export default CartItems;