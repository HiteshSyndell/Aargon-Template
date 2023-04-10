import {configureStore} from '@reduxjs/toolkit'
import { UserAPI } from 'Features/UserAPI'
import {setupListeners} from '@reduxjs/toolkit/query'
const Store=configureStore({
    reducer:{
        [UserAPI.reducerPath]:UserAPI.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(UserAPI.middleware)
})
export default Store
setupListeners(Store.dispatch)