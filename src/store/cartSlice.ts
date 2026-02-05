import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product, CartItem } from "../types";

interface CartState {
    items: CartItem[];
    isCartOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isCartOpen: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // open/close cart
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        // add product
        addToCart: (state, action: PayloadAction<Product>) => {
            const product = action.payload;
            const existingItem = state.items.find((item) => item.sku === product.sku);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }
        },
        // delete product
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.sku !== action.payload);
        },
        // change quantity
        changeQuantity: (state, action: PayloadAction<{ sku: number; quantity: number }>) => {
            const { sku, quantity } = action.payload;
            const item = state.items.find(i => i.sku === sku);

            if (item) {
                item.quantity = quantity;
            }
        }
    }
});

export const { toggleCart, addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;