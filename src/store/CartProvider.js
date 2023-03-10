import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    showCartButton: false,
    showCart: false,
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {

        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        const existingItem = state.items[existingItemIndex]

        let updatedItem
        let updatedItems

        if(existingItem) {
            const amount= existingItem.amount+1
            
            updatedItem = {
                ...existingItem, 
                amount: amount, 
                itemTotalPrice: amount * existingItem.price
            }
            
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItem = {
                ...action.item,
                itemTotalPrice: action.item.amount * action.item.price
            }
            updatedItems = state.items.concat(updatedItem)
        }

        const updatedTotalAmount = updatedItems.reduce((sum, item) => sum + item.itemTotalPrice, 0)

        let showCartButton = state.showCartButton
        if(updatedItems.length > 0) showCartButton = true

        return {
            ...state,
            showCartButton: showCartButton,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if(action.type === 'REMOVE') {

        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        const existingItem = state.items[existingItemIndex]

        let updatedItem
        let updatedItems

        if(existingItem) {
            const amount= existingItem.amount-1

            if(amount > 0) {
                updatedItem = {
                    ...existingItem, 
                    amount: amount, 
                    itemTotalPrice: amount * existingItem.price
                }

                updatedItems = [...state.items]
                updatedItems[existingItemIndex] = updatedItem
            } else {
                state.items.splice(existingItemIndex, 1)
                updatedItems = [...state.items]
            }
        } else {
            updatedItems = [...state.items]
        }

        const updatedTotalAmount = updatedItems.reduce((sum, item) => sum + item.itemTotalPrice, 0)

        let showCartButton = state.showCartButton
        if(!state.showCart && updatedItems.length === 0) showCartButton = false

        return {
            ...state,
            showCartButton: showCartButton,
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if(action.type === 'SHOW_CART_BUTTON_TOGGLE') {

        return {
            ...state,
            showCartButton: action.val
        }
    } else if(action.type === 'SHOW_CART_TOGGLE') {

        const showCartButton = state.items.length > 0

        return {
            ...state,
            showCartButton: showCartButton,
            showCart: action.val
        }
    }

    return defaultCartState
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const showCartButtonToggleHandler = (val) => {
        dispatchCartAction({type: 'SHOW_CART_BUTTON_TOGGLE', val: val})
    }

    const showCartToggleHandler = (val) => {
        dispatchCartAction({type: 'SHOW_CART_TOGGLE', val: val})
    }

    const cartContext = {
        showCartButton: cartState.showCartButton,
        showCart: cartState.showCart,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        setShowCartButton: showCartButtonToggleHandler,
        setShowCart: showCartToggleHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider