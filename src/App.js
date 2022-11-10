import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";




function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:idcategory" element={<ItemListContainer/>}/>
        <Route path="/item/:iditem" element={<ItemDetail/>}/>
        <Route path="/Nosotros"/>
      </Routes>
      <Footer/>
      </BrowserRouter>
        
    </>
  );
}




export default App;
