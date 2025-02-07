
import {createSlice} from "@reduxjs/toolkit"


const registerSlice = createSlice({
    name: 'registeractive',
    initialState:{
      isActivelogin:false,
      isActivecategory:false,
      isActivejobseeker:false, 
      isActivejobprovider:false,
      isActivejobchatbot:false,
      isActiveforgotpassword:false,

},
reducers:{
    loginActive:(state,action)=>{
        state.isActivelogin = action.payload
    },
    categoryActive:(state,action)=>{
        state.isActivecategory = action.payload
    },
    jobseekerActive:(state,action)=>{
        state.isActivejobseeker = action.payload
    },
    jobproviderActive:(state,action)=>{
        state.isActivejobprovider = action.payload
    },
    chatbotActive:(state,action)=>{
        state.isActivejobchatbot = action.payload
    },
    forgotpasswordActive:(state,action)=>{
        state.isActiveforgotpassword = action.payload
    }
}
})

export const {loginActive,categoryActive,
    jobseekerActive,jobproviderActive,chatbotActive,forgotpasswordActive}
= registerSlice.actions

export default registerSlice.reducer;