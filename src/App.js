import "./App.css";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Estimados, pagina en remodelacion, disculpe las molestias"} />
      <br />
      <br />
      <br />
      <br />
      {
        //* No hace falta poner los <br/> para separar los componentes, se puede usar el css
      }
      <Footer />
    </div>
  );
}

export default App;
