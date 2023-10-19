import {createSlice } from "@reduxjs/toolkit";
import { ApiCall } from "./ApiCall";



const initialState = {
    todos : [{id:1,title : "Go to Movie"}],
    userProfile : [{id:1,name: "John" , email : "John@gmail.com" , phoneNo : "987654386" , dateOfBirth : "23/11/2020" , occupation : "content" ,address : "23/7 andrapradesh"}],
    movieList : [],
    nextId : 2,
}
export const ExpensesSlice = createSlice({
    name : "state",
    initialState ,
    reducers :{ 
        addTodoItem : (state,action) => {
            const newTodo = {id:state.nextId, title : action.payload.title}
            return {...state, todos:[...state.todos,newTodo],nextId : state.nextId + 1}
        },
        addProfile : (state,action) => {
            const newProfile = {id:state.nextId, name: action.payload.name, email : action.payload.email , phoneNo : action.payload.phoneNo , dateOfBirth : action.payload.dateOfBirth, occupation: action.payload.occupation, address : action.payload.address}
            return {...state, userProfile:[...state.userProfile,newProfile],nextId : state.nextId + 1}
        },
        editTodo: (state,action) => {
            return {...state , todos: state.todos.map((todo) => (
                todo.id === action.payload.id ? {...todo,title: action.payload.title} : todo
            ))}
        },
        deleteTodo : (state,action) => {
            return {...state, todos:state.todos.filter((todo) =>todo.id !== action.payload)}
        },
        searchTodo : (state,action) => {
            return {...state, movieList:[...action.payload]}
        },

        },
    
        extraReducers:(builder)=> {
            // builder.addCase(ApiCall.pending,(state,action)=>{
            //     console.log("pending............");
            // });
            // builder.addCase(ApiCall.rejected,(state,action)=>{
            //     console.log("rejected............");
            // });
            builder.addCase(ApiCall.fulfilled,(state,action)=>{
                console.log(action.payload);
                state.movieList = action.payload;
            });


            // [ApiCall.pending]: (state, action) => {
            //   state.loading = true;
            // },
            // [ApiCall.fulfilled]: (state, { payload }) => {
            //   state.movieList = payload;
            // },
            // [getLorems.rejected]: (state, { payload }) => {
            //   state.loading = false;
            //   state.isSuccess = false;
            //   state.message = "failed";
            // },
          },
        
    })

export const { addTodoItem , addProfile, editTodo , deleteTodo , searchTodo } = ExpensesSlice.actions
export default ExpensesSlice.reducer