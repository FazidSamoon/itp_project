import { configureStore } from '@reduxjs/toolkit'
import inventoryReducer from './inventoryReducer'
import userReducer from './userReducer'

export const store = configureStore({
    reducer: {
        user: userReducer,
        inventory: inventoryReducer
    }
})