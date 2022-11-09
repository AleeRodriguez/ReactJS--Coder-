import "./App.css";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import "./App.css"




function App() {
  return (
    <div>
      
      
      <NavBar />
      <ItemListContainer greeting={"Estimados, pagina en remodelacion, disculpe las molestias"} />
      <Footer/>
    </div>
  );
}




export default App;
