
import { create } from "zustand";

export const useCartStore = create((set) => ({
    count: 0,
    cart: [],
    tickets: [],

    loadCart: (products) => {
        const productsWithQty = products.map((product) => ({
            ...product, qty: 0
        }))
        set({ cart: productsWithQty, count: 0 })
    },

    addEvent: (event) => set((state) => ({
        cart: state.cart.map((item) =>
            item.id === event.id ? { ...item, qty: item.qty + 1 } : item
        ),
        count: state.count + event.price,
    })),

    removeEvent: (event) => set((state) => ({
        cart: state.cart.map((item) =>
            item.id === event.id ? { ...item, qty: Math.max(0, item.qty - 1) } : item),
        count: Math.max(0, state.count - event.price),
    })),

    resetCart: () => set((state) => ({
        ...state,
        cart: state.cart.map((item) => ({ ...item, qty: 0 }))
    })),

    addTicket: (ticket) => {
        set((state) => ({ tickets: [...state.tickets, ticket] }));
    },

}))
//  