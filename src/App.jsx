import "../src/App.css"
import {Routes,Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import TopNavBar from "./components/TopNavBar";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Home from "./pages/public/Home";
import NotFound from "./pages/public/Not-Found";
import SignIn from "./pages/public/SignIn";
import SignOut from "./pages/public/SignOut";
import SignUp from "./pages/public/SignUp";

export default function App(){
  const location = useLocation();
  return(
    <>
    <TopNavBar/>
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/sign-in" element={<SignIn/>}></Route>
      <Route path="/sign-up" element={<SignUp/>}></Route>
      <Route path="/sign-out" element={<SignOut/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    </AnimatePresence>
    </>
  )
}