import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../types/IUser";

export const fetchUsers = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: string }
>("user/fetchAll", async (_, thunkApi) => {
  try {
    const res = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.om/users"
    );
    return res.data;
  } catch (error) {
    throw thunkApi.rejectWithValue("Не удалось загрузить пользователей");
  }
});
