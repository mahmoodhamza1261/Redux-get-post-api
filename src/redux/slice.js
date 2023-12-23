import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
   products:[]

}
export const getAPIProducts=createAsyncThunk("GET_PRODUCTS",async()=>{
 
  const resp= await fetch("http://localhost:8000/productlist");
  const result=await resp.json();
  console.log("getresult",result)
  return result
})
export const postAPIProducts=createAsyncThunk("POST_PRODUCTS",async(name)=>{
  console.log("post action")
  const resp= await fetch("http://localhost:8000/productlist",{
    method:"post",    
    headers:{
      'Content-Type': "application/json"
    },
    body:JSON.stringify({name})
  });
  const result=await resp.json();
  console.log("abcPost",result)
  return result
})
const slice=createSlice({
  name:"getProducts",
  initialState,
  extraReducers:((builder)=>builder.addCase(getAPIProducts.fulfilled,(state,action)=>{
    console.log("get reducer action",action)
    state.products=action;})
    .addCase(postAPIProducts.fulfilled,(state,action)=>{
        console.log("post reducer action",action)
        state.products=action.payload;
    })

      )
  
})

export default slice.reducer