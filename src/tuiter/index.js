import { Link, Route, Routes } from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarkScreen from "./bookmarks-screen";
// import ProfileScreen from "./profile-screen";
import WhoToFollow from "./who-to-follow-list";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import fullTuitsReducer from "./reducers/home-tuits-reducer";
import ProfileScreen from "./user/profile-screen.js";
import LoginScreen from "./user/login-screen.js";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    fullTuits: fullTuitsReducer,
    user: authReducer,
  },
});
function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/home" element={<HomeScreen />}></Route>
              <Route path="/profile" element={<ProfileScreen />}></Route>
              <Route path="/bookmarks" element={<BookmarkScreen />}></Route>
              <Route path="/explore" element={<ExploreScreen />}></Route>
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollow />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
