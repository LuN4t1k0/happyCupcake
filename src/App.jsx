import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNavBar from "./components/MyNavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
