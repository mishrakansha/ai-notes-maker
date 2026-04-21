import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../components/api.js";

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await login({ email, password });
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (err) {
      return rejectWithValue("Login failed. Please try again.");
    }
  }
);

// Async thunk for register
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (form, { rejectWithValue }) => {
    try {
      const { data } = await register(form);
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (err) {
      return rejectWithValue("Registration failed. Please try again.");
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;