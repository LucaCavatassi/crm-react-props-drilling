import { createContext } from "react";

const CartContext = createContext({
        items: [],
        addItemsToCart: () => {},
        updateItemQuantity: () => {}
    }
)

export default CartContext;