import  { createSlice} from "@reduxjs/toolkit";
const initialState = {
    orderItem:[]
    
};

const OrderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{
        add:(state,action)=>{
            
            // const orderItem = state.orderItems.find((orderItem)=>orderItem.id===action.payload.id);
            state.orderItem = []
            state.orderItem.push(action.payload)
        },
       
    },
});

export const { add }= OrderSlice.actions;
export default OrderSlice.reducer;