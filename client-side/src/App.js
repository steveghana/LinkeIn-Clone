import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./UI/Feed";
import { auth } from "./UI/firebase";
import Header from "./UI/Header";
import Login from "./UI/Login";
import Sidebar from "./UI/Sidebar";
import Widgets from "./UI/Widgets";
import Auth from "./Auth";

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    //eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header />

      {/* {!user ? (
        <Auth />
      ) : (
      
       )}  */}
    </div>
  );
}

export default App;
