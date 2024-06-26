import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";
import { fetchUsers } from "./ActionCreators";

export interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  counter: number;
}
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  counter: 0,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.isLoading = false;
          state.users = action.payload;
          state.error = "";
        }
      )
      .addCase(fetchUsers.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
