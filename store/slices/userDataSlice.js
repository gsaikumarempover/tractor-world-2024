import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        addressData: {},
        modalStatus:false
    },
    reducers: {
        setAddressData: (state, action) => {
            console.log('Action Payload:', action.payload); 
            state.addressData = action.payload.addressData; 
        },
        setModalStatus: (state, action) => {
            console.log('Action Payload:', action.payload); 
            state.modalStatus = action.payload.modalStatus; 
        },
        // we can add here required functions to disptach data
    }
});

export const {setAddressData,setModalStatus} = userSlice.actions
export default userSlice.reducer
