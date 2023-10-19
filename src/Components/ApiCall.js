import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux"
import { searchTodo } from "./ExpensesSlice";




export const ApiCall = createAsyncThunk("ApiCall", async() => {
    try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=bf8c2081c16f3d250cafa9ad02996ed5&query=hero&page=1`,
          )
          console.log(response.data.results)
          return response.data.results;
        } catch (error) {
          console.error('Error fetching movies:', error)
        }
  })