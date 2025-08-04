import { ProductData } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

interface CartItem extends ProductData {
  quantity: number;
}

interface ShopperState {
  cart: CartItem[];
  wishList: ProductData[];
  userInfo: UserInfo | null;
}

const initialState: ShopperState = {
  cart: [],
  wishList: [],
  userInfo: null,
};

export const shopperSlice = createSlice({
  name: "shoppers",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductData>) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingProduct = state.cart.find(
        (product) => product._id === productId
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.cart = state.cart.filter((product) => product._id !== productId);
        }
      }
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingProduct = state.cart.find(
        (product) => product._id === action.payload
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },

    resetCart: (state) => {
      state.cart = [];
    },

    addToWishlist: (state, action: PayloadAction<ProductData>) => {
      const exists = state.wishList.some(
        (product) => product._id === action.payload._id
      );
      if (!exists) {
        state.wishList.push(action.payload);
      }
    },

    removeFromWishlist: (state) => {
      state.wishList = [];
    },

    addUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
  addToWishlist,
  removeFromWishlist,
  addUser,
  removeUser,
} = shopperSlice.actions;

export default shopperSlice.reducer;
