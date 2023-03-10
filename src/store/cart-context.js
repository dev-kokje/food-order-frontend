import React from "react"

const CartContext = React.createContext({
    showCartButton: false,
    showCart: false,
    items: [],
    totalAmount: 0,
    setShowCartButton: (val) => {

    },
    setShowCart: (val) => {

    },
    addItem: (item) => {

    },
    removeItem: (id) => {

    }
})

export default CartContext