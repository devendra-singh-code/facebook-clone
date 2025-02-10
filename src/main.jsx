import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { ForgetPassword, Groups, Home, Login, MainPage, MarketPlace, Signup, Video } from "./pages/index.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Home />}>
        <Route path="video" element={<Video />} />
        <Route path="marketplace" element={<MarketPlace />} />
        <Route path="" element={<MainPage />} />
        <Route path="group" element={<Groups />} />
      </Route>

      <Route path="login" element={<Login />} />
      {/* <Route path="login" element={<MainPage />} /> */}
      
      <Route path="signup" element={<Signup />} />
      <Route path="forgetpassword" element={<ForgetPassword />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
