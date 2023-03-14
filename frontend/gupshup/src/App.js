import { ToastContainer } from "react-toastify";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import AddEditTour from "./pages/AddEditTour";
function App() {
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem("profile"))
  useEffect(()=>{
   dispatch(setUser((user)))
  },[])
  return (
<BrowserRouter>
    <div className="App">
    <ToastContainer />
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/addTour" element={<AddEditTour/>}/>
      <Route path="/editTour/:id" element={<AddEditTour/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
