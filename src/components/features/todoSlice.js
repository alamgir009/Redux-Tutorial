import { createSlice } from "@reduxjs/toolkit";

let initialUser = [
  { name: "Alamgir Islam", email: "alamgirislam009@gmail.com" },
];

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    showUser: (state) => state,

    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { index, newData } = action.payload;

      // console.log(index, newData);
      state[index].name = newData.name;
      state[index].email = newData.email;
    },
    deleteUser: (state, action) => {
      return state.filter((user, index) => index !== action.payload);
    },
  },
});

export const { showUser, addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
