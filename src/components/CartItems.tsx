import { addToCart, type CartItem } from "../store/cart-slice";
import { useCartDispatch, useCartSelector } from "../store/hooks";

function CartItems() {

    const cartItems = useCartSelector((state) => state.cart.items)

    const totalPrice = cartItems.reduce((value, item) => value + item.price * item.quantity, 0)

    const dispatch = useCartDispatch()

    const handleAddToCart = (item: CartItem)=>{
         dispatch(addToCart(item))
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
                                <button>-</button>
                                <span>{item.quantity}</span>
                                <button>+</button>
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