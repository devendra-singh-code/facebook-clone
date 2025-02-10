import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // users: [{ id: 1, email: "one@gmail.com", password: "1", firstName: 'devendra', lastName: 'singh', gender: 'male', day: 1, month: 'jan', year: '1990' }],
  // users: [],
  users: JSON.parse(localStorage.getItem("facebookUser")) || [],
  userPosts: [],
  status: false,
  userData: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      // const user = {
      //   id: nanoid(),
      //   email: action.payload.email,
      //   password: action.payload.password,
      //   firstName: action.payload.firstName,
      //   lastName: action.payload.lastName,
      //   gender: action.payload.gender,
      //   day: action.payload.day,
      //   month: action.payload.month,
      //   year: action.payload.year,
      // };
      state.users.push(user);
    },
    Posts: (state, action) => {
      const userpost = action.payload.userSession;
      // state.users = state.users.filter((user) => user.email === userpost ).map((user) => ({...user, type: 'post1'}))
      state.users = state.users.map((user) => user.email === userpost ? ({...user, type: 'postdata'}) : user)
    },

    login: (state, action) => {
      state.status = true,
      state.userData = action.payload;
    },
    logout: (state, action) => {
      state.status = false,
      state.userData = null
    }
  },
});

export const {addUser, Posts, login, logout} = userSlice.actions

export default userSlice.reducer
