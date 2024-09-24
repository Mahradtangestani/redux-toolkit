import { useState } from "react";
import Cart from "./Cart";
import { useCartSelector } from "../store/hooks";

function Navbar() {
    const [cartIsOpen, setCartIsOpen] = useState(false)

    const cartQuantity = useCartSelector((state)=>state.cart.items.reduce((value , item)=> value + item.quantity, 0))

    const handleOpenCart = () => {
        setCartIsOpen(true)
    }
    const handleCloseCart = () => {
        setCartIsOpen(false)
    }

    return (
        <>
            {cartIsOpen && <Cart onClose={handleCloseCart} />}
            <div className="navbar">
                <button onClick={handleOpenCart}>سبد خرید ({cartQuantity})</button>
            </div>
        </>
    )
}


export default Navbar;