import { configureStore} from '@reduxjs/toolkit'

import ExpensesSlice from './ExpensesSlice'


export const Store = configureStore({
    reducer: ExpensesSlice
 
//   reducer:  {
//     todo: ExpensesSlice
//   }, 
})
