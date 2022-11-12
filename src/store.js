import { configureStore, createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    plus(state,a) {
      state.count+=a.payload
    }
  }
});
export let {plus}=cart.actions

export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})

