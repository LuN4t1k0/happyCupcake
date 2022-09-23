import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNavBar from "./components/MyNavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={ <h1>:( pagina no enconrtada</h1>}/>
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
