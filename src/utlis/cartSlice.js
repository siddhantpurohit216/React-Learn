import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:["item1", "item2"]
    },
    reducers:{
        addItem: (state,action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length=0;
            // state=[]; -->won"t work
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;


//the cartSlice is now converted into a flowing type of object:
// cartslice{
//     actions:{
//         addItem
//     }
//     reducer{
//         (state,action) =>{
//             state.items.push(action.payload);
//         }
//         ..
//     }
// }