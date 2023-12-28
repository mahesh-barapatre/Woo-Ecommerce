import { configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import paymentReducer from './paymentSlice'
import roleReducer from './roleSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    role: roleReducer,
    payment: paymentReducer,
  },
})