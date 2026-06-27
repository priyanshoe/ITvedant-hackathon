import "../src/App.css"
import {Routes,Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import TopNavBar from "./components/TopNavBar";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/SignIn";
import SignOut from "./pages/Auth/SignOut";
import SignUp from "./pages/Auth/SignUp";
import NotFound from "./pages/Error/NotFound";

export default function App(){
  const location = useLocation();
  return(
    <>
    <TopNavBar/>
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/sign-out" element={<SignOut/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    </AnimatePresence>
    </>
  )
}